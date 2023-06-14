import { fireEvent } from '@testing-library/react';

import type {
  _ScrollModel,
  _ScrollParamsModel,
} from '#lib-frontend/test/utils/scroll/_scroll.models';

export const _scroll = ({ element, position }: _ScrollParamsModel): _ScrollModel => {
  fireEvent.scroll(element as unknown as Element, {
    target: { scrollLeft: position.x, scrollTop: position.y },
  });
};
