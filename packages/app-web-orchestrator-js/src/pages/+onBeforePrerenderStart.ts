import { preparePrerender } from '@lib/shared/web/utils/preparePrerender/preparePrerender';
import { type OnBeforePrerenderStartAsync } from 'vike/types';

import { routes } from '../config/routes';

export const onBeforePrerenderStart: OnBeforePrerenderStartAsync = preparePrerender({ routes });
