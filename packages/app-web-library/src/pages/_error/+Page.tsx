import { type FCModel } from '#lib-frontend/core/core.models';
import { page } from '#lib-platform/web/exports/page/page';

const Component: FCModel = () => <div>ERROR</div>;

const { Page } = page({ Component });

export default Page;
