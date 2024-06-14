import express from 'express';
import { profile } from '../controller/profile.js';
import { isAuthenticated } from '../middlewares/authenticate.js';

const router = express.Router();
router.get('/', isAuthenticated, profile);

export default router;