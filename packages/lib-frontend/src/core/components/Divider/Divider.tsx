import type { DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { THEME_BASIC_SIZE, THEME_COLOR } from '@lib/frontend/style/style.constants';
import { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const Divider = composeComponent<DividerPropsModel, WrapperPropsModel>({
  Component: Wrapper,

  getProps: ({ children }, theme) => ({
    border: BORDER_DIRECTION.TOP,
    borderColor: theme.colors.tone.neutral.muted,
    children: children && (
      <Wrapper
        backgroundColor={THEME_COLOR.NEUTRAL}
        m="auto"
        pHorizontal={THEME_BASIC_SIZE.SMALL}
        position={SHAPE_POSITION.ABSOLUTE}>
        <TranslatableText>{children}</TranslatableText>
      </Wrapper>
    ),
    isCenter: true,
    isFullWidth: true,
    position: SHAPE_POSITION.RELATIVE,
  }),
});

process.env.APP_DEBUG && (Divider.displayName = variableName(() => Divider));
