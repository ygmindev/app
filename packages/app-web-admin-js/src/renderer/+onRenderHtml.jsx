import { initialize } from '@app/web-admin/setup/utils/initialize/initialize';
import config from '@lib/config/routes/routes.admin';
import { renderServer } from '@lib/shared/web/utils/renderServer/renderServer';

export default renderServer({ initialize, routes: config.params().routes });
