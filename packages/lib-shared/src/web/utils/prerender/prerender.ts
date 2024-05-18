import { INTERNATIONALIZE_CONFIG } from '@lib/config/locale/internationalize/internationalize.constants';
import { _prerender } from '@lib/shared/web/utils/prerender/_prerender';
import { type PrerenderModel } from '@lib/shared/web/utils/prerender/prerender.models';

const { languageDefault, languages } = INTERNATIONALIZE_CONFIG;

export const prerender = (): PrerenderModel => _prerender({ languageDefault, languages });
