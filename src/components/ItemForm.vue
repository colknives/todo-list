<template>
  <div class="todo-form mb-5">
    <div class="input-group">
      <input type="email" 
             class="form-control" 
             placeholder="Enter To Do Item" 
             id="exampleFormControlInput1"
             v-model="name">
      <div class="input-group-append">
        <button class="btn btn-primary color-white" type="button" @click="addItem()">
          <font-awesome-icon icon="plus" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'ItemForm',
  computed: mapState("todo", [
      "loading",
      "hasErrors",
      "errorMessage",
      "todoList"
  ]),
  data: function() {
    return {
      name: ''
    };
  },
  methods: {
    addItem: function() {
      this.$store.commit("setName", this.name);
      this.name = '';
      this.$store.dispatch("addItem");
    }
  }
}
</script>
