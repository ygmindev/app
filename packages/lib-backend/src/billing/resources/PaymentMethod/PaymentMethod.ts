import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEmbeddableRootField } from '#lib-backend/resource/utils/withEmbeddableRootField/withEmbeddableRootField';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { User } from '#lib-backend/user/resources/User/User';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  type PaymentMethodModel,
  type PaymentMethodTypeModel,
} from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withEntity({ name: PAYMENT_METHOD_RESOURCE_NAME })
export class PaymentMethod extends EmbeddedResource implements PaymentMethodModel {
  @withEmbeddableRootField({ Resource: () => User, name: USER_RESOURCE_NAME })
  [USER_RESOURCE_NAME]!: UserModel;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  last4!: string;

  @withField({ type: DATA_TYPE.STRING })
  type!: PaymentMethodTypeModel;
}

// import { Bank } from '#lib-backend/billing/resources/Bank/Bank';
// import { Card } from '#lib-backend/billing/resources/Card/Card';
// import { createUnion } from '#lib-backend/resource/utils/createUnion/createUnion';
// import {
//   PAYMENT_METHOD_RESOURCE_NAME,
//   PAYMENT_METHOD_TYPE,
// } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
// import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';

// export const PaymentMethod = createUnion<PaymentMethodModel>({
//   Resource: [Bank, Card],
//   name: PAYMENT_METHOD_RESOURCE_NAME,
//   resolve: (value) => {
//     switch (value.type) {
//       case PAYMENT_METHOD_TYPE.BANK:
//         return Bank;
//       case PAYMENT_METHOD_TYPE.CARD:
//         return Card;
//       default:
//         return undefined;
//     }
//   },
// });
