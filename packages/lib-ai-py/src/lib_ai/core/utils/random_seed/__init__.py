import random

import numpy as np
import torch
from lib_ai.core.utils.random_seed.random_seed_models import (
    RandomSeedModel,
    RandomSeedParamsModel,
)


def random_seed(params: RandomSeedParamsModel) -> RandomSeedModel:
    np.random.seed(params)
    random.seed(params)
    torch.manual_seed(params)
    torch.cuda.manual_seed(params)
    torch.backends.cudnn.benchmark = False
    torch.backends.cudnn.deterministic = True
