import type { _InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/_internationalize.models';
import type { InitOptions } from 'i18next';

export const _internationalizeConfig = ({
  languageDefault,
  languages,
  namespaceDefault,
}: _InternationalizeConfigParamsModel): InitOptions => ({
  debug: false,

  defaultNS: [namespaceDefault],

  fallbackLng: languageDefault,

  interpolation: { escapeValue: false },

  lng: languageDefault,

  ns: [],

  react: { defaultTransParent: 'div', useSuspense: true },

  // resources:
  //   process.env.NODE_ENV === 'test'
  //     ? {
  //         [languageDefault]: reduce(
  //           [CORE, TEST],
  //           (result, ns) => ({
  //             ...result,
  //             [ns]: join(outputPath, `${languageDefault}/${ns}.json`),
  //           }),
  //           {},
  //         ),
  //       }
  //     : undefined,

  supportedLngs: languages,
});
