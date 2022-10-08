import type { ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';

export interface QueryConnectionModel<TType> {
  pages?: Array<ConnectionModel<TType> | null>;
}
