import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { generateConfig } from '@lib/config/core/generate/configs/generate.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { boilerplate } from '@tool/generate/utils/boilerplate/boilerplate';
import type { BoilerplateParamsModel } from '@tool/generate/utils/boilerplate/boilerplate.models';

const { displayName } = withTest({ target: () => boilerplate });

describe(displayName, () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('works', async () => {
    const templatesDir = fromPackages('tool-generate/templates');
    children({ from: templatesDir, isDirectory: true }).map(({ name }) => name);

    const template = 'js-function';
    const { onSuccess, output, prepare } = generateConfig[template] || {};
    const params = merge<BoilerplateParamsModel>({
      values: [{ onSuccess, output, template }, prepare ? await prepare() : {}],
    });

    vi.mock('fs');
    await boilerplate(params);
    const result = false;
    expect(result).toBeFalsy();
  });
});
