import {
  type _TemplateModel,
  type _TemplateParamsModel,
} from '@lib/backend/core/utils/template/_template.models';
import ejs from 'ejs';
import { type Data } from 'ejs';

export const _template = async <TType extends unknown>({
  params,
  pathname,
}: _TemplateParamsModel<TType>): Promise<_TemplateModel> =>
  ejs.renderFile(pathname, params as Data);
