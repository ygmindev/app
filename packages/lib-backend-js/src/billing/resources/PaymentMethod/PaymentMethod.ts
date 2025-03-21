import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { Collection } from '@lib/backend/resource/utils/Collection/Collection';
import { CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { User } from '@lib/backend/user/resources/User/User';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  PaymentMethodModel,
  type PaymentMethodTypeModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ name: PAYMENT_METHOD_RESOURCE_NAME })
export class PaymentMethod extends EntityResource implements PaymentMethodModel {
  @withManyToManyField({ Resource: () => User, leaf: PAYMENT_METHOD_RESOURCE_NAME })
  [USER_RESOURCE_NAME]?: CollectionModel<UserModel> = new Collection(this);

  @withField({ type: DATA_TYPE.STRING })
  externalId!: string;

  @withField({ type: DATA_TYPE.STRING })
  fingerprint?: string;

  @withField({ type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ type: DATA_TYPE.STRING })
  name!: string;

  @withField({ type: DATA_TYPE.STRING })
  type!: PaymentMethodTypeModel;
}
