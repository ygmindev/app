import type {
  _ProgressModel,
  _ProgressParamsModel,
} from '@tool/task/core/utils/progress/_progress.models';
import { SingleBar } from 'cli-progress';

export const _progress = ({ name }: _ProgressParamsModel): _ProgressModel => {
  const _bar = new SingleBar({
    format: `[${name}] {bar} | {percentage}% | {value}/{total}`,
  });
  return {
    increment: (value) => _bar.increment(value),
    start: (end, start) => _bar.start(end, start || 0, {}),
    stop: () => _bar.stop(),
    update: (value) => _bar.update(value),
  };
};
