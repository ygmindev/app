from __future__ import annotations

from beanie import PydanticObjectId


class _ObjectId(PydanticObjectId): ...


class ObjectId(_ObjectId): ...
