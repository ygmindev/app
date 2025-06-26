import { uid } from '@lib/shared/core/utils/uid/uid';
import { type GenerateResourceIdModel } from '@lib/shared/resource/utils/generateResourceId/generateResourceId.models';

export const generateResourceId = (): GenerateResourceIdModel => uid();
