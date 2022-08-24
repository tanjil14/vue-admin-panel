<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Header @drawerEvent="drawer = !drawer" />
    <Sidebar :drawer="drawer" />
    <v-main style="background: #f5f5f5">
      <v-container class="py-8 px-6" fluid>
        <div class="dashboard">
          <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>Dashboard</h3>
            <v-btn color="success"> View Orders </v-btn>
          </v-subheader>
          <br />
          <v-row>
            <v-col lg="7" cols="12">
              <v-alert dense text type="success">
                Login Successfully! Welcome to <strong>Dashboard</strong>
              </v-alert>
              <v-row>
                <v-col
                  cols="12"
                  lg="6"
                  v-for="(item, index) in activityLog"
                  :key="index"
                >
                  <v-card elevation="2" class="rounded-lg">
                    <v-card-text
                      class="d-flex justify-space-between align-center"
                    >
                      <div>
                        <strong>{{ item.title }}</strong> <br />
                        <span>Last 3 weeks</span>
                      </div>
                      <v-avatar
                        size="60"
                        :color="item.color"
                        style="border: 3px solid #444"
                      >
                        <span style="color: white">{{ item.amount }} +</span>
                      </v-avatar>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="5">
              <v-card>
                <v-card-title> Activities </v-card-title>
                <v-card-text class="py-0">
                  <v-timeline align-top dense>
                    <v-timeline-item color="indigo" small>
                      <strong>5 Minuts ago</strong>
                      <div class="text-caption">
                        You have new order please check this out
                      </div>
                    </v-timeline-item>
                    <v-timeline-item color="green" small>
                      <strong>35 Minuts ago</strong>
                      <div class="text-caption mb-2">
                        A Product has delivered!
                      </div>
                    </v-timeline-item>
                    <v-timeline-item color="indigo" small>
                      <strong>44 Minuts ago</strong>
                      <div class="text-caption">
                        You have new order please check this out
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card>
                <v-data-table
                  caption="Recent Order list"
                  :headers="headers"
                  :items="desserts"
                  :items-per-page="5"
                  class="elevation-1"
                >
                  <template v-slot:item.action="">
                    <v-btn color="success" outlined small shaped> View </v-btn>
                  </template></v-data-table
                >
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data: () => ({
    drawer: null,
    cards: ["Today", "Yesterday"],
    activityLog: [
      {
        title: "Total Products",
        amount: 50,
        icon: "mdi-account",
        color: "cyan lighten-3",
      },
      {
        title: "Total Customer",
        amount: 3433,
        icon: "mdi-account-group-outline",
        color: "green darken-2",
      },
      {
        title: "Total Sale",
        amount: 3433,
        icon: "mdi-account-group-outline",
        color: "blue-grey darken-1",
      },
      {
        title: "Pending Orders",
        amount: 3433,
        icon: "mdi-account-group-outline",
        color: "deep-orange darken-1",
      },
    ],
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
      { text: "Actions", value: "action" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ],
  }),
  components: { Header, Sidebar },
};
</script>

<style></style>
<!-- <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-subheader>{{ card }}</v-subheader>
              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item :key="n">
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row> -->
