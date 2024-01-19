import {
  type _TemplateModel,
  type _TemplateParamsModel,
} from '@lib/backend/core/utils/template/_template.models';

export type TemplateParamsModel<TParams> = _TemplateParamsModel<TParams>;

export type TemplateModel = _TemplateModel;
