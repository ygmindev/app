import type { TABLE_SELECT_TYPE } from '@lib/frontend/core/components/Table/Table.constants';
import type { TableColumnModel } from '@lib/frontend/core/components/Table/Table.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export type _TablePropsModel<TType> = (
  | {
      onSelect?(row?: TType): void;
      select?: TABLE_SELECT_TYPE.SINGLE;
    }
  | {
      onSelect?(rows: Array<TType>): void;
      select?: TABLE_SELECT_TYPE.MULTIPLE;
    }
) & {
  columns: Array<TableColumnModel<TType, unknown>>;
  data?: Array<TType>;
  isFullWidth?: boolean;
  onMount?: CallableModel;
};
