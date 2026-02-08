import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { FileInput } from '@lib/frontend/data/components/FileInput/FileInput';
import { useEventResource } from '@lib/frontend/kfn/hooks/useEventResource/useEventResource';
import { type KfnEventsPagePropsModel } from '@lib/frontend/kfn/pages/KfnEventsPage/KfnEventsPage.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import {
  FONT_ALIGN,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { sort } from '@lib/shared/core/utils/sort/sort';

export const KfnEventsPage: LFCModel<KfnEventsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = useEventResource();
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
        {t('kfn:events')}
      </Text>

      <FileInput />

      <DataBoundary
        flex
        id="events"
        isVerticalScrollable
        query={getMany}>
        {({ data }) =>
          data?.result ? (
            <Wrapper s={THEME_SIZE.LARGE}>
              {sort(data.result.items, [['created', false]]).map((v) => {
                return (
                  <Wrapper
                    key={v._id}
                    s>
                    <Text
                      align={FONT_ALIGN.CENTER}
                      fontStyle={FONT_STYLE.HEADLINE}>
                      {v.name}
                    </Text>
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
