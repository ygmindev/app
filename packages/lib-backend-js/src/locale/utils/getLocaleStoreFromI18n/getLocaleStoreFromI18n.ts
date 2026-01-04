import {
  type GetLocaleStoreFromI18nModel,
  type GetLocaleStoreFromI18nParamsModel,
} from '@lib/backend/locale/utils/getLocaleStoreFromI18n/getLocaleStoreFromI18n.models';

export const getLocaleStoreFromI18n = async ({
  i18n,
}: GetLocaleStoreFromI18nParamsModel): Promise<GetLocaleStoreFromI18nModel> => {
  if (i18n.reportNamespaces) {
    const namespaces = i18n.reportNamespaces.getUsedNamespaces();
    await i18n.loadNamespaces(namespaces);
    const { data } = i18n.services.resourceStore;
    return i18n.languages.reduce(
      (result, lang) => ({
        ...result,
        [lang]: namespaces.reduce(
          (nsResult, ns) => ({ ...nsResult, [ns]: data?.[lang]?.[ns] }),
          {},
        ),
      }),
      {},
    );
  }
  return {};
};
