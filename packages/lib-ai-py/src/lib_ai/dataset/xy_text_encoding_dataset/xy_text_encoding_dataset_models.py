from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.text_data import TextData
from lib_ai.dataset.xy_dataset.xy_dataset_models import XYDatasetModel


class XYTextEncodingDatasetModel(XYDatasetModel[TextData, MatrixData]): ...
