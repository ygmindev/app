import type { ContextModel } from '@lib/shared/resource/utils/Context/Context.models';

export interface AuthorizeParamsModel {
  context: ContextModel;
  roles?: Array<string>;
}

export type AuthorizeModel = boolean;
