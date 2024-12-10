from lib_ai.data.message_data import MessageData
from lib_ai.data.text_output_data import TextOutputData
from lib_ai.dataset.xy_dataset.xy_dataset_models import XYDatasetModel


class XYChatDatasetModel(XYDatasetModel[MessageData, TextOutputData]): ...
