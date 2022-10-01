import type { LocaleStateModel } from '@lib/frontend/locale/stores/localeReducer.models';
import { createReducer } from '@reduxjs/toolkit';

const initialState: LocaleStateModel = {};

export const localeReducer = createReducer<LocaleStateModel>(initialState, (builder) => builder);
