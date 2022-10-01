import '@lib/config/jest/setupFilesAfterEnv/setupFilesAfterEnv.frontend';

window.open = jest.fn();
window.addEventListener = jest.fn();
window.removeEventListener = jest.fn();
