import { RESOURCE_TABLES } from '@lib/frontend/admin/containers/Resource/Resource.constants';
import type {
  ResourceParamsModel,
  ResourcePropsModel,
} from '@lib/frontend/admin/containers/Resource/Resource.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Redirect } from '@lib/frontend/routing/components/Redirect/Redirect';
import { RouteTabs } from '@lib/frontend/routing/containers/RouteTabs/RouteTabs';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { NOT_FOUND } from '@lib/frontend/routing/routing.constants';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { RESOURCE } from '@lib/shared/resource/resource.constants';
import { get, mapKeys } from 'lodash';

export const Resource: SFCModel<ResourcePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { location } = useRouter<ResourceParamsModel>();

  const Table = location.params?.name
    ? get(
        mapKeys(RESOURCE_TABLES, (_, k) => trimPathname(k)),
        trimPathname(location.params.name),
      )
    : null;

  return Table ? (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <RouteTabs
        tabs={Object.keys(RESOURCE_TABLES).map((id) => ({
          id: `${RESOURCE}/${trimPathname(id)}`,
          label: id,
        }))}
      />

      <Table />
    </Wrapper>
  ) : (
    <Redirect pathname={NOT_FOUND} />
  );
};
