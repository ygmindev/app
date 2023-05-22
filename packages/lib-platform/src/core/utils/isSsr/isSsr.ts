import type { IsSsrModel } from '@lib/platform/core/utils/isSsr/isSsr.models';

export const isSsr: IsSsrModel = typeof window === 'undefined';
