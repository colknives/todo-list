<template>
  <div class="todo-list-container container-fluid">
    <div class="todo-header">
      <h2>To Do List</h2>
    </div>
    <div class="todo-content card">
      <div class="card-body">
        <OpenItemList />
        <ItemForm />
        <CompleteItemList />
      </div>
    </div>    
  </div>
</template>

<script>

import OpenItemList from './../components/OpenItemList.vue'
import ItemForm from './../components/ItemForm.vue'
import CompleteItemList from './../components/CompleteItemList.vue'

export default {
  name: 'ToDoList',
  components: {
    OpenItemList,
    CompleteItemList,
    ItemForm
  }
}
</script>
