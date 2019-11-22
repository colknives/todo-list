<template>
  <div class="todo-open-list">
    <div class="todo-open-list-header mb-3">
      <h5>Open Items</h5>
    </div>

    <template v-if="todoListOpen.length > 0">
      <template v-for="openItem in todoListOpen">
        <div class="todo-open-list-content card mb-2" v-bind:key="openItem.uuid">
          <div class="row">
            <div class="col-auto todo-checkbox">
              <input type="checkbox" name="" @click="markComplete(openItem.uuid)" />
            </div>
            <div class="col-9 col-xs-10">
              <span>{{ openItem.name }}</span>
            </div>
            <div class="col-1 col-xs-1 todo-delete">
              <button class="btn btn-danger color-white" type="button" @click="deleteItem(openItem.uuid)">
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
  name: 'OpenItemList',
  computed: mapState([
      "loading",
      "hasErrors",
      "errorMessage",
      "todoListOpen"
  ]),
  created: function() {
    this.$store.dispatch("getItemOpenList");
  },
  methods: {
    markComplete: function(uuid) {
      this.$store.commit("setUuid", uuid);
      this.$store.dispatch("markComplete");
    },
    deleteItem: function(uuid) {
      this.$store.commit("setUuid", uuid);
      this.$store.dispatch("deleteItem");
    }
  }
}
</script>
