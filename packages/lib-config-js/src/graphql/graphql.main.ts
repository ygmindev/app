import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';
import { PaymentMethodResolver } from '@lib/model/billing/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver';
import { MessageResolver } from '@lib/model/chat/Message/MessageResolver/MessageResolver';
import { OrderResolver } from '@lib/model/commerce/Order/OrderResolver/OrderResolver';
import { PricingResolver } from '@lib/model/commerce/Pricing/PricingResolver/PricingResolver';
import { ProductResolver } from '@lib/model/commerce/Product/ProductResolver/ProductResolver';
import { GroupResolver } from '@lib/model/group/Group/GroupResolver/GroupResolver';
import { SocketResolver } from '@lib/model/http/Socket/SocketResolver/SocketResolver';
import { CurveResolver } from '@lib/model/quant/Curve/CurveResolver/CurveResolver';
import { LinkedUserResolver } from '@lib/model/user/LinkedUser/LinkedUserResolver/LinkedUserResolver';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const graphqlConfig = configBase.extend(() => ({
  resolvers: filterNil([
    CurveResolver,
    MessageResolver,
    GroupResolver,
    LinkedUserResolver,
    OrderResolver,
    PaymentMethodResolver,
    PricingResolver,
    ProductResolver,
    SocketResolver,
  ]),

  schemaFilename: 'main.gql',
}));
