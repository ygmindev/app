import {
  type _TemplateModel,
  type _TemplateParamsModel,
} from '@lib/backend/core/utils/template/_template.models';

export type TemplateParamsModel<TType extends unknown> = _TemplateParamsModel<TType>;

export type TemplateModel = _TemplateModel;
