import { type _ParseArgsModel } from '@tool/task/core/utils/parseArgs/_parseArgs.models';
import minimist from 'minimist';

export const _parseArgs = (): _ParseArgsModel => {
  const args = minimist(process.argv.slice(2));
  for (const [key, value] of Object.entries(args)) {
    if (key === '_') continue;
    if (Array.isArray(value)) {
      args[key] = value.map((v) => `${v}`.trim());
    } else if (typeof value === 'string') {
      args[key] = value.trim();
    } else {
      args[key] = value;
    }
  }
  return args as _ParseArgsModel;
};
