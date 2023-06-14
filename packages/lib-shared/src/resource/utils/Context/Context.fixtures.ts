import { SIGN_IN_TOKEN_FIXTURE } from '#lib-shared/auth/resources/SignIn/SignIn.fixture';
import type { ContextModel } from '#lib-shared/resource/utils/Context/Context.models';

export const CONTEXT_FIXTURE: ContextModel = {
  user: SIGN_IN_TOKEN_FIXTURE,
};
