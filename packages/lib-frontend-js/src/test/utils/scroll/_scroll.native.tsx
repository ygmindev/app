import {
  type _ScrollModel,
  type _ScrollParamsModel,
} from '@lib/frontend/test/utils/scroll/_scroll.models';
import { fireEvent } from '@testing-library/react-native';
import { type ReactTestInstance } from 'react-test-renderer';

export const _scroll = ({ element, position }: _ScrollParamsModel): _ScrollModel => {
  fireEvent.scroll(element as unknown as ReactTestInstance, {
    nativeEvent: { contentOffset: position },
  });
};
