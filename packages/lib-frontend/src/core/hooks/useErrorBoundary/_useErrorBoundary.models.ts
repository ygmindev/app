export interface _UseErrorBoundaryModel<TError extends Error = Error> {
  handleError(error: TError): void;
}
