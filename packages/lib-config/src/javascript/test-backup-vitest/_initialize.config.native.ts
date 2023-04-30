import '@lib/config/javascript/test/_initialize.config.frontend';

jest.mock(
  '@react-native-async-storage/async-storage',
  async () =>
    await jest.importActual('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
