const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1424481',
  key: '4cf6127f9efc050b2966',
  secret: 'e959c07f75cdf0e76cb1',
  cluster: 'ap4',
  useTLS: true
});

let messages = [];

router.get('/', (req, res) => {
  res.send('all good');
});

router.post('/pusher/auth', (req, res) => {
  console.log(req)
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});
module.exports = router;
