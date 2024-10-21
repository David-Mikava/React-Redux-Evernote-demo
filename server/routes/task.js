const express = require('express');
const { Task, User } = require('../db/models');

const router = express.Router();

router.post('/new', async (req, res) => {
  try {
    const { task } = req.body;
    const { user } = req.session;
    await Task.create({
      userId: user.id,
      task,
      done: false,
    });

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
