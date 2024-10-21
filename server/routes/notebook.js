const express = require('express');
const { NoteBook, User } = require('../db/models');

const router = express.Router();

router.post('/new', async (req, res) => {
  try {
    const { notebook } = req.body;
    const { user } = req.session;

    await NoteBook.create({
      userId: user.id,
      title: notebook,
    });

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.delete('/', async (req, res) => {
  try {
    const { id } = req.body;
    await NoteBook.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
