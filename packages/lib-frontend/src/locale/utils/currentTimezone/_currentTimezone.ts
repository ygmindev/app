import type { _CurrentTimezoneModel } from '@lib/frontend/locale/utils/currentTimezone/_currentTimezone.models';
import { timezoneFormat } from '@lib/shared/format/utils/timezoneFormat/timezoneFormat';
import spacetime from 'spacetime';

export const _currentTimezone = (): _CurrentTimezoneModel => {
  const _current = spacetime().timezone();
  return { name: timezoneFormat(_current.name), offset: _current.current.offset };
};
