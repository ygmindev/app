import asyncio

from lib_config.database.database import database_config
from lib_model.chat.chat.chat import Chat
from lib_model.chat.message.message import Message
from lib_shared.database.utils.database.database import Database


async def main():
    database = Database(config=database_config)

    try:
        await database.initialize()
        chat = Chat(name="test chat room")
        await database.create(chat)
        await database.create(Message(text="test message", chat=chat))
    finally:
        await database.close()


asyncio.run(main())
