import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import { forEach } from 'lodash';

const platform = getEnv<PlatformModel>('APP_PLATFORM', PLATFORM.BASE);
const { mocks, onAfterAll, onAfterEach, onBeforeAll, onBeforeEach, onLoad } =
  require(`@lib/config/node/test/configs/test.${platform}`).testConfig.initialize;

onLoad && onLoad();
beforeAll(async () => onBeforeAll && onBeforeAll());
beforeEach(async () => onBeforeEach && onBeforeEach());
afterAll(async () => onAfterAll && onAfterAll());
afterEach(async () => onAfterEach && onAfterEach());

mocks && forEach(mocks, (v, k) => (v ? jest.mock(k, v) : jest.mock(k)));
