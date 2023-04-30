import { FS_FIXTURE } from '@lib/config/javascript/test/configs/__mocks__/fs/fs.fixtures';
import { createFsFromVolume, vol } from 'memfs';

jest.mock('@lib/backend/file/utils/fromRoot/fromRoot', async () => ({ fromRoot: () => '/' }));
jest.mock('@lib/backend/file/utils/fromWorking/fromWorking', async () => ({
  fromWorking: () => '/',
}));

vol.fromNestedJSON(FS_FIXTURE, '/');

const fs = createFsFromVolume(vol);

export const { existsSync, readFileSync, readdirSync, statSync, writeFileSync } = fs;
