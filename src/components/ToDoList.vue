<template>
  <div class="todo-list-container container-fluid">
    <div class="todo-header">
      <h2>To Do List</h2>
    </div>
    <div class="todo-content card">
      <div class="card-body">
        <div class="todo-open-list">
          <div class="todo-open-list-header mb-3">
            <h5>Open Items</h5>
          </div>

          <div class="todo-open-list-content card mb-2">
            <div class="row">
              <div class="col-auto todo-checkbox">
                <input type="checkbox" name="">
              </div>
              <div class="col-10">
                <span>asdasdasdasdasdsa</span>
              </div>
            </div>
          </div>

          <div class="todo-open-list-content card mb-2">
            <div class="row">
              <div class="col-auto todo-checkbox">
                <input type="checkbox" name="">
              </div>
              <div class="col-10">
                <span>asdasdasdasdasdsa</span>
              </div>
            </div>
          </div>

          <div class="todo-open-list-content card mb-2">
            <div class="row">
              <div class="col-auto todo-checkbox">
                <input type="checkbox" name="">
              </div>
              <div class="col-10">
                <span>asdasdasdasdasdsa</span>
              </div>
            </div>
          </div>


        </div>

        <div class="todo-form mb-5">
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Enter To Do Item" id="exampleFormControlInput1">
            <div class="input-group-append">
              <button class="btn btn-primary color-white" type="button">
                <font-awesome-icon icon="plus" />
              </button>
            </div>
          </div>
        </div>

        <div class="todo-complete-list">
          <div class="todo-complete-list-header mb-3">
            <h5>Completed Items</h5>
          </div>

          <div class="todo-complete-list-content card mb-2">
            <div class="row">
              <div class="col-auto todo-checkbox">
                <input type="checkbox" name="" value="1" checked>
              </div>
              <div class="col-10">
                <span class="line-through">asdasdasdasdasdsa</span>
              </div>
            </div>
          </div>

          <div class="todo-complete-list-content card mb-2">
            <div class="row">
              <div class="col-auto todo-checkbox">
                <input type="checkbox" name="" value="1" checked>
              </div>
              <div class="col-10">
                <span class="line-through">asdasdasdasdasdsa</span>
              </div>
            </div>
          </div>

          <div class="todo-complete-list-content card mb-2">
            <div class="row">
              <div class="col-auto todo-checkbox">
                <input type="checkbox" name="" value="1" checked>
              </div>
              <div class="col-10">
                <span class="line-through">asdasdasdasdasdsa</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>    
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'ToDoList',
  computed: mapState("todo", [
      "loading",
      "hasErrors",
      "errorMessage",
      "todoList"
  ]),
}
</script>
