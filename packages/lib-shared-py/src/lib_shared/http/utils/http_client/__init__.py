from typing import Any, Dict, Optional, Union

import requests

from lib_shared.http.utils.constants import HTTP_METHOD
from lib_shared.http.utils.http_client._http_client import _HttpClient
from lib_shared.http.utils.http_client.http_client_models import HttpClientModel


class HttpClient(_HttpClient, HttpClientModel):
    def __init__(
        self,
        base_url: str = "",
        default_headers: Optional[Dict[str, str]] = None,
        timeout: int = 10,
    ):
        super().__init__()
        self.base_url = base_url.rstrip("/")
        self.default_headers = default_headers or {}
        self.timeout = timeout

    def request(
        self,
        method: HTTP_METHOD,
        endpoint: str,
        headers: Optional[Dict[str, str]] = None,
        params: Optional[Dict[str, Any]] = None,
        data: Optional[Union[Dict[str, Any], str]] = None,
    ) -> requests.Response:
        url = f"{self.base_url}/{endpoint.lstrip('/')}"
        all_headers = {**self.default_headers, **(headers or {})}

        try:
            response = requests.request(
                method=str(method).upper(),
                url=url,
                headers=all_headers,
                params=params,
                data=data,
                timeout=self.timeout,
            )
            response.raise_for_status()
            return response
        except requests.exceptions.RequestException as e:
            print(f"[HTTP ERROR] {method} {url} failed: {e}")
            raise

    def get(self, endpoint: str, **kwargs) -> requests.Response:
        return self.request(HTTP_METHOD.GET, endpoint, **kwargs)

    def post(self, endpoint: str, **kwargs) -> requests.Response:
        return self.request(HTTP_METHOD.POST, endpoint, **kwargs)

    def put(self, endpoint: str, **kwargs) -> requests.Response:
        return self.request(HTTP_METHOD.PUT, endpoint, **kwargs)

    def delete(self, endpoint: str, **kwargs) -> requests.Response:
        return self.request(HTTP_METHOD.DELETE, endpoint, **kwargs)
