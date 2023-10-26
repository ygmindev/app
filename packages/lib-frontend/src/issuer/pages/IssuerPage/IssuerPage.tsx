import { useEffect } from 'react';

import { type LFCModel } from '#lib-frontend/core/core.models';
import { GROUP } from '#lib-frontend/group/group.constants';
import { useCurrentGroup } from '#lib-frontend/group/hooks/useCurrentGroup/useCurrentGroup';
import {
  type IssuerPageParamsModel,
  type IssuerPagePropsModel,
} from '#lib-frontend/issuer/pages/IssuerPage/IssuerPage.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { GROUP_TYPE } from '#lib-shared/group/resources/Group/Group.constants';

export const IssuerPage: LFCModel<IssuerPagePropsModel> = ({ children }) => {
  const currentGroup = useCurrentGroup();
  const { location, replace } = useRouter<IssuerPageParamsModel>();

  useEffect(() => {
    !currentGroup?.types?.includes(GROUP_TYPE.ISSUER) &&
      replace({ pathname: `${GROUP}/${location.params?.groupid}` });
  }, []);

  return <>{children}</>;
};
