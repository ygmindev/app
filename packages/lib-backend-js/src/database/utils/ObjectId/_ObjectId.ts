import { type _ObjectIdParamsModel } from '@lib/backend/database/utils/ObjectId/_ObjectId.models';
import { ObjectId } from 'mongodb';

export class _ObjectId extends ObjectId {
  constructor(params?: _ObjectIdParamsModel) {
    super(params);
  }
}
