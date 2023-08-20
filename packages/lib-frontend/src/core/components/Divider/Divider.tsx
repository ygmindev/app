import { type DividerPropsModel } from '#lib-frontend/core/components/Divider/Divider.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type WrapperPropsModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { THEME_COLOR_MORE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

export const Divider = composeComponent<DividerPropsModel, WrapperPropsModel>({
  Component: Wrapper,

  getProps: ({ children }, theme) => ({
    border: DIRECTION.TOP,
    borderColor: theme.color.border,
    children: children && (
      <Wrapper
        backgroundColor={THEME_COLOR_MORE.SURFACE}
        m="auto"
        pHorizontal={THEME_SIZE.SMALL}
        position={SHAPE_POSITION.ABSOLUTE}>
        <TranslatableText>{children}</TranslatableText>
      </Wrapper>
    ),
    isCenter: true,
    isFullWidth: true,
    position: SHAPE_POSITION.RELATIVE,
  }),
});

process.env.APP_IS_DEBUG && (Divider.displayName = variableName({ Divider }));
