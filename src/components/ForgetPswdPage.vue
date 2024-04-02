<template>
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
                                                <p class="lead my-2 mb-0">You can now
                                                </p>
                                                <div class="mt-0 text-center">
                                                    <router-link to="/login" class="btn btn-primary mb-5 mt-8 mr-3 circularfield" style="border-radius: 5px !important; font-size: 12px !important; vertical-align: baseline !important;">Log In</router-link>
                                                    <span class="text-center mr-3 orText">or</span>
                                                    <router-link to="/register" class="btn btn-primary mb-5 mt-8 circularfield" style="border-radius: 5px !important; font-size: 12px !important; vertical-align: baseline !important;">Create an account</router-link>
                                                </div>
                                            </div>
                                            <router-link to="/privacy-policy" class="privacyitem mt-0">Privacy Policy</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 leftSideCardContainer rightsideloginDiv">
                                <div class="contentDiv">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-md-10 offset-md-1">
                                                <div class="d-block d-lg-none text-center text-lg-start">
                                                    <router-link to="/" class="Logo">
                                                    <img width="180" :src="src" alt="Ecommerce">
                                                    </router-link>
                                                </div>
                                                <div class="text-center text-lg-start">
                                                    <h1 class="display-8 text-center">Reset Password</h1>
                                                    <p class="text-muted text-center">
                                                        To reset your password,
                                                        enter your cellular phone number or Email in the textbox below and
                                                        click on submit.
                                                    </p>
                                                </div>
                                                <div class="form-rows p-t-no">
                                                    <div class="form-row">
                                                        <input name="restpswd" type="text" v-model="form.email" id="restpswd" class="form-control inputField circularfield mb-0" placeholder="Phone Number or Email">
                                                        <div class="validator error" v-for="error of v$.form.email.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row"></div>
                                                    <div class="form-row text-small">
                                                    </div>
                                                    <div class="form-row">
                                                        <input type="submit" name="submitbtn" value="SUBMIT" id="submitbtn" class="btn btn-primary block circularfield" @click.prevent="handleSubmit()">
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
    </div>
</div>
<template>
</template>
</template>

<script>
import {
    useVuelidate
} from '@vuelidate/core'
import {
    required,
    integer,
    minLength,
    maxLength,
    helpers,
    email,
} from '@vuelidate/validators'
export default {
    name: 'LoginPage',
    components: {
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data: () => ({
        showModal: false,
        src: require('@/assets/img/ecom-logo.png'),
        form: {
            email: '',
        },
        FORM_REQUIRED_FIELD: 'This field is required',
    }),
    validations() {
        return {
            form: {
                email: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    containEmail: helpers.withMessage(
                        () => `Not Valid Format`,
                        email
                    ),
                },
            }
        }
    },
    methods: {
        async handleSubmit() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                return;
            }
            let formData = new FormData();
            formData.append('email', this.form.email);
            const headers = {
                'Content-Type': 'multipart/form-data',
            }
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/send-otp', formData, {
                headers
            }).then((resp) => {
                localStorage.clear();
                localStorage.setItem('email', this.form.email);
                this.$swal({
                    icon: 'success',
                    title: 'OTP Send',
                    html: '<h5>OTP has been sent to your given email address.</h5>',
                    showConfirmButton: true,
                    confirmButtonColor: 'rgb(2 145 2)',
                }).then(() => {
                    this.form.email="";
                    this.$router.push({
                        name: 'changepassword'
                    })
                })
            })
            .catch((error)=>{
                    if (error.response.data.message == 'Call to a member function notify() on null') {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'You are not registered.',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.form.email = "";
                        }); 
                        return;
                    }
                });
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped></style>
