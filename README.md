# react-laravel-cinema
A cinema application developed using ReactJS and Laravel

Collaborate with: [Hidayat](https://github.com/hidayathsrzl)

To run:
1. Clone/Download this repo and cd to the workspace.

Client:
1. cd client > `npm install`
2. copy .env from .env.example
3. `npm start`

Server:
1. cd server > `composer install`
2. create .env from .env.example
3. create database
4. `php artisan key:generate`
5. `php artisan migrate`
6. `php artisan db:seed`
7. extract image.zip to storage/app/public
8. `php artisn storage:link`
9. `php artisan serv`

## Sample Image
### Home page
![home](https://github.com/akmalcm/react-laravel-cinema/blob/main/home.jpeg)

### Form page
![form](https://github.com/akmalcm/react-laravel-cinema/blob/main/form.jpeg)

### List page
![list](https://github.com/akmalcm/react-laravel-cinema/blob/main/list.jpeg)

Special thanks to : Fariz Gaskin
