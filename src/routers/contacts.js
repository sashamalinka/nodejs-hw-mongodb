import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
router.get('contacts', ctrlWrapper(createContactController));
router.get('/contacts/:contactId', ctrlWrapper(patchContactController));
router.get('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
