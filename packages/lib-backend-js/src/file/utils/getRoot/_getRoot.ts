import { type _GetRootModel } from '@lib/backend/file/utils/getRoot/_getRoot.models';
import appRootPath from 'app-root-path';

export const _getRoot = (): _GetRootModel => appRootPath.path;
