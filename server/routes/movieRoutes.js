const router = require('express').Router();
const showController = require('../controllers/showController');

router.post('/addShow', showController.addShow);
router.get('/getAllShowsbyTheatre/:theatre', showController.getAllShowsbyTheatre);
router.delete('/deleteShow/:id', showController.deleteShow);
router.get('/getAllTheatresbyMovie', showController.getAllTheatresbyMovie);
router.get('/getShowById', showController.getShowById);

module.exports = router;