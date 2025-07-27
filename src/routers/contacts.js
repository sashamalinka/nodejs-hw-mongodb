import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getAllContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactsSchema,
  updateContactsSchema,
} from '../validation/contacts.js';
import { isValidID } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getAllContactsController));
router.get('/:contactId', isValidID, ctrlWrapper(getContactByIdController));
router.post(
  '/',
  validateBody(createContactsSchema),
  ctrlWrapper(createContactController),
);
router.patch(
  '/:contactId',
  isValidID,
  validateBody(updateContactsSchema),
  ctrlWrapper(patchContactController),
);
router.delete('/:contactId', isValidID, ctrlWrapper(deleteContactController));

export default router;
