import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

export const OTP_RESOURCE_NAME = 'Otp';

export const OTP_LENGTH = 6;

export const OTP_CREATE_IF_DOES_NOT_EXIST = `${OTP_RESOURCE_NAME}${RESOURCE_METHOD_TYPE.CREATE}IfDoesNotExist`;
