import { type _TimezonesModel } from '@lib/frontend/locale/utils/timezones/_timezones.models';
import { timezoneFormat } from '@lib/shared/datetime/utils/timezoneFormat/timezoneFormat';
import map from 'lodash/map';
import uniqBy from 'lodash/uniqBy';
import spacetime from 'spacetime';

export const _timezones = (): _TimezonesModel =>
  uniqBy(
    map(spacetime.timezones(), (v, k) => {
      const id = timezoneFormat(k);
      return { id, label: id, offset: v.offset };
    }),
    'id',
  );
