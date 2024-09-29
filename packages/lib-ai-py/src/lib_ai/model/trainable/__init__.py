from lib_ai.dataset import Dataset
from lib_ai.model.trainable.trainable_models import TrainableModel


class Trainable(TrainableModel):
    def train(self, dataset: Dataset) -> None: ...
