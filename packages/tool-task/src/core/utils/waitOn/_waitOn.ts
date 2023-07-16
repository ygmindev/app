import waitOn from 'wait-on';

import {
  type _WaitOnModel,
  type _WaitOnParamsModel,
} from '#tool-task/core/utils/waitOn/_waitOn.models';

export const _waitOn = async (...[params, options]: _WaitOnParamsModel): Promise<_WaitOnModel> => {
  const { delay, interval, timeout } = options ?? {};
  await waitOn({
    delay,
    interval,
    resources: params.map(([resource, type]) => `${type}:${resource}`),
    timeout,
  });
};
