import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export function isValidID(req, res, next) {
  const id = req.params.contactId || req.params.id;
  if (!isValidObjectId(id)) {
    return next(createHttpError(400, 'Bad Request'));
  }
  next();
}
