import { config as configBase } from '@lib/config/graphql/graphql.base';
import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/graphql/graphql.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { UtilityResolver } from '@lib/model/admin/Utility/UtilityResolver/UtilityResolver';
import { VendorResolver } from '@lib/model/admin/Vendor/VendorResolver/VendorResolver';
import { BankResolver } from '@lib/model/billing/Bank/BankResolver/BankResolver';
import { CardResolver } from '@lib/model/billing/Card/CardResolver/CardResolver';
import { PaymentMethodResolver } from '@lib/model/billing/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver';
import { ChatResolver } from '@lib/model/chat/Chat/ChatResolver/ChatResolver';
import { MessageResolver } from '@lib/model/chat/Message/MessageResolver/MessageResolver';
import { OrderResolver } from '@lib/model/commerce/Order/OrderResolver/OrderResolver';
import { PricingResolver } from '@lib/model/commerce/Pricing/PricingResolver/PricingResolver';
import { ProductResolver } from '@lib/model/commerce/Product/ProductResolver/ProductResolver';
import { CurveResolver } from '@lib/model/quant/Curve/CurveResolver/CurveResolver';
import { LinkedUserResolver } from '@lib/model/user/LinkedUser/LinkedUserResolver/LinkedUserResolver';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const config = defineConfig<GraphqlConfigModel, _GraphqlConfigModel>({
  ...configBase,

  overrides: () => [
    {
      resolvers: filterNil([
        BankResolver,
        CardResolver,
        ChatResolver,
        CurveResolver,
        MessageResolver,
        LinkedUserResolver,
        OrderResolver,
        PaymentMethodResolver,
        PricingResolver,
        ProductResolver,
        VendorResolver,
        UtilityResolver,
      ]),

      schemaFilename: 'server.gql',
    },
  ],
});
