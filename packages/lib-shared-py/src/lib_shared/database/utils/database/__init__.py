from lib_config.database import database_config

from lib_shared.database.utils.database._database import _Database
from lib_shared.database.utils.database.database_models import DatabaseModel


class Database(_Database, DatabaseModel): ...


database = Database(database_config)
