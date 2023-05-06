import { _internationalizeConfig } from '@lib/config/locale/internationalize/_internationalize.config';
import type { _InternationalizeConfigModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { internationalizeConfigParams } from '@lib/config/locale/internationalize/params/internationalize.params';

export const internationalizeConfig: _InternationalizeConfigModel = _internationalizeConfig(
  internationalizeConfigParams,
);
