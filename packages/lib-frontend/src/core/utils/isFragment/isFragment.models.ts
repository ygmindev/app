import type { Component, ComponentType, ReactNode } from 'react';

export type IsFragmentParamsModel<TProps> = ReactNode | ComponentType<TProps> | Component<TProps>;

export type IsFragmentModel = boolean;
