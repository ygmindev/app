from lib_ai.data.message_data import MessageData
from lib_ai.data.text_output_data import TextOutputData
from lib_ai.dataset.xy_chat_dataset.xy_chat_dataset_models import XYChatDatasetModel
from lib_ai.dataset.xy_dataset import XYDataset


class XYChatDataset(
    XYDataset[MessageData, TextOutputData],
    XYChatDatasetModel,
): ...
