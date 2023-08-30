import uniqueId from 'lodash/uniqueId';

export const _user = (prefix?: string): string => `${prefix || 'uid'}-${uniqueId()}`;
