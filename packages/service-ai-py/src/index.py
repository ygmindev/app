import asyncio

from lib_config.database.database import ChatMessage, database_config
from lib_shared.database.utils.database.database import Database


async def main():
    database = Database(config=database_config)

    try:
        await database.initialize()
        await database.create(ChatMessage(message="hello world!"))
    finally:
        await database.close()


asyncio.run(main())
