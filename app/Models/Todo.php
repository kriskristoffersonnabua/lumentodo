<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $table = 'todos';
    protected $primaryKey = 'todo_id';
    public $incrementing = true;

    protected $attributes = [
        'completed' => false,
    ];
}
