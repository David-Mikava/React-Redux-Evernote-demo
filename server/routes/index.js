const express = require('express');
const router = express.Router();
const { User, NoteBook, Note, Task } = require('../db/models');

router.get('/home', async (req, res) => {
  try {
    // const allTasks = Task.findAll({
    //   where: {
    //     userId: req.session.id,
    //   },
    // });
    // const allNoteBooks = NoteBook.findAll({
    //   where: {
    //     userId: req.session.id,
    //   },
    // });
    res.json('hello');
  } catch (error) {
    res.json(error);
  }
});

router.get('/tasks', async (req, res) => {
  try {
    // const allTasks = Task.findAll({
    //   where: {
    //     userId: req.session.id,
    //   },
    // });
    res.json('hello');
  } catch (error) {
    res.json(error);
  }
});

router.get('/notebooks', async (req, res) => {
  try {
    const allNotebooks = await NoteBook.findAll({
      where: {
        userId: req.session.user.id,
      },
    });
    res.json(allNotebooks);
  } catch (error) {
    res.json(error);
  }
});

router.get('/notebooks/:noteId', async (req, res) => {
  try {
    // const noteBooks = NoteBook.findOne({
    //   where: {
    //     userId: req.session.id,
    //     noteId: req.params.noteId
    //   },
    // });
    // const allNote = Note.findAll({
    //   where: {
    //     userId: req.session.id,
    //     id: req.params.noteId
    //   },
    // });
    res.json('hello');
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
