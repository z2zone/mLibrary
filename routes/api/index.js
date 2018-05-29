const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
	res.json({text: "dummy"});
});

module.exports = router;