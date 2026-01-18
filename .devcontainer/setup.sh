#!/bin/bash
set -euo pipefail

echo "🚀 Setting up DevContainer environment..."

# Ya somos root (remoteUser: root), no usar sudo
apt-get update
apt-get install -y \
    postgresql-client \
    redis-tools \
    build-essential \
    libpq-dev \
    curl \
    unzip \
    groff \
    less \
    wget

echo "📦 Installing AWS CLI v2..."
TMP_ZIP="/tmp/awscliv2.zip"
curl -fsSL "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "$TMP_ZIP"

# Verificar contenido del zip antes de extraer
if unzip -l "$TMP_ZIP" >/dev/null 2>&1; then
  unzip -q "$TMP_ZIP" -d /tmp/awscliv2
else
  echo "❌ Error: awscliv2.zip corrupt or unzip failed"
  exit 11
fi

# Ejecutar instalador (sin sudo, ya somos root)
if [ -x /tmp/awscliv2/aws/install ]; then
  /tmp/awscliv2/aws/install -i /usr/local/aws-cli -b /usr/local/bin
else
  echo "❌ Instalador no encontrado en /tmp/awscliv2/aws/install"
  ls -la /tmp/awscliv2
  exit 11
fi

# Limpieza
rm -rf "$TMP_ZIP" /tmp/awscliv2

echo "✅ AWS CLI version:"
/usr/local/bin/aws --version || aws --version || true

echo "🎉 DevContainer ready!"


