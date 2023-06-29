import { children } from '#lib-backend/file/utils/children/children';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { config } from '#lib-config/core/generate/generate';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';
import { boilerplate } from '#tool-generate/utils/boilerplate/boilerplate';
import { type BoilerplateParamsModel } from '#tool-generate/utils/boilerplate/boilerplate.models';

const { displayName } = withTest({ boilerplate });

describe(displayName, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('works', async () => {
    const templatesDir = fromPackages('tool-generate/templates');
    children({ from: templatesDir, isDirectory: true }).map(({ name }) => name);

    const template = 'js-function';
    const { onSuccess, output, prepare } = config[template] || {};
    const params = merge<BoilerplateParamsModel>([
      { onSuccess, output, template },
      prepare ? await prepare() : {},
    ]);

    jest.mock('fs');
    await boilerplate(params);
    const result = false;
    expect(result).toBeFalsy();
  });
});
