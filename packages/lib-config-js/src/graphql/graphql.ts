import { UtilityResolver } from '@lib/backend/admin/resources/Utility/UtilityResolver/UtilityResolver';
import { VendorResolver } from '@lib/backend/admin/resources/Vendor/VendorResolver/VendorResolver';
import { DeliveryResolver } from '@lib/backend/aroom/resources/Delivery/DeliveryResolver/DeliveryResolver';
import { AccessResolver } from '@lib/backend/auth/resources/Access/AccessResolver/AccessResolver';
import { OtpResolver } from '@lib/backend/auth/resources/Otp/OtpResolver/OtpResolver';
import { RoleResolver } from '@lib/backend/auth/resources/Role/RoleResolver/RoleResolver';
import { SignInResolver } from '@lib/backend/auth/resources/SignIn/SignInResolver/SignInResolver';
import { authorize } from '@lib/backend/auth/utils/authorize/authorize';
import { BankResolver } from '@lib/backend/billing/resources/Bank/BankResolver/BankResolver';
import { CardResolver } from '@lib/backend/billing/resources/Card/CardResolver/CardResolver';
import { PaymentMethodResolver } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver';
import { ChatResolver } from '@lib/backend/chat/resources/Chat/ChatResolver/ChatResolver';
import { OrderResolver } from '@lib/backend/commerce/resources/Order/OrderResolver/OrderResolver';
import { PricingResolver } from '@lib/backend/commerce/resources/Pricing/PricingResolver/PricingResolver';
import { ProductResolver } from '@lib/backend/commerce/resources/Product/ProductResolver/ProductResolver';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { GroupResolver } from '@lib/backend/group/resources/Group/GroupResolver/GroupResolver';
import { SocketResolver } from '@lib/backend/http/resources/Socket/SocketResolver/SocketResolver';
import { MapRouteResolver } from '@lib/backend/map/resources/MapRoute/MapRouteResolver/MapRouteResolver';
import { SnapshotResolver } from '@lib/backend/test/resources/Snapshot/SnapshotResolver/SnapshotResolver';
import { LinkedUserResolver } from '@lib/backend/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver';
import { UserResolver } from '@lib/backend/user/resources/User/UserResolver/UserResolver';
import { _graphql } from '@lib/config/graphql/_graphql';
import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/graphql/graphql.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const config = defineConfig<GraphqlConfigModel, _GraphqlConfigModel>({
  config: _graphql,

  params: () =>
    ({
      authorize,

      container: Container,

      resolvers: filterNil([
        AccessResolver,
        BankResolver,
        CardResolver,
        ChatResolver,
        GroupResolver,
        LinkedUserResolver,
        OrderResolver,
        OtpResolver,
        PaymentMethodResolver,
        PricingResolver,
        ProductResolver,
        RoleResolver,
        SignInResolver,
        SocketResolver,
        UserResolver,
        VendorResolver,
        UtilityResolver,
        DeliveryResolver,
        MapRouteResolver,
        process.env.NODE_ENV !== 'production' && SnapshotResolver,
      ]),

      schemaDir: fromStatic('graphql/schema.gql'),
    }) as GraphqlConfigModel,
});

export default config;
