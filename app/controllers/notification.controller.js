const User = require('../models/userModel');
const axios = require('axios');

const registerDevice = function (req, res) {

    User.findOneAndUpdate({ userName: req.body.userName }, { $addToSet: { deviceIds: req.body.deviceId } }, { new: true }, (err, response) => {
        if (err) {
            res.status(400).send(err.message);
        }
        res.send({ message: "device is successfully registered" });
    })
}

const sendNotification = function (req, res) {

    User.findOne({ userName: req.body.userName })
        .then(result => {
            result.deviceIds.forEach(item => {
                axios({
                    method: 'post',
                    url: 'https://fcm.googleapis.com/fcm/send',
                    headers: {
                        Authorization: "key=AAAA-F5r4_c:APA91bFUH0WA-3X5E-lHcd8TC3rWB1IeNCPR8EAAiuNjfVtn45GnZWmzod37sjUsnojHPqjKGAE8YSWmcASLNTuNnv7qmmC8sM7jKpRoPBDxLE4DtXt8VWxfN2IsKZ2itZ2KTqjDajwl"
                    },
                    data: {
                        "to": item,
                        "notification": {
                            "title": req.body.title,
                            "body": req.body.body
                        },

                        "data": {}
                    }

                }).then(response =>
                    res.send(response.data))
                    .catch(err =>
                        res.status(400).send(err.message));
            });

        }).catch(err => console.log(err));

}

const SchedulerController = function (params) {

    User.findOne({ userName: params.userName })
        .then(result => {
            result.deviceIds.forEach(item => {
                axios({
                    method: 'post',
                    url: 'https://fcm.googleapis.com/fcm/send',
                    headers: {
                        Authorization: "key=AAAA-F5r4_c:APA91bFUH0WA-3X5E-lHcd8TC3rWB1IeNCPR8EAAiuNjfVtn45GnZWmzod37sjUsnojHPqjKGAE8YSWmcASLNTuNnv7qmmC8sM7jKpRoPBDxLE4DtXt8VWxfN2IsKZ2itZ2KTqjDajwl"
                    },
                    data: {
                        "to": item,
                        "notification": {
                            "title": params.title,
                            "body": params.body
                        },

                        "data": {}
                    }

                }).then(response =>console.log(response.status))
                  .catch(err =>console.log(err));
            });

        }).catch(err => console.log(err));

}

module.exports = { registerDevice, sendNotification ,SchedulerController}