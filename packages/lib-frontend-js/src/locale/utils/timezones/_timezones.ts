import { type _TimezonesModel } from '@lib/frontend/locale/utils/timezones/_timezones.models';
import map from 'lodash/map';
import uniqBy from 'lodash/uniqBy';
import spacetime from 'spacetime';

export const _timezones = (): _TimezonesModel =>
  uniqBy(
    map(spacetime.timezones(), (v, k) => ({ name: k, offset: v.offset })),
    'name',
  );
