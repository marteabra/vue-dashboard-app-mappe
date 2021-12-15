<template>
  <div class="component-sites">
    <ToDo v-if="$route.params.component_id == 'todo'" />
    <Slideshow v-if="$route.params.component_id == 'slideshow'" />
    <Table v-if="$route.params.component_id == 'table'" />
    <Quiz v-if="$route.params.component_id == 'quiz'" />
    <ContactForm v-if="$route.params.component_id == 'contact'" />
  </div>
</template>

<script>
import ToDo from "../components/ToDo.vue";
import Slideshow from "../components/Slideshow.vue";
import Table from "../components/Table.vue";
import Quiz from "../components/Quiz.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    ToDo,
    Slideshow,
    Table,
    Quiz,
    ContactForm,
  },

  data() {
    return {};
  },
};
</script>

<style>
.component-sites {
  justify-items: center;
  width: 100vw;
  height: 100vw;
  bottom: 0;
}

.component-sites .slideshow {
  border-radius: 1em;
  width: 30vw;
  box-shadow: rgba(0, 0, 0, 0.452) 10px 10px 10px;
  background-color: rgb(37, 37, 37);
}

.component-sites .table {
  border-radius: 1em;
  width: 30vw;
  box-shadow: rgba(0, 0, 0, 0.452) 10px 10px 10px;
  background-color: rgb(37, 37, 37);
}

.component-sites .quiz {
  border-radius: 1em;
  width: 30vw;
  box-shadow: rgba(0, 0, 0, 0.452) 10px 10px 10px;
  background-color: rgb(37, 37, 37);
}

.component-sites .contact-form {
  width: 30vw;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.452) 10px 10px 10px;
  background-color: rgb(37, 37, 37);
}

.component-sites .todo {
  border-radius: 1em;
  width: 30vw;
  box-shadow: rgba(0, 0, 0, 0.452) 10px 10px 10px;
  background-color: rgb(37, 37, 37);
}
</style>