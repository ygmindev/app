from __future__ import annotations

from datetime import date
from typing import Optional

import attr
from pydantic import ConfigDict


@attr.s(auto_attribs=True, kw_only=True)
class EntityResourceModel:
    _id: str
    created: Optional[date] = date.today()
    isFixture: Optional[bool] = False

    model_config = ConfigDict(
        extra="allow",
    )
