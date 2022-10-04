import { RESOURCE_TABLES } from '@lib/frontend/admin/containers/Resource/Resource.constants';
import type {
  ResourceParamsModel,
  ResourcePropsModel,
} from '@lib/frontend/admin/containers/Resource/Resource.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Redirect } from '@lib/frontend/routing/components/Redirect/Redirect';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { NOT_FOUND } from '@lib/frontend/routing/routing.constants';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const Resource: SFCModel<ResourcePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { location } = useRouter<ResourceParamsModel>();

  const Table = RESOURCE_TABLES[location.params.name];

  return Table ? (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <Table />
    </Wrapper>
  ) : (
    <Redirect
      params={{}}
      pathname={NOT_FOUND}
    />
  );
};
