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

$router->group(['prefix' => '/todos', 'middleware' => 'auth'], function ($router) {
    $router->get('/',[
        'as' => 'Todos.index',
        'uses' => 'TodoController@index'
    ]);

    $router->post('/',[
        'as' => 'Todos.post',
        'uses' => 'TodoController@post'
    ]);

    $router->put('/{todo_id}',[
        'as' => 'Todos.put',
        'uses' => 'TodoController@put'
    ]);

    $router->delete('/{todo_id}',[
        'as' => 'Todos.delete',
        'uses' => 'TodoController@delete'
    ]);
});

// Next Workshop Authorization
