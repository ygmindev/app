import torch
from lib_ai.core.utils.get_device._get_device_models import _GetDeviceModel
from lib_ai.core.utils.get_device.get_device_constants import Device


def _get_device() -> _GetDeviceModel:
    return (
        Device.CUDA
        if torch.cuda.is_available()
        else Device.MPS if torch.backends.mps.is_available() else Device.CPU
    )
