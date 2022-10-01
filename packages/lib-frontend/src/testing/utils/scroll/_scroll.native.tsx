import type { PositionModel } from '@lib/frontend/core/utils/measure/measure.models';
import { fireEvent } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import type { ReactTestInstance } from 'react-test-renderer';

export const _scroll = (element: ReactElement, { x, y }: PositionModel): unknown =>
  fireEvent.scroll(element as unknown as ReactTestInstance, {
    nativeEvent: { contentOffset: { x, y } },
  });
