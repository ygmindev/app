import capitalize from 'lodash/capitalize';
import { useEffect } from 'react';

import { Tabs } from '#lib-frontend/core/components/Tabs/Tabs';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { ResourceTable } from '#lib-frontend/resource/components/ResourceTable/ResourceTable';
import { RESOURCES } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.constants';
import {
  type ResourcePageParamsModel,
  type ResourcePagePropsModel,
} from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.models';
import { RESOURCE } from '#lib-frontend/resource/resource.constants';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useUserResource } from '#lib-frontend/user/hooks/useUserResource/useUserResource';

export const ResourcePage: SFCModel<ResourcePagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { location, push, replace } = useRouter<ResourcePageParamsModel>();

  const id = capitalize(location?.params?.id);

  useEffect(() => {
    !id && void replace({ pathname: `${RESOURCE}/${RESOURCES[0].id}` });
  }, [id]);

  const handleChange = (value: string): void => {
    void push({ pathname: `${RESOURCE}/${value}` });
  };

  const service = useUserResource();
  return (
    <Wrapper
      grow
      p
      s
      style={styles}
      testID={testID}>
      <Tabs
        onChange={handleChange}
        tabs={RESOURCES}
        value={id}
      />

      <ResourceTable
        filters={[{ id: 'first' }, { id: 'last' }]}
        // filters={[{ id: 'first' }, { id: 'last' }]}
        name={id}
        service={service}
      />
    </Wrapper>
  );
};
