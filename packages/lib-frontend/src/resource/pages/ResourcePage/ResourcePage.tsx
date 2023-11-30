import { Tabs } from '#lib-frontend/core/components/Tabs/Tabs';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { RESOURCE_ITEMS } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.constants';
import {
  type ResourcePageParamsModel,
  type ResourcePagePropsModel,
} from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.models';
import { RESOURCE } from '#lib-frontend/resource/resource.constants';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { NotFoundPage } from '#lib-frontend/route/pages/NotFoundPage/NotFoundPage';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { transformKeys } from '#lib-shared/core/utils/transformKeys/transformKeys';

export const ResourcePage: LFCModel<ResourcePagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { location, push } = useRouter<ResourcePageParamsModel>();

  const handleChange = (value: string): void => {
    void push({ pathname: `${RESOURCE}/${value}` });
  };
  const resourceid = location?.params?.resourceid && trimPathname(location.params.resourceid);
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p
      s>
      <Tabs
        onChange={handleChange}
        tabs={Object.keys(RESOURCE_ITEMS).map((id) => ({ id: trimPathname(id), label: id }))}
        value={resourceid}
      />

      {resourceid ? (
        transformKeys(RESOURCE_ITEMS, trimPathname)[resourceid]?.element ?? <NotFoundPage />
      ) : (
        <NotFoundPage />
      )}
    </Wrapper>
  );
};
