import { _getRoot } from '@lib/backend/file/utils/getRoot/_getRoot';
import { type GetRootModel } from '@lib/backend/file/utils/getRoot/getRoot.models';

export const getRoot = (): GetRootModel => _getRoot();
