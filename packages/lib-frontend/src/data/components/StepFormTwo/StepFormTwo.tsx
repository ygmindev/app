import { type ReactElement, useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Slides } from '#lib-frontend/animation/components/Slides/Slides';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '#lib-frontend/core/components/Wrapper/Wrapper.fixtures';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type StepFormTwoPropsModel } from '#lib-frontend/data/components/StepFormTwo/StepFormTwo.models';
import { useForm } from '#lib-frontend/data/hooks/useForm/useForm';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const StepFormTwo = <TType,>({
  initialValues,
  isBlocking,
  isProgressVisible,
  isValidateChanged,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  steps,
  topElement,
  validators,
  ...props
}: LFCPropsModel<StepFormTwoPropsModel<TType>>): ReactElement<
  LFCPropsModel<StepFormTwoPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [current, currentSet] = useState<number>(0);
  const { errors, handleChange, handleReset, handleSubmit, isLoading, values, valuesSet } =
    useForm<TType>({
      initialValues,
      isBlocking,
      isValidateChanged,
      onComplete,
      onError,
      onSubmit,
      onSuccess,
      validators,
    });

  return (
    <Wrapper
      {...wrapperProps}
      flex
      isFullWidth>
      {isProgressVisible && (
        <Wrapper
          isHorizontalCenter
          isHorizontalScrollable
          isRow
          mTop
          s>
          {steps.map((step, i) => {
            return <WrapperFixture />;
          })}
        </Wrapper>
      )}

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
          element: <WrapperFixture />,
        }))}
      />
    </Wrapper>
  );
};
