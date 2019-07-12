
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const config = require('../../config/config');
const tokenMan = require('../token-manager/token-manager');
const users = require('../user/user.model');
const bcrypt = require('bcryptjs');

// sample user, used for authentication
// const user = {
//   username: 'react',
//   password: 'express'
// };

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */

function login(req, res, next) {
  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity
  // if (req.body.username === user.username && req.body.password === user.password) {
  //   const token = jwt.sign({
  //     username: user.username
  //   }, config.jwtSecret);
  //   return res.json({
  //     token,
  //     username: user.username
  //   });

  let userName = req.body.userName;
  let password = req.body.password;
  if (userName && password) {
    users.findOne({ userName: req.body.userName }).then(response => {
      const status = bcrypt.compareSync(password, response.password);
      if (status) {
        res.send({ "token": tokenMan.sign({ username: user.username }, { audience: req.headers.host }) });
      }
      else {
        res.status(401).json({ message: "wrong user name or password" });
      }


    }).catch(err => {

      res.status(401).json({ message: "wrong user name or password" });

    })
  } else {

    res.status(401).json({ message: "wrong user name or password" });

  }

  //  const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
  // return next(err);
}


module.exports = { login };
