import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { packageInfo } from '@lib/shared/core/utils/packageInfo/packageInfo';
import {
  type AppPromptModel,
  type AppPromptParamsModel,
} from '@tool/task/core/utils/appPrompt/appPrompt.models';

export const appPrompt = (params?: AppPromptParamsModel): AppPromptModel => {
  const options = filterNil(
    children(fromPackages()).map((v) => {
      try {
        const { name } = packageInfo(v.fullPath);
        return { id: name ?? '', label: name };
      } catch {
        return null;
      }
    }),
  );
  return { key: 'app', options };
};
