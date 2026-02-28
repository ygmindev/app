import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { containerConfig as configBase } from '@lib/config/container/container.base';

export const containerConfig = configBase.extend(() => ({
  dockerPathname: fromConfig('container/python'),
}));
