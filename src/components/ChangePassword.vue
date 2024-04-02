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
                                                <p class="lead my-2 mb-0">Change you password and continue login....</p>
                                            </div>
                                            <router-link to="/privacy-policy" class="privacyitem mt-8">Privacy Policy</router-link>
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
                                                        <img width="120" :src="src" alt="Ecommerce">
                                                    </router-link>
                                                </div>
                                                <div class="text-center text-lg-start">
                                                    <h1 class="display-8 text-center">Change Password</h1>
                                                    <p class="text-muted text-center">
                                                        To reset your password, enter your OTP which has been sent to your Cellphone number or
                                                        Email and create a new password.
                                                    </p>
                                                </div>
                                                <div class="form-rows p-t-no">
                                                    <div class="form-row">
                                                        <input name="otp" type="text" v-model="form.otp" maxlength="10" id="otp" class="form-control inputField circularfield" placeholder="Enter OTP">
                                                        <div class="validator error" v-for="error of v$.form.otp.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <input v-if="showPassword" type="text" name="newpassword" class="form-control inputField circularfield" id="newpassword" placeholder="Enter New Password" v-model="form.newpassword" />
                                                        <input v-else type="password" class="form-control inputField circularfield" name="newpassword" placeholder="Enter New Password" id="newpassword" v-model="form.newpassword">
                                                        <div class="eyeIcon3 mt-4" @click="toggleShow">
                                                            <span class="icon is-small is-right">
                                                                <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showPassword" />
                                                                <font-awesome-icon :icon="['fas', 'eye']" v-if="showPassword" />
                                                            </span>
                                                        </div>
                                                        <div class="validator error" v-for="error of v$.form.newpassword.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <input v-if="showConfirmPassword" type="text" class="form-control inputField circularfield" id="confirmpassword" name="confirmpassword" v-model="form.confirmpassword" placeholder="Confirm Password" />
                                                        <input v-else type="password" class="form-control inputField circularfield" id="confirmpassword" v-model="form.confirmpassword" name="confirmpassword" placeholder="Confirm Password" />
                                                        <div class="eyeIcon3 mt-4" @click="toggleShowConfirmpswd">
                                                            <span class="icon is-small is-right">
                                                                <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showConfirmPassword" />
                                                                <font-awesome-icon :icon="['fas', 'eye']" v-if="showConfirmPassword" />
                                                            </span>
                                                        </div>
                                                        <div class="validator error" v-for="error of v$.form.confirmpassword.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                    <div class="form-row text-small">
                                                    </div>
                                                    <div class="form-row">
                                                        <input type="submit" name="submitbtn" value="CHANGE PASSWORD" id="submitbtn" class="btn btn-primary block circularfield" @click.prevent="changePassword">
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
</template>

<script>
import {
    useVuelidate
} from '@vuelidate/core'
import {
    required,
    minLength,
    maxLength,
    integer,
    helpers,
    sameAs
} from '@vuelidate/validators'
export default {
    name: 'ForgetPswdMessageComponent',
    props: {
        emailget: {
            type: String
        }
    },
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
        showPassword: false,
        showConfirmPassword: false,
        src: require('@/assets/img/ecom-logo.png'),
        form: {
            otp: '',
            newpassword: '',
            confirmpassword: '',
        },
        FORM_REQUIRED_FIELD: 'This field is required',
        FORM_CONFIRM_PASSWORD_FIELD: 'Confirm Password is required'
    }),
    validations() {
        return {
            form: {
                otp: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                },
                newpassword: {
                    minLength: minLength(8),
                    maxLength: maxLength(12),
                    containsPasswordRequirement: helpers.withMessage(
                        () => `(Minimum of 8 character long) must include at least
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
                        sameAs(this.form.newpassword)
                    )
                },
            }
        }
    },
    methods: {
        async changePassword() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                return;
            }
            let formData = new FormData();
            formData.append('otp', this.form.otp);
            formData.append('email', localStorage.getItem('email'));
            formData.append('password', this.form.newpassword);
            const headers = {
                'Content-Type': 'multipart/form-data',
            }
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/reset-password', formData, {
                    headers
                }).then((resp) => {
                    if (resp.data.message = 'OTP is valid') {
                        this.$swal({
                            icon: 'success',
                            title: 'Password Reset',
                            html: '<h5>Your password is reset.</h5>',
                            showConfirmButton: true,
                            confirmButtonColor: 'rgb(2 145 2)',
                        }).then(() => {
                            this.form.otp = "";
                            this.$router.push({
                                name: 'login'
                            });
                        })
                    }
                })
                .catch((error) => {
                    if (error.response.data.message == 'Validation Error.') {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'The otp must not be greater than 6 characters.',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.form.otp = "";
                        });
                        return;
                    }
                    if (error.response.data.message == 'OTP does not exist') {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'OTP does not exist.',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.form.otp = "";
                        });
                        return;
                    }
                    if (error.response.data.message == 'OTP is not valid') {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Invalid OTP.',
                            html: '<h5>Your otp is invalid, now you can resend the otp.</h5>',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.form.otp = "";
                            this.$router.push({
                                name: 'forgetpswd'
                            });
                        });
                    }
                })
        },
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        toggleShowConfirmpswd() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
    },
    mounted() {}
}
</script>
