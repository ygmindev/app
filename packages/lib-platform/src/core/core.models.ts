import { type DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { type PLATFORM } from '@lib/platform/core/core.constants';
import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export type PlatformModel = `${PLATFORM}`;

export type ContextModel = {
  database?: DatabaseModel;
  group?: string;
  pathname?: string;
  requestId?: string;
  user?: SignInTokenModel;
};
