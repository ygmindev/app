import { routes } from '#app-web/routes';
import { exportPrerenderPages } from '#lib-platform/web/exports/exportPrerenderPages/exportPrerenderPages';

const { pages } = exportPrerenderPages({ routes });

export default pages;
