const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/reg', async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashPass = await bcrypt.hash(password, 10);
    if ((email, password)) {
      await User.create({
        email,
        password: hashPass,
      });
    }
    return res.sendStatus(200);
  } catch (error) {
    return res.json(error);
  }
});

router.post('/status', async (req, res) => {
  try {
    const { user } = req.session;
    if (user) {
      return res.status(200).json({ name: user.name, isAuth: true });
    }
    return res.json({ isAuth: false });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.sendStatus(401);
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.sendStatus(401);
    }
    req.session.user = user;
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('UserAuth');
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

module.exports = router;
