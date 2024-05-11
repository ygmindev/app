FROM public.ecr.aws/lambda/nodejs:18-x86_64

WORKDIR ${LAMBDA_TASK_ROOT}

ENV DBUS_SESSION_BUS_ADDRESS autolaunch:

RUN yum -y install \
    alsa-lib \
    alsa-lib.x86_64 \
    at-spi2-atk \
    atk.x86_64 \
    ca-certificates \
    cups-libs.x86_64 \
    dbus-glib \
    dbus-glib-devel \
    gnupg \
    gtk3.x86_64 \
    ipa-gothic-fonts \
    libdrm \
    libXcomposite.x86_64 \
    libXcursor.x86_64 \
    libXdamage.x86_64 \
    libXext.x86_64 \
    libXi.x86_64 \
    libXrandr.x86_64 \
    libXScrnSaver.x86_64 \
    libXt \
    libXtst.x86_64 \
    pango.x86_64 \
    shadow-utils \
    systemd-udev \
    unzip \
    wget \
    xorg-x11-fonts-100dpi \
    xorg-x11-fonts-75dpi \
    xorg-x11-fonts-cyrillic \
    xorg-x11-fonts-misc \
    xorg-x11-fonts-Type1 \
    xorg-x11-server-Xvfb \
    xorg-x11-utils

RUN yum update nss -y

RUN wget -q https://dl-ssl.google.com/linux/linux_signing_key.pub \
    && rpm --import linux_signing_key.pub \
    && wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm \
    && yum -y localinstall google-chrome-stable_current_x86_64.rpm \
    && rm google-chrome-stable_current_x86_64.rpm

RUN /usr/sbin/groupadd --system chrome
RUN /usr/sbin/useradd --system --create-home --gid chrome --groups audio,video chrome

RUN mkdir -p /src/functions

ADD _build/.build/src/functions src/functions
ADD _build/layers/nodejs .

# FROM public.ecr.aws/lambda/nodejs:18-x86_64

# ENV CHROME_PATH=/opt/chrome/chrome
# ENV CHROME_DRIVER_PATH=/opt/chromedriver

# WORKDIR ${LAMBDA_TASK_ROOT}

# RUN yum -y install \
#     alsa-lib \
#     at-spi2-atk \
#     atk \
#     ca-certificates \
#     cups-libs \
#     dbus-glib \
#     dbus-glib-devel \
#     gnupg \
#     gtk3 \
#     libdrm \
#     libXcomposite \
#     libXcursor \
#     libXdamage \
#     libXext \
#     libXrandr \
#     libXScrnSaver \
#     libXt \
#     libXtst \
#     nodejs \
#     pango \
#     shadow-utils \
#     systemd-udev \
#     unzip \
#     wget \
#     xorg-x11-server-Xvfb.x86_64 \
#     xorg-x11-utils.x86_64

# RUN wget -q https://storage.googleapis.com/chrome-for-testing-public/124.0.6367.201/linux64/chromedriver-linux64.zip && \
#     wget -q https://storage.googleapis.com/chrome-for-testing-public/124.0.6367.201/linux64/chrome-linux64.zip && \
#     unzip -j chromedriver-linux64.zip -d /opt && \
#     unzip -j chrome-linux64.zip -d /opt/chrome

# RUN mkdir -p /src/functions

# ADD _build/.build/src/functions src/functions
# ADD _build/layers/nodejs .
