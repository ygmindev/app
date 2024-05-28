import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import generateConfig from '@lib/config/generate/generate';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { boilerplate } from '@tool/task/generate/utils/boilerplate/boilerplate';
import { type BoilerplateParamsModel } from '@tool/task/generate/utils/boilerplate/boilerplate.models';

const { displayName } = withTest({ boilerplate });

describe(displayName, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('works', async () => {
    const templatesDir = fromPackages('tool-task/templates');
    children(templatesDir, { isDirectory: true }).map(({ name }) => name);
    const { onSuccess, output, prepare } = generateConfig.params()['js-package'];
    const params = merge<BoilerplateParamsModel>([
      { onSuccess, output },
      prepare ? await prepare() : {},
    ]);

    jest.mock('fs');
    await boilerplate(params);
    const result = false;
    expect(result).toBeFalsy();
  });
});
