import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import type { TestConfigModel } from '@lib/config/node/test/_test.models';

beforeAll(async () => {
  const { onBeforeAll } = await importConfig<TestConfigModel>(
    '@lib/config/node/test/test',
  );
  onBeforeAll && (await onBeforeAll());
});

beforeEach(async () => {
  const { onBeforeEach } = await importConfig<TestConfigModel>(
    '@lib/config/node/test/test',
  );
  onBeforeEach && (await onBeforeEach());
});

afterAll(async () => {
  const { onAfterAll } = await importConfig<TestConfigModel>(
    '@lib/config/node/test/test',
  );
  onAfterAll && (await onAfterAll());
});

afterEach(async () => {
  const { onAfterEach } = await importConfig<TestConfigModel>(
    '@lib/config/node/test/test',
  );
  onAfterEach && (await onAfterEach());
});
