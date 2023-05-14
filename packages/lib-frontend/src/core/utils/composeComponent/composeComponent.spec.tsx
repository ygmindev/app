import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { StyleModel, StylePropsModel } from '@lib/frontend/style/style.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { createRef } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

const { displayName } = withTest({ composeComponent });

describe(displayName, () => {
  interface _ViewProps extends ChildrenPropsModel, StylePropsModel {
    height: number;
    width: number;
  }

  const _View = composeComponent<_ViewProps, ViewProps>({
    Component: View,
    getProps: ({ children, width }) => ({ children, width }),
    stylers: [({ height }) => ({ height })],
  });

  test('works', async () => {
    const WIDTH = 100;
    const HEIGHT = 50;
    const STYLE: StyleModel = { backgroundColor: 'red' };
    const REF = createRef();

    const { Component, testID } = withTestComponent({ target: _View });
    const { findByTestId } = render({
      element: (
        <Component
          height={HEIGHT}
          style={STYLE}
          width={WIDTH}
        />
      ),
    });

    expect(await findByTestId(testID)).toBeTruthy();
  });
});
