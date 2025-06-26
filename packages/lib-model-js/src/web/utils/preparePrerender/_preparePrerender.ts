import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import {
  type _PreparePrerenderModel,
  type _PreparePrerenderParamsModel,
} from '@lib/shared/web/utils/preparePrerender/_preparePrerender.models';

export const _preparePrerender =
  ({ pages }: _PreparePrerenderParamsModel): _PreparePrerenderModel =>
  async () =>
    mapSequence(
      pages.map(({ getContext, pathname }) => async () => ({
        pageContext: (await getContext?.()) || {},
        url: pathname,
      })),
    );
