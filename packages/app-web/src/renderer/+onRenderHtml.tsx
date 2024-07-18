import { initialize } from '@app/web/setup/utils/initialize/initialize';
import config from '@lib/config/routes/routes.web';
import { renderServer } from '@lib/shared/web/utils/renderServer/renderServer';

export default renderServer({ initialize, routes: config.params().routes });
