export interface _SocketModel {
  on<TType>(name: string, handler: (event: TType) => void): void;
}
