export { default as _Detector } from 'i18next-browser-languagedetector';

export const _detection = {
  caches: ['localStorage', 'cookie'],
  cookieOptions: { path: '/', sameSite: true },
  lookupCookie: 'lng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  lookupLocalStorage: 'lng',
  order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
};
