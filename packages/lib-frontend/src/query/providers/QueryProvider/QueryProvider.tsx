import { type SFCModel } from '#lib-frontend/core/core.models';
import { _QueryProvider } from '#lib-frontend/query/providers/QueryProvider/_QueryProvider';
import { type QueryProviderPropsModel } from '#lib-frontend/query/providers/QueryProvider/QueryProvider.models';

export const QueryProvider: SFCModel<QueryProviderPropsModel> = _QueryProvider;
