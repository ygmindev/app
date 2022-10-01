import { Unauthorized } from 'http-errors';

export class UnauthenticatedError extends Unauthorized {}
