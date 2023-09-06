import findIndex from 'lodash/findIndex';
import { type ReactElement, useEffect } from 'react';
import { cloneElement, useRef, useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Slides } from '#lib-frontend/animation/components/Slides/Slides';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type StepFormPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type PartialModel } from '#lib-shared/core/core.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const StepForm = <TKey extends string, TType, TResult = void>({
  id,
  onSubmit,
  onSuccess,
  steps,
  topElement,
  ...props
}: LFCPropsModel<StepFormPropsModel<TKey, TType, TResult>>): ReactElement<
  LFCPropsModel<StepFormPropsModel<TKey, TType, TResult>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { width } = useStore((state) => state.app.dimension);
  const { location, replace } = useRouter<Record<TKey, string>>();
  const theme = useTheme();

  const [current, currentSet] = useState<number>(0);
  const [isLoading, isLoadingSet] = useState<boolean>(false);
  const [data, dataSet] = useState<PartialModel<TType>>();

  const isLastStep = current === steps.length - 1;
  const barRef = useRef<WrapperRefModel>(null);

  const handleClear = (): void => dataSet(undefined);

  useEffect(() => {
    const stepId = location.params && location.params[id];
    let step = stepId ? findIndex(steps, (step) => step.id === stepId) : undefined;
    step = step && step >= 0 ? step : 0;
    currentSetF(step);
  }, []);

  const currentSetF = (value: number): void => {
    currentSet(value);
    void replace({ ...location, params: { ...location.params, [id]: steps[value].id } });
    width && barRef.current?.to({ width: (width / (steps.length + 1)) * (value + 1) });
  };

  return (
    <>
      {width && width > 0 && (
        <Portal>
          <Wrapper
            animation={{ duration: theme.animation.transition }}
            backgroundColor={THEME_COLOR.PRIMARY}
            height={5}
            left={0}
            position={SHAPE_POSITION.ABSOLUTE}
            ref={barRef}
            top={0}
            width={0}
            zIndex
          />
        </Portal>
      )}

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
              onPress={() => currentSetF(current - 1)}
            />
          </Appearable>
        </Wrapper>

        {topElement}

        <Slides
          current={current}
          slides={steps.map((step) => ({
            element: cloneElement(step.element, {
              data,
              key: step.id,
              onBack: () => {
                step.element.props.onBack && step.element.props.onBack();
                currentSetF(current - 1);
              },
              onComplete: () => {
                isLoadingSet(false);
                step.element.props.onComplete && step.element.props.onComplete();
              },
              onSubmit: async (stepData: PartialModel<TType>) => {
                isLoadingSet(true);
                data && step.element.props.onSubmit && (await step.element.props.onSubmit(data));
                if (isLastStep) {
                  const dataF = { ...data, ...stepData } as TType;
                  onSubmit && (await onSubmit(dataF));
                  onSuccess && (await onSuccess(dataF));
                  await sleep(theme.animation.transition);
                  handleClear();
                }
                isLoadingSet(false);
              },
              onSuccess: async (stepData: PartialModel<TType>) => {
                step.element.props.onSuccess && (await step.element.props.onSuccess(stepData));
                const dataF = { ...data, ...stepData };
                if (!isLastStep) {
                  dataSet(dataF);
                  currentSetF(current + 1);
                }
              },
            }),
            id: step.id,
          }))}
        />
      </Wrapper>
    </>
  );
};

// import findIndex from 'lodash/findIndex';
// import { type ReactElement, useEffect, useMemo } from 'react';
// import { cloneElement, useRef, useState } from 'react';

// import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
// import { Slides } from '#lib-frontend/animation/components/Slides/Slides';
// import { Button } from '#lib-frontend/core/components/Button/Button';
// import { Portal } from '#lib-frontend/core/components/Portal/Portal';
// import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
// import { type WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
// import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
// import { type LFCPropsModel } from '#lib-frontend/core/core.models';
// import { type StepFormPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
// import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
// import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
// import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
// import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
// import { THEME_COLOR } from '#lib-frontend/style/style.constants';
// import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
// import { type PartialModel } from '#lib-shared/core/core.models';
// import { sleep } from '#lib-shared/core/utils/sleep/sleep';

