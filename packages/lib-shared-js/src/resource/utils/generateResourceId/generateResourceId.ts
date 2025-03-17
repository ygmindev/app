import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import { type GenerateResourceIdModel } from '@lib/shared/resource/utils/generateResourceId/generateResourceId.models';

export const generateResourceId = (): GenerateResourceIdModel => new ObjectId().toString();
