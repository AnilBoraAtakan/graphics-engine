#!/usr/bin/env bash
# Usage: ./render.sh <file.html> [width] [height]
# Default output size: 1080×1080. PNG lands next to the input HTML.
set -euo pipefail
node "$(dirname "$0")/scripts/render.js" "$@"
