import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import cloneDeep from 'lodash/cloneDeep';
import pick from 'lodash/pick';

const { displayName } = withTest({ importConfig });

describe(displayName, () => {
  test('works', async () => {
  });
});
