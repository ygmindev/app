import { type AsyncTextModel } from '@lib/frontend/core/core.models';
import { type FormValidatorsModel } from '@lib/frontend/data/data.models';
import {
  type TableSelectTypeModel,
  type UseTableParamsModel,
} from '@lib/frontend/data/hooks/useTable/useTable.models';
import { type ReactElement } from 'react';

export type TablePropsModel<TType> = UseTableParamsModel<TType> & {
  emptyCell?: AsyncTextModel;
  emptyElement?: ReactElement | null;
  isFullWidth?: boolean;
  isHeadless?: boolean;
  isRemovable?: boolean;
  onChange?(data?: Array<TType>): void;
  onRemove?(row: TType): Promise<void>;
  onSelect?(rows?: Array<TType>): void;
  select?: TableSelectTypeModel;
  validators?: FormValidatorsModel<TType>;
};

export type TableRefModel = {
  remove?(i: number): void;
  validate(): boolean;
};
