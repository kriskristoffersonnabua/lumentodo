<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

//🦊 Create the todo model
//🦊 Create the todo controller

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => '/todos'], function ($router) {
//🦊 Create a get endpoint

//🦊 Create a post endpoint

//🦊 Create a put endpoint

//🦊 Create a delete endpoint
});

// Next Workshop Authorization
// Next Workshop Migration/Seeder
