from __future__ import annotations

from typing import Optional

from pydantic import BaseModel, ConfigDict, RootModel

from ...user.User import User


class SignInModel(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    isNew: Optional[bool] = None
    token: Optional[str] = None
    user: User.UserModel


class Model(RootModel[SignInModel]):
    root: SignInModel
