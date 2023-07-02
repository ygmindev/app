import { type QueryClient } from '@tanstack/react-query';

export type QueryContextModel = {
  client?: QueryClient;
  state?: object;
};
