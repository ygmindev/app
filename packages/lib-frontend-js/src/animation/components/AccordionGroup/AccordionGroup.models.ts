import { type AccordionPropsModel } from '@lib/frontend/animation/components/Accordion/Accordion.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type ReactElement } from 'react';

export type AccordionGroupPropsModel = ValuePropsModel & {
  accordions?: Array<{
    element: ReactElement<AccordionPropsModel>;
    id: string;
  }>;
};
