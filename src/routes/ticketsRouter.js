const { Router } = require('express');
const getTickets = require('../controllers/ticketsControler');
const router = Router();

router.get('/tickets', getTickets);

module.exports = router;