import { type isServerModel } from '@lib/platform/core/utils/isServer/isServer.models';

export const isServer: isServerModel = typeof window === 'undefined';
