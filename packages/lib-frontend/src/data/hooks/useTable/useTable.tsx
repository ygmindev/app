import { _useTable } from '@lib/frontend/data/hooks/useTable/_useTable';
import {
  type UseTableModel,
  type UseTableParamsModel,
} from '@lib/frontend/data/hooks/useTable/useTable.models';

export const useTable = <TType extends unknown>({
  ...props
}: UseTableParamsModel<TType>): UseTableModel<TType> => _useTable<TType>({ ...props });
