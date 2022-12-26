import { initialize } from '@lib/shared/setup/utils/initialize/initialize';

jest.mock('@lib/backend/file/utils/fromRoot/fromRoot', () => ({ fromRoot: () => '/' }));
jest.mock('@lib/backend/file/utils/fromWorking/fromWorking', () => ({ fromWorking: () => '/' }));

beforeAll(async () => {
  await initialize();
});
