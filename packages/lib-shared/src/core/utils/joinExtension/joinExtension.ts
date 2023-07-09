import trimStart from 'lodash/trimStart';

import {
  type JoinExtensionModel,
  type JoinExtensionParamsModel,
} from '#lib-shared/core/utils/joinExtension/joinExtension.models';

export const joinExtension = (...[path, extension]: JoinExtensionParamsModel): JoinExtensionModel =>
  `${path}.${trimStart(extension, '.')}`;
