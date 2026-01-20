import { _parser } from '@lib/config/locale/parser/_parser';
import {
  type _InternationalizeParseModel,
  type _InternationalizeParseParamsModel,
} from '@tool/task/locale/tasks/internationalizeParse/_internationalizeParse.models';
import { runExtractor } from 'i18next-cli';

export const _internationalizeParse = async ({
  config,
}: _InternationalizeParseParamsModel): Promise<_InternationalizeParseModel> => {
  await runExtractor(_parser(config));
  return {};
};
