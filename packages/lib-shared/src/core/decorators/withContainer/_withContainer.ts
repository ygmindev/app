import { injectable } from 'inversify';

export const _withContainer: () => ClassDecorator = injectable as () => ClassDecorator;
