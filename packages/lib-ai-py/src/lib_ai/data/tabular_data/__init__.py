from lib_ai.data.base_data import BaseData
from lib_ai.data.tabular_data._tabular_data import _TabularData
from lib_ai.data.tabular_data.tabular_data_models import TabularDataModel


class TabularData(_TabularData, TabularDataModel, BaseData):
    pass
