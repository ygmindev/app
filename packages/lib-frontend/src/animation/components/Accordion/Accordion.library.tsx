import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { type AccordionPropsModel } from '@lib/frontend/animation/components/Accordion/Accordion.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<AccordionPropsModel> = {
  Component: Accordion,
  defaultProps: {
    children: <WrapperFixture />,
    description: 'label',
  },
  variants: [{ props: { defaultValue: ELEMENT_STATE.ACTIVE } }],
};
