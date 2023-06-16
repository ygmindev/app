import { createFsFromVolume, vol } from 'memfs';

import { FS_FIXTURE } from '#lib-config/node/test/xxx__mocks__/fs/fs.fixtures';

jest.mock('#lib-backend/file/utils/fromRoot/fromRoot', () => ({ fromRoot: () => '/' }));
jest.mock('#lib-backend/file/utils/fromWorking/fromWorking', () => ({ fromWorking: () => '/' }));

vol.fromNestedJSON(FS_FIXTURE, '/');

const fs = createFsFromVolume(vol);

export const { existsSync, readFileSync, readdirSync, statSync, writeFileSync } = fs;
