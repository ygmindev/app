import findIndex from 'lodash/findIndex';
import { type ReactElement, useEffect } from 'react';
import { cloneElement, useRef, useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Slides } from '#lib-frontend/animation/components/Slides/Slides';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Circle } from '#lib-frontend/core/components/Circle/Circle';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { useUnmount } from '#lib-frontend/core/hooks/useUnmount/useUnmount';
import { type StepFormPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_COLOR_MORE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { type PartialModel } from '#lib-shared/core/core.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const StepForm = <TKey extends string, TType, TResult = void>({
  id,
  initialValues,
  onSubmit,
  onSuccess,
  steps,
  topElement,
  ...props
}: LFCPropsModel<StepFormPropsModel<TKey, TType, TResult>>): ReactElement<
  LFCPropsModel<StepFormPropsModel<TKey, TType, TResult>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [isComplete, isCompleteSet] = useState<Record<string, boolean>>({});
  const { width } = useStore((state) => state.app.dimension);
  const { location, replace } = useRouter<Record<TKey, string>>();
  const theme = useTheme();

  const [current, currentSet] = useState<number>(0);
  const [isLoading, isLoadingSet] = useState<boolean>(false);
  const [data, dataSet] = useState<PartialModel<TType>>(initialValues ?? {});

  const isLastStep = current === steps.length - 1;
  const barRef = useRef<WrapperRefModel>(null);

  const handleClear = (): void => dataSet({});

  useEffect(() => {
    const stepId = location.params && location.params[id];
    let step = stepId ? findIndex(steps, (step) => step.id === stepId) : undefined;
    step = step && step >= 0 ? step : 0;
    handleCurrentSet(step);
  }, []);

  const handleCurrentSet = (value: number): void => {
    currentSet(value);
    void replace({ ...location, params: { ...location.params, [id]: steps[value].id } });
    width && barRef.current?.to({ width: (width / (steps.length + 1)) * (value + 1) });
  };

  const handleUnmount = (): void => {
    const { params } = location;
    params && delete params[id];
    void replace({ ...location, params });
  };

  useUnmount(handleUnmount);

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
            const isCurrent = i === current;
            const isStepComplete = isComplete[step.id];
            const color = isStepComplete ? THEME_COLOR.SUCCESS : theme.color.border;
            return (
              <Wrapper
                isRowAlign
                key={step.id}
                onPress={i <= current || isStepComplete ? () => handleCurrentSet(i) : undefined}>
                <Circle
                  backgroundColor={isCurrent ? color : THEME_COLOR_MORE.SURFACE}
                  border
                  borderColor={color}
                  size={THEME_SIZE.SMALL}>
                  {isStepComplete ? (
                    <Icon
                      color={isCurrent ? THEME_COLOR_MORE.SURFACE : color}
                      icon="check"
                    />
                  ) : (
                    <Text color={isCurrent ? THEME_COLOR_MORE.SURFACE : color}>{`${i + 1}`}</Text>
                  )}
                </Circle>

                <TranslatableText color={color}>{step.title}</TranslatableText>
              </Wrapper>
            );
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
          element: cloneElement(step.element, {
            data,
            elementState: isLoading ? ELEMENT_STATE.LOADING : undefined,
            key: step.id,
            onBack: () => {
              step.element.props.onBack && step.element.props.onBack();
              handleCurrentSet(current - 1);
            },
            onComplete: () => {
              isLoadingSet(false);
              step.element.props.onComplete && step.element.props.onComplete();
            },
            onSubmit: async (stepData: PartialModel<TType>) => {
              isLoadingSet(true);
              data && step.element.props.onSubmit && (await step.element.props.onSubmit(data));
              const isCompleteF = { ...isComplete, [step.id]: true };
              isCompleteSet(isCompleteF);
              if (isLastStep) {
                const incompleteStep = findIndex(steps, (stepF) => !isCompleteF[stepF.id]);
                if (incompleteStep >= 0) {
                  handleCurrentSet(incompleteStep);
                } else {
                  const dataF = { ...data, ...stepData } as TType;
                  onSubmit && (await onSubmit(dataF));
                  onSuccess && (await onSuccess(dataF));
                  await sleep(theme.animation.transition);
                  handleClear();
                }
              }
            },
            onSuccess: async (stepData: PartialModel<TType>) => {
              step.element.props.onSuccess && (await step.element.props.onSuccess(stepData));
              if (!isLastStep) {
                const dataF = { ...data, ...stepData };
                dataSet(dataF);
                handleCurrentSet(current + 1);
              }
              isCompleteSet({ ...isComplete, [step.id]: true });
            },
          }),
          id: step.id,
        }))}
      />
    </Wrapper>
  );
};
