import { _cli } from '@tool/task/core/utils/cli/_cli';
import { type CliModel } from '@tool/task/core/utils/cli/cli.models';

export const cli = async (): Promise<CliModel> => {
  const task = process.argv.splice(2).join(' ') || undefined;
  return _cli({ task });
};
