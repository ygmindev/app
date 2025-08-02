from typing import Optional

from pydantic import create_model

from lib_shared.core.utils.partial.partial_models import (
    PartialModel,
    PartialParamsModel,
)


def partial(model: PartialParamsModel) -> PartialModel:
    fields = {}
    for field_name, field_info in model.model_fields.items():
        fields[field_name] = (Optional[field_info.annotation], None)
    return create_model(f"Partial{model.__name__}", **fields)
