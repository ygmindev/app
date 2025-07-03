import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import { NavigationHeader } from '@lib/frontend/app/components/NavigationHeader/NavigationHeader';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { SCROLL_TYPE } from '@lib/frontend/core/components/View/View.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { AsyncBoundary } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import {
  type FormStepPropsModel,
  type StepFormPropsModel,
} from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type FormErrorModel, type FormValidatorsModel } from '@lib/frontend/data/data.models';
import { useForm } from '@lib/frontend/data/hooks/useForm/useForm';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type PartialModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { type ReactElement, useEffect, useRef } from 'react';
import { cloneElement, useState } from 'react';

export const StepForm = <TType, TResult = void>({
  errorContextGet,
  ...props
}: LFCPropsModel<StepFormPropsModel<TType, TResult>>): ReactElement<
  LFCPropsModel<StepFormPropsModel<TType, TResult>>
> => (
  <AsyncBoundary
    errorContextGet={errorContextGet}
    flex>
    <StepFormF {...props} />
  </AsyncBoundary>
);

export const StepFormF = <TType, TResult = void>({
  elementState,
  initialValues,
  isProgress,
  onElementStateChange,
  onError,
  onSubmit,
  onSuccess,
  redirect,
  steps,
  topElement,
  validators,
  ...props
}: LFCPropsModel<StepFormPropsModel<TType, TResult>>): ReactElement<
  LFCPropsModel<StepFormPropsModel<TType, TResult>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [width] = useStore('app.dimension.width');
  const theme = useTheme();
  const [current, currentSet] = useState<number>(0);
  const [isLoading, isLoadingSet] = useState<boolean>(false);
  const isLastStep = current === steps.length - 1;
  const [isValid, isValidSet] = useState<Record<string, boolean>>({});

  const {
    handleSubmit,
    isLoading: isLoadingF,
    values,
    valuesSet,
  } = useForm<TType, TResult>({ initialValues, onError, onSubmit, onSuccess, redirect });

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
        <NavigationHeader
          elementState={ELEMENT_STATE.ACTIVE}
          onBack={current > 0 ? async () => handleCurrentSet(current - 1) : undefined}
          title={
            isProgress ? (
              <Wrapper
                flex
                isAlign
                isCenter
                isHorizontalScrollable
                isRow
                scrollType={SCROLL_TYPE.BUTTON}>
                {steps.map((step, i) => {
                  const isActive = i === current;
                  const isValidPrevious = isValid[steps[i - 1]?.id];
                  const isValidCurrent = isValid[step.id];
                  return (
                    <Button
                      elementState={
                        elementState ??
                        (isActive || isValidCurrent || isValidPrevious
                          ? undefined
                          : ELEMENT_STATE.DISABLED)
                      }
                      icon={isValidCurrent ? 'check' : 'dotsCircle'}
                      key={step.id}
                      onPress={() => {
                        void handleCurrentSet(i);
                      }}
                      type={isActive ? BUTTON_TYPE.FILLED : BUTTON_TYPE.TRANSPARENT}>
                      {step.title}
                    </Button>
                  );
                })}
              </Wrapper>
            ) : undefined
          }
        />

        {topElement}

        <Slides
          current={current}
          slides={filterNil(
            steps.map(({ element, fields, id, message, title }) => {
              const elementF:
                | ReactElement<FormStepPropsModel<TType, PartialModel<TType>, TResult>>
                | undefined = fields ? (
                <FormContainer
                  elementState={elementState}
                  fields={fields}
                  flex
                  isCenter
                  onElementStateChange={onElementStateChange}
                />
              ) : (
                element
              );
              return (
                elementF && {
                  element: (
                    <Wrapper flex>
                      {message && <AsyncText fontStyle={FONT_STYLE.HEADLINE}>{message}</AsyncText>}

                      {cloneElement(elementF, {
                        data: values as PartialModel<TType>,
                        elementState:
                          elementState ?? (isLoadingFF ? ELEMENT_STATE.LOADING : undefined),
                        initialValues: { ...initialValues, ...values } as PartialModel<TType>,
                        key: id,
                        onBack: () => {
                          elementF.props.onBack && elementF.props.onBack();
                          void handleCurrentSet(current - 1);
                        },
                        onComplete: () => {
                          isLoadingSet(false);
                          elementF.props.onComplete && elementF.props.onComplete();
                        },
                        onError: (error: Error) => {
                          elementF.props.onError && elementF.props.onError(error);
                        },
                        onSubmit: async (stepValues: PartialModel<TType>) => {
                          isLoadingSet(true);
                          elementF.props.onSubmit && (await elementF.props.onSubmit(stepValues));
                          const valuesF = { ...values, ...stepValues };
                          await valuesSet(valuesF);
                          isLastStep && handleSubmit && handleSubmit();
                          return null;
                        },
                        onSuccess: async (stepValues: PartialModel<TType>) => {
                          elementF.props.onSuccess && (await elementF.props.onSuccess(stepValues));
                          !isLastStep && void handleCurrentSet(current + 1);
                          isValidSet({ ...isValid, [id]: true });
                        },
                        onValidate: (e?: FormErrorModel<PartialModel<TType>>) =>
                          !isEmpty(e) && isValidSet({ ...isValid, [id]: false }),
                        validators: {
                          ...elementF.props.validators,
                          ...validators,
                        } as FormValidatorsModel<PartialModel<TType>>,
                      })}
                    </Wrapper>
                  ),
                  id,
                  title,
                }
              );
            }),
          )}
        />
      </Wrapper>
    </>
  );
};
