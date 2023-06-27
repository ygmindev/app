import { _cli } from '#tool-task/core/utils/cli/_cli';

export const cli = async (): Promise<void> => {
  const task = process.argv.splice(2).join(' ');
  await _cli({ task });
};
