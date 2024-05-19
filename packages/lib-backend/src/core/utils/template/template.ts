import { _template } from '@lib/backend/core/utils/template/_template';
import {
  type TemplateModel,
  type TemplateParamsModel,
} from '@lib/backend/core/utils/template/template.models';

export const template = async <TType extends unknown>(
  params: TemplateParamsModel<TType>,
): Promise<TemplateModel> => _template(params);
