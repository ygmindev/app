from typing import Protocol, Tuple, Unpack


class FromStaticModel(Protocol):
    def __call__(
        self,
        *params: Unpack[Tuple[str, ...]],
    ) -> str: ...
