from lib_ai.core.utils.get_device._get_device import _get_device
from lib_ai.core.utils.get_device.get_device_models import GetDeviceModel


def get_device() -> GetDeviceModel:
    return _get_device()
