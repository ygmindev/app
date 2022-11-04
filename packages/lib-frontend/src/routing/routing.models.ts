export type LocationParamsModel = {
  prev?: LocationModel<unknown>;
};

export interface LocationModel<TParams = undefined> {
  params?: TParams & LocationParamsModel;
  pathname: string;
}
