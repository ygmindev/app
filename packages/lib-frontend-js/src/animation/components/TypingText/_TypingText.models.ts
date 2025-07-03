import { type _TextPropsModel } from '@lib/frontend/core/components/Text/_Text.models';
import { type ChildPropsModel } from '@lib/frontend/core/core.models';

export type _TypingTextPropsModel = Omit<_TextPropsModel, 'children'> &
  ChildPropsModel<string> & {
    duration?: number;
    onFinish?(): void;
  };
