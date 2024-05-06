import { routes } from '@app/web-admin/routes';
import { preparePrerender } from '@lib/platform/web/exports/preparePrerender/preparePrerender';

export default preparePrerender({ routes });
