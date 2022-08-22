<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-navigation-drawer v-model="drawer" app>
    <div class="d-flex flex-column mb-6 justify-center align-center my-5">
      <v-img src="../assets/avatar.png" class="mb-2" height="100" width="100"/>
      <div>john@vuetifyjs.com</div>
    </div>

    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="[icon, text] in links" :key="icon" link>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  data() {
    return {
      links: [
        ["mdi-microsoft-windows", "Dashboard"],
        ["mdi-account", "Profile"],
        ["mdi-clipboard-list-outline", "Product"],
        ["mdi-order-bool-ascending", "Order"],
        ["mdi-cog-outline", "System Settings"],
      ],
    };
  },
};
</script>

<style></style>
