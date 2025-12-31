import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { AccordionGroup } from '@lib/frontend/animation/components/AccordionGroup/AccordionGroup';
import { type AccordionGroupPropsModel } from '@lib/frontend/animation/components/AccordionGroup/AccordionGroup.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<AccordionGroupPropsModel> = {
  Component: AccordionGroup,
  defaultProps: {
    accordions: [{ element: <Accordion />, id: '1' }],
  },
  variants: [{ props: { defaultValue: '1' } }],
};
