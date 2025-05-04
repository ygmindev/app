import { prerender } from '@lib/shared/web/utils/prerender/prerender';
import { type OnPrerenderStartAsync } from 'vike/types';

export const onPrerenderStart: OnPrerenderStartAsync = prerender();
