import { type UseTableParamsModel } from '#lib-frontend/data/hooks/useTable/useTable.models';

export type TablePropsModel<TType> = UseTableParamsModel<TType> & {
  isHeadless?: boolean;
};