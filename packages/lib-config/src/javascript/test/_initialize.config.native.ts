import '@lib/config/javascript/test/_initialize.config.frontend';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

vi.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
vi.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
vi.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
