import range from 'lodash/range';

import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { type AppHomePagePropsModel } from '#lib-frontend/app/pages/AppHomePage/AppHomePage.models';
import { useAccessResource } from '#lib-frontend/auth/hooks/useAccessResource/useAccessResource';
import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { GROUP } from '#lib-frontend/group/group.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';

export const AppHomePage: LFCModel<AppHomePagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([GROUP]);
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const { getManyUser } = useAccessResource();
  return (
    <MainLayout
      {...wrapperProps}
      p
      s>
      <DataBoundary
        fallback={
          <SkeletonGroup>
            <LineGroup title={t('group:group_plural')}>
              {range(5).map((i) => (
                <LineItem
                  elementState={ELEMENT_STATE.LOADING}
                  key={i}
                />
              ))}
            </LineGroup>
          </SkeletonGroup>
        }
        id="accesses"
        query={async () => getManyUser({ filter: [] })}>
        {/* {({ data }) => (
          <LineGroup title={t('group:group_plural', { value: currentUser?.email })}>
            {data?.result?.map((value) => <LineItem key={value._id} />)}
          </LineGroup>
        )} */}
        {({ data }) => {
          console.warn(data);
          return (
            <LineGroup title={t('group:group_plural', { value: currentUser?.email })}>
              {data?.result?.map(({ _id }) => (
                <LineItem
                  key={_id}
                  label={_id}
                />
              ))}
            </LineGroup>
          );
        }}
      </DataBoundary>
    </MainLayout>
  );
};
