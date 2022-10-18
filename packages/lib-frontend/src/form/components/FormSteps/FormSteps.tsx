import { Appear } from '@lib/frontend/core/components/Appear/Appear';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Slides } from '@lib/frontend/core/components/Slides/Slides';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { FormStepsPropsModel } from '@lib/frontend/form/components/FormSteps/FormSteps.models';
import { useDimension } from '@lib/frontend/platform/hooks/useDimension/useDimension';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
import type { PartialModel } from '@lib/shared/core/core.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type { ReactElement } from 'react';
import { Children, cloneElement, useMemo, useState } from 'react';

export const FormSteps = <TType,>({
  children,
  testID,
  ...props
}: FormStepsPropsModel<TType>): ReactElement<FormStepsPropsModel<TType>> => {
  const { styles } = useStyles({ props });
  const { width } = useDimension();
  const theme = useTheme();

  const [current, setCurrent] = useState<number>(0);
  const [data, setData] = useState<PartialModel<TType>>();

  const _isLastStep = useMemo(() => current === children.length - 1, [current, children.length]);

  const _handleClear = (): void => {
    setCurrent(0);
    setData(undefined);
  };

  return (
    <>
      {children.length > 1 && width && width > 0 && (
        <Portal>
          <Wrapper
            animation={{ duration: theme.animation.transition, transition: ['width'] }}
            backgroundColor={THEME_COLOR.PRIMARY}
            height={5}
            left={0}
            position={SHAPE_POSITION.ABSOLUTE}
            top={0}
            width={(width / (children.length + 1)) * (current + 1)}
          />
        </Portal>
      )}

      <Wrapper
        grow
        spacing
        style={styles}
        testID={testID}>
        <Wrapper isRowAlign>
          <Appear
            isLazy={false}
            isVisible={current > 0}>
            <Icon
              icon={ICON.arrowLeft}
              isDisabled={current <= 0}
              onPress={() => setCurrent(current - 1)}
              size={THEME_SIZE.LARGE}
            />
          </Appear>
        </Wrapper>

        <Slides current={current}>
          {Children.map(children, (child) =>
            cloneElement(child, {
              data,
              onBack: () => setCurrent(current - 1),
              onSubmit: _isLastStep
                ? async (stepData: PartialModel<TType>) => {
                    child.props.onSubmit && (await child.props.onSubmit(stepData));
                    await sleep({ duration: theme.animation.transition });
                    _handleClear();
                  }
                : undefined,
              onSuccess: async (result: void, stepData: PartialModel<TType>) => {
                child.props.onSuccess && (await child.props.onSuccess(result, stepData));
                setData({ ...data, ...stepData });
                !_isLastStep && setCurrent(current + 1);
              },
            }),
          )}
        </Slides>
      </Wrapper>
    </>
  );
};
