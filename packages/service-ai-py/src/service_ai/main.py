import numpy as np
import torch
from lib_ai.data.tabular_data import TabularData
from torch.utils.data import default_collate

data = TabularData.from_dict(
    {
        "a": [1, 2, 3],
        "b": ["1", "2", "3"],
        "c": ["x", "y", "3"],
    }
)
print(data.to_matrix().data)
