import config from '@lib/config/routes/routes.admin';
import { preparePrerender } from '@lib/shared/web/utils/preparePrerender/preparePrerender';

export default preparePrerender({ routes: config.params().routes });
