import { initialize } from '@app/web/setup/utils/initialize/initialize';
import { renderServer } from '@lib/shared/web/utils/renderServer/renderServer';

import { routes } from '../routes';

export default renderServer({
  initialize,
  routes,
});
