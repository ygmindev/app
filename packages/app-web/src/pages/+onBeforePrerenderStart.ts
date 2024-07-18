import config from '@lib/config/routes/routes.web';
import { preparePrerender } from '@lib/shared/web/utils/preparePrerender/preparePrerender';

export default preparePrerender({ routes: config.params().routes });
