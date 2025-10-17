import { type AppHomePagePropsModel } from '@lib/frontend/app/pages/AppHomePage/AppHomePage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { GROUP } from '@lib/frontend/group/group.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const AppHomePage: LFCModel<AppHomePagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([GROUP]);
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout
      {...wrapperProps}
      s>
      <Text fontStyle={FONT_STYLE.HEADLINE}>{t('core:welcomeBack')}</Text>

      {/* <DataBoundary
        fallbackData={{
          result: range(3).map((i) => ({ _id: `${i}`, name: TEST_TEXT_LONG })),
        }}
        id="accesses"
        query={async () => getMany({ filter: [] })}>
        {({ data }) => (
          <ItemList
            items={data?.result?.map(({ _id, name, types }) => ({
              id: _id ?? '',
            }))}
            title={t('group:group_other', { value: currentUser?.email })}>
            {data?.result?.map(({ _id, name, types }) => (
              <RouteItem
                key={_id}
                root={GROUP}
                route={{ pathname: _id ?? '' }}
                title={name}>
                <Wrapper isRow isAlign>{types?.map((type) => <Chip key={type}>{type}</Chip>)}</Wrapper>
              </RouteItem>
            ))}
          </ItemList>
        )}
      </DataBoundary> */}
    </MainLayout>
  );
};
