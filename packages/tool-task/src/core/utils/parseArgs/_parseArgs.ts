import { type _ParseArgsModel } from '@tool/task/core/utils/parseArgs/_parseArgs.models';
import minimist from 'minimist';

export const _parseArgs = (): _ParseArgsModel => minimist(process.argv.slice(2));
