FROM php:8.2-apache

# Apache rewrite enable
RUN a2enmod rewrite

# Project files copy
COPY . /var/www/html/

# Permission
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
