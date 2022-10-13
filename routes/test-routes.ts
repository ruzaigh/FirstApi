import express from 'express';
import controller from '../controllers/test-controller';
const router = express.Router();


 router.get('/channel', controller.getChannel);

export = router;