let isCleanedup = false;

export const cleanup = async (): Promise<void> => {
  if (!isCleanedup) {
    isCleanedup = true;
  }
};
