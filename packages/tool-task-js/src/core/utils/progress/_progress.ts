import { SingleBar } from 'cli-progress';

import {
  type _ProgressModel,
  type _ProgressParamsModel,
} from '@tool/task/core/utils/progress/_progress.models';

export const _progress = ({ name }: _ProgressParamsModel): _ProgressModel => {
  const bar = new SingleBar({
    format: `[${name}] {bar} | {percentage}% | {value}/{total}`,
  });
  return {
    increment: (value) => bar.increment(value),
    start: (end, start) => bar.start(end, start || 0, {}),
    stop: () => bar.stop(),
    update: (value) => bar.update(value),
  };
};
