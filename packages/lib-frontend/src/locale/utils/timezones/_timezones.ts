import { type _TimezonesModel } from '@lib/frontend/locale/utils/timezones/_timezones.models';
import map from 'lodash/map';
import spacetime from 'spacetime';

export const _timezones = (): _TimezonesModel =>
  map(spacetime.timezones(), (v, k) => ({ name: k, offset: v.offset }));
