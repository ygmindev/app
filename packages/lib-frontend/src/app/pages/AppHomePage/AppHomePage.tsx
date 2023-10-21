import range from 'lodash/range';

import { type AppHomePagePropsModel } from '#lib-frontend/app/pages/AppHomePage/AppHomePage.models';
import { Chip } from '#lib-frontend/core/components/Chip/Chip';
import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { useGroupResource } from '#lib-frontend/funding/hooks/useGroupResource/useGroupResource';
import { GROUP } from '#lib-frontend/group/group.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { RouteLineItem } from '#lib-frontend/route/components/RouteLineItem/RouteLineItem';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
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
      <Text type={FONT_TYPE.HEADLINE}>{t('core:welcomeBack')}</Text>

      <LineGroup title={t('group:group_plural', { value: currentUser?.email })}>
        <DataBoundary
          fallbackData={{
            result: range(3).map((i) => ({ _id: `${i}` })),
          }}
          id="accesses"
          query={async () => getManyProtected({ filter: [] })}>
          {({ data }) => (
            <>
              {data?.result?.map(({ _id, name, types }) => (
                <RouteLineItem
                  key={_id}
                  label={name}
                  onPress={() => null}
                  root={GROUP}
                  route={{ pathname: _id ?? '' }}>
                  <Wrapper isRowAlign>
                    {types?.map((type) => <Chip key={type}>{type}</Chip>)}
                  </Wrapper>
                </RouteLineItem>
              ))}
            </>
          )}
        </DataBoundary>
      </LineGroup>
    </MainLayout>
  );
};
