const router = require('express').Router();
import { addTheatre,getAllTheatres,updateTheatre,delteTheatre } from '../controllers/TheatreController';


router.post('add-theatre',addTheatre);
router.get('get-all-theatres',getAllTheatres);
router.put('update-theatre',updateTheatre);
router.delete('delete-theatre',delteTheatre);

module.exports = router;