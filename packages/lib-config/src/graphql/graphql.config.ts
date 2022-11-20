import { AccessResolver } from '@lib/backend/auth/resources/Access/AccessResolver/AccessResolver';
import { OtpResolver } from '@lib/backend/auth/resources/Otp/OtpResolver/OtpResolver';
import { SignInResolver } from '@lib/backend/auth/resources/SignIn/SignInResolver/SignInResolver';
import { CardResolver } from '@lib/backend/billing/resources/Card/CardResolver/CardResolver';
import { DummyEmbeddedResourceResolver } from '@lib/backend/testing/resources/DummyEmbeddedResource/DummyEmbeddedResourceResolver/DummyEmbeddedResourceResolver';
import { DummyEntityResourceResolver } from '@lib/backend/testing/resources/DummyEntityResource/DummyEntityResourceResolver/DummyEntityResourceResolver';
import { UserResolver } from '@lib/backend/user/resources/User/UserResolver/UserResolver';

export const RESOLVERS = [
  AccessResolver,
  OtpResolver,
  SignInResolver,
  UserResolver,
  CardResolver,
  process.env.NODE_ENV !== 'production' && DummyEntityResourceResolver,
  process.env.NODE_ENV !== 'production' && DummyEmbeddedResourceResolver,
].filter(Boolean);
