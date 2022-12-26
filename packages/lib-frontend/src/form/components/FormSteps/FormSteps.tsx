import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { FormStepsPropsModel } from '@lib/frontend/form/components/FormSteps/FormSteps.models';
import { useDimension } from '@lib/frontend/platform/hooks/useDimension/useDimension';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import type { MergeArrayModel, PartialModel } from '@lib/shared/core/core.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type { ReactElement } from 'react';
import { Children, cloneElement, useMemo, useState } from 'react';

export const FormSteps = <TType extends MergeArrayModel<TSteps>, TSteps extends Array<unknown>>({
  children,
  onSubmit,
  onSuccess,
  testID,
  ...props
}: FormStepsPropsModel<TType, TSteps>): ReactElement<FormStepsPropsModel<TType, TSteps>> => {
  const { styles } = useStyles({ props });
  const { width } = useDimension();
  const theme = useTheme();

  const [current, currentSet] = useState<number>(0);
  const [data, setData] = useState<PartialModel<TType>>();

  const _isLastStep = useMemo(() => current === children.length - 1, [current, children.length]);

  const _handleClear = (): void => {
    currentSet(0);
    setData(undefined);
  };

  return (
    <>
      {children.length > 1 && width && width > 0 && (
        <Portal>
          <Wrapper
            // animation={{ duration: theme.animation.transition, transition: ['width'] }}
            animation={{ duration: theme.animation.transition }}
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
              isTitle
              onPress={() => currentSet(current - 1)}
            />
          </Appear>
        </Wrapper>

        <Slides current={current}>
          {Children.map(children, (child) =>
            cloneElement(child, {
              data,
              onBack: () => {
                child.props.onBack && child.props.onBack();
                currentSet(current - 1);
              },
              onSuccess: async (stepData: PartialModel<TType>) => {
                child.props.onSuccess && (await child.props.onSuccess(stepData));
                const _data = { ...data, ...stepData };
                if (_isLastStep) {
                  const _result = onSubmit && (await onSubmit(_data as TType));
                  onSuccess && (await onSuccess(_data as TType, _result));
                  await sleep({ duration: theme.animation.transition });
                  _handleClear();
                } else {
                  setData(_data);
                  currentSet(current + 1);
                }
              },
            }),
          )}
        </Slides>
      </Wrapper>
    </>
  );
};
