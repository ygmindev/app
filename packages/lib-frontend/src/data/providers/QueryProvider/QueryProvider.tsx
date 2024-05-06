import { type LFCModel } from '@lib/frontend/core/core.models';
import { _QueryProvider } from '@lib/frontend/data/providers/QueryProvider/_QueryProvider';
import { type QueryProviderPropsModel } from '@lib/frontend/data/providers/QueryProvider/QueryProvider.models';

export const QueryProvider: LFCModel<QueryProviderPropsModel> = (props) => (
  <_QueryProvider {...props} />
);
