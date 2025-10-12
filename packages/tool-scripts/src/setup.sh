#!/bin/bash
set -e

HOSTS_FILE="/etc/hosts"
HOSTS_ENTRIES="
127.0.0.1 localhost
127.0.0.1 web.localhost
127.0.0.1 api.localhost
"

if ! grep -q "web.localhost" $HOSTS_FILE; then
  echo "$HOSTS_ENTRIES" | sudo tee -a $HOSTS_FILE > /dev/null
fi
