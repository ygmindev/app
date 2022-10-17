import { Appear } from '@lib/frontend/core/components/Appear/Appear';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Slide } from '@lib/frontend/core/components/Slide/Slide';
import type { StepsPropsModel } from '@lib/frontend/core/components/Steps/Steps.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useDimension } from '@lib/frontend/platform/hooks/useDimension/useDimension';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';
import { Children, cloneElement, useMemo, useState } from 'react';

export const Steps = <TType,>({
  children,
  testID,
  ...props
}: StepsPropsModel<TType>): ReactElement<StepsPropsModel<TType>> => {
  const { styles } = useStyles({ props });
  const { width } = useDimension();
  const theme = useTheme();

  const [current, setCurrent] = useState<number>(0);
  const [stepsData, setStepsData] = useState<PartialModel<TType>>();

  const _isLastStep = useMemo(() => current === children.length - 1, [current, children.length]);

  const _handleClear = (): void => {
    setCurrent(0);
    setStepsData(undefined);
  };

  return (
    <>
      {width && width > 0 && (
        <Portal>
          <Wrapper
            animation={{ duration: theme.animation.transition, transition: ['width'] }}
            height={5}
            left={0}
            position={SHAPE_POSITION.ABSOLUTE}
            top={0}
            width={(width / children.length) * (current + 1)}
          />
        </Portal>
      )}

      <Wrapper
        grow
        spacing
        style={styles}
        testID={testID}>
        <Wrapper isRowAlign>
          <Appear isVisible={current > 0}>
            <Icon
              icon={ICON.arrowLeft}
              isDisabled={current < 0}
              onPress={() => setCurrent(current - 1)}
              size={THEME_SIZE.LARGE}
            />
          </Appear>
        </Wrapper>

        <Wrapper
          grow
          position={SHAPE_POSITION.RELATIVE}>
          <Slide current={current}>
            {Children.map(children, (child) =>
              cloneElement(child, {
                onBack: () => setCurrent(current - 1),
                onSubmit: _isLastStep
                  ? async () => {
                      setTimeout(_handleClear, theme.animation.transition);
                    }
                  : undefined,
                onSuccess: async (_result: unknown, data: PartialModel<TType>) => {
                  setStepsData({ ...stepsData, ...data });
                  !_isLastStep && setCurrent(current + 1);
                },
                stepsData,
              }),
            )}
          </Slide>
        </Wrapper>
      </Wrapper>
    </>
  );
};
