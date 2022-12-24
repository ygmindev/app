import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { StyleModel } from '@lib/frontend/style/style.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { createRef } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

const { displayName } = withTest({ target: () => composeComponent });

describe(displayName, () => {
  interface _ViewProps extends WithChildrenPropsModel, WithTestIdModel, WithStyleModel {
    height: number;
    width: number;
  }

  const _View = composeComponent<_ViewProps, ViewProps>({
    Component: View,
    getProps: ({ children, testID, width }) => ({ children, testID, width }),
    stylers: [({ height }) => ({ height })],
  });

  test('works', async () => {
    const WIDTH = 100;
    const HEIGHT = 50;
    const STYLE: StyleModel = { backgroundColor: 'red' };
    const REF = createRef();

    const { Component, testID } = withTestComponent({ target: _View });
    const { queryByTestId } = render(
      <Component
        height={HEIGHT}
        style={STYLE}
        width={WIDTH}
      />,
    );

    expect(queryByTestId(testID)).toBeTruthy();
  });
});
