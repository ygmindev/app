import { type DatabaseModel } from '#lib-backend/database/utils/Database/Database.models';
import { type SessionModel } from '#lib-backend/serverless/resources/Session/Session.models';
import { type PLATFORM } from '#lib-platform/core/core.constants';
import { type SignInTokenModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';
import { type PartialModel } from '#lib-shared/core/core.models';

export type PlatformModel = `${PLATFORM}`;

export type ContextModel = {
  database?: DatabaseModel;
  group?: string;
  session?: PartialModel<SessionModel>;
  user?: SignInTokenModel;
};
