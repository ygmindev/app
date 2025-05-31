import {
  type UseKeyPressModel,
  type UseKeyPressParamsModel,
} from '@lib/frontend/core/hooks/useKeyPress/useKeyPress.models';
import { TEXT_INPUT_KEY } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { useEffect } from 'react';

export const useKeyPress = (params: UseKeyPressParamsModel): UseKeyPressModel => {
  useEffect(() => {
    const handler = (e: KeyboardEvent): void => {
      switch (e.key) {
        case 'ArrowDown':
          return params(TEXT_INPUT_KEY.LEFT);
        case 'ArrowLeft':
          return params(TEXT_INPUT_KEY.LEFT);
        case 'ArrowRight':
          return params(TEXT_INPUT_KEY.RIGHT);
        case 'ArrowUp':
          return params(TEXT_INPUT_KEY.UP);
        case 'Backspace':
          return params(TEXT_INPUT_KEY.REMOVE);
        case 'Escape':
          return params(TEXT_INPUT_KEY.ESCAPE);
        default:
          return;
      }
    };
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);
};
