import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http');

jest.doMock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
