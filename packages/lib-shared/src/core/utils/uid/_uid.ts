import uniqueId from 'lodash/uniqueId';

export const _uid = (prefix?: string): string => `${prefix || 'uid'}-${uniqueId()}`;
