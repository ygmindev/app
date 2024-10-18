import numpy as np
from lib_shared.core.utils.is_listlike.is_listlike_models import (
    IsListlikeModel,
    IsListlikeParamsModel,
)


def is_listlike(params: IsListlikeParamsModel) -> IsListlikeModel:
    return isinstance(params, (list, tuple))
