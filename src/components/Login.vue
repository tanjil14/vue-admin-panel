<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login in to your account!</h4>
                    <h6 class="text-center grey--text">
                      Log in to your account so you can continue building
                      <br />and editing your onboarding flows.
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                        >
                        </v-text-field>
                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        >
                        </v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Remember Me"
                              class="mt-n1"
                              color="blue"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text"
                              >Forget password</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn class="blue" dark block tile> Log-in </v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          Or Log in using
                        </h5>
                        <div
                          class="d-flex justify-space-between align-center mx-10 mb-16"
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google </v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook </v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3">
                              fab fa-twitter</v-icon
                            >
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="blue rounded-bl-xl">

                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      step: 1,
    };
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
