import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { PropsModel, SFCModel } from '@lib/frontend/core/core.models';
import type { StepFormPropsModel } from '@lib/frontend/form/components/StepForm/StepForm.models';
import { useDimension } from '@lib/frontend/platform/hooks/useDimension/useDimension';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import type { MergeArrayModel, PartialModel } from '@lib/shared/core/core.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type { ReactElement } from 'react';
import { cloneElement, useMemo, useState } from 'react';

export const StepForm = <TType extends MergeArrayModel<TSteps>, TSteps extends Array<unknown>>({
  onSubmit,
  onSuccess,
  steps,
  testID,
  ...props
}: PropsModel<SFCModel<StepFormPropsModel<TType, TSteps>>>): ReactElement<
  StepFormPropsModel<TType, TSteps>
> => {
  const { styles } = useStyles({ props });
  const { width } = useDimension();
  const theme = useTheme();

  const [current, currentSet] = useState<number>(0);
  const [data, setData] = useState<PartialModel<TType>>();

  const _isLastStep = useMemo(() => current === steps.length - 1, [current, steps.length]);

  const _handleClear = (): void => {
    currentSet(0);
    setData(undefined);
  };

  return (
    <>
      {steps.length > 1 && width && width > 0 && (
        <Portal>
          <Wrapper
            animation={{
              duration: theme.animation.transition,
              from: { width: 0 },
              isActive: true,
              to: { width: (width / (steps.length + 1)) * (current + 1) },
            }}
            backgroundColor={THEME_COLOR.PRIMARY}
            height={5}
            left={0}
            position={SHAPE_POSITION.ABSOLUTE}
            top={0}
          />
        </Portal>
      )}

      <Wrapper
        grow
        spacing
        style={styles}
        testID={testID}>
        <Wrapper isRowAlign>
          <Appearable
            isActive={current > 0}
            isLazy={false}>
            <Button
              icon="arrowLeft"
              isDisabled={current <= 0}
              onPress={() => currentSet(current - 1)}
              type={BUTTON_TYPE.ICON}
            />
          </Appearable>
        </Wrapper>

        <Slides
          current={current}
          slides={steps.map(({ element, id }) => ({
            element: cloneElement(element, {
              data,
              key: id,
              onBack: () => {
                element.props.onBack && element.props.onBack();
                currentSet(current - 1);
              },
              onSuccess: async (stepData: TSteps[number]) => {
                element.props.onSuccess && (await element.props.onSuccess(stepData));
                const _data = { ...data, ...(stepData as object) };
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
            id,
          }))}
        />
      </Wrapper>
    </>
  );
};
