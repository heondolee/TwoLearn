const express = require('express');
const router = express.Router();
const db = require('../models');

const { User } = db;

router.post('/', async (req, res) => {
  try {
    const { nickName, gender, isBurden, interests } = req.body;
    
    const newUser = await User.create({
      nickName,
      gender,
      isBurden,
      interests
    });
    
    res.status(201).json(newUser);
  } catch (error) {
    console.error('유저 생성 오류:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
});

module.exports = router;
