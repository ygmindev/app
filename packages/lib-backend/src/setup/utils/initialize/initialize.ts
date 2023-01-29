import 'source-map-support/register';

import { Container } from '@lib/shared/core/utils/Container/Container';
import { initialize as initializeBase } from '@lib/shared/setup/utils/initialize/initialize';

let isInitialized = false;

export const initialize = async (): Promise<void> => {
  if (!isInitialized) {
    const { DatabaseMain } = await import('@lib/backend/database/utils/DatabaseMain/DatabaseMain');

    await initializeBase();

    await Container.get(DatabaseMain).initialize();

    isInitialized = true;
  }
};
