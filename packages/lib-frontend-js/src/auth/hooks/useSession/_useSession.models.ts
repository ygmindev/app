export type _UseSessionModel = {
  refreshToken(): Promise<string | null>;
  signInWithToken(token: string): Promise<void>;
  signOut(): Promise<void>;
};
