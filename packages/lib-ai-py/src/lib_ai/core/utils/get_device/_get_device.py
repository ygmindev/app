import torch
from lib_ai.core.utils.get_device._get_device_models import _GetDeviceModel


def _get_device() -> _GetDeviceModel:
    return torch.device(
        "cuda"
        if torch.cuda.is_available()
        else "mps" if torch.backends.mps.is_available() else "cpu"
    )
