<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Todo;
use DB;

class TodoController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(Todo::all()->toArray());
    }

    public function post(Request $request)
    {
        $data = $request->json()->all();
        $new_todo = new Todo;
        $new_todo->description = $data['description'];
        $new_todo->save();
        return response()->json($new_todo->toArray());
    }

    public function put(Request $request, $todo_id)
    {
        $data = $request->json()->all();
        $todo = Todo::find($todo_id);
        if (isset($data['description'])) {
            $todo->description = $data['description'];
        }
        if (isset($data['completed'])) {
            $todo->completed = (bool)$data['completed'];
        }
        $todo->save();
        return response()->json($todo->toArray());
    }

    public function delete(Request $request, $todo_id)
    {
        $todo = Todo::find($todo_id);
        $todo->delete();
        return response()->json(['deleted' => true]);
    }
}
