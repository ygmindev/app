from typing import Protocol


class SetRandomSeedModel(Protocol):
    def __call__(
        self,
        seed: int,
    ) -> None: ...
