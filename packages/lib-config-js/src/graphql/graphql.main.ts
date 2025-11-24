import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';
import { UtilityResolver } from '@lib/model/admin/Utility/UtilityResolver/UtilityResolver';
import { VendorResolver } from '@lib/model/admin/Vendor/VendorResolver/VendorResolver';
import { AccessResolver } from '@lib/model/auth/Access/AccessResolver/AccessResolver';
import { OtpResolver } from '@lib/model/auth/Otp/OtpResolver/OtpResolver';
import { RoleResolver } from '@lib/model/auth/Role/RoleResolver/RoleResolver';
import { SignInResolver } from '@lib/model/auth/SignIn/SignInResolver/SignInResolver';
import { BankResolver } from '@lib/model/billing/Bank/BankResolver/BankResolver';
import { CardResolver } from '@lib/model/billing/Card/CardResolver/CardResolver';
import { PaymentMethodResolver } from '@lib/model/billing/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver';
import { ChatResolver } from '@lib/model/chat/Chat/ChatResolver/ChatResolver';
import { MessageResolver } from '@lib/model/chat/Message/MessageResolver/MessageResolver';
import { OrderResolver } from '@lib/model/commerce/Order/OrderResolver/OrderResolver';
import { PricingResolver } from '@lib/model/commerce/Pricing/PricingResolver/PricingResolver';
import { ProductResolver } from '@lib/model/commerce/Product/ProductResolver/ProductResolver';
import { GroupResolver } from '@lib/model/group/Group/GroupResolver/GroupResolver';
import { SocketResolver } from '@lib/model/http/Socket/SocketResolver/SocketResolver';
import { CurveResolver } from '@lib/model/quant/Curve/CurveResolver/CurveResolver';
import { SnapshotResolver } from '@lib/model/test/Snapshot/SnapshotResolver/SnapshotResolver';
import { LinkedUserResolver } from '@lib/model/user/LinkedUser/LinkedUserResolver/LinkedUserResolver';
import { UserResolver } from '@lib/model/user/User/UserResolver/UserResolver';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

let graphqlConfig = configBase;

graphqlConfig = graphqlConfig.extend(() => ({
  resolvers: filterNil([
    AccessResolver,
    BankResolver,
    CardResolver,
    ChatResolver,
    CurveResolver,
    MessageResolver,
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
    ...(process.env.NODE_ENV !== 'production' ? [SnapshotResolver] : []),
  ]),

  schemaFilename: 'main.gql',
}));

export { graphqlConfig };
