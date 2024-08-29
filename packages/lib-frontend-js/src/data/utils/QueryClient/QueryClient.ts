import queryConfig from '@lib/config/query/query';
import { _QueryClient } from '@lib/frontend/data/utils/QueryClient/_QueryClient';

export class QueryClient extends _QueryClient {
  constructor() {
    super(queryConfig.params());
  }
}
