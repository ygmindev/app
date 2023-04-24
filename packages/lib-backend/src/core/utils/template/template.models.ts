import type {
  _TemplateModel,
  _TemplateParamsModel,
} from '@lib/backend/core/utils/template/_template.models';

export interface TemplateParamsModel<TParams> extends _TemplateParamsModel<TParams> {}

export type TemplateModel = _TemplateModel;
