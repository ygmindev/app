from typing import Protocol

import torch


class _GetDeviceModel(Protocol):
    def __call__(
        self,
    ) -> torch.device: ...


GetDeviceModel = _GetDeviceModel
