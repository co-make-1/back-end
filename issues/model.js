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
  return db("issues");
}

function find() {
  return db('issues')
}

function findById(id) {
    return db('issues')
      .where({ id })
      .first();
}

function findUsers(id) {
    return db('issues as i')
    .join('users as u', 'u.id', 'i.userId')
    .select('u.id', 'u.name')
    .where('i.id', id)
    .first();
}

function add(issue){
  return db('issues').insert(issue)
  .then(id => {
    return findById(id)
  })
}

function update(changes, id){
    return db('issues')
    .where({id})
    .update(changes, id)
    .then(numChanged => {
        return findById(id)
    });
}

async function remove(id){
    const deletedIssue = await findById(id)
    return db('issues')
    .where({id})
    .del()
    .then(numDeleted => {
        return deletedIssue
    });
}