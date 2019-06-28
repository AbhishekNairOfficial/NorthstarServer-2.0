const User = require('../models/userModel');


exports.login = async (req, res) => {
  User.find({
      userName: req.body.userName,
      password: req.body.password
    }).then(response => {
      if (response.length) {
        res.send(true);
      } else {
        res.send(false);
      }
    })
    .catch(err => {
      res.send(err.message);
    });
//   try{
//     const response = await User.findOne({userName: req.body.userName,
//       password: req.body.password
// });
// res.json(response);
//   }catch(error){
//     console.log("erriri ", error);
//   }
  
  
};
