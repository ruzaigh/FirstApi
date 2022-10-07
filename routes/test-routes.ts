import express from 'express';
import controller from '../controllers/test-controller';
const router = express.Router();

router.post('/testing',controller.testAdd);
router.get('/posts', controller.getPosts);
export = router;