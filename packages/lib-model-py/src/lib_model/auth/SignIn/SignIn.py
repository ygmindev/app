from __future__ import annotations

from typing import Any, Optional

from pydantic import BaseModel, ConfigDict, RootModel


class SignInModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    isNew: Optional[bool] = None
    token: Optional[str] = None
    user: Any


class Model(RootModel[SignInModel]):
    root: SignInModel
