import { type FCModel } from '#lib-frontend/core/core.models';
import { exportPage } from '#lib-platform/web/exports/exportPage/exportPage';

const Component: FCModel = () => <div>ERROR</div>;

const { Page } = exportPage({ Component });

export default Page;
