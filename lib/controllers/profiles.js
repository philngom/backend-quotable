const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res) => {
  // TODO: Implement me!
  const response = await ProfileService.create(req.body);
  // console.log(response);
  res.send(response);
});
