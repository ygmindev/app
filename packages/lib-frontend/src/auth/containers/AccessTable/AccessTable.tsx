import { ACCESS_TABLE_PROPS } from '@lib/frontend/auth/containers/AccessTable/AccessTable.constants';
import type { AccessTablePropsModel } from '@lib/frontend/auth/containers/AccessTable/AccessTable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { Resources } from '@lib/frontend/resource/containers/Resources/Resources';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { AUTH } from '@lib/shared/auth/auth.constants';
import type { AccessFormModel, AccessModel } from '@lib/shared/auth/resources/Access/Access.models';

export const AccessTable: SFCModel<AccessTablePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  useTranslation([AUTH]);
  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <Resources<AccessModel, AccessFormModel> {...ACCESS_TABLE_PROPS} />
    </Wrapper>
  );
};
