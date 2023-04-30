import '@lib/config/javascript/test/_initialize.config.base';

window.open = jest.fn();
window.addEventListener = jest.fn();
window.removeEventListener = jest.fn();

beforeAll(async () => {});
