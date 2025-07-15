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

// GET all contacts
router.get('/contacts', ctrlWrapper(getContactsController));

// GET contact by ID
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

// POST new contact
router.post('/contacts', ctrlWrapper(createContactController));

// PATCH update contact
router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

// DELETE contact
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
