import {
  type _TemplateModel,
  type _TemplateParamsModel,
} from '@lib/backend/core/utils/template/_template.models';
import { type Data } from 'ejs';
import { renderFile } from 'ejs';

export const _template = async <TParams>({
  params,
  pathname,
}: _TemplateParamsModel<TParams>): Promise<_TemplateModel> => renderFile(pathname, params as Data);
