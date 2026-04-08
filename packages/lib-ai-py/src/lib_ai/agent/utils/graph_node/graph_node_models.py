# template version: 1.0.0


from typing import Generic, TypeVar

TState = TypeVar("TState")


class GraphNodeModel(Generic[TState]): ...
