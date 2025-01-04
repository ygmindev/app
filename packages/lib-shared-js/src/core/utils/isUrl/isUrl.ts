import { type IsUrlModel, type IsUrlParamsModel } from '@lib/shared/core/utils/isUrl/isUrl.models';

export const isUrl = (params: IsUrlParamsModel): IsUrlModel =>
  params.match(
    /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/,
  )
    ? true
    : false;
