import { _withSelf } from '@lib/backend/http/utils/withSelf/_withSelf';
import { type WithSelfModel } from '@lib/backend/http/utils/withSelf/withSelf.models';

export const withSelf = (): WithSelfModel => _withSelf();
