from typing import Any, Dict, Protocol, TypedDict


class InspectClassResultModel(TypedDict):
    annotations: Dict[str, Any]
    bases: list[type]
    defaults: Dict[str, Any]


class InspectClassModel(Protocol):
    def __call__(
        self,
        params: type,
        is_deep: bool = True,
    ) -> InspectClassResultModel: ...
