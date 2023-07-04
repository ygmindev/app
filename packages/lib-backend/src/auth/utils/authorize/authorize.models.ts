import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';

export type AuthorizeParamsModel = {
  context: ContextModel;
  roles?: Array<string>;
};

export type AuthorizeModel = Promise<boolean>;
