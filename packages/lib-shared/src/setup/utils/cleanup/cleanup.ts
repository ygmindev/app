let isCleanedup: boolean;

export const cleanup = async (): Promise<void> => {
  if (!isCleanedup) {
    isCleanedup = true;
  }
};
