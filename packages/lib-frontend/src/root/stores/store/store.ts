import { configureStore } from '@lib/frontend/root/stores/configureStore/configureStore';
import type { Dispatch } from 'redux';

export const store = configureStore();

export const dispatch = store.dispatch as Dispatch;
