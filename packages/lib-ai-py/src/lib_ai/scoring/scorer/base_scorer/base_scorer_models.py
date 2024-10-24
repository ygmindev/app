from typing import Callable, Tuple, Unpack

from lib_ai.data.array_data.array_data_models import ArrayDataModel

type BaseScorerParamsModel = Tuple[ArrayDataModel, ArrayDataModel]
type BaseScorerModel = float
type BaseScorerCallableModel = Callable[[Unpack[BaseScorerParamsModel]], BaseScorerModel]
