<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-row>
            <v-col cols="12" sm="6">
              <v-card-text class="mt-12">
                <h4 class="text-center">Login in to your account!</h4>
                <h6 class="text-center grey--text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  <br />
                  Repellat porro quo eius.
                </h6>
                <v-row align="center" justify="center">
                  <v-col cols="12" sm="8">
                    <form>
                      <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                          required
                          :rules="emailRules"
                          v-model="email"
                        >
                        </v-text-field>
                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                          :rules="passRules"
                          v-model="password"
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
                        <v-btn class="blue" dark block tile @click="submit">
                          Log-in
                        </v-btn>
                      </v-form>
                    </form>
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
              <div style="text-align: center; padding: 180px 0">
                <v-card-text class="white--text">
                  <h3 class="text-center">Don't Have an Account Yet?</h3>
                  <h6 class="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Ipsa eligendi numquam neque tempore debitis blanditiis.
                  </h6>
                </v-card-text>
                <div class="text-center">
                  <router-link style="text-decoration: none" to="/signup"
                    ><v-btn tile outlined dark> SIGNUP</v-btn></router-link
                  >
                </div>
              </div>
            </v-col>
          </v-row>
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
      valid: true,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    submit() {
      const errors = this.$refs.form.validate();
      if (errors) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
</style>
