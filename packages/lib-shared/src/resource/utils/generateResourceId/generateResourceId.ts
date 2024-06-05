import { type GenerateResourceIdModel } from '@lib/shared/resource/utils/generateResourceId/generateResourceId.models';
import { ObjectId } from 'mongodb';

export const generateResourceId = (): GenerateResourceIdModel => new ObjectId().toString();
