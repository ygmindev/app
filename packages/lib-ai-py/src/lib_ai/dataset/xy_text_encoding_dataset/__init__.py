from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.text_data import TextData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.dataset.xy_text_encoding_dataset.xy_text_encoding_dataset_models import (
    XYTextEncodingDatasetModel,
)


class XYTextEncodingDataset(
    XYDataset[TextData, MatrixData],
    XYTextEncodingDatasetModel,
): ...
