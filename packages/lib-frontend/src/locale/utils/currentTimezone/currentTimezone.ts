import { _currentTimezone } from '@lib/frontend/locale/utils/currentTimezone/_currentTimezone';
import { type CurrentTimezoneModel } from '@lib/frontend/locale/utils/currentTimezone/currentTimezone.models';

export const currentTimezone = (): CurrentTimezoneModel => _currentTimezone();
