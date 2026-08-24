from typing import Any, cast

import httpx

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.http.utils.constants import HttpContentType, HttpMethod


class HttpClient[TType](BaseModel):
    base_url: str = ""
    headers: dict[str, str] = Field(default_factory=dict)
    timeout: int = 10

    async def request(
        self,
        method: HttpMethod,
        url: str,
        params: dict[str, Any] | None = None,
        data: dict[str, Any] | None = None,
        json: dict[str, Any] | None = None,
        headers: dict[str, str] | None = None,
        response_type: type[TType] = type[Any],
        content_type: HttpContentType | None = HttpContentType.JSON,
    ) -> TType:
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            full_url = f"{self.base_url}{url}"
            response = await client.request(
                method=method.name,
                url=full_url,
                headers={**self.headers, **(headers or {})},
                params=params,
                data=data,
                json=json,
            )
            response.raise_for_status()
            match content_type:
                case HttpContentType.JSON:
                    return cast(TType, response.json())
                case _:
                    return cast(TType, response.content)

    async def get(
        self,
        url: str,
        params: dict[str, Any] | None = None,
        response_type: type[TType] = type[Any],
        **kwargs,
    ) -> TType:
        return await self.request(
            HttpMethod.GET,
            url,
            params=params,
            response_type=response_type,
            **kwargs,
        )

    async def post(
        self,
        url: str,
        json: dict[str, Any] | None = None,
        data: Any = None,
        response_type: type[TType] = type[Any],
        **kwargs,
    ) -> TType:
        return await self.request(
            HttpMethod.POST,
            url,
            json=json,
            data=data,
            response_type=response_type,
            **kwargs,
        )

    async def put(
        self,
        url: str,
        json: dict[str, Any] | None = None,
        data: Any = None,
        response_type: type[TType] = type[Any],
        **kwargs,
    ) -> TType:
        return await self.request(
            HttpMethod.PUT,
            url,
            json=json,
            data=data,
            response_type=response_type,
            **kwargs,
        )

    async def delete(
        self,
        url: str,
        response_type: type[TType] = type[Any],
        **kwargs,
    ) -> TType:
        return await self.request(
            HttpMethod.DELETE,
            url,
            response_type=response_type,
            **kwargs,
        )


http_client = HttpClient()
