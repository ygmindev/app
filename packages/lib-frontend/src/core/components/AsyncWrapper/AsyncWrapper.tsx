import { Appear } from '@lib/frontend/core/components/Appear/Appear';
import type { AsyncWrapperPropsModel } from '@lib/frontend/core/components/AsyncWrapper/AsyncWrapper.models';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';

// TODO: ErrorBoundary
export const AsyncWrapper: SFCModel<AsyncWrapperPropsModel> = ({
  children,
  error,
  isLoading,
  isTransparent,
  ...props
}) => {
  const { computedStyles, inheritedStyles, propsWithOutStyle } = useStyles({ props });
  const { t } = useTranslation();
  const isVisible = !error && !isLoading;
  return (
    <Wrapper
      grow
      opacity={isLoading ? 0.5 : undefined}
      position={SHAPE_POSITION.RELATIVE}
      style={inheritedStyles}>
      <Appear
        {...propsWithOutStyle}
        grow
        isVisible={isVisible}
        style={computedStyles}>
        {children}
      </Appear>
      {error && (
        <Wrapper
          backgroundColor={isTransparent ? undefined : 'main'}
          isAbsoluteFill
          isCenter
          zIndex={1}>
          <IconText
            icon={ICON.bug}
            isTitle>
            {t('core:messages.unknownError')}
          </IconText>
        </Wrapper>
      )}
      {isLoading && (
        <Wrapper
          backgroundColor={isTransparent ? undefined : 'main'}
          isAbsoluteFill
          isCenter
          zIndex={1}>
          <Loading size="l" />
        </Wrapper>
      )}
    </Wrapper>
  );
};
