import { AppToolbar } from '@lib/frontend/app/containers/AppToolbar/AppToolbar';
import { type AppLayoutPropsModel } from '@lib/frontend/app/layouts/AppLayout/AppLayout.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { MotiView } from 'moti';
import { useState } from 'react';

export const AppLayout: LFCModel<AppLayoutPropsModel> = ({ children, routes, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [isActive, isActiveSet] = useState<boolean>(false);
  console.warn(isActive);
  return (
    <Wrapper
      {...wrapperProps}
      flex
      isRow
      position={SHAPE_POSITION.RELATIVE}>
      <AppToolbar routes={routes} />

      <Wrapper
        flex
        isVerticalScrollable
        p>
        <Button onPress={() => isActiveSet(!isActive)}>click</Button>
        <MotiView
          animate={isActive ? { opacity: 1, transform: [{ scale: 1 }] } : undefined}
          from={{ opacity: 0.5, transform: [{ scale: 0.5 }] }}
          transition={{ type: 'timing' }}>
          <Wrapper
            backgroundColor="red"
            border
            height={100}
            round
            width={100}
          />
        </MotiView>

        {children}
      </Wrapper>
    </Wrapper>
  );
};

// import { AppToolbar } from '@lib/frontend/app/containers/AppToolbar/AppToolbar';
// import { type AppLayoutPropsModel } from '@lib/frontend/app/layouts/AppLayout/AppLayout.models';
// import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
// import { type LFCModel } from '@lib/frontend/core/core.models';
// import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
// import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
// import { MotiView } from 'moti';

// export const AppLayout: LFCModel<AppLayoutPropsModel> = ({ children, routes, ...props }) => {
//   const { wrapperProps } = useLayoutStyles({ props });
//   return (
//     <Wrapper
//       {...wrapperProps}
//       flex
//       isRow
//       position={SHAPE_POSITION.RELATIVE}>
//       <AppToolbar routes={routes} />

//       <Wrapper
//         flex
//         isVerticalScrollable
//         p>
//         <MotiView
//           animate={{ scale: 1 }}
//           from={{ scale: 0.5 }}
//           style={{ transform: [{ scale: 1 }] }}>
//           <Wrapper
//             backgroundColor="red"
//             border
//             height={150}
//             round
//             width={150}
//           />
//         </MotiView>

//         {children}
//       </Wrapper>
//     </Wrapper>
//   );
// };
