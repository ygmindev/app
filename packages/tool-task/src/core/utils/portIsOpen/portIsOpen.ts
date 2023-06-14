import { command } from '#tool-task/core/utils/command/command';

import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';

export const portIsOpen = async (port: string): Promise<boolean> => {
  const pids = await new Promise((resolve) =>
    command(`lsof -ti :${port}`, { isSilent: true, onData: resolve }).then(() => resolve('')),
  );
  return isEmpty(pids);
};
