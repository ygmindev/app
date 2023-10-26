import { useEffect } from 'react';

import { type LFCModel } from '#lib-frontend/core/core.models';
import { GROUP } from '#lib-frontend/group/group.constants';
import { useCurrentGroup } from '#lib-frontend/group/hooks/useCurrentGroup/useCurrentGroup';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import {
  type UnderwriterPageParamssModel,
  type UnderwriterPagePropsModel,
} from '#lib-frontend/underwriter/pages/UnderwriterPage/UnderwriterPage.models';
import { GROUP_TYPE } from '#lib-shared/group/resources/Group/Group.constants';

export const UnderwriterPage: LFCModel<UnderwriterPagePropsModel> = ({ children }) => {
  const currentGroup = useCurrentGroup();
  const { location, replace } = useRouter<UnderwriterPageParamssModel>();

  useEffect(() => {
    !currentGroup?.types?.includes(GROUP_TYPE.UNDERWRITER) &&
      replace({ pathname: `${GROUP}/${location.params?.groupid}` });
  }, []);

  return <>{children}</>;
};
