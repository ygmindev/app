import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { getEnvironmentVariables } from '@lib/shared/core/utils/getEnvironmentVariables/getEnvironmentVariables';
import {
  type ExportEnvironemntModel,
  type ExportEnvironemntParamsModel,
} from '@tool/task/core/utils/exportEnvironment/exportEnvironment.models';
import { writeFileSync } from 'fs';
import map from 'lodash/map';
import toString from 'lodash/toString';

export const exportEnvironemnt = ({
  envPrefix,
  pathname,
}: ExportEnvironemntParamsModel): ExportEnvironemntModel => {
  const pathnameF = pathname ?? fromWorking(BUILD_DIR, `.env.${process.env.NODE_ENV}`);
  const envs = getEnvironmentVariables({ envPrefix });
  const value = map(envs, (v, k) => `${k.trim()}=${toString(v).trim()}`).join('\n');
  writeFileSync(pathnameF, value);
};
