import '@lib/config/javascript/test/_initialize.config.base';

window.open = vi.fn();
window.addEventListener = vi.fn();
window.removeEventListener = vi.fn();

beforeAll(async () => {});
