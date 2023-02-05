import type {
  GetLocaleStoreFromI18nModel,
  GetLocaleStoreFromI18nParamsModel,
} from '@lib/framework/locale/utils/getLocaleStoreFromI18n/getLocaleStoreFromI18n.models';

export const getLocaleStoreFromI18n = ({
  i18n,
}: GetLocaleStoreFromI18nParamsModel): GetLocaleStoreFromI18nModel => {
  if (i18n.reportNamespaces) {
    const namespaces = i18n.reportNamespaces.getUsedNamespaces();
    const { data } = i18n.services.resourceStore;
    const { languages } = i18n;
    return languages.reduce(
      (result, lang) => ({
        ...result,
        [lang]: namespaces.reduce((nsResult, ns) => ({ ...nsResult, [ns]: data[lang][ns] }), {}),
      }),
      {},
    );
  }
  return {};
};
