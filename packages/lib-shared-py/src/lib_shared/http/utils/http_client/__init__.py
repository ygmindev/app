from typing import Any, Dict, Optional, Type, TypeVar, Union, cast

import httpx

from lib_shared.http.utils.constants import HTTP_CONTENT_TYPE, HTTP_METHOD
from lib_shared.http.utils.http_client._http_client import _HttpClient
from lib_shared.http.utils.http_client.http_client_models import HttpClientModel

TType = TypeVar("TType")


class HttpClient(_HttpClient, HttpClientModel):
    def __init__(
        self,
        base_url: str = "",
        headers: Optional[Dict[str, str]] = None,
        timeout: int = 10,
    ):
        self._base_url = base_url.rstrip("/")
        self._headers = headers or {}
        self._timeout = timeout

    async def request(
        self,
        method: HTTP_METHOD,
        url: str,
        params: Optional[Dict[str, Any]] = None,
        data: Optional[Union[Dict[str, Any], str]] = None,
        json: Optional[Dict[str, Any]] = None,
        headers: Optional[Dict[str, str]] = None,
        response_type: Type[TType] = Type[Any],
        content_type: Optional[HTTP_CONTENT_TYPE] = HTTP_CONTENT_TYPE.JSON,
    ) -> TType:
        async with httpx.AsyncClient(timeout=self._timeout) as client:
            full_url = f"{self._base_url}{url}"
            response = await client.request(
                method=method.name,
                url=full_url,
                headers={**self._headers, **(headers or {})},
                params=params,
                data=data,
                json=json,
            )
            response.raise_for_status()
            match content_type:
                case HTTP_CONTENT_TYPE.JSON:
                    return cast(TType, response.json())
                case _:
                    return cast(TType, response.content)

    async def get(
        self,
        url: str,
        params: Optional[Dict[str, Any]] = None,
        response_type: Type[TType] = Type[Any],
        **kwargs,
    ) -> TType:
        return await self.request(
            HTTP_METHOD.GET,
            url,
            params=params,
            response_type=response_type,
            **kwargs,
        )

    async def post(
        self,
        url: str,
        json: Optional[Dict[str, Any]] = None,
        data: Any = None,
        response_type: Type[TType] = Type[Any],
        **kwargs,
    ) -> TType:
        return await self.request(
            HTTP_METHOD.POST,
            url,
            json=json,
            data=data,
            response_type=response_type,
            **kwargs,
        )

    async def put(
        self,
        url: str,
        json: Optional[Dict[str, Any]] = None,
        data: Any = None,
        response_type: Type[TType] = Type[Any],
        **kwargs,
    ) -> TType:
        return await self.request(
            HTTP_METHOD.PUT,
            url,
            json=json,
            data=data,
            response_type=response_type,
            **kwargs,
        )

    async def delete(
        self,
        url: str,
        response_type: Type[TType] = Type[Any],
        **kwargs,
    ) -> TType:
        return await self.request(
            HTTP_METHOD.DELETE,
            url,
            response_type=response_type,
            **kwargs,
        )


http_client = HttpClient()
