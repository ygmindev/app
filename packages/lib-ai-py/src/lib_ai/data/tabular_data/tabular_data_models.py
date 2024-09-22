from typing import Sequence, Tuple, Union

from lib_ai.data.tabular_data._tabular_data_models import _TabularDataModel


class TabularDataModel(_TabularDataModel):
    pass


type TabularDataSingleIndexModel = int

type TabularDataMultiIndexModel = Union[
    Sequence[int],
    slice,
]

type TabularDataKeyModel = Union[
    TabularDataSingleIndexModel,
    TabularDataMultiIndexModel,
    Tuple[TabularDataSingleIndexModel, str],
    Tuple[TabularDataMultiIndexModel, Sequence[str]],
]
