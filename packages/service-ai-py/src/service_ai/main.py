import numpy as np
import torch
from lib_ai.data.tabular_data import TabularData
from torch.utils.data import default_collate

data = {
    "a": [1, 2],
    "b": ["b1", "b2"],
}
data = list(data.values())
print(data)
# data.names = ["A", "B"]
print(torch.tensor(data))
