export const _handleHmr = async (onCleanup?: () => Promise<void>): Promise<void> => {
  import.meta?.hot?.on('vite:beforeFullReload', async () => {
    await onCleanup?.();
  });
  import.meta?.hot?.dispose(async () => {
    await onCleanup?.();
  });
};
