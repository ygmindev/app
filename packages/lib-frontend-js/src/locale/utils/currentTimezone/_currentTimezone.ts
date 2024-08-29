import spacetime from 'spacetime';

import { type _CurrentTimezoneModel } from '@lib/frontend/locale/utils/currentTimezone/_currentTimezone.models';
import { timezoneFormat } from '@lib/shared/data/utils/timezoneFormat/timezoneFormat';

export const _currentTimezone = (): _CurrentTimezoneModel => {
  const current = spacetime().timezone();
  return { name: timezoneFormat(current.name), offset: current.current.offset };
};
