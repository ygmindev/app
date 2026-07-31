import torch

from lib_ai.core.utils.get_device.get_device_models import GetDeviceModel


def _get_device() -> torch.device:
    return torch.device(
        "cuda"
        if torch.cuda.is_available()
        else "mps"
        if torch.backends.mps.is_available()
        else "cpu"
    )


get_device: GetDeviceModel = _get_device
