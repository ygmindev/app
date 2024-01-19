import { type ERROR_TYPE } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext.constants';

export type UseErrorContextModel = {
  handleError(error: Error, type?: ErrorTypeModel): void;
};

export type ErrorTypeModel = `${ERROR_TYPE}`;
