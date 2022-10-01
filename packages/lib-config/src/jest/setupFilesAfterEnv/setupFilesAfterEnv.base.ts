import { bootstrap } from '@lib/shared/bootstrap/bootstrap';

jest.mock('@lib/backend/file/utils/fromRoot/fromRoot', () => ({
  __esModule: true,
  fromRoot: () => '/',
}));
jest.mock('@lib/backend/file/utils/fromWorking/fromWorking', () => ({
  __esModule: true,
  fromWorking: () => '/',
}));

beforeAll(async () => {
  await bootstrap();
});
