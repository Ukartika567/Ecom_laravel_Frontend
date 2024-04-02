<template>
<LoaderComponent v-if="this.loader" />
<div class="werehouseContainer">
    <div class="form">
        <section class="widget widget-white accountdWidget">
            <div class="werehousetitleDiv">
                <h3>{{this.$route.query.user}} Details</h3>
            </div>
            <div class="widget-body" style="padding: 30px;">
                <div class="form-rows p-t-no">
                    <form class="row">
                        <!-- <div class="row infoDiv mb-0 ml-0">
                            <label for="photo" class="col-sm-4 col-form-label">
                                Your Photo
                                <p>This will displayed on your profile.</p>
                            </label>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-md-6 divimg">
                                        <div v-if="this.images.length > 0">
                                            <div v-for="(image, index) in this.images" :key="index">
                                                <img :src="image" alt=""  width="70" height="70" class="proimg m-r-40px" @click="showImg(index)">
                                            </div>
                                        </div>
                                        <div v-else>
                                            <img :src="`${this.srcimage + 'uploads/profiles_pictures/' + this.profilepic}`" alt="user" class="proimg m-r-40px" width="70" height="70">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="widget-footer clearfix form-row changebtn">
                                            <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="margin-top:-5px;font-size:12px !important;">Cancel</router-link>
                                            <label for="imgBox" class="btn pull-right saveprofile" style="position: relative;">Upload
                                                image</label>
                                            <input multiple capture type="file" id="imgBox" class="btn pull-right saveprofile" accept="image/*" style="visibility: hidden;" @change="changeImage">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <div class="row infoDiv mb-0 ml-0">
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <input type="text" class="form-control proinpfield" id="name" v-model="form.name">
                                <label for="name" class="">Name</label>
                                <div v-if="this.showerror">
                                    <div class="validator error" v-for="error of v$.form.name.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <input type="text" class="form-control proinpfield" id="username" v-model="form.username">
                                <label for="username">Username</label>
                                <div v-if="this.showerror">
                                    <div class="validator error" v-for="error of v$.form.username.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <span>Gender</span>
                                <div class="row">
                                    <div class="col-nd-6">
                                        <input type="radio" value="M" id="male" name="checkGender" :checked="this.form.gender== 'M'" />
                                        <label for="male" class="radio">Male</label>
                                    </div>
                                    <div class="col-nd-6" style="left:-80px !important">
                                        <input type="radio" value="F" id="female" name="checkGender" :checked="this.form.gender == 'F'" />
                                        <label for="female" class="radio">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <input type="text" class="form-control proinpfield" id="mobile" v-model="form.mobile">
                                <label for="mobile">Mobile</label>
                                <div v-if="this.showerror">
                                    <div class="validator error" v-for="error of v$.form.mobile.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <input type="text" class="form-control proinpfield" id="email" v-model="form.email">
                                <label for="email">Email</label>
                                <div v-if="this.showerror">
                                    <div class="validator error" v-for="error of v$.form.email.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <Datepicker v-model="form.dob" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="datepick" class="inputField proinpfield dobpicker" />
                                <label for="dob">Date-Of-Birth</label>
                                <div class="validator error" v-for="error of v$.form.dob.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>

                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-5">
                                <span class="infoboxhead">Manage Address</span>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <input type="text" class="form-control proinpfield" id="addr" v-model="form.addr">
                                <label for="addr">Address</label>
                                <div class="validator error" v-for="error of v$.form.addr.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <input type="text" class="form-control proinpfield" id="zipcode" v-model="form.zipcode">
                                <label for="zipcode">ZipCode</label>
                                <div class="validator error" v-for="error of v$.form.zipcode.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <input type="text" class="form-control proinpfield" id="city" v-model="form.city">
                                <label for="city">City</label>
                                <div class="validator error" v-for="error of v$.form.city.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <input type="text" class="form-control proinpfield" id="state" v-model="form.state">
                                <label for="state">State</label>
                                <div class="validator error" v-for="error of v$.form.state.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                <input type="text" class="form-control proinpfield" id="country" v-model="form.country">
                                <label for="country">Country</label>
                                <div class="validator error" v-for="error of v$.form.country.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                            </div>

                            <div class="row infoDiv mb-0 ml-5">
                                <div class="widget-footer clearfix form-row changebtn mt-0">
                                    <!-- <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="font-size: 12px !important;">Cancel</router-link> -->
                                    <input type="submit" name="submitbtn" value="Update Info" id="submitbtn" class="btn pull-right saveprofile" @click.prevent="updateInfo">
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                <span class="infoboxhead">Manage Password</span>
                            </div>
                            <div class="row col-md-12 mb-4 changepswddiv mt-3" v-if="changepswdform">
                                <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                                    <input type="otp" class="form-control proinpfield" id="otp" v-model="changepasswordform.otp">
                                    <label for="otp">OTP</label>
                                    <div v-if="this.showerror">
                                        <div class="validator error" v-for="error of v$.changepasswordform.otp.$errors" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                                    <input v-if="showPassword" type="text" class="form-control proinpfield" id="newpassword" v-model="changepasswordform.newpassword" />
                                    <input v-else type="password" class="form-control proinpfield" id="newpassword" v-model="changepasswordform.newpassword">
                                    <!-- <input type="password" class="form-control proinpfield" 
                                                                                id="newpassword" v-model="changepasswordform.newpassword"> -->
                                    <label for="newpassword">NewPassword</label>
                                    <div class="eyeIcon" @click="toggleShow">
                                        <span class="icon is-small is-right">
                                            <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showPassword" />
                                            <font-awesome-icon :icon="['fas', 'eye']" v-if="showPassword"/>
                                        </span>
                                    </div>
                                    <div v-if="this.showerror">
                                        <div class="validator error" v-for="error of v$.changepasswordform.newpassword.$errors" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                                    <input v-if="showConfirmPassword" type="text" class="form-control proinpfield" id="cpassword" v-model="changepasswordform.cpassword" />
                                    <input v-else type="password" class="form-control proinpfield" id="cpassword" v-model="changepasswordform.cpassword">
                                    <label for="cpassword">ConfirmPassword</label>
                                    <div class="eyeIcon" @click="toggleShowConfirmpswd">
                                        <span class="icon is-small is-right">
                                            <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showConfirmPassword" />
                                            <font-awesome-icon :icon="['fas', 'eye']" v-if="showConfirmPassword" />
                                        </span>
                                    </div>
                                    <div v-if="this.showerror">
                                        <div class="validator error" v-for="error of v$.changepasswordform.cpassword.$errors" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row infoDiv mb-0 ml-0 pswddiv col-md-12 mb-0 mt-3" v-if="resetpswdform">
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <input type="text" class="form-control proinpfield" id="email" v-model="resetpasswordform.email">
                                    <label for="email">Email</label>
                                    <div v-if="this.showerror">
                                        <div class="validator error" v-for="error of v$.resetpasswordform.email.$errors" :key="error.$uid">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <input type="submit" name="submitbtn" value="Reset Password" id="submitbtn" 
                                    class="btn saveprofile" v-if="resetpswdform" @click.prevent="resetpassword">

                                    <!-- <input v-if="showPassword" type="text" class="form-control proinpfield" id="password" v-model="resetpasswordform.password" />
                                    <input v-else type="password" class="form-control proinpfield" id="password" v-model="resetpasswordform.password">
                                    <label for="password">Password</label>
                                    <div class="eyeIcon" @click="toggleShow">
                                        <span class="icon is-small is-right">
                                            <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showPassword" />
                                            <font-awesome-icon :icon="['fas', 'eye']" v-if="showPassword" />
                                        </span>
                                    </div> -->

                                </div>
                            </div>
                        </div>

                        <div class="row infoDiv mb-0 ml-5">
                            <div class="widget-footer clearfix form-row changebtn mt-0">
                                <!-- <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" 
                                style="font-size: 12px !important;" v-if="resetpswdform">Cancel</router-link> -->

                                <!-- <input type="submit" name="submitbtn" value="Reset Password" id="submitbtn" 
                                class="btn pull-right saveprofile" v-if="resetpswdform" @click.prevent="resetpassword"> -->

                                <button type="button" class="btn btn-default pull-left mr-3 cancelprofile" 
                                style="font-size: 12px !important;"
                                 @click.prevent="cancelresetpassword" v-if="changepswdform">Cancel</button>

                                <input type="submit" name="submitbtn" value="Update Password" id="submitbtn"
                                 class="btn pull-right saveprofile" v-if="changepswdform" @click.prevent="changepassword">
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div class="ps-form__submit text-center col-12 mt-0 controlBtnDiv">
                    <span class="icon-arrow-left backarrow ml-4 mt-0" @click="backtoparent">&nbsp;Back</span>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import {
    useVuelidate
} from '@vuelidate/core';
import {
    required,
    helpers,
    minLength,
    maxLength,
    integer,
    email,
    sameAs
} from '@vuelidate/validators';
import {
    ref
} from 'vue';
export default {
    name: 'EditUserPageComponent',
    components: {LoaderComponent},
    props: {
        visible: {
            type: String
        },
    },
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
        srcimage:process.env.VUE_APP_SET_PATH,
        loader:false,
        changepswdform: false,
        resetpswdform: true,
        showPassword: false,
        showerror: false,
        showConfirmPassword: false,
        resetpasswordform: {
            email: '',
        },
        changepasswordform: {
            otp: null,
            cpassword: '',
            newpassword: '',
            cpassword: ''
        },
        form: {
            name: '',
            username: '',
            gender:'',
            email: '',
            mobile: '',
            addr: '',
            zipcode: null,
            city: '',
            state: '',
            country: '',
            dob: '',
        },
        files: ref(''),
        FORM_REQUIRED_FIELD: 'This field is required',
        FORM_CONFIRM_PASSWORD_FIELD: 'Confirm Password is required',
        images: [],
        imgs: '',
        storeimages: []
    }),
    validations() {
        return {
            resetpasswordform: {
                email: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    containEmail: helpers.withMessage(
                        () => `Not Valid Format`,
                        email
                    ),
                }
            },
            changepasswordform: {
                otp: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                    maxLength: maxLength(6),
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
                cpassword: {
                    required: helpers.withMessage(this.FORM_CONFIRM_PASSWORD_FIELD, required),
                    sameAsPassword: helpers.withMessage(
                        "Confirm password must be same as password.",
                        sameAs(this.changepasswordform.newpassword)
                    )
                },
            },
            form: {
                name: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                username: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                email: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    containEmail: helpers.withMessage(
                        () => `Not Valid Format`,
                        email
                    ),
                },
                dob: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                mobile: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                    minLength: minLength(10),
                    maxLength: maxLength(12),
                },
                addr: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                city: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                state: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                country: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                zipcode: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                    minLength: minLength(6),
                    maxLength: maxLength(6),
                },
            },
        }
    },
    methods: {
        removeImage(index) {
            this.images.splice(index, 1)
            this.certificate.splice(index, 1)
            this.license.splice(index, 1),
            this.financialcertificate.splice(index, 1),
            this.bankletter.splice(index, 1),
            this.businessref.splice(index, 1),
            this.qualitystandard.splice(index, 1)
        },
        getUserProfile() {
            let user_id = this.$route.query.id;
            let token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token,
            }
            this.loader = true;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/get-profile/${user_id}`, {
                    headers
                })
                .then((response) => {
                    if(response.status == 200){
                    this.loader = false;
                    var userdata = response.data.user;
                    this.form.name =  userdata[0].name;
                    this.form.username =  userdata[0].username;
                    this.form.email =  userdata[0].email;
                    this.form.gender = userdata[0].userprofile.gender;
                    this.form.mobile =  userdata[0].userprofile.mobile;
                    this.form.addr =  userdata[0].userprofile.address;
                    this.form.zipcode =  userdata[0].userprofile.zipcode;
                    this.form.city =  userdata[0].userprofile.city;
                    this.form.state =  userdata[0].userprofile.state;
                    this.form.country =  userdata[0].userprofile.country;
                    this.form.dob =  new Date(userdata[0].userprofile.date_of_birth);
                    this.resetpasswordform.email = userdata[0].email;
                    }
                }).catch((error) => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404  || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                    this.$router.push({
                                    name: 'home'
                                });
                            } 
                        }
                    }
                    else{
                        if(error.message == "Network Error"){
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                    this.$router.push({
                                    name: 'home'
                                });
                            } 
                        }
                    }
                });
        },
        async resetpassword() {
            const result = await this.v$.resetpasswordform.$validate();
            if (result == false) {
                this.showerror = true;
                return;
            }
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('email', this.resetpasswordform.email);
            const headers = {
                'Authorization': 'Bearer' + token,
                'Content-Type': 'multipart/form-data',
            }
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/send-otp-with-token', formData, {
                    headers
                }).then((resp) => {
                    localStorage.setItem('email', this.resetpasswordform.email);
                    this.loader = false;
                    this.$swal({
                        icon: 'success',
                        title: 'OTP Send',
                        html: '<h5>OTP has been sent to your given email address.</h5>',
                        showConfirmButton: true,
                        confirmButtonColor: 'rgb(2 145 2)',
                    }).then(() => {
                        this.resetpswdform = false;
                        this.changepswdform = true;
                    })
                })
                .catch((error) => {
                    if (error.response.data.message == 'Call to a member function notify() on null') {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'You are not registered.',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.resetpasswordform.email = "";
                        });
                        return;
                    }
                });
        },
        async changepassword() {
            const result = await this.v$.changepasswordform.$validate();
            if (result == false) {
                this.showerror = true;
                return;
            }
            let token = localStorage.getItem('token');
            let email = localStorage.getItem('email');
            let formData = new FormData();
            formData.append('otp', this.changepasswordform.otp);
            formData.append('email', email);
            formData.append('password', this.changepasswordform.newpassword);
            const headers = {
                'Authorization': 'Bearer' + token,
                'Content-Type': 'multipart/form-data',
            }
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/reset-password-with-token', formData, {
                    headers
                }).then((resp) => {
                    this.loader = false;
                    this.showerror = false;
                    if (resp.data.message = 'OTP is valid') {
                        this.$swal({
                            icon: 'success',
                            title: 'Password Reset',
                            html: '<h5>Your password is reset.</h5>',
                            showConfirmButton: true,
                            confirmButtonColor: 'rgb(2 145 2)',
                        }).then(() => {
                            this.changepasswordform.otp = "";
                            this.changepasswordform.newpassword = "";
                            this.changepasswordform.cpassword = "";
                            this.resetpswdform = true;
                            this.changepswdform = false;
                            this.getUserProfile();
                        });
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
                            this.changepasswordform.otp = "";
                            this.loader = false;
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
                            this.changepasswordform.otp = "";
                            this.loader = false;
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
                            this.changepasswordform.otp = "";
                            this.loader = false;
                        });
                    }
                })
        },
        cancelresetpassword() {
            this.resetpswdform = true;
            this.changepasswordform.newpassword = "";
            this.changepasswordform.cpassword = "";
            this.changepswdform = false;
        },
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        toggleShowConfirmpswd() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
        backtoparent() {
            this.$router.back();
        },
        async updateInfo() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                this.showerror = true;
                return;
            }
            var user_id;
            if( this.$route.query.id){
                user_id = this.$route.query.id;
            }
            let dob = document.getElementById('datepick').value;
            let token = localStorage.getItem('token');
            var gender = "";
            if (document.querySelector('input[name="checkGender"]:checked')) {
                gender = document.querySelector('input[name="checkGender"]:checked').value;
            }
            let formData = new FormData();
            formData.append('user_id', user_id);
            formData.append('name', this.form.name);
            formData.append('username', this.form.username);
            formData.append('email', this.form.email);
            formData.append('gender', gender);
            formData.append('mobile', this.form.mobile);
            formData.append('date_of_birth', dob);
            formData.append('address', this.form.addr);
            formData.append('zipcode', this.form.zipcode);
            formData.append('city', this.form.city);
            formData.append('state', this.form.state);
            formData.append('country', this.form.country);
            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/update-profile/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    this.loader = false;
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Profile Updated Successfully!',
                        showConfirmButton: true,
                        timer: 5000
                    }).then(() => {
                        this.showerror = false;
                        this.getUserProfile();
                    })
                }).catch((error) => {
                    if(error.response){
                        if (error.response.data.data) {
                            if (error.response.data.data.mobile) {
                                if (error.response.data.data.mobile[0] == 'The mobile has already been taken.') {
                                    this.$swal.fire({
                                        icon: 'error',
                                        title: error.response.data.data.mobile[0],
                                        showConfirmButton: true,
                                        timer: 5000
                                    }).then(() => {
                                        this.form.mobile = "";
                                        this.loader=false;
                                    });
                                }
                            }
                            if (error.response.data.data.email) {
                                if (error.response.data.data.email[0] == 'The email has already been taken.') {
                                    this.$swal.fire({
                                        icon: 'error',
                                        title: error.response.data.data.email[0],
                                        showConfirmButton: true,
                                        timer: 5000
                                    }).then(() => {
                                        this.form.email = "";
                                        this.loader=false;
                                    });
                                }
                            }
                            if (error.response.data.data.username) {
                                if (error.response.data.data.username[0] == 'The username has already been taken.') {
                                    this.$swal.fire({
                                        icon: 'error',
                                        title: error.response.data.data.username[0],
                                        showConfirmButton: true,
                                        timer: 5000
                                    }).then(() => {
                                        this.form.username = "";
                                        this.loader=false;
                                    });
                                }
                            }
                            if (error.response.data.data.gender) {
                                if (error.response.data.data.gender[0] == 'The gender field is required.') {
                                    this.$swal.fire({
                                        icon: 'error',
                                        title: 'Please select gender.',
                                        showConfirmButton: true,
                                        timer: 5000
                                    }).then(() => {
                                        this.form.gender = "";
                                        this.loader=false;
                                    });
                                }
                            }
                        }
                    }
                });
        },
    },
    mounted() {
        this.getUserProfile();
    },
}
</script>

<style lang="scss" scoped></style>
