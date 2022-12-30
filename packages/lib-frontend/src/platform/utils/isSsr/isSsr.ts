import type { IsSsrModel } from '@lib/frontend/platform/utils/isSsr/isSsr.models';

export const isSsr: IsSsrModel = typeof window === 'undefined';
