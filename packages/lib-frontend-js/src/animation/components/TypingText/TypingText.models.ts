import { type _TypingTextPropsModel } from '@lib/frontend/animation/components/TypingText/_TypingText.models';
import { type AsyncTextPropsModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';

export type TypingTextPropsModel = Omit<_TypingTextPropsModel, 'children'> &
  Pick<AsyncTextPropsModel, 'children'> & {
    delay?: number;
    isLoop?: boolean;
  };
