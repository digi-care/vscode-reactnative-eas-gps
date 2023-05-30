# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.195.0/containers/javascript-node/.devcontainer/base.Dockerfile
# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "umask 0002 && ./usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# OpenJDK
ARG OPENJDK_VERSION="11-jdk"
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends openjdk-${OPENJDK_VERSION}

# Expo
# RUN su node -c "npm install -g expo-cli"
RUN su node -c "npm install -g eas-cli"

# Command-line tools
# https://developer.android.com/tools
WORKDIR /home/node
USER node
ENV ANDROID_SDK_ROOT /home/node/android-sdk
RUN curl -o tools.zip "https://dl.google.com/android/repository/commandlinetools-linux-6514223_latest.zip"
RUN mkdir -p $ANDROID_SDK_ROOT/cmdline-tools
RUN unzip tools.zip -d $ANDROID_SDK_ROOT/cmdline-tools
RUN yes | $ANDROID_SDK_ROOT/cmdline-tools/tools/bin/sdkmanager --licenses
USER root
