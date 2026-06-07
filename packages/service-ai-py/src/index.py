import asyncio

from lib_config.database.database import database_config
from lib_model.chat.chat.chat import Chat
from lib_shared.database.utils.database.database import Database


async def main():
    database = Database(config=database_config)

    try:
        await database.initialize()
        await database.create(Chat(content="hello world!"))
    finally:
        await database.close()


asyncio.run(main())
