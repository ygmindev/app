import { type isServerModel } from '@lib/shared/platform/utils/isServer/isServer.models';

export const isServer: isServerModel = typeof window === 'undefined';
