import { _ObjectId } from '@lib/shared/data/utils/ObjectId/_ObjectId';
import { type ObjectIdParamsModel } from '@lib/shared/data/utils/ObjectId/ObjectId.models';

export class ObjectId extends _ObjectId {
  constructor(params?: ObjectIdParamsModel) {
    super(params);
  }
}
