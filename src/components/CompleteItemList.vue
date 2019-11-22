<template>
  <div class="todo-complete-list">
    <div class="todo-complete-list-header mb-3">
      <h5>Completed Items</h5>
    </div>

      <template v-if="todoListComplete.length > 0">
        <template v-for="completeItem in todoListComplete">
          <div class="todo-complete-list-content card mb-2"  v-bind:key="completeItem.uuid">
            <div class="row">
              <div class="col-auto todo-checkbox">
                <input type="checkbox" name="" value="1" checked @click="markOpen(completeItem.uuid)" />
              </div>
              <div class="col-9 col-xs-10">
                <span class="line-through">{{ completeItem.name }}</span>
              </div>
              <div class="col-1 col-xs-1 todo-delete">
                <button class="btn btn-danger color-white" type="button" @click="deleteItem(completeItem.uuid)">
                  <font-awesome-icon icon="trash" class="fa-xs" />
                </button>
              </div>
            </div>
          </div>
        </template>
    </template>

  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'CompleteItemList',
  computed: mapState([
      "loading",
      "hasErrors",
      "errorMessage",
      "todoListComplete"
  ]),
  created: function() {
    console.log('asdasd');
    this.$store.dispatch("getItemCompleteList");
  },
  methods: {
    markOpen: function(uuid) {
      this.$store.commit("setUuid", uuid);
      this.$store.dispatch("markOpen");
    },
    deleteItem: function(uuid) {
      this.$store.commit("setUuid", uuid);
      this.$store.dispatch("deleteItem");
    }
  }
}
</script>
