import { type FormValidatorsModel } from '@lib/frontend/data/data.models';
import { type UseTableParamsModel } from '@lib/frontend/data/hooks/useTable/useTable.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type ReactElement } from 'react';

export type TablePropsModel<TType> = UseTableParamsModel<TType> & {
  emptyCell?: TranslatableTextModel;
  emptyElement?: ReactElement | null;
  isAddable?: boolean;
  isDeletable?: boolean;
  isHeadless?: boolean;
  onChange?(data?: Array<TType>): void;
  validators?: FormValidatorsModel<TType>;
};

export type TableRefModel = {
  validate(): boolean;
};
