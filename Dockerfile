FROM php:7-apache
RUN \
    docker-php-ext-configure pdo_mysql --with-pdo-mysql=mysqlnd \
    && docker-php-ext-configure mysqli --with-mysqli=mysqlnd \
    && docker-php-ext-install pdo_mysql \
#RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
#COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
#RUN apt update -y && apt install git -y && \
#    apt install zip unzip && \
#    git config --global user.name "rohitsandhu" && \
#    git config --global user.email "rohit.sandhu@cirvianum.cat"
#RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
#    unzip awscliv2.zip && \
#    ./aws/install
#WORKDIR /var/www/html/botigaRoba
#RUN composer require aws/aws-sdk-php
#CMD ["apache2-foreground"] && composer require aws/aws-sdk-php
