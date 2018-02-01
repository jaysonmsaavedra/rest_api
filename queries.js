const promise = require('bluebird')

const options = {
  promiseLib: promise
}

const pgp = require('pg-promise')(options)
const connectionString = 'postgres://saavy1:Jmicsav21@my-resume-db.czx6shxpbhid.us-west-2.rds.amazonaws.com:5432/my_resume_db'
const db = pgp(connectionString)

function getAllInfo(req, res, next) {
  db.any('select * from public.personal')
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved user info'
        })
    })
    .catch(err => {
      return next(err)
    })
}

function getExperience(res, res, next) {
  db.any('SELECT * FROM public.experience')
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved job info'
        })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = {
  getAllInfo: getAllInfo,
  getExperience: getExperience
}
