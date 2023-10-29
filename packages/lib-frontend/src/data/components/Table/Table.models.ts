import { type ReactElement } from 'react';

import { type UseTableParamsModel } from '#lib-frontend/data/hooks/useTable/useTable.models';

export type TablePropsModel<TType> = UseTableParamsModel<TType> & {
  emptyElement?: ReactElement;
  isAddable?: boolean;
  isDeletable?: boolean;
  isHeadless?: boolean;
  nilString?: string;
  onChange?(data?: Array<TType>): void;
};
