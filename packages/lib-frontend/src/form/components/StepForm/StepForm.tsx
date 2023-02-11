import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import type { StepFormPropsModel } from '@lib/frontend/form/components/StepForm/StepForm.models';
import { useDimension } from '@lib/frontend/platform/hooks/useDimension/useDimension';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import type { MergeArrayModel, PartialModel } from '@lib/shared/core/core.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type { ReactElement } from 'react';
import { cloneElement, useMemo, useRef, useState } from 'react';

export const StepForm = <TType extends MergeArrayModel<TSteps>, TSteps extends Array<unknown>>({
  onSubmit,
  onSuccess,
  steps,
  testID,
  ...props
}: SFCPropsModel<StepFormPropsModel<TType, TSteps>>): ReactElement<
  SFCPropsModel<StepFormPropsModel<TType, TSteps>>
> => {
  const { styles } = useStyles({ props });
  const { width } = useDimension();
  const theme = useTheme();

  const [current, setCurrent] = useState<number>(0);
  const [data, setData] = useState<PartialModel<TType>>();

  const _isLastStep = useMemo(() => current === steps.length - 1, [current, steps.length]);

  const barRef = useRef<AnimatableRefModel>(null);

  const _handleClear = (): void => {
    _setCurrent(0);
    setData(undefined);
  };

  useMount({ onMount: () => _setCurrent(0) });

  const _setCurrent = (value: number): void => {
    setCurrent(value);
    width && barRef.current?.to({ width: (width / (steps.length + 1)) * (value + 1) });
  };

  return (
    <>
      {steps.length > 1 && width && width > 0 && (
        <Portal>
          <Wrapper
            animation={{
              duration: theme.animation.transition,
              states: { [ELEMENT_STATE.INACTIVE]: { width: 0 } },
            }}
            backgroundColor={THEME_COLOR.PRIMARY}
            height={5}
            left={0}
            position={SHAPE_POSITION.ABSOLUTE}
            ref={barRef}
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
            animation={{ isLazy: false }}
            isVisible={current > 0}>
            <Button
              elementState={current <= 0 ? ELEMENT_STATE.DISABLED : undefined}
              icon="arrowLeft"
              onPress={() => _setCurrent(current - 1)}
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
                _setCurrent(current - 1);
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
                  _setCurrent(current + 1);
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
