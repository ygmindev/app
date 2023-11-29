import { type ReactElement } from 'react';

import { type FilterContainerPropsModel } from '#lib-frontend/data/components/FilterContainer/FilterContainer.models';

export type FilterButtonPropsModel = {
  element: ReactElement<FilterContainerPropsModel<unknown>>;
};
