<template lang="html">
<div class="container">
    <div class="form form-login m-auto loginFormDiv ">
        <div class="card logsignupFormCard">
            <div class="row">
                <div class="col-md-12 mt-0">
                    <div class="form">
                        <div class="row">
                            <div class="col-md-5 rightSideCardContainer leftsideloginDiv">
                                <div class="contentDiv">
                                    <div class="cardContent">
                                        <div class="col d-none d-lg-flex border-start align-items-center justify-content-between flex-column text-center leftsidecontentDiv ">
                                            <div class="logo">
                                                <router-link to="/" class="Logo">
                                                    <img width="180" :src="src" alt="Ecommerce">
                                                </router-link>
                                            </div>
                                            <div>
                                                <h3 class="fw-bold">Welcome to Ecommerce!</h3>
                                                <p class="lead my-2">Already have an account?</p>
                                                <router-link to="/login" class="btn btn-primary mb-5 mt-8 circularfield">Login Here</router-link>
                                            </div>
                                            <router-link to="/privacy-policy" class="privacyitem mt-0">Privacy Policy</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 leftSideCardContainer rightsideloginDiv regsideloginDiv">
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
                                                    <h1 class="display-8 text-center">Sign Up</h1>
                                                    <p class="text-muted text-center">Sign up to Ecommerce to continue</p>
                                                    <div class="form-row text-center ml-8">
                                                        <div class="row userSelectionshown">
                                                            <div class="col-md-6">
                                                                <input type="radio" value="Customer" id="radioOne" name="checkUserRole" checked />
                                                                <label for="radioOne" class="radio">Customer</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <input type="radio" value="Supplier" id="radioTwo" name="checkUserRole" />
                                                                <label for="radioTwo" class="radio">Supplier</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-rows p-t-no">
                                                    <div class="form-row">
                                                        <input name="name" type="text" v-model="form.name" id="name" class=" input-control inputField circularfield" placeholder="Name">
                                                        <div class="validator error" v-for="error of v$.form.name.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <input name="username" type="text" v-model="form.username" id="username" class=" input-control inputField circularfield" placeholder="Username">
                                                        <div class="validator error" v-for="error of v$.form.username.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <input name="email" type="text" v-model="form.email" id="email" class=" input-control inputField circularfield" placeholder="Your Email Address">
                                                        <div class="validator error" v-for="error of v$.form.email.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <input v-if="showPassword" type="text" name="password" class="input-control inputField circularfield" id="password" placeholder="Password" v-model="form.password" />
                                                        <input v-else type="password" class="input-control inputField circularfield" name="password" placeholder="Password" id="password" v-model="form.password">
                                                        <div class="eyeIcon2 mt-3" @click="toggleShow">
                                                            <span class="icon is-small is-right">
                                                                <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showPassword" />
                                                                <font-awesome-icon :icon="['fas', 'eye']" v-if="showPassword" />
                                                            </span>
                                                        </div>
                                                        <div class="validator error" v-for="error of v$.form.password.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <input v-if="showConfirmPassword" type="text" class="form-control inputField circularfield" id="confirmpswd" name="confirmpswd" v-model="form.confirmpassword" placeholder="Confirm Password" />
                                                        <input v-else type="password" class="input-control inputField circularfield" id="confirmpswd" v-model="form.confirmpassword" name="confirmpswd" placeholder="Confirm Password" />
                                                        <div class="eyeIcon2 mt-3" @click="toggleShowConfirmpswd">
                                                            <span class="icon is-small is-right mt-3">
                                                                <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showConfirmPassword" />
                                                                <font-awesome-icon :icon="['fas', 'eye']" v-if="showConfirmPassword" />
                                                            </span>
                                                        </div>
                                                        <div class="validator error" v-for="error of v$.form.confirmpassword.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <input type="submit" name="submitbtn" value="SIGN UP" id="submitbtn" class="btn btn-primary block circularfield" @click.prevent="handleRegistration">
                                                    </div>
                                                </div>
                                                <p class="text-center d-block d-lg-none mt-0 mt-lg-0">
                                                    Already have an account?<router-link to="/login" class="linkText">Login</router-link>.
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
    minLength,
    maxLength,
    integer,
    email,
    sameAs
} from '@vuelidate/validators'
export default {
    name: 'SignUpComponent',
    components: {},
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    computed: {
        buttonLabel() {
            return (this.showPassword) ? "Hide" : "Show";
        }
    },
    data: () => ({
        src: require('@/assets/img/ecom-logo.png'),
        usertype: '',
        role_id: null,
        value: null,
        form: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
        showPassword:false,
        showConfirmPassword:false,
        FORM_REQUIRED_FIELD: 'This field is required',
        FORM_CONFIRM_PASSWORD_FIELD: 'Confirm Password is required'
    }),
    validations() {
        return {
            form: {
                name: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                username: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                password: {
                    minLength: minLength(8),
                    maxLength: maxLength(12),
                    containsPasswordRequirement: helpers.withMessage(
                        () => `(Minimum of 8 character long) must include at least \
    - One uppercase letter,
    - One lowercase letter, 
    - One number, 
    - One symbol (such as @, #, $, %, etc.).`,
                        (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
                    ),
                },
                confirmpassword: {
                    required: helpers.withMessage(this.FORM_CONFIRM_PASSWORD_FIELD, required),
                    sameAsPassword: helpers.withMessage(
                        "Confirm password must be same as password.",
                        sameAs(this.form.password)
                    )
                },
                email: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    containEmail: helpers.withMessage(
                        () => `Not Valid Format`,
                        email
                    ),
                }
            },
        }
    },
    methods: {
        async handleRegistration() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                return
            }
            let formData = new FormData();
            if (this.usertype == 'Customer') {
                this.role_id = 3;
                formData.append('role_id', this.role_id);
            } else {
                this.role_id = 2;
                formData.append('role_id', this.role_id);
            }
            formData.append('name', this.form.name);
            formData.append('username', this.form.username);
            formData.append('email', this.form.email);
            formData.append('password', this.form.password);
            formData.append('confirmpassword', this.form.confirmpassword);
            const headers = {
                'Content-Type': 'multipart/form-data',
            }
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/register', formData, {
                headers
            }).then((resp) => {
                this.$swal({
                    icon: 'success',
                    title: 'User registered successfully!',
                    showConfirmButton: true,
                    confirmButtonColor: 'rgb(2 145 2)',
                }).then(() => {
                    this.form.name = '';
                    this.form.username = '';
                    this.form.email = '';
                    this.form.password = '';
                    this.form.confirmpassword = '';
                    this.$router.push({
                        path: 'login'
                    });
                })
            }).catch((error) => {
                if(error.response.data.data){
                if (error.response.data.data.username) {
                    if (error.response.data.data.username[0] = 'The username has already been taken.') {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Username Already Exist',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.form.username = "";
                        })
                    }
                }
                if (error.response.data.data.email) {
                    if (error.response.data.data.email[0] = 'The email has already been taken.') {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Email Id Already Exist',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.form.email = "";
                        })
                    }
                }}
            });
        },
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        toggleShowConfirmpswd() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
    },
    mounted() {
        this.usertype = document.querySelector('input[name="checkUserRole"]:checked').value;
        document.querySelectorAll("input[name='checkUserRole']").forEach((input) => {
            input.addEventListener('change', (e) => {
                this.usertype = e.target.defaultValue;
            });
        });
    }
};
</script>

<style lang="scss" scoped></style>
