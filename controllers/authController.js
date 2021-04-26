const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { _attributes } = require('../config/databaseConfig');

exports.authenticateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ msg: 'E-mail or Password wrong' });
    }
    const passwordCheckup = await bcryptjs.compare(password, user.password);
    if (!passwordCheckup) {
      return res.status(400).json({ msg: 'E-mail or Password wrong' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.authenticatedUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'name', 'email'],
    });
    console.log(user);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Sorry, something went wrong' });
  }
};
