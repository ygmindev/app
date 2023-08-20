import capitalize from 'lodash/capitalize';
import reduce from 'lodash/reduce';

import { Tabs } from '#lib-frontend/core/components/Tabs/Tabs';
import { type TabModel } from '#lib-frontend/core/components/Tabs/Tabs.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { ResourceTable } from '#lib-frontend/resource/components/ResourceTable/ResourceTable';
import { RESOURCE_ITEMS } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.constants';
import {
  type ResourcePageParamsModel,
  type ResourcePagePropsModel,
} from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.models';
import { RESOURCE } from '#lib-frontend/resource/resource.constants';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { NotFoundPage } from '#lib-frontend/route/pages/NotFoundPage/NotFoundPage';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const ResourcePage: SFCModel<ResourcePagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { location, push } = useRouter<ResourcePageParamsModel>();

  const handleChange = (value: string): void => {
    void push({ pathname: `${RESOURCE}/${value}` });
  };

  const id = capitalize(location?.params?.id);
  const resource = RESOURCE_ITEMS[id];

  return (
    <Wrapper
      grow
      p
      s
      style={styles}
      testID={testID}>
      <Tabs
        onChange={handleChange}
        tabs={reduce(
          RESOURCE_ITEMS,
          (result, v, k) => [...result, { id: k, label: t(v.label) }],
          [] as Array<TabModel>,
        )}
        value={id}
      />

      {resource ? (
        <ResourceTable
          columns={resource.columns}
          filters={resource.filters}
          name={id}
          service={resource.service}
        />
      ) : (
        <NotFoundPage />
      )}
    </Wrapper>
  );
};
