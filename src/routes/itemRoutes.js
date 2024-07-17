import {Router} from 'express';
import {
  createItem,
  getItems,
  updateItem,
} from '../controllers/itemController.js';
import validateHeaders from '../middleware/validateHeaders.js';

const router = Router();

router.get('/items', validateHeaders, getItems);
router.post('/items', validateHeaders, createItem);
router.put('/items/:id', validateHeaders, updateItem);

export default router;
