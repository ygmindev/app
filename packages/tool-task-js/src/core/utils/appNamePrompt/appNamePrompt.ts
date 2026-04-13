import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { packageInfo } from '@lib/shared/core/utils/packageInfo/packageInfo';
import {
  type AppNamePromptModel,
  type AppNamePromptParamsModel,
} from '@tool/task/core/utils/appNamePrompt/appNamePrompt.models';
import trim from 'lodash/trim';
import uniq from 'lodash/uniq';

export const appNamePrompt = ({
  defaultValue,
  prefix,
}: AppNamePromptParamsModel): AppNamePromptModel => {
  const names = filterNil(
    children(fromPackages()).map((v) => {
      try {
        const { name } = packageInfo(v.fullPath);
        if (name?.startsWith(prefix)) {
          return trim(name?.replace(prefix, ''), '-');
        }
        return null;
      } catch {
        return null;
      }
    }),
  );
  const options = uniq(names).map((v) => ({ id: v ?? '', label: v }));
  return { defaultValue: defaultValue ? [defaultValue] : undefined, key: 'name', options };
};
