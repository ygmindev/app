import { initialize } from '@lib/shared/setup/utils/initialize/initialize';

jest.mock('@lib/backend/file/utils/fromRoot/fromRoot', () => ({
  __esModule: true,
  fromRoot: () => '/',
}));
jest.mock('@lib/backend/file/utils/fromWorking/fromWorking', () => ({
  __esModule: true,
  fromWorking: () => '/',
}));

beforeAll(async () => {
  await initialize();
});
