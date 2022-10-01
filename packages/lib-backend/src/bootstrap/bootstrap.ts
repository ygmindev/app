import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import { bootstrap as bootstrapBase } from '@lib/shared/bootstrap/bootstrap';
import { Container } from '@lib/shared/core/utils/Container/Container';

let isBootstrapped: boolean;

export const bootstrap = async (): Promise<void> => {
  if (!isBootstrapped) {
    await bootstrapBase();

    await Container.get(DatabaseMain).bootstrap();

    isBootstrapped = true;
  }
};
