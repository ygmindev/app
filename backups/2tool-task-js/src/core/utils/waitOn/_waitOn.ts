import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type _WaitOnModel,
  type _WaitOnParamsModel,
} from '@tool/task/core/utils/waitOn/_waitOn.models';
import waitOn from 'wait-on';

export const _waitOn = async (...[params, options]: _WaitOnParamsModel): Promise<_WaitOnModel> =>
  waitOn({
    delay: options.delay,
    interval: options.interval,
    resources: params.map(([resource, type]) => {
      const resourceF = `${type}${resource.replace(/^https?:\/\//, '')}`;
      logger.info('waiting on', resourceF);
      return resourceF;
    }),
    timeout: options.timeout,
  });
