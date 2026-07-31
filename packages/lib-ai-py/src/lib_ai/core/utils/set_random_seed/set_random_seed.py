import random

import numpy as np
import torch

from lib_ai.core.utils.set_random_seed.set_random_seed_models import SetRandomSeedModel


def _set_random_seed(seed: int) -> None:
    np.random.seed(seed)
    random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed(seed)
    torch.backends.cudnn.benchmark = False
    torch.backends.cudnn.deterministic = True


set_random_seed: SetRandomSeedModel = _set_random_seed
