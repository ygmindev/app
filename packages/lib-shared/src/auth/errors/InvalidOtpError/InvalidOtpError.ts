import { Unauthorized } from 'http-errors';

export class InvalidOtpError extends Unauthorized {}
