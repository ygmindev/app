import asyncio
from datetime import datetime

import pandas as pd
from lib_shared.database.utils.database import database
from lib_shared.http.utils.http_client import http_client


async def main() -> None:
    # await database.initialize()
    # print("Database initialized successfully")
    try:
        result = await http_client.get(
            "https://api.polygon.io/fed/v1/treasury-yields",
            params={
                # "date": "07/24/2025",
                "sort": "date.desc",
                "limit": 1,
                "apiKey": "spl4XZ9HTCTndp3nu5B4zzBM2u_gstCV",
            },
            headers={
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            },
        )
        print(result)
    except Exception as e:
        print("URL:", e.request.url)
        print("Body:", e.response.text)
        raise


if __name__ == "__main__":
    asyncio.run(main())
