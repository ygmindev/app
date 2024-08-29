import { type isServerModel } from '@lib/shared/web/utils/isServer/isServer.models';

export const isServer: isServerModel = typeof window === 'undefined';