// export const StepForm = <TKey extends string, TType, TResult = void>({
//   id,
//   onSubmit,
//   onSuccess,
//   steps,
//   topElement,
//   ...props
// }: LFCPropsModel<StepFormPropsModel<TKey, TType, TResult>>): ReactElement<
//   LFCPropsModel<StepFormPropsModel<TKey, TType, TResult>>
// > => {
//   const { wrapperProps } = useLayoutStyles({ props });
//   const { width } = useStore((state) => state.app.dimension);
//   const { location, replace } = useRouter<Record<TKey, string>>();
//   const theme = useTheme();

//   const [current, currentSet] = useState<number>(0);
//   const [isLoading, isLoadingSet] = useState<boolean>(false);
//   const [data, dataSet] = useState<PartialModel<TType>>();

//   const isLastStep = current === steps.length - 1;
//   const barRef = useRef<WrapperRefModel>(null);

//   const handleClear = (): void => dataSet(undefined);

//   useEffect(() => {
//     const stepId = location.params && location.params[id];
//     let step = stepId ? findIndex(steps, (step) => step.id === stepId) : undefined;
//     step = step && step >= 0 ? step : 0;
//     currentSetF(step);
//   }, []);

//   const currentSetF = (value: number): void => {
//     currentSet(value);
//     void replace({ ...location, params: { ...location.params, [id]: steps[value].id } });
//     width && barRef.current?.to({ width: (width / (steps.length + 1)) * (value + 1) });
//   };

//   const bar = useMemo(
//     () =>
//       width &&
//       width > 0 && (
//         <Portal>
//           <Wrapper
//             animation={{ duration: theme.animation.transition }}
//             backgroundColor={THEME_COLOR.PRIMARY}
//             height={5}
//             left={0}
//             position={SHAPE_POSITION.ABSOLUTE}
//             ref={barRef}
//             top={0}
//             width={0}
//             zIndex
//           />
//         </Portal>
//       ),
//     [width],
//   );

//   return (
//     <>
//       {bar}

//       <Wrapper
//         {...wrapperProps}
//         flex
//         isFullWidth
//         s>
//         <Wrapper
//           isRowAlign
//           p>
//           <Appearable isActive={current > 0}>
//             <Button
//               elementState={current <= 0 || isLoading ? ELEMENT_STATE.DISABLED : undefined}
//               icon="arrowLeft"
//               onPress={() => currentSetF(current - 1)}
//             />
//           </Appearable>
//         </Wrapper>

//         {topElement}

//         <Slides
//           current={current}
//           slides={steps.map((step) => ({
//             element: cloneElement(step.element, {
//               data,
//               key: step.id,
//               onBack: () => {
//                 step.element.props.onBack && step.element.props.onBack();
//                 currentSetF(current - 1);
//               },
//               onComplete: () => {
//                 isLoadingSet(false);
//                 step.element.props.onComplete && step.element.props.onComplete();
//               },
//               onSubmit: async (stepData: PartialModel<TType>) => {
//                 isLoadingSet(true);
//                 data && step.element.props.onSubmit && (await step.element.props.onSubmit(data));
//                 if (isLastStep) {
//                   const dataF = { ...data, ...stepData } as TType;
//                   onSubmit && (await onSubmit(dataF));
//                   onSuccess && (await onSuccess(dataF));
//                   await sleep(theme.animation.transition);
//                   handleClear();
//                 }
//                 isLoadingSet(false);
//               },
//               onSuccess: async (stepData: PartialModel<TType>) => {
//                 step.element.props.onSuccess && (await step.element.props.onSuccess(stepData));
//                 const dataF = { ...data, ...stepData };
//                 if (!isLastStep) {
//                   dataSet(dataF);
//                   currentSetF(current + 1);
//                 }
//               },
//             }),
//             id: step.id,
//           }))}
//         />
//       </Wrapper>
//     </>
//   );
// };
