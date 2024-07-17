const router = require('express').Router();
import {login,signin} from '../controllers/userController';

router.post('/login', login);
router.post('/signin', signin);