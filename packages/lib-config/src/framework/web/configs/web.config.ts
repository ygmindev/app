import { _webConfig } from '@lib/config/framework/web/_web.config';
import type { _WebConfigModel } from '@lib/config/framework/web/_web.models';
import webConfigParams from '@lib/config/framework/web/params/web.params';

const webConfig: _WebConfigModel = _webConfig(webConfigParams);

export default webConfig;
