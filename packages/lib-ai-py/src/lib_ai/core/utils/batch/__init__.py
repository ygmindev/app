from __future__ import annotations

from typing import Unpack

from lib_ai.core.utils.batch._batch import _batch
from lib_ai.core.utils.batch.batch_models import BatchModel, BatchParamsModel


def batch[T](**params: Unpack[BatchParamsModel[T]]) -> BatchModel[T]:
    return _batch(**params)
