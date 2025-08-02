from typing import Any, Optional

import attr


@attr.s(auto_attribs=True, kw_only=True)
class DatabaseConfigModel:
    database: Optional[str]
    resources: list[Any]
    host: Optional[str]
    password: Optional[str]
    username: Optional[str]
