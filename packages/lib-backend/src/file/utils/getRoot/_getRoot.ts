import root from 'app-root-path';

import { type _GetRootModel } from '#lib-backend/file/utils/getRoot/_getRoot.models';

export const _getRoot = (): _GetRootModel => root.toString();
