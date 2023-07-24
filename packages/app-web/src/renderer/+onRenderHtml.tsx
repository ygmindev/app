import { initialize } from '#app-web/setup/utils/initialize/initialize';
import { renderServer } from '#lib-platform/web/exports/renderServer/renderServer';

const { render } = renderServer({ initialize });

export default render;
