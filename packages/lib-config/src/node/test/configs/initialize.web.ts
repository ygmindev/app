import '@lib/config/node/test/configs/initialize.frontend';

window.open = jest.fn();
window.addEventListener = jest.fn();
window.removeEventListener = jest.fn();

beforeAll(async () => {});
