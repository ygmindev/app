from typing import Literal

import torch

device: Literal["cuda", "mps", "cpu"] = (
    "cuda" if torch.cuda.is_available() else "mps" if torch.backends.mps.is_available() else "cpu"
)
