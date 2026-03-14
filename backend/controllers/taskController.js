const Task = require("../models/Task");

exports.createTask = async (req, res) => {

  try {

    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.user.id
    });

    res.json(task);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

exports.getTasks = async (req, res) => {

  try {

    const tasks = await Task.find()
      .populate("createdBy");

    res.json(tasks);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};