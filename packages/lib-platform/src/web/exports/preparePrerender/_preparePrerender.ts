import {
  type _PreparePrerenderModel,
  type _PreparePrerenderParamsModel,
} from '@lib/platform/web/exports/preparePrerender/_preparePrerender.models';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';

export const _preparePrerender =
  ({ pages }: _PreparePrerenderParamsModel): _PreparePrerenderModel =>
  async () =>
    mapSequence(
      pages.map(({ getContext, pathname }) => async () => ({
        pageContext: getContext ? await getContext() : {},
        url: pathname,
      })),
    );
