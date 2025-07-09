export type _UseOAuthModel = {
  google: {
    signIn(): Promise<void>;
    signOut(): Promise<void>;
  };
};
