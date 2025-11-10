import { type _ParseArgsModel } from '@tool/task/core/utils/parseArgs/_parseArgs.models';
import minimist from 'minimist';

export const _parseArgs = (): _ParseArgsModel => {
  const result = minimist(process.argv.slice(2));
  for (const [key, value] of Object.entries(result).slice(1)) {
    let valueF: string | Array<string> = (value as string).trim();
    valueF.includes(',') && (valueF = valueF.split(',').filter(Boolean));
    result[key] = valueF;
  }
  return result;
};
