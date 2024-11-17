from enum import Enum


class Device(Enum):
    CPU = "cpu"
    CUDA = "cuda"
    MPS = "mps"
