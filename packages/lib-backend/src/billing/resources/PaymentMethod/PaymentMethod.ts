import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEmbeddableRootField } from '@lib/backend/resource/utils/withEmbeddableRootField/withEmbeddableRootField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { User } from '@lib/backend/user/resources/User/User';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  PaymentMethodModel,
  type PaymentMethodTypeModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { EmbeddableRootFieldModel } from '@lib/shared/resource/resource.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ name: PAYMENT_METHOD_RESOURCE_NAME })
export class PaymentMethod extends EmbeddedResource implements PaymentMethodModel {
  @withEmbeddableRootField({ Resource: () => User })
  [USER_RESOURCE_NAME]!: EmbeddableRootFieldModel<UserModel>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  externalId!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  fingerprint?: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  type!: PaymentMethodTypeModel;
}
