import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { FUTURE_RESOURCE_NAME } from '@lib/model/quant/Future/Future.constants';
import { FutureModel } from '@lib/model/quant/Future/Future.models';
import { Security } from '@lib/model/quant/Security/Security';

@withEntity({
  isAbstract: true,
  name: FUTURE_RESOURCE_NAME,
})
export class Future extends Security implements FutureModel {}
