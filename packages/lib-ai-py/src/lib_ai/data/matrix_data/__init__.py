from lib_ai.data.base_data import BaseData
from lib_ai.data.matrix_data._matrix_data import _MatrixData
from lib_ai.data.matrix_data.matrix_data_models import MatrixDataModel


class MatrixData(_MatrixData, MatrixDataModel, BaseData):
    pass
