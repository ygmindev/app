import { type _CurrentTimezoneModel } from '@lib/frontend/locale/utils/currentTimezone/_currentTimezone.models';
import { timezoneFormat } from '@lib/shared/datetime/utils/timezoneFormat/timezoneFormat';
import spacetime from 'spacetime';

export const _currentTimezone = (): _CurrentTimezoneModel => {
  const current = spacetime().timezone();
  return { name: timezoneFormat(current.name), offset: current.current.offset };
};
