from lib_ai.dataset import Dataset
from lib_ai.model.testable.testable_models import TestableModel


class Testable(TestableModel):
    def test(self, dataset: Dataset) -> None:
        pass
