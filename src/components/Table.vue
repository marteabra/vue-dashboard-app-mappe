<template>
  <div class="table-container">
    <div class="table">
      <button class="current-sort" @click="toggleSortOrder">
        Sort: {{ sort.key }} ({{ sort.order.toUpperCase() }})
      </button>
      <table class="table__content">
        <thead>
          <tr class="table__buttons">
            <td><button @click="sortBy('firstname')">First Name</button></td>
            <td><button @click="sortBy('lastname')">Last Name</button></td>
            <td><button @click="sortBy('age')">Age</button></td>
            <td><button @click="sortBy('city')">City</button></td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="row in alphabeticalSort">
            <td v-for="value in row">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const tableData = `[{ "firstname": "Marte", "lastname": "Abrahamsen", "age": 24, "city": "Trondheim" }, { "firstname": "Ellie", "lastname": "Abrha", "age": 23, "city": "Oslo" }, { "firstname": "Kristine", "lastname": "Strømme", "age": 24, "city": "Oslo" }, { "firstname": "Ole", "lastname": "Hansen", "age": 45, "city": "Bergen" }, { "firstname": "Karen", "lastname": "Lund", "age": 16, "city": "Stavanger" }, { "firstname": "Marie", "lastname": "Nilsen", "age": 11, "city": "Moss" }, { "firstname": "Ola", "lastname": "Nordmann", "age": 52, "city": "Oslo" }, { "firstname": "Kari", "lastname": "Nordmann", "age": 51, "city": "Oslo" }, { "firstname": "Ane", "lastname": "Åker", "age": 34, "city": "Telemark" }]`;

export default {
  data() {
    return {
      sort: {
        key: "name",
        order: "asc",
      },
      content: JSON.parse(tableData),
    };
  },

  created() {
    const query = this.$route.query;

    if (query.sort) {
      this.sort.key = query.sort;
    }

    if (query.order) {
      this.sort.order = query.order;
    }
  },

  computed: {
    alphabeticalSort() {
      const key = this.sort.key;
      const orderValue = this.sort.order === "asc" ? 1 : -1;

      function compareFunction(a, b) {
        if (a[key] > b[key]) {
          return 1;
        } else if (a[key] < b[key]) {
          return -1;
        } else {
          return 0;
        }
      }

      return this.content.sort((a, b) => compareFunction(a, b) * orderValue);
    },

    /*naturalSort() {
      const key = this.sort.key;
      const orderValue = this.sort.order === "asc" ? 1 : -1;

      function compareFunction(a, b) {
        a = a[key].toString();
        b = b[key].toString();

        return a.localCompare(b, undefined, { numeric: true });
      }

      return this.content.sort((a, b) => compareFunction(a, b) * orderValue);
    },*/
  },

  methods: {
    sortBy(key) {
      this.sort.key = key;
      this.$router.push({
        query: { ...this.$route.query, sort: this.sort.key },
      });
    },

    /*toggleSortOrder() {
      this.sort.key = this.sort.order === "asc" ? "desc" : "asc";
      this.$router.push({
        query: { ...this.$route.query, order: this.sort.order },
      });
    },*/
  },
};
</script>

<style>
.table-container {
  width: 30vw;
  height: 60vh;
  padding: 1em;
}

.table {
  position: relative;
  border-collapse: collapse;
  border-radius: 1em;
  height: 100%;
  width: 100%;
}
.table thead {
  font-weight: bold;
  width: 100%;
}

.table__content {
  display: flex;
  position: relative;
  justify-content: space-evenly;
  margin-top: 10px;
  width: 100%;
  text-align: center;
  color: white;
}

.table tbody {
  margin-top: 15px;
  font-size: 0.8em;
}

.table td {
  padding: 0.5em;
  border-radius: 0.5em;
}

.table__buttons {
  text-align: center;
  background: lightblue;
}

.table button {
  border: none;
  background: transparent;
  font-size: 0.9em;
}

.current-sort {
  margin: 10px 0 0 10px;
  width: 100%;
  font-weight: bold;
  color: white;
  font-size: 1em;
  background: transparent;
}
</style>