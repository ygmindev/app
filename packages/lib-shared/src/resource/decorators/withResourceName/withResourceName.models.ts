export interface WithResourceNameModel<TRoot = undefined> {
  name: TRoot extends undefined ? string : keyof TRoot & string;
}
