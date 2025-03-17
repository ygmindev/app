import { _ObjectId } from '@lib/backend/database/utils/ObjectId/_ObjectId';
import { type ObjectIdParamsModel } from '@lib/backend/database/utils/ObjectId/ObjectId.models';

export class ObjectId extends _ObjectId {
  constructor(params?: ObjectIdParamsModel) {
    super(params);
  }
}
