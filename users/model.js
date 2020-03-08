const db = require("../database/connection.js");

module.exports = {
  all,
  find,
  findById,
  findUsers,
  add,
  update,
  remove
};

function all() {
  return db("users");
}

function find() {
  return db('users')
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
}

function findUsers(id) {
    return db('users as u')
    .join('issues as i', 'i.id', 'u.issueId')
    .select('i.id', 'i.name')
    .where('u.id', id)
    .first();
}

function add(issue){
  return db('users').insert(issue)
  .then(id => {
    return findById(id)
  })
}

function update(changes, id){
    return db('users')
    .where({id})
    .update(changes, id)
    .then(numChanged => {
        return findById(id)
    });
}

async function remove(id){
    const deletedUser = await findById(id)
    return db('users')
    .where({id})
    .del()
    .then(numDeleted => {
        return deletedUser
    });
}