import { type ContextModel } from '@lib/platform/core/core.models';
import { SIGN_IN_TOKEN_FIXTURE } from '@lib/shared/auth/resources/SignIn/SignIn.fixture';

export enum PLATFORM {
  ANDROID = 'android',
  BASE = 'base',
  IOS = 'ios',
  NODE = 'node',
  PYTHON = 'python',
  WEB = 'web',
}

export const CONTEXT_FIXTURE: ContextModel = {
  requestId: '',
  user: SIGN_IN_TOKEN_FIXTURE,
};
