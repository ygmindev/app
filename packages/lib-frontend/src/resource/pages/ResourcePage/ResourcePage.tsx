import reduce from 'lodash/reduce';

import { Tabs } from '#lib-frontend/core/components/Tabs/Tabs';
import { type TabModel } from '#lib-frontend/core/components/Tabs/Tabs.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { RESOURCE_ITEMS } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.constants';
import {
  type ResourcePageParamsModel,
  type ResourcePagePropsModel,
} from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.models';
import { RESOURCE } from '#lib-frontend/resource/resource.constants';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { NotFoundPage } from '#lib-frontend/route/pages/NotFoundPage/NotFoundPage';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const ResourcePage: SFCModel<ResourcePagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { location, push } = useRouter<ResourcePageParamsModel>();

  const handleChange = (value: string): void => {
    void push({ pathname: `${RESOURCE}/${value}` });
  };

  const id = location?.params?.id && trimPathname(location.params.id);
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

      {(id && RESOURCE_ITEMS[id].element) ?? <NotFoundPage />}
    </Wrapper>
  );
};
