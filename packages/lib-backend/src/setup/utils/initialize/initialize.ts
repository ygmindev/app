import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { initialize as initializeBase } from '@lib/shared/setup/utils/initialize/initialize';

let isInitialized: boolean;

export const initialize = async (): Promise<void> => {
  if (!isInitialized) {
    await initializeBase();

    await Container.get(DatabaseMain).initialize();

    isInitialized = true;
  }
};
