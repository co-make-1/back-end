const express = require('express');

const Issues = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  Issues.find()
  .then(issues => {
    res.json(issues);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get issues' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Issues.findById(id)
  .then(issue => {
    if (issue) {
      res.json(issue);
    } else {
      res.status(404).json({ message: 'Could not find issue with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get issue' });
  });
});

router.get('/:id/users', (req, res) => {
  const { id } = req.params;

  Issues.findUsers(id)
  .then(users => {
    if (users.length) {
      res.json(users);
    } else {
      res.status(404).json({ message: 'Could not find users for given scheme' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});

router.post('/', (req, res) => {
  const issueData = req.body;

  Issues.add(issueData)
  .then(issue => {
    res.status(201).json(issue);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new issue' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Issues.findById(id)
  .then(issue => {
    if (issue) {
      Issues.update(changes, id)
      .then(updatedIssue => {
        res.json(updatedIssue);
      });
    } else {
      res.status(404).json({ message: 'Could not find issue with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update issue' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Issues.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find issue with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete issue' });
  });
});

module.exports = router;