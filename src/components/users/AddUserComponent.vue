<template lang="html">
<LoaderComponent v-if="this.loader" />
<div class="werehouseContainer">
    <div class="form">
        <section class="widget widget-white accountdWidget">
            <div class="werehousetitleDiv" v-if="this.$route.query.user=='Customer'">
                <h3>Register Customer</h3>
            </div>
            <div class="werehousetitleDiv" v-if="this.$route.query.user=='Supplier'">
                <h3>Register Supplier</h3>
            </div>
            <div class="widget-body" style="padding: 30px;">
                <div class="form-rows p-t-no">
                    <form class="row">
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4   mb-4">
                            <input type="text" class="form-control inputField circularfield" name="name" v-model="form.name" id="name">
                            <label for="name" class="form-label">Name</label>
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.form.name.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4  mb-4">
                            <input type="text" class="form-control inputField circularfield" name="uname" v-model="form.username" id="uname">
                            <label for="uname" class="form-label">Username</label>
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.form.username.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-12 col-md-4 col-lg-4   mb-4">
                            <input type="text" class="form-control inputField circularfield" id="email" name="email" v-model="form.email">
                            <label for="email" class="form-label">Email</label>
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.form.email.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4  mb-4">
                            <input type="text" class="form-control inputField circularfield" id="pswd" name="pswd" v-model="form.password">
                            <label for="pswd" class="form-label">Password</label>
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.form.password.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4  mb-4">
                            <input type="text" class="form-control inputField circularfield" id="confirmpswd" name="confirmpswd" v-model="form.confirmpassword">
                            <label for="confirmpswd" class="form-label">Confirm Password</label>
                            <div v-if="this.showerror">
                                <div class="validator error" v-for="error of v$.form.confirmpassword.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="ps-form__submit text-center col-12 mt-5 controlBtnDiv">
                    <span class="icon-arrow-left backarrow ml-4 mt-2" @click="backtoparent">&nbsp;Back</span>
                    <button type="button" class="ps-btn ps-btn--gray mr-3 cancelbtn" style="font-size:12px" @click.prevent="resetfield">Cancel</button>
                    <button type="submit" class="ps-btn success addCustbtn" @click.prevent="Adduser">Add</button>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import useVuelidate from '@vuelidate/core'
import {
    helpers,
    required,
    minLength,
    maxLength,
    integer,
    email,
    sameAs
} from '@vuelidate/validators'
export default {
    name: 'AddUserPageComponent',
    components: { 
        LoaderComponent
    },
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
    data: () => ({
        loader:false,
        form: {
            name:'',
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
        FORM_REQUIRED_FIELD: 'This field is required',
        FORM_CONFIRM_PASSWORD_FIELD: 'Confirm Password is required',
        usertype:'',
        role_id:null,
        showerror:false
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
                email: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    containEmail: helpers.withMessage(
                        () => `Not Valid Format`,
                        email
                    ),
                },
                password: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
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
                        sameAs(this.form.password)
                    )
                },
            },
        }
    },
    methods: {
        resetfield(){
            this.form.name ='';
            this.form.username= '';
            this.form.email= '';
            this.form.password= '';
            this.form.confirmpassword= '';
        },
        async Adduser() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                this.showerror = true;
                return
            }
            let user = this.$route.query.user;
            let token = localStorage.getItem('token');
            if(user == 'Customer'){
                this.role_id = 3;
            }else{
                this.role_id = 2;
            }
            let formData = new FormData();
            formData.append('role_id', this.role_id);
            formData.append('name', this.form.name);
            formData.append('username', this.form.username);
            formData.append('email', this.form.email);
            formData.append('password', this.form.password);
            formData.append('confirmpassword', this.form.confirmpassword);
            const headers = {
                'Authorization':'Bearer '+ token,
                'Content-Type': 'multipart/form-data',
            }
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/register-user-with-token', formData, {
                headers
            }).then((resp) => {
                if(resp.status == 200){
                    this.loader = false;
                    this.showerror = false;
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
                    });
                }
            }).catch((error) => {
                if(error.response){
                    if (error.response.data.data){
                        if (error.response.data.data.username) {
                            if (error.response.data.data.username[0] = 'The username has already been taken.') {
                                this.$swal.fire({
                                    icon: 'error',
                                    title: 'Username Already Exist',
                                    showConfirmButton: true,
                                    timer: 5000
                                }).then(() => {
                                    this.form.username = "";
                                    this.loader = false;
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
                                    this.loader = false;
                                })
                            }
                        }
                        if (error.response.data.status === 'Token is Expired' && (error.response.status == 401 || error.response.status == 404)) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
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
        backtoparent() {
            this.$router.back();
        },
    },
    mounted() {
    }
};
</script>

<style lang="scss" scoped></style>
