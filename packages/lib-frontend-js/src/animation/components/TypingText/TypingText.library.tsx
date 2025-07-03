import { TypingText } from '@lib/frontend/animation/components/TypingText/TypingText';
import { type TypingTextPropsModel } from '@lib/frontend/animation/components/TypingText/TypingText.models';
import { LIBRARY_CATEGORY_ANIMATION } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<TypingTextPropsModel> = {
  Component: TypingText,
  category: LIBRARY_CATEGORY_ANIMATION,
  defaultProps: {
    children: 'this is a long text to demonstrate typing text',
  },
  variants: [{ props: { isLoop: true } }, { props: { duration: 100, isLoop: true } }],
};
