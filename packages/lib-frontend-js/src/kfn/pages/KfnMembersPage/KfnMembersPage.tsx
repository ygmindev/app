import { useAccessResource } from '@lib/frontend/auth/hooks/useAccessResource/useAccessResource';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { type KfnMembersPagePropsModel } from '@lib/frontend/kfn/pages/KfnMembersPage/KfnMembersPage.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import {
  FONT_ALIGN,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { sort } from '@lib/shared/core/utils/sort/sort';

export const KfnMembersPage: LFCModel<KfnMembersPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = useAccessResource();
  const { t } = useTranslation();
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p={THEME_SIZE.LARGE}
      s={THEME_SIZE.LARGE}>
      <Text
        align={FONT_ALIGN.CENTER}
        color={THEME_COLOR.SECONDARY}
        fontStyle={FONT_STYLE.HEADLINE}>
        {t('kfn:boardMembers')}
      </Text>

      <DataBoundary
        align={FLEX_ALIGN.CENTER}
        flex
        id="members"
        isVerticalScrollable
        query={async () =>
          getMany({
            filter: [{ field: ROLE_RESOURCE_NAME, value: ACCESS_ROLE.BOARD }],
            options: { populate: [USER_RESOURCE_NAME] },
          })
        }>
        {({ data }) =>
          data?.result ? (
            <Wrapper s={THEME_SIZE.LARGE}>
              {sort(data.result.items, [(v) => v.User?.last ?? '']).map((v) => {
                const meta = v.meta as
                  | { division: string; organization: string; title: string }
                  | undefined;
                return (
                  <Wrapper
                    key={v._id}
                    s>
                    <Text
                      align={FONT_ALIGN.CENTER}
                      fontStyle={FONT_STYLE.HEADLINE}>{`${v.User?.first} ${v.User?.last}`}</Text>
                    <Wrapper
                      isCenter
                      s={THEME_SIZE.SMALL}>
                      <Text isBold>{meta?.organization}</Text>

                      <Wrapper
                        isAlign
                        isRow>
                        <Text>{`${meta?.title},`}</Text>
                        <Text>{meta?.division}</Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                );
              })}
            </Wrapper>
          ) : (
            <></>
          )
        }
      </DataBoundary>
    </Wrapper>
  );
};
