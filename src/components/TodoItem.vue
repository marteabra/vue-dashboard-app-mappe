<template class="todo">
  <div class="list-item">
    <button
      @click="emitDone"
      :class="doneButtonClass"
      aria-label="Done"
    ></button>

    <div class="list-item__task">
      <input type="text" v-model="task.text" placeholder="New task" />
    </div>

    <button class="list-item__remove" @click="emitRemove" aria-label="Remove">
      <svg
        width="18"
        height="18"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8475 13.2966L13.2821 10.8619L19.6006 17.1804L25.9625 10.8185L28.4406 13.2966L22.0787 19.6585L28.3971 25.977L25.9625 28.4116L19.644 22.0931L13.2966 28.4406L10.8185 25.9625L17.1659 19.615L10.8475 13.2966Z"
          fill="white"
        />
        <circle cx="19.5" cy="19.5" r="18.5" stroke="white" stroke-width="2" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object },
  },

  computed: {
    doneButtonClass() {
      return this.task.done
        ? "list-item__done--green"
        : "list-item__done--transparent";
    },
  },

  methods: {
    emitDone() {
      this.$emit("done-task", this.task);
    },

    emitRemove() {
      this.$emit("remove-task", this.task);
    },
  },
};
</script>

<style>
.list-item {
  display: flex;
  overflow: scroll;
  width: 100%;
  justify-content: space-between;
}

.list-item input {
  border-radius: 5px;
  border: 1px solid transparent;
  width: 90%;
}

.list-item button {
  width: 28px;
  height: 20px;
  margin: 10px;
  font-weight: bold;
}

.list-item__done--green {
  background: rgb(120, 214, 120);
  border: 2px solid rgb(120, 214, 120);
}

.list-item__done--transparent {
  background: none;
  border: 2px solid white;
}

.list-item__remove {
  color: white;
}

.list-item button:nth-child(1) {
  border-radius: 50%;
  border: 1px solid white(0, 0, 0, 0.5);
}

.list-item button:nth-child(3) {
  border: none;
  background: none;
}

.list-item__task {
  display: flex;
  margin: 10px;
  width: 100%;
  height: 20px;
}

.list-item__task :nth-child(1) {
  flex-grow: 1;
}
.list-item__task :nth-child(2) {
  flex-grow: 3;
}
.list-item__task :nth-child(3) {
  flex-grow: 1;
}
</style>