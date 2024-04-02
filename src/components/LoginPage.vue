<template lang="html">
<div class="container">
    <div class="form form-login m-auto loginFormDiv ">
        <div class="card logsignupFormCard">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-lg-12 mt-0">
                    <div class="form">
                        <div class="row">
                            <div class="col-md-5 col-sm-5 col-lg-5 rightSideCardContainer leftsideloginDiv">
                                <div class="contentDiv">
                                    <div class="">
                                        <div class="col d-none d-lg-flex border-start align-items-center 
                                        justify-content-between flex-column text-center leftsidecontentDiv ">
                                            <div class="logo">
                                                <router-link to="/" class="Logo">
                                                    <img width="180" :src="src"  alt="Ecommerce">
                                                </router-link>
                                            </div>
                                            <div>
                                                <h3 class="fw-bold">Welcome to Ecommerce!</h3>
                                                <p class="lead my-2 mb-0">If you don't have an account, would you like to register right now?</p>
                                                <router-link to="/register" class="btn btn-primary mb-5 mt-8 circularfield">Sign Up</router-link>
                                            </div>
                                            <router-link to="/privacy-policy" class="privacyitem mt-0">Privacy Policy</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 col-sm-7 col-lg-7 leftSideCardContainer rightsideloginDiv">
                                <div class="contentDiv">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-md-10 offset-md-1">
                                                <div class="d-block d-lg-none text-center text-lg-start">
                                                    <router-link to="/" class="Logo">
                                                    <img width="120" :src="src" alt="Ecommerce">
                                                    </router-link>
                                                </div>
                                                <div class="text-center text-lg-start">
                                                    <h1 class="display-8 text-center">Log In</h1>
                                                    <p class="text-muted text-center">Log in to Ecommerce to continue</p>
                                                </div>
                                                <div class="form-rows p-t-no">
                                                    <div class="form-row">
                                                        <input name="usernameoremail" type="text" v-model="form.usernameoremail" id="usernameoremail" class="form-control inputField circularfield" placeholder="Username or email">
                                                        <div class="validator error" v-for="error of v$.form.usernameoremail.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row passwordDiv">
                                                        <input v-if="showPassword" type="text" class="form-control inputField circularfield" id="password" placeholder="Password" v-model="form.password" />
                                                        <input v-else type="password" class="form-control inputField circularfield" placeholder="Password" id="password" v-model="form.password">
                                                        <div class="eyeIcon3 mt-4" @click="toggleShow">
                                                            <span class="icon is-small is-right">
                                                                <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showPassword" />
                                                                <font-awesome-icon :icon="['fas', 'eye']" v-if="showPassword" />
                                                            </span>
                                                        </div>
                                                        <div class="validator error" v-for="error of v$.form.password.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row text-small">
                                                    </div>
                                                    <div class="form-row">
                                                        <input type="submit" name="submitbtn" value="LOGIN" id="submitbtn" class="btn btn-primary block circularfield" @click.prevent="handleLogin">
                                                    </div>
                                                    <div class="text-center text-lg-start">
                                                        <p class="small">Can't access your account? <router-link to="/forget-password" class="linkText">Reset your password now?</router-link>.</p>
                                                    </div>
                                                </div>
                                                <p class="text-center d-block d-lg-none mt-0 mt-lg-0">
                                                    Don't have an account? <router-link to="/register" class="linkText">Sign up</router-link>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    useVuelidate
} from '@vuelidate/core'
import {
    required,
    helpers,
} from '@vuelidate/validators'
export default {
    name: 'LoginPage',
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    computed: {
        buttonLabel() {
            return (this.showPassword) ? "Hide" : "Show";
        },
    },
    data: () => ({
        showPassword: false,
        src: require('@/assets/img/ecom-logo.png'),
        form: {
            usernameoremail: '',
            password: '',
        },
        FORM_REQUIRED_FIELD: 'This field is required',
    }),
    validations() {
        return {
            form: {
                usernameoremail: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                password: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                }
            }
        }
    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        async handleLogin() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                return
            }
            let formData = new FormData();
            formData.append('usernameoremail', this.form.usernameoremail);
            formData.append('password', this.form.password);
            await this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/login', formData)
                .then((response) => {
                    if (response.status == 200 && response.data.success == true) {
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("loginid", response.data.user.id);
                        localStorage.setItem("name", response.data.user.name);
                        localStorage.setItem("username", response.data.user.username);
                        localStorage.setItem("userType", response.data.usertype[0].type);
                            if (response.data.usertype[0].type === 'Customer') {
                                if(this.$route.query.flag && this.$route.query.flag ==='requestquote'){
                                    this.$router.push({
                                      'path':'/suppSpecific',
                                      query:{
                                        flag:'requestquote'
                                      }
                                    })
                                }
                                else if(this.$route.query.flag && this.$route.query.flag === 'requestquote-by-home'){
                                    this.$router.push({
                                      'path':'/buyer/create-new-quote',
                                      query:{
                                        flag:'requestquote-by-home'
                                      }
                                    })
                                }
                                else{
                                    this.$router.push({
                                       name: 'buyerdashboard'
                                    });
                                }
                            }
                            if (response.data.usertype[0].type === 'Supplier') {
                                this.$router.push({
                                    name: 'vendorpersonalinfo'
                                });
                            }
                            if (response.data.usertype[0].type === 'Admin') {
                                this.$router.push({
                                    name: 'adminpersonalinfo'
                                });
                            }
                    } else {
                        alert(response.data.message);
                    }
                })
                .catch(error => {
                    if (error.message == "Network Error") {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Network Error!',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {});
                    }
                    if (error.message === "Request failed with status code 404") {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Invalid Credential',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.form.usernameoremail = "";
                            this.form.password = "";
                        });
                    }
                });
        },
    }
};
</script>

<style lang="scss" scoped></style>
