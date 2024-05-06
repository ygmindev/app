import waitOn from 'wait-on';

import { info } from '@lib/shared/logging/utils/logger/logger';
import {
  type _WaitOnModel,
  type _WaitOnParamsModel,
} from '@tool/task/core/utils/waitOn/_waitOn.models';

export const _waitOn = async (...[params, options]: _WaitOnParamsModel): Promise<_WaitOnModel> =>
  waitOn({
    delay: options.delay,
    interval: options.interval,
    resources: params.map(([resource, type]) => {
      const resourceF = `${type}${resource.replace(/^https?:\/\//, '')}`;
      info('waiting on', resourceF);
      return resourceF;
    }),
    timeout: options.timeout,
  });
