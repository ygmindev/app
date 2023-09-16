import { type ReactElement } from 'react';
import { cloneElement, useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Slides } from '#lib-frontend/animation/components/Slides/Slides';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type StepFormPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { useForm } from '#lib-frontend/data/hooks/useForm/useForm';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type PartialModel } from '#lib-shared/core/core.models';

export const StepForm = <TType, TResult = void>({
  initialValues,
  isProgressVisible = true,
  onSubmit,
  onSuccess,
  steps,
  topElement,
  ...props
}: LFCPropsModel<StepFormPropsModel<TType, TResult>>): ReactElement<
  LFCPropsModel<StepFormPropsModel<TType, TResult>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [current, currentSet] = useState<number>(0);
  const [isLoading, isLoadingSet] = useState<boolean>(false);
  const isLastStep = current === steps.length - 1;
  const { handleSubmit, values, valuesSet } = useForm<TType, TResult>({
    initialValues,
    onSubmit,
    onSuccess,
  });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      isFullWidth>
      <Wrapper
        isRowAlign
        p>
        <Appearable isActive={current > 0}>
          <Button
            elementState={current <= 0 || isLoading ? ELEMENT_STATE.DISABLED : undefined}
            icon="arrowLeft"
            onPress={() => currentSet(current - 1)}
          />
        </Appearable>
      </Wrapper>

      {topElement}

      <Slides
        current={current}
        slides={steps.map((step) => ({
          element: cloneElement(step.element, {
            data: values,
            elementState: isLoading ? ELEMENT_STATE.LOADING : undefined,
            initialValues,
            key: step.id,
            onBack: () => {
              step.element.props.onBack && step.element.props.onBack();
              currentSet(current - 1);
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
              !isLastStep && currentSet(current + 1);
            },
          }),
          id: step.id,
        }))}
      />
    </Wrapper>
  );
};
