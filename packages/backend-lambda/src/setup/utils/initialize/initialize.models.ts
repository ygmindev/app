import { type Handler } from 'aws-lambda';

import { type InitializeModel as BackendInitializeModel } from '#lib-backend/setup/utils/initialize/initialize.models';

export type InitializeModel = Promise<Awaited<BackendInitializeModel> & { handler: Handler }>;
