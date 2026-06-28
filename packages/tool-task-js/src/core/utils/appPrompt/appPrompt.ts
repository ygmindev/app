import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { packageInfo } from '@lib/shared/core/utils/packageInfo/packageInfo';
import {
  type AppPromptModel,
  type AppPromptParamsModel,
} from '@tool/task/core/utils/appPrompt/appPrompt.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

export const appPrompt = ({
  defaultValue,
  isMultiple = false,
  key,
  patterns,
}: AppPromptParamsModel = {}): AppPromptModel => {
  const options = filterNil(
    children(fromPackages()).map((v) => {
      try {
        if (patterns && !patterns.some((pattern) => pattern.test(v.fullPath))) return null;
        const { name } = packageInfo(v.fullPath);
        return { id: name ?? '', label: name };
      } catch {
        return null;
      }
    }),
  );
  return {
    defaultValue: defaultValue ? [defaultValue] : undefined,
    key: key ?? 'app',
    options,
    type: isMultiple ? PROMPT_TYPE.MULTIPLE : PROMPT_TYPE.LIST,
  };
};
