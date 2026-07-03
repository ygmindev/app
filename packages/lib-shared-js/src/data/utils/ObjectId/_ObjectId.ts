import { type _ObjectIdParamsModel } from '@lib/shared/data/utils/ObjectId/_ObjectId.models';
import { ObjectId } from 'mongodb';

export class _ObjectId extends ObjectId {
  constructor(params?: _ObjectIdParamsModel) {
    super(params);
  }
}
