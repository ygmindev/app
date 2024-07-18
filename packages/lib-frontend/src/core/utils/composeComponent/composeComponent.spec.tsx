// import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
// import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
// import { type StyleModel, type StylePropsModel } from '@lib/frontend/style/style.models';
// import { render } from '@lib/frontend/test/utils/render/render';
// import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
// import { withTest } from '@lib/shared/test/utils/withTest/withTest';
// import { type ViewProps } from 'react-native';
// import { View } from 'react-native';

// const { displayName } = withTest({ composeComponent });

// describe(displayName, () => {
//   type _ViewProps = {
//     height: number;
//     width: number;
//   } & ChildrenPropsModel &
//     StylePropsModel;

//   const ViewF = composeComponent<_ViewProps, ViewProps>({
//     Component: View,
//     getProps: ({ children, width }) => ({ children, width }),
//     stylers: [({ height }) => ({ height })],
//   });

//   test('works', async () => {
//     const WIDTH = 100;
//     const HEIGHT = 50;
//     const STYLE: StyleModel = { backgroundColor: 'red' };
//     const { Component, testID } = withTestComponent({ target: ViewF });
//     const { findByTestId } = await render({
//       element: (
//         <Component
//           height={HEIGHT}
//           style={STYLE}
//           width={WIDTH}
//         />
//       ),
//     });

//     expect(await findByTestId(testID)).toBeTruthy();
//   });
// });
