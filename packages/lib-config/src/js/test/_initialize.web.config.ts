import '@lib/config/js/test/configs/initialize.frontend.config';

window.open = jest.fn();
window.addEventListener = jest.fn();
window.removeEventListener = jest.fn();

beforeAll(async () => {});
