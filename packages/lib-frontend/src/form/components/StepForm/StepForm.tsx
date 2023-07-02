import { type ReactElement } from 'react';
import { cloneElement, useRef, useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Slides } from '#lib-frontend/animation/components/Slides/Slides';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { type StepFormPropsModel } from '#lib-frontend/form/components/StepForm/StepForm.models';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type IntersectionModel, type PartialModel } from '#lib-shared/core/core.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const StepForm = <TType extends IntersectionModel<TSteps>, TSteps extends Array<unknown>>({
  beforeSubmit,
  children,
  onSubmit,
  onSuccess,
  steps,
  testID,
  ...props
}: SFCPropsModel<StepFormPropsModel<TType, TSteps>>): ReactElement<
  SFCPropsModel<StepFormPropsModel<TType, TSteps>>
> => {
  const { styles } = useStyles({ props });
  const { width } = useStore((state) => state.app.dimension);
  const theme = useTheme();

  const [current, currentSet] = useState<number>(0);
  const [isLoading, isLoadingSet] = useState<boolean>(false);
  const [data, dataSet] = useState<PartialModel<TType>>();

  const isLastStep = current === steps.length - 1;
  const barRef = useRef<WrapperRefModel>(null);

  const handleClear = (): void => {
    currentSetF(0);
    dataSet(undefined);
  };

  useAsync(async () => currentSetF(0));

  const currentSetF = (value: number): void => {
    currentSet(value);
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
        isFullWidth
        s
        style={styles}
        testID={testID}>
        <Wrapper isRowAlign>
          <Appearable isVisible={current > 0}>
            <Button
              elementState={current <= 0 || isLoading ? ELEMENT_STATE.DISABLED : undefined}
              icon="arrowLeft"
              onPress={() => currentSetF(current - 1)}
            />
          </Appearable>
        </Wrapper>

        <Wrapper isCenter>{children}</Wrapper>

        <Slides
          current={current}
          slides={steps.map(({ element, id }) => ({
            element: cloneElement(element, {
              data,
              key: id,
              onBack: () => {
                element.props.onBack && element.props.onBack();
                currentSetF(current - 1);
              },
              onComplete: () => {
                isLoadingSet(false);
                element.props.onComplete && element.props.onComplete();
              },
              onSubmit: async (stepData: TSteps[number]) => {
                isLoadingSet(true);
                element.props.onSubmit && (await element.props.onSubmit(data));
                if (isLastStep) {
                  let dataF = { ...data, ...(stepData as object) } as TType;
                  dataF = beforeSubmit ? await beforeSubmit(dataF) : dataF;
                  onSubmit && (await onSubmit(dataF));
                  onSuccess && (await onSuccess(dataF));
                  await sleep(theme.animation.transition);
                  handleClear();
                }
              },
              onSuccess: async (stepData: TSteps[number]) => {
                element.props.onSuccess && (await element.props.onSuccess(stepData));
                const dataF = { ...data, ...(stepData as object) };
                if (!isLastStep) {
                  dataSet(dataF);
                  currentSetF(current + 1);
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
