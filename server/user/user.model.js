// const Promise = require('bluebird');
const mongoose = require('mongoose');
// const httpStatus = require('http-status');
// const APIError = require('../helpers/APIError');

/**
 * User Schema
 */
const Schema = mongoose.Schema;

let Users = new Schema({
    userName : {type : String, require : true},
    password : {type : String, require : true},
    deviceIds:{type:Array}
});

module.exports = mongoose.model('Users', Users);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
// UserSchema.method({
// });

// /**
//  * Statics
//  */
// UserSchema.statics = {
//   /**
//    * Get user
//    * @param {ObjectId} id - The objectId of user.
//    * @returns {Promise<User, APIError>}
//    */
//   get(id) {
//     return this.findById(id)
//       .exec()
//       .then((user) => {
//         if (user) {
//           return user;
//         }
//         const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
//         return Promise.reject(err);
//       });
//   },

//   /**
//    * List users in descending order of 'createdAt' timestamp.
//    * @param {number} skip - Number of users to be skipped.
//    * @param {number} limit - Limit number of users to be returned.
//    * @returns {Promise<User[]>}
//    */
//   list({ skip = 0, limit = 50 } = {}) {
//     return this.find()
//       .sort({ createdAt: -1 })
//       .skip(+skip)
//       .limit(+limit)
//       .exec();
//   }
// };

// /**
//  * @typedef User
//  */
// module.exports = mongoose.model('User', UserSchema);
