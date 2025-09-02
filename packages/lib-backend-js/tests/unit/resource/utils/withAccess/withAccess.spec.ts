import { getAccessRole, withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { ACCESS_LEVEL, ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withAccess });

describe(displayName, () => {
  test('public', async () => {
    const result = getAccessRole(ACCESS_LEVEL.PUBLIC);
    expect(result).toStrictEqual([]);
  });

  test('protected', async () => {
    const result = getAccessRole(ACCESS_LEVEL.PROTECTED);
    expect(result).toStrictEqual([ACCESS_ROLE.USER]);
  });

  test('restricted', async () => {
    const result = getAccessRole(ACCESS_LEVEL.RESTRICTED);
    expect(result).toStrictEqual([ACCESS_ROLE.ADMIN]);
  });
});
