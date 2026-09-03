from typing import Generic, TypeVar

from lib_shared.core.utils.base_model.base_model import BaseModel

TParams = TypeVar("TParams", bound=BaseModel)


class CalibrationResult(BaseModel, Generic[TParams]):
    params: TParams
    is_success: bool
