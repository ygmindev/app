import { _timezones } from '@lib/frontend/locale/utils/timezones/_timezones';
import { type TimezonesModel } from '@lib/frontend/locale/utils/timezones/timezones.models';

export const timezones = (): TimezonesModel => _timezones();
