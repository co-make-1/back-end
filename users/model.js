const express = require('express');

const Users = require('./model');

const router = express.Router();

router.post('/:id/issues', (req, res) => {
  const issueData = req.body;
  const { id } = req.params; 

  Users.findById(id)
  .then(scheme => {
    if (scheme) {
      Users.addUser(issueData, id)
      .then(user => {
        res.status(201).json(user);
      })
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new user' });
  });
});