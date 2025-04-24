import {
  type _UseContainerModel,
  type _UseContainerParamsModel,
} from '@lib/frontend/core/hooks/useContainer/_useContainer.models';
// import { useInjection } from 'inversify-react';
// TODO: named import
import * as inversifyReact from 'inversify-react';
const { useInjection } = inversifyReact;

export const _useContainer = <TType,>(
  type: _UseContainerParamsModel<TType>,
): _UseContainerModel<TType> => useInjection(type);
