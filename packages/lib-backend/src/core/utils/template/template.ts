import { _template } from '@lib/backend/core/utils/template/_template';
import {
  type TemplateModel,
  type TemplateParamsModel,
} from '@lib/backend/core/utils/template/template.models';

export const template = async <TParams>(
  params: TemplateParamsModel<TParams>,
): Promise<TemplateModel> => _template(params);
