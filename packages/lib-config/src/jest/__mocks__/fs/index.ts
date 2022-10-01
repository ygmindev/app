import { FS_FIXTURE } from '@lib/config/jest/__mocks__/fs/fs.fixtures';
import { createFsFromVolume, vol } from 'memfs';

vol.fromNestedJSON(FS_FIXTURE, '/');

const fs = createFsFromVolume(vol);

export const { existsSync, readFileSync, readdirSync, statSync, writeFileSync } = fs;
