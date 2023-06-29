import { type ComponentClass } from 'react';

import { type FCModel } from '#lib-frontend/core/core.models';

export type ToComponentClassParamsModel<TProps> = FCModel<TProps>;

export type ToComponentClassModel<TProps> = ComponentClass<TProps>;
