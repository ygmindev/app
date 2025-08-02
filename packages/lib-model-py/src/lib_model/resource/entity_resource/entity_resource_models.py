from __future__ import annotations

from datetime import date
from typing import Optional

from beanie import Document
from pydantic import ConfigDict


class EntityResourceModel(Document):
    _id: str
    created: Optional[date] = date.today()
    isFixture: Optional[bool] = False

    model_config = ConfigDict(
        extra="allow",  
    )
