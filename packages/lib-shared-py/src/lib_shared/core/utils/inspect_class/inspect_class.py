from typing import Any

from .inspect_class_models import InspectClassModel, InspectClassResultModel


def _inspect_class(
    params: type,
    is_deep: bool = True,
) -> InspectClassResultModel:
    annotations: dict[str, Any] = {}
    defaults: dict[str, Any] = {}
    methods: dict[str, Any] = {}

    bases = reversed(params.__mro__) if is_deep else [params]
    for base in bases:
        if base is object:
            continue
        base_annotations = getattr(base, "__annotations__", {})
        annotations.update(base_annotations)
        for k, v in vars(base).items():
            if callable(v) or isinstance(v, (classmethod, staticmethod, property)):
                if not (k.startswith("__") and k.endswith("__")):
                    methods[k] = v
                continue

            if k.startswith("_") or (
                k not in annotations and k not in base_annotations
            ):
                continue

            defaults[k] = v

    bases = set()
    for base in [v for v in params.__bases__ if v is not object]:
        if base not in bases and not any(
            base != other and isinstance(other, type) and issubclass(other, base)
            for other in bases
        ):
            bases.add(base)

    bases = list(bases) or [object]
    return {
        "annotations": annotations,
        "bases": bases,
        "defaults": defaults,
        "methods": methods,
    }


inspect_class: InspectClassModel = _inspect_class
