# Preparing the Database

### Do the following as root user

```sql

create database shopdb;
create user shopper identified with mysql_native_password by 'shoppass';
grant all privileges on shopdb.* to shopper;
flush privileges;

```
