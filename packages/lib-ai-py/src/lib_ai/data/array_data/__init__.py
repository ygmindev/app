from lib_ai.data import Data
from lib_ai.data.array_data._array_data import _ArrayData
from lib_ai.data.array_data.array_data_models import ArrayDataModel


class ArrayData(ArrayDataModel, _ArrayData, Data):
    pass
