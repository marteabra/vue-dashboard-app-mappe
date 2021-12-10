<template>
  <div class="todo-container">
    <div class="todo__title">{{ title }}</div>
    <hr />
    <button @click="addTask" class="todo__add-task">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.16992 9.68555V5.75977H0.273438V4.11914H4.16992V0.222656H5.83008V4.11914H9.72656V5.75977H5.83008V9.68555H4.16992Z"
          fill="black"
        />
      </svg>

      Add new task
    </button>
    <div class="todo">
      <div class="todo__content">
        <div class="todo__items">
          <TodoItem
            @done-task="doneTask"
            @remove-task="removeTask"
            v-for="task in tasks"
            :task="task"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";

export default {
  components: {
    TodoItem,
  },

  data() {
    return {
      title: "TO DO LIST",
      tasks: [],
    };
  },

  computed: {
    doneTasks() {
      return this.tasks.filter((task) => task.done === true);
    },
  },

  methods: {
    addTask() {
      this.tasks.push({ id: this.id(), text: "", done: false });
    },

    removeTask(task) {
      const taskIndex = this.tasks.findIndex(
        (currentTask) => task.id === currentTask.id
      );
      this.tasks.splice(taskIndex, 1);
    },

    doneTask(task) {
      const taskIndex = this.tasks.findIndex(
        (currentTask) => currentTask.id === task.id
      );
      this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
    },

    id() {
      return Math.random().toString(36).slice(2);
    },
  },
};
</script>

<style>
hr {
  width: 100%;
  border: 1px solid white;
}

.todo-container {
  position: relative;
  width: 30vw;
  height: 60vh;
  padding-top: 1em;
}

.todo-content {
  position: initial;
  max-height: 10vh;
}

.todo {
  position: absolute;
  height: 300px;
  width: 100%;
  overflow-y: scroll;
}

.todo__title {
  color: white;
  margin-top: 0;
  margin-bottom: 10;
  width: 100%;
  text-align: center;
  font-size: 20px;
}

.todo__add-task {
  background: white;
  box-shadow: black 0 10px 10px 0;
  position: initial;
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  border: 0;
}

.todo__items {
  display: grid;
  width: 100%;
  padding: 0.5em;
}
</style>