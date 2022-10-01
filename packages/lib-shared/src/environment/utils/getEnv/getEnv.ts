import { EnvironmentVariableError } from '@lib/shared/environment/errors/EnvironmentVariableError/EnvironmentVariableError';

export const getEnv = <TType = string>(key: string, defaultValue?: TType | null): TType => {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    throw new EnvironmentVariableError(key);
  }
  return value as TType;
};
