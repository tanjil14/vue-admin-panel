<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="mt-10 elevation-6">
          <v-row>
            <v-col cols="12" sm="6" class="blue rounded-br-xl">
              <div style="text-align: center; padding: 180px 0">
                <v-card-text class="white--text">
                  <h3 class="text-center">Already Signed up?</h3>
                  <h6 class="text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br />
                    Ab adipisci fugit totam accusamus obcaecati blanditiis?
                  </h6>
                </v-card-text>
                <div class="text-center">
                  <router-link to="/login" style="text-decoration: none"
                    ><v-btn tile outlined dark>Log in</v-btn></router-link
                  >
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card-text class="mt-12">
                <h4 class="text-center">Sign up for an Account</h4>
                <h6 class="text-center grey--text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  Laborum, maxime. Assumenda, voluptatibus?
                </h6>
                <v-row align="center" justify="center">
                  <v-col cols="12" sm="8">
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="First Name"
                          outlined
                          dense
                          color="blue"
                          aria-autocomplete="false"
                          class="mt-4"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Last Name"
                          outlined
                          dense
                          color="blue"
                          aria-autocomplete="false"
                          class="mt-4"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-text-field
                      label="Email"
                      outlined
                      dense
                      color="blue"
                      aria-autocomplete="false"
                    ></v-text-field>
                    <v-text-field
                      label="Password"
                      outlined
                      dense
                      color="blue"
                      type="password"
                      aria-autocomplete="false"
                    ></v-text-field>
                    <v-row>
                      <v-col cols="12" sm="7">
                        <v-checkbox
                          label="I Accept ATC."
                          class="mt-n1"
                          color="blue"
                        >
                        </v-checkbox>
                      </v-col>
                      <v-col cols="12" sm="5">
                        <span class="caption blue--text ml-n4"
                          >Terms & Conditions</span
                        >
                      </v-col>
                    </v-row>
                    <v-btn color="blue" dark block tile @click="submit">
                      Sign up
                    </v-btn>
                    <h5 class="text-center grey--text mt-4 mb-3">
                      Or Sign up using
                    </h5>
                    <div
                      class="d-flex justify-space-between align-center mx-10 mb-7"
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
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignUp",
  methods: {
    submit() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
