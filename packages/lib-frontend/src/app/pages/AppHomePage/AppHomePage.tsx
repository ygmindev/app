import range from 'lodash/range';

import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { type AppHomePagePropsModel } from '#lib-frontend/app/pages/AppHomePage/AppHomePage.models';
import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { useGroupResource } from '#lib-frontend/funding/hooks/useGroupResource/useGroupResource';
import { GROUP } from '#lib-frontend/group/group.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';

export const AppHomePage: LFCModel<AppHomePagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([GROUP]);
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const { getManyProtected } = useGroupResource();
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
        query={async () => getManyProtected({ filter: [] })}>
        {({ data }) => (
          <LineGroup title={t('group:group_plural', { value: currentUser?.email })}>
            {data?.result?.map(({ _id, name, types }) => (
              <LineItem
                key={_id}
                label={name}
                onPress={() => null}>
                {types?.join(',')}
              </LineItem>
            ))}
          </LineGroup>
        )}
      </DataBoundary>
    </MainLayout>
  );
};
