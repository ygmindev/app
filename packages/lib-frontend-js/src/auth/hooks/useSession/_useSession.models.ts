export type _UseSessionModel = {
  isAnonymous(): boolean;
  refreshToken(): Promise<string | null>;
  signInAnonymously(): Promise<void>;
  signInWithToken(token: string): Promise<void>;
  signOut(): Promise<void>;
  userId(): string | null;
};
