<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use DB;

class TodoController extends Controller
{
    public function index(Request $request)
    {
        return Todo::all();
    }

    public function post(Request $request)
    {
        $description = $request->input('description');
        $new_todo = new Todo;
        $new_todo->description = $description;
        $new_todo->save();
    }

    public function put(Request $request, $todo_id)
    {
        $description = $request->input('description');
        $completed = $request->input('completed');
        $todo = Todo::find($todo_id);
        $todo->description = $description;
        $todo->completed = (bool)$completed;
        $todo->save();
    }

    public function delete(Request $request, $todo_id)
    {
        $todo = Todo::find($todo_id);
        $todo->delete();
    }
}
