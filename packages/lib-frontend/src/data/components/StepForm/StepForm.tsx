import { type ReactElement, useEffect, useRef } from 'react';
import { cloneElement, useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Slides } from '#lib-frontend/animation/components/Slides/Slides';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type StepFormPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { useForm } from '#lib-frontend/data/hooks/useForm/useForm';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type PartialModel } from '#lib-shared/core/core.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const StepForm = <TType, TResult = void>({
  initialValues,
  onSubmit,
  onSuccess,
  steps,
  topElement,
  ...props
}: LFCPropsModel<StepFormPropsModel<TType, TResult>>): ReactElement<
  LFCPropsModel<StepFormPropsModel<TType, TResult>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { width } = useStore((state) => state.app.dimension);
  const theme = useTheme();
  const [current, currentSet] = useState<number>(0);
  const [isLoading, isLoadingSet] = useState<boolean>(false);
  const isLastStep = current === steps.length - 1;

  const {
    handleSubmit,
    isLoading: isLoadingF,
    values,
    valuesSet,
  } = useForm<TType, TResult>({ initialValues, onSubmit, onSuccess });

  const handleCurrentSet = async (value: number): Promise<void> => {
    currentSet(value);
    await sleep(theme.animation.transition);
    width && barRef.current?.to({ width: (width / (steps.length + 1)) * (value + 1) });
  };

  const barRef = useRef<WrapperRefModel>(null);
  useEffect(() => {
    void handleCurrentSet(0);
  }, [width]);

  const isLoadingFF = isLoadingF || isLoading;

  return (
    <>
      <Portal>
        <Wrapper
          animation={{ states: { [ELEMENT_STATE.INACTIVE]: { width: 0 } } }}
          backgroundColor={THEME_COLOR.PRIMARY}
          height={3}
          left={0}
          position={SHAPE_POSITION.ABSOLUTE}
          ref={barRef}
          top={0}
          width={0}
        />
      </Portal>

      <Wrapper
        {...wrapperProps}
        flex
        isFullWidth
        s>
        <Wrapper
          isRowAlign
          p>
          <Appearable isActive={current > 0}>
            <Button
              elementState={current <= 0 || isLoading ? ELEMENT_STATE.DISABLED : undefined}
              icon="arrowLeft"
              onPress={() => handleCurrentSet(current - 1)}
            />
          </Appearable>
        </Wrapper>

        {topElement}

        <Slides
          current={current}
          slides={steps.map((step) => ({
            element: cloneElement(step.element, {
              data: values,
              elementState: isLoadingFF ? ELEMENT_STATE.LOADING : undefined,
              initialValues,
              key: step.id,
              onBack: () => {
                step.element.props.onBack && step.element.props.onBack();
                void handleCurrentSet(current - 1);
              },
              onComplete: () => {
                isLoadingSet(false);
                step.element.props.onComplete && step.element.props.onComplete();
              },
              onSubmit: async (stepValues: PartialModel<TType>) => {
                isLoadingSet(true);
                step.element.props.onSubmit && (await step.element.props.onSubmit(stepValues));
                const valuesF = { ...values, ...stepValues };
                await valuesSet(valuesF);
                isLastStep && handleSubmit && handleSubmit();
              },
              onSuccess: async (stepValues: PartialModel<TType>) => {
                step.element.props.onSuccess && (await step.element.props.onSuccess(stepValues));
                !isLastStep && void handleCurrentSet(current + 1);
              },
            }),
            id: step.id,
          }))}
        />
      </Wrapper>
    </>
  );
};
