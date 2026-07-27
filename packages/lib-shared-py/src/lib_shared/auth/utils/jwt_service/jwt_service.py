import re

from firebase_admin import (
    auth,
    credentials,
    initialize_app,
)
from lib_model.user.user.user import User

from lib_shared.auth.errors.auth_token_error.auth_token_error import (
    AuthTokenError,
)
from lib_shared.auth.errors.unauthenticated_error.unauthenticated_error import (
    UnauthenticatedError,
)
from lib_shared.auth.utils.jwt_service.jwt_service_models import (
    JwtServiceModel,
    _JwtServiceModel,
)
from lib_shared.core.utils.get_env import get_env


class _JwtService(_JwtServiceModel):
    def post_init(self) -> None:
        initialize_app(
            credentials.Certificate(
                {
                    "type": "service_account",
                    "project_id": self.project_id,
                    "private_key": re.sub(r"\\n", "\n", self.secret),
                    "client_email": self.email,
                    "token_uri": "https://oauth2.googleapis.com/token",
                }
            )
        )

    def verify_token(
        self,
        header: str | None = None,
    ) -> User:
        if not header or not header.startswith("Bearer "):
            raise UnauthenticatedError()
        token = header.removeprefix("Bearer ").strip()
        try:
            decoded = auth.verify_id_token(token)
        except auth.ExpiredIdTokenError as e:
            raise AuthTokenError("Token has expired") from e
        except auth.InvalidIdTokenError as e:
            raise AuthTokenError("Invalid token") from e
        except Exception as e:
            raise AuthTokenError("Token verification failed") from e
        id = decoded.get("user_id")
        if not id:
            raise AuthTokenError("Invalid token")
        user = User(
            email=decoded.get("email"),
            first=decoded.get("first"),
            last=decoded.get("last"),
        )
        user._id = id
        return user


class JwtService(_JwtService, JwtServiceModel): ...


jwt_service = JwtService(
    email=get_env("SERVER_FIREBASE_ADMIN_EMAIL") or "",
    project_id=get_env("APP_FIREBASE_PROJECT_ID") or "",
    secret=get_env("SERVER_FIREBASE_ADMIN_SECRET") or "",
)
