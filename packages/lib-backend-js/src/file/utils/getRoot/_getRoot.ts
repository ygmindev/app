import { type _GetRootModel } from '@lib/backend/file/utils/getRoot/_getRoot.models';
import root from 'app-root-path';

export const _getRoot = (): _GetRootModel => root.toString();
