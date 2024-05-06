import { type FCModel } from '@lib/frontend/core/core.models';
import { type ComponentClass } from 'react';

export type ToComponentClassParamsModel<TProps> = FCModel<TProps>;

export type ToComponentClassModel<TProps> = ComponentClass<TProps>;
