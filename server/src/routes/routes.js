const Router = require('express');
const { home } = require('../controllers/controllers');

const router = Router();

router.get("/", home);

module.exports = router;