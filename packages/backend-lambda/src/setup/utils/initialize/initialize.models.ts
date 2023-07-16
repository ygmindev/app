import { type Handler } from 'aws-lambda';

import { type InitializeModel as BackendInitializeModel } from '#lib-backend/setup/utils/initialize/initialize.models';

export type InitializeModel = BackendInitializeModel & { handler: Handler };