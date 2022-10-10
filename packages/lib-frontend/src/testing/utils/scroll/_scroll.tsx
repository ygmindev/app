import type { PositionModel } from '@lib/frontend/core/utils/measure/measure.models';
import { fireEvent } from '@testing-library/react';
import type { ReactElement } from 'react';

export const _scroll = (element: ReactElement, { x, y }: PositionModel): void => {
  fireEvent.scroll(element as unknown as Element, {
    target: { scrollLeft: x, scrollTop: y },
  });
};
