<template lang="html">
<LoaderComponent v-if="this.loader" />
<div class="werehouseContainer">
    <div class="form col-sm-12 col-12">
        <section class="accountdWidget">
            <div class="widget-body accountwidgetBody">
                <div class="form-rows pt-0">
                    <div class="row">
                        <div class="col-md-12 mt-0">
                            <div class="form">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-12 p-0 bg-white" style="border-top-left-radius: 25px;">
                                                <!-- <div class="accountbg probg" v-if="this.$route.path.includes('personal-info')">
                                                </div> -->
                                                <div class="row mt-0" v-if="this.$route.path.includes('personal-info') && this.user_approval_status != 'Approved'">
                                                    <div class="col-md-12">
                                                        <div class="d-flex justify-content-between">
                                                            <div class="">
                                                            </div>
                                                            <div class="profiletextdiv policyInfoDiv"> 
                                                                <marquee direction="left" scrollamount="10">
                                                                    <p class="m-0">To activate your account, kindly agree to our 
                                                                        <router-link to="/vendor/term-and-conditions">Terms & Conditions</router-link> &
                                                                         <router-link to="/vendor/quality-and-certifications">Platform Rules</router-link>.&
                                                                         <router-link to="/vendor/agreement">Supplier Agreement</router-link>.
                                                                    </p>
                                                                </marquee>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row" v-if="this.$route.path.includes('personal-info')">
                                                    <div class="col-md-12" style="margin-top: -15px;">
                                                        <div class="profiletextdiv" style="float: left;">
                                                            <span>Profile</span><br>
                                                            <p>Update your photo and personal details.</p>
                                                        </div>
                                                        <div class="profiletextdiv" :class="this.user_approval_status == 'Approved'?'profileApproved':this.user_approval_status == 'Disapproved'?'profileDisapproved':'d-none'" style="float: right;">
                                                            <span>
                                                                <img :src="profileapproved" width="35" height="35" v-if="this.user_approval_status === 'Approved'" />
                                                                <img :src="profiledisapproved" width="35" height="35" v-else />
                                                                {{this.user_approval_status}}
                                                            </span><br>
                                                            <!-- <p v-if="this.user_approval_status === 'Approved'">You profile has been approved</p> -->
                                                            <!-- <p v-else>To activate your account, kindly agree to our Terms and Conditions and Platform Rules."</p> -->
                                                        </div>
                                                    </div>
                                                    <!-- <div class="col-md-3">
                                                        <div class="widget-footer clearfix form-row changebtn mt-3"></div>
                                                    </div> -->
                                                </div>
                                                <div class="row  mt-0">
                                                    <div class="col-md-12 fieldDiv">
                                                        <div class="col mt-0" v-if="this.$route.path.includes('personal-info')">

                                                            <div class="row infoDiv mb-0 ml-0">
                                                                <label for="photo" class="col-sm-4 col-form-label">
                                                                    Your Photo
                                                                    <p>This will displayed on your profile.</p>
                                                                </label>
                                                                <div class="col-sm-6">
                                                                    <div class="row">
                                                                        <div class="col-md-4 divimg">
                                                                            <div v-if="this.images.length > 0">
                                                                                <div v-for="(image, index) in this.images" :key="index">
                                                                                    <img :src="image" alt="admin" v-if="this.usertype == 'Admin'" width="70" height="70" class="proimg m-r-40px" @click="showImg(index)">
                                                                                    <img :src="image" alt="Vendor" v-if="this.usertype == 'Supplier'" width="70" height="70" class="proimg m-r-40px" @click="showImg(index)">
                                                                                </div>
                                                                            </div>
                                                                            <div v-else>
                                                                                <img :src="`${this.srcimage + 'uploads/profiles_pictures/' + this.profilepic}`" v-if="this.usertype == 'Admin'" alt="Admin" class="proimg m-r-40px" width="70" height="70">
                                                                                <img :src="`${this.srcimage + 'uploads/profiles_pictures/' + this.profilepic}`" v-else-if="this.usertype == 'Supplier'" alt="Vendor" class="proimg m-r-40px" width="70" height="70">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <!-- <div class=" clearfix changebtn">
                                                                                <router-link class="btn btn-default mr-0 cancelprofile" to="#" 
                                                                                style="margin-top:-5px !important;font-size:12px !important;">Cancel</router-link>

                                                                                <label for="prodimage" class="btn saveprofile" style="position: relative; padding: 7px !important;margin-top: 15px 
                                                                                !important">Upload
                                                                                    image</label>
                                                                                <input multiple capture type="file" id="prodimage" class="btn pull-right saveprofile"
                                                                                 accept="image/*" style="visibility: hidden;" @change="changeImage">
                                                                            </div> -->
                                                                            <div class="clearfix form-row changebtn mb-0">
                                                                                <router-link class="btn btn-default mr-0 cancelprofile" to="#" style="margin-top:-5px;font-size:12px !important;">Cancel</router-link>

                                                                                <label for="imgBox" class="btn pull-right saveprofile" style="position: relative;padding: 7px !important;margin-top: 15px 
                                                                                !important">Upload
                                                                                    image</label>
                                                                                <input multiple capture type="file" id="imgBox" class="btn pull-right saveprofile" accept="image/*" style="visibility: hidden;" @change="changeImage">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row infoDiv mb-0 ml-0">
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-2">
                                                                    <input type="text" class="form-control proinpfield" id="name" v-model="form.name">
                                                                    <label for="name" class="">Name</label>
                                                                    <div v-if="this.showerror">
                                                                        <div class="validator error" v-for="error of v$.form.name.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-2">
                                                                    <input type="text" class="form-control proinpfield" id="username" v-model="form.username">
                                                                    <label for="username">Username</label>
                                                                    <div v-if="this.showerror">
                                                                        <div class="validator error" v-for="error of v$.form.username.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-2">
                                                                    <span>Gender</span>
                                                                    <div class="row">
                                                                        <div class="col-nd-6">
                                                                            <input type="radio" value="M" id="male" name="checkGender" :checked="this.gender == 'M'" />
                                                                            <label for="male" class="radio">Male</label>
                                                                        </div>
                                                                        <div class="col-nd-6" style="left:-80px !important">
                                                                            <input type="radio" value="F" id="female" name="checkGender" :checked="this.gender == 'F'" />
                                                                            <label for="female" class="radio">Female</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row infoDiv mb-0 ml-0">
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-2">
                                                                    <input type="text" class="form-control proinpfield" id="mobile" v-model="form.mobile">
                                                                    <label for="mobile">Mobile</label>
                                                                    <div class="validator error" v-for="error of v$.form.mobile.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-2">
                                                                    <input type="text" class="form-control proinpfield" id="email" v-model="form.email">
                                                                    <label for="email">Email</label>
                                                                    <div class="validator error" v-for="error of v$.form.email.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-2" v-if="this.usertype == 'Admin' || this.usertype == 'Supplier'">
                                                                    <Datepicker v-model="form.dob" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="datepick" class="inputField proinpfield dobpicker" />
                                                                    <label for="dob">Date-Of-Birth</label>
                                                                    <div class="validator error" v-for="error of v$.form.dob.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-2">
                                                                    <input type="text" class="form-control proinpfield" id="addr" v-model="form.addr">
                                                                    <label for="addr">Address</label>
                                                                    <div class="validator error" v-for="error of v$.form.addr.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-2">
                                                                    <input type="text" class="form-control proinpfield" id="zipcode" v-model="form.zipcode">
                                                                    <label for="zipcode">ZipCode</label>
                                                                    <div class="validator error" v-for="error of v$.form.zipcode.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-2">
                                                                    <input type="text" class="form-control proinpfield" id="city" v-model="form.city">
                                                                    <label for="city">City</label>
                                                                    <div class="validator error" v-for="error of v$.form.city.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-2">
                                                                    <input type="text" class="form-control proinpfield" id="state" v-model="form.state">
                                                                    <label for="state">State</label>
                                                                    <div class="validator error" v-for="error of v$.form.state.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    <input type="text" class="form-control proinpfield" id="country" v-model="form.country">
                                                                    <label for="country">Country</label>
                                                                    <div class="validator error" v-for="error of v$.form.country.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-8">
                                                                <div class="row infoDiv infoBtnDiv mb-0 ml-0" style="margin-top:-15px !important">
                                                                    <div class="col-md-4 d-flex mt-0">
                                                                        <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="font-size: 12px !important;">Cancel</router-link>
                                                                        <input type="submit" name="submitbtn" value="Update Info" id="submitbtn" class="btn pull-right saveprofile" @click.prevent="updateInfo">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row ml-5 mt-0 mb-2">
                                                                <span class="infoboxhead">Manage Password</span>
                                                            </div>
                                                            <div class="changepswddiv" v-if="changepswdform">
                                                                <div class="row infoDiv mb-0 ml-0">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="otp" class="form-control proinpfield" id="otp" v-model="changepasswordform.otp">
                                                                        <label for="otp">OTP</label>
                                                                        <div class="validator error" v-for="error of v$.changepasswordform.otp.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input v-if="showPassword" type="text" class="form-control proinpfield" id="newpassword" v-model="changepasswordform.newpassword" />
                                                                        <input v-else type="password" class="form-control proinpfield" id="newpassword" v-model="changepasswordform.newpassword">
                                                                        <label for="newpassword">NewPassword</label>
                                                                        <div class="eyeIcon" @click="toggleShow">
                                                                            <span class="icon is-small is-right">
                                                                                <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showPassword" />
                                                                                <font-awesome-icon :icon="['fas', 'eye']" v-if="showPassword" />
                                                                            </span>
                                                                        </div>
                                                                        <div class="validator error" v-for="error of v$.changepasswordform.newpassword.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input v-if="showConfirmPassword" type="text" class="form-control proinpfield" id="cpassword" v-model="changepasswordform.cpassword" />
                                                                        <input v-else type="password" class="form-control proinpfield" id="cpassword" v-model="changepasswordform.cpassword">
                                                                        <label for="cpassword">ConfirmPassword</label>
                                                                        <div class="eyeIcon" @click="toggleShowConfirmpswd">
                                                                            <span class="icon is-small is-right">
                                                                                <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showConfirmPassword" />
                                                                                <font-awesome-icon :icon="['fas', 'eye']" v-if="showConfirmPassword" />
                                                                            </span>
                                                                        </div>
                                                                        <div class="validator error" v-for="error of v$.changepasswordform.cpassword.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row infoDiv mb-0 ml-0 pswddiv" v-if="resetpswdform">
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    <input type="text" class="form-control proinpfield" id="email" v-model="resetpasswordform.email">
                                                                    <label for="email">Email</label>
                                                                    <div class="validator error" v-for="error of v$.resetpasswordform.email.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    <input v-if="showPassword" type="text" class="form-control proinpfield" id="password" v-model="resetpasswordform.password" />
                                                                    <input v-else type="password" class="form-control proinpfield" id="password" v-model="resetpasswordform.password">

                                                                    <label for="password">Password</label>
                                                                    <div class="eyeIcon" @click="toggleShow">
                                                                        <span class="icon is-small is-right">
                                                                            <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!showPassword" />
                                                                            <font-awesome-icon :icon="['fas', 'eye']" v-if="showPassword" />
                                                                        </span>
                                                                    </div>
                                                                    <div class="validator error" v-for="error of v$.resetpasswordform.password.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-8">
                                                                <div class="row infoDiv infoBtnDiv mb-0 ml-0 pswddiv">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0 d-flex flex-row">
                                                                        <router-link class="btn btn-default mr-3 cancelprofile" to="#" style="font-size: 12px !important;" v-if="resetpswdform">Cancel</router-link>

                                                                        <router-link class="btn btn-default mr-3 cancelprofile" to="#" style="font-size: 12px 
                                                                        !important;" @click="cancelresetpassword" v-if="changepswdform">Cancel</router-link>
                                                                        <input type="submit" name="submitbtn" value="Reset Password" id="submitbtn" class="btn 
                                                                        pull-right saveprofile" @click.prevent="resetpassword" v-if="resetpswdform">
                                                                        <input type="submit" name="submitbtn" value="Change Password" id="submitbtn" class="btn 
                                                                        pull-right saveprofile" @click.prevent="changepassword" v-if="changepswdform">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row ml-5 mt-0 mb-2">
                                                                <span class="infoboxhead">Manage Bank Details</span>
                                                            </div>
                                                            <div class="row infoDiv mb-0 ml-0">
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    <input type="text" class="form-control proinpfield" id="accttype" v-model="bankdetail.accttype">
                                                                    <label for="accttype">Account type</label>
                                                                    <div class="validator error" v-for="error of v$.bankdetail.accttype.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    <input type="text" class="form-control proinpfield" id="acctno" v-model="bankdetail.acctno">
                                                                    <label for="acctno">Account Number</label>
                                                                    <div class="validator error" v-for="error of v$.bankdetail.acctno.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    <input type="text" class="form-control proinpfield" id="bankcode" v-model="bankdetail.bankcode">
                                                                    <label for="bankcode">Bank Code</label>
                                                                    <div class="validator error" v-for="error of v$.bankdetail.bankcode.$errors" :key="error.$uid">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-8">
                                                                <div class="row infoDiv infoBtnDiv mb-0 ml-0">
                                                                    <div class="col-md-4 d-flex mt-0">
                                                                        <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="font-size: 12px !important;">Cancel</router-link>
                                                                        <input type="submit" name="submitbtn" value="Update Bank Info" id="submitbtn" class="btn pull-right saveprofile" @click.prevent="updateBankInfo">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="" v-if="this.$route.path.includes('/vendor/personal-info')">
                                                                <!--catsubprodDiv  infoDiv statementDiv ticketDiv-->
                                                                <div class="row ml-5 mt-0 mb-2">
                                                                    <span class="infoboxhead">Add Category/Subcategory/Product</span>
                                                                </div>
                                                                <div class="row infoDiv mb-0 ml-0">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <SingleChipsDropdown v-model="prodform.category" :options="this.categoryoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                                                                            groupmultiselect singleSelectdropdown" optionValue="value" id="catDropdown" style="margin: 1px !important;" @change="catChange($event)" />
                                                                        <div class="select__arrow unitdropdownIcon"></div>
                                                                        <label for="prodcategory">Select Category</label>
                                                                        <div v-if="this.showerror">
                                                                            <div class="validator error" v-for="error of v$.prodform.category.$errors" :key="error.$uid">
                                                                                {{ error.$message }}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <SingleChipsDropdown v-model="prodform.subcategory" :options="this.subcategoryoptions" @click.stop optionLabel="title" filter class="select select-sm proinpfield w-full md:w-20rem 
                                                                            groupmultiselect singleSelectdropdown" optionValue="value" id="subCatDropdown" style="margin: 1px !important;" @change="subChange($event)" />
                                                                        <div class="select__arrow unitdropdownIcon"></div>
                                                                        <label for="subCatDropdown">Select
                                                                            SubCategory</label>
                                                                        <div v-if="this.showerror">
                                                                            <div class="validator error" v-for="error of v$.prodform.subcategory.$errors" :key="error.$uid">
                                                                                {{ error.$message }}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0 dropdownSingleSelect">
                                                                        <ChipsMultiSelect v-model="prodform.product" display="chip" :options="this.productoptions" filter optionLabel="title" :maxSelectedLabels="this.productoptions.length" class="select select-sm proinpfield w-full md:w-20rem" style="margin: 1px; !important" />
                                                                        <div class="select__arrow dropdownIcom" style="right: 25px !important;">
                                                                        </div>
                                                                        <label for="productDropdown">Product Name</label>
                                                                        <div v-if="this.showerror">
                                                                            <div class="validator error" v-for="error of v$.prodform.product.$errors" :key="error.$uid">
                                                                                {{ error.$message }}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-5">
                                                                        <div class="row infoDiv infoBtnDiv mb-0 ml-0" style="margin-top:-10px !important">
                                                                            <div class="col-md-4 d-flex mt-0">
                                                                                <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="font-size: 12px !important;" @click.prevent="cancelAddprod">Cancel</router-link>
                                                                                <input type="submit" name="submitbtn" value="Add Product" id="submitbtn" class="btn pull-right saveprofile" @click.prevent="addCatSubprod">
                                                                            </div>
                                                                            <div class="col-12 col-sm-12 col-lg-8 col-md-8 infoText" v-if="this.prodadded">
                                                                                <span>Please repeat the process to add products under another
                                                                                    subcategory.</span>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div v-if="this.$route.path.includes('/vendor/business-info')">
                                                            <div class="col mt-5 companyInfoDiv">
                                                                <div class="row infoDiv mb-2 ml-0">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="companyname" v-model="companyform.companyname">
                                                                        <label for="companyname">Company Name</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.companyname.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="contactpersonname" v-model="companyform.contactpersonname">
                                                                        <label for="contactpersonname">Contact Person Name</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.contactpersonname.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="companyaddr" v-model="companyform.companyaddr">
                                                                        <label for="companyaddr">Business
                                                                            Address</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.companyaddr.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row infoDiv mb-4 ml-0">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="companyemail" v-model="companyform.companyemail">
                                                                        <label for="companyemail">Contact Email</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.companyemail.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="companyphone" v-model="companyform.companyphone">
                                                                        <label for="companyphone">Phone Number</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.companyphone.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    </div>
                                                                </div>
                                                                <div class="row infoDiv mb-0 ml-0 pswddiv">
                                                                </div>
                                                            </div>
                                                            <div class="col mt-0">
                                                                <div class="row ml-5 mt-0 mb-2">
                                                                    <span class="infoboxhead">Business
                                                                        Information</span>
                                                                </div>
                                                                <div class="row infoDiv mb-2 ml-0">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="businessname" v-model="companyform.businessname">
                                                                        <label for="businessname" class="">Legal
                                                                            Business Name</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.businessname.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="businesstype" v-model="companyform.businesstype">
                                                                        <label for="businesstype">Business Type</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.businesstype.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="businessregnum" v-model="companyform.businessregnum">
                                                                        <label for="businessregnum">Business
                                                                            Registration Number</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.businessregnum.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row infoDiv mb-4 ml-0">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="taxidentifynum" v-model="companyform.taxidentifynum">
                                                                        <label for="taxidentifynum">Tax Identification
                                                                            Number</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.taxidentifynum.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    </div>
                                                                </div>

                                                                <div class="row ml-5 mt-0 mb-0">
                                                                    <span class="infoboxhead">Business
                                                                        Documentation:</span>
                                                                    <p>Please provide relevant business documentation
                                                                    </p>
                                                                </div>
                                                                <div class="row infoDiv mb-0 ml-2">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-2 d-flex flex-column" style="margin-top:-15px">
                                                                        <div classs="content">
                                                                            <spna>
                                                                                Business registration and incorporation
                                                                                certificate:
                                                                            </spna>
                                                                        </div>
                                                                        <div class="ImageDiv d-flex flex-row mt-0">
                                                                            <div class="btnDiv">
                                                                                <label for="imgBox1" class="btn pull-left saveprofile uploadbtn" style="position: relative;">Upload
                                                                                    image</label>
                                                                                <input multiple capture type="file" id="imgBox1" class="btn pull-left saveprofile" accept="image/*" style="visibility: hidden;" @change="uploadcertificate">
                                                                            </div>
                                                                            <div v-if="this.certificate.length > 0" class="d-flex flex-row">
                                                                                <div v-for="(image, index) in this.certificate" :key="index" class="mr-2">
                                                                                    <img :src="image" width="120" height="120" class="certificate m-r-40px" @click="showImg(index)">
                                                                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index, 'businessCertificate')">X</button>
                                                                                </div>
                                                                            </div>
                                                                            <div v-else>
                                                                                <img v-if="this.businessregcertificate" :src="`${this.srcimage + 'businessRegCertificate/'+this.businessregcertificate}`" width="120" height="120" class="certificate m-r-40px">
                                                                                <button v-if="this.businessregcertificate" style="color: #f00;font-size: 15px;float: right;" @click="removeImage('','businessCertificate')">X</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-4 d-flex flex-column">
                                                                        <div classs="content">
                                                                            <spna>
                                                                                Licenses and Permits:
                                                                            </spna>
                                                                        </div>
                                                                        <div class="ImageDiv d-flex flex-row mt-0">
                                                                            <div class="btnDiv">
                                                                                <label for="imgBox2" class="btn pull-left saveprofile uploadbtn" style="position: relative;">Upload
                                                                                    image</label>
                                                                                <input multiple capture type="file" id="imgBox2" class="btn pull-left saveprofile" accept="image/*" style="visibility: hidden;" @change="uploadlicense">
                                                                            </div>
                                                                            <div v-if="this.license.length > 0">
                                                                                <div v-for="(image, index) in this.license" :key="index">
                                                                                    <img :src="image" alt="admin" width="120" height="120" class="certificate m-r-40px" @click="showImg(index)">
                                                                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index, 'licenseCertificate')">X</button>
                                                                                </div>
                                                                            </div>
                                                                            <div v-else>
                                                                                <img v-if="this.licensefile" :src="`${this.srcimage + 'licenseCertificate/'+this.licensefile}`" width="120" height="120" class="certificate m-r-40px">
                                                                                <button v-if="this.licensefile" style="color: #f00;font-size: 15px;float: right;" @click="removeImage('','licenseCertificate')">X</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="row ml-5 mt-0 mb-0">
                                                                    <span class="infoboxhead">Financial
                                                                        Stability:</span>
                                                                </div>
                                                                <div class="row infoDiv mb-4 ml-2">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-0 d-flex flex-column">
                                                                        <div classs="content">
                                                                            <spna>
                                                                                Can you provide financial statements at
                                                                                year-end? (if available)

                                                                            </spna>
                                                                        </div>
                                                                        <div class="ImageDiv d-flex flex-row mt-0">
                                                                            <div class="btnDiv">
                                                                                <label for="imgBox3" class="btn pull-left saveprofile uploadbtn" style="position: relative;">Upload
                                                                                    image</label>
                                                                                <input multiple capture type="file" id="imgBox3" class="btn pull-left saveprofile" accept="image/*" style="visibility: hidden;" @change="uploadfinancialfile">
                                                                            </div>
                                                                            <div v-if="this.financialcertificate.length > 0">
                                                                                <div v-for="(image, index) in this.financialcertificate" :key="index">
                                                                                    <img :src="image" alt="admin" width="120" height="120" class="certificate m-r-40px" @click="showImg(index)">
                                                                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index, 'financialStability')">X</button>
                                                                                </div>
                                                                            </div>
                                                                            <div v-else>
                                                                                <img v-if="this.financialstability" :src="`${this.srcimage + 'financialStability/'+this.financialstability}`" width="120" height="120" class="certificate m-r-40px">
                                                                                <button v-if="this.financialstability" style="color: #f00;font-size: 15px;float: right;" @click="removeImage('','financialStability')">X</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row ml-5 mt-0 mb-0">
                                                                    <span class="infoboxhead">Bank Letter:</span>
                                                                </div>
                                                                <div class="row infoDiv mb-4 ml-2">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-0 d-flex flex-column">
                                                                        <spna>
                                                                            Are you able to provide a bank letter
                                                                            confirming your business relationship and
                                                                            financial standing?
                                                                        </spna>
                                                                        <div class="ImageDiv d-flex flex-row mt-0">
                                                                            <div class="btnDiv">
                                                                                <label for="imgBox4" class="btn pull-left saveprofile uploadbtn" style="position: relative;">Upload
                                                                                    image</label>
                                                                                <input multiple capture type="file" id="imgBox4" class="btn pull-left saveprofile" accept="image/*" style="visibility: hidden;" @change="uploadbankletter">
                                                                            </div>
                                                                            <div v-if="bankletter.length > 0">
                                                                                <div v-for="(image, index) in bankletter" :key="index">
                                                                                    <img :src="image" alt="admin" width="120" height="120" class="certificate m-r-40px" @click="showImg(index)">
                                                                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index, 'bankLetter')">X</button>
                                                                                </div>
                                                                            </div>
                                                                            <div v-else>
                                                                                <img v-if="this.bankletterfile" :src="`${this.srcimage + 'bankLetter/'+this.bankletterfile}`" width="120" height="120" class="certificate m-r-40px">
                                                                                <button v-if="this.bankletterfile" style="color: #f00;font-size: 15px;float: right;" @click="removeImage('','bankLetter')">X</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="row ml-5 mt-0 mb-0">
                                                                    <span class="infoboxhead">Business Performance
                                                                        Metrics:</span>
                                                                </div>
                                                                <div class="row infoDiv mb-4 ml-2">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-0">
                                                                        <ul class="dots">
                                                                            <li>Do you have any experience selling on
                                                                                other platforms?</li>
                                                                        </ul>
                                                                        <div class="answerdiv mt-0 mb-0">
                                                                            <div class="ans1 form-check d-flex flex-row align-center mb-1">
                                                                                <input class="form-check-input" type="radio" value="yes" :checked="this.businessperformancemetric=='yes'?true:false" name="q4ans" id="q4ans1">
                                                                                <label class="form-check-label anslabel" for="q4ans1">
                                                                                    Yes
                                                                                </label>
                                                                            </div>
                                                                            <div class="ans2 form-check d-flex flex-row align-center mb-1">
                                                                                <input class="form-check-input" type="radio" value="no" :checked="this.businessperformancemetric=='no'?true:false" name="q4ans" id="q4ans2">
                                                                                <label class="form-check-label anslabel" for="q4ans2">
                                                                                    No
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="row ml-5 mt-0 mb-0">
                                                                    <span class="infoboxhead">Business
                                                                        References:</span>
                                                                </div>
                                                                <div class="row infoDiv mb-4 ml-2">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-0">
                                                                        <ul class="dots">
                                                                            <li>Can you provide references from clients
                                                                                or partners you have worked with
                                                                                previously?
                                                                            </li>
                                                                        </ul>
                                                                        <div class="ImageDiv d-flex flex-row mt-0" style="margin-top: -10px !important;">
                                                                            <div class="btnDiv">
                                                                                <label for="imgBox6" class="btn pull-left saveprofile uploadbtn" style="position: relative;">Upload
                                                                                    image</label>
                                                                                <input multiple capture type="file" id="imgBox6" class="btn pull-left saveprofile" accept="image/*" style="visibility: hidden;" @change="uploadref">
                                                                            </div>
                                                                            <div v-if="this.businessref.length > 0">
                                                                                <div v-for="(image, index) in this.businessref" :key="index">
                                                                                    <img :src="image" alt="admin" width="120" height="120" class="certificate m-r-40px" @click="showImg(index)">
                                                                                    <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index, 'businessRef')">X</button>
                                                                                </div>
                                                                            </div>
                                                                            <div v-else>
                                                                                <img v-if="this.businessreffile" :src="`${this.srcimage + 'businessRef/'+this.businessreffile}`" width="120" height="120" class="certificate m-r-40px">
                                                                                <button v-if="this.businessreffile" style="color: #f00;font-size: 15px;float: right;" @click="removeImage('','businessRef')">X</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="row ml-5 mt-0 mb-2">
                                                                    <span class="infoboxhead">Contact
                                                                        Information:</span>
                                                                </div>
                                                                <div class="row infoDiv mb-4 ml-2">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="contactname" v-model="companyform.contactname">
                                                                        <label for="contactname">Primary Contact
                                                                            Name</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.contactname.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="email" v-model="companyform.contactemail">
                                                                        <label for="email">Email</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.contactemail.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="mobile" v-model="companyform.contactmobile">
                                                                        <label for="mobile">Phone Number</label>
                                                                        <div class="validator error" v-for="error of v$.companyform.contactmobile.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row infoDiv mb-0 ml-0 pswddiv" style="margin-top:-12px">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0 d-flex flex-row">
                                                                        <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="font-size: 12px !important;">Cancel</router-link>
                                                                        <input type="submit" name="submitbtn" value="Update Company Info" id="submitbtn" style="padding:8px 5px !important" class="btn pull-right saveprofile" @click.prevent="updateCompanyInfo">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div v-if="this.$route.path.includes('/vendor/term-and-conditions')">
                                                            <div class="col ml-0 mt-5 companyInfoDiv">
                                                                <div class="termconditionDiv">
                                                                    <div class="row infoDiv mb-2 ml-0 mr-1 statementDiv agreementDiv">
                                                                        <h3>Platform Usage Agreement</h3>
                                                                        <div class="content">
                                                                            <ul class="list-dots">
                                                                                <li>
                                                                                    Wholesale Express facilitates
                                                                                    connections between buyers and
                                                                                    suppliers, ensuring secure
                                                                                    transactions and Suppliers are
                                                                                    required to conduct all business
                                                                                    transactions and communications
                                                                                    exclusively through the platform.
                                                                                </li>
                                                                                <li>Pricing is determined on the
                                                                                    platform, and payments are processed
                                                                                    securely.
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-3 ml-0 mr-1 statementDiv agreementDiv">
                                                                        <h3> Supplier Guidelines</h3>
                                                                        <div class="content">
                                                                            <ul class="list-dots">
                                                                                <li>
                                                                                    Suppliers are responsible for
                                                                                    accurate product information,
                                                                                    quality standards, and prompt order
                                                                                    fulfillment and Suppliers should
                                                                                    possess necessary rights for listing
                                                                                    and selling products.
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row ml-5 mt-0 mb-0 agreementDiv">
                                                                    <span class="infoboxhead termconditionhead">Platform
                                                                        rules</span>
                                                                    <div class="contentDiv">
                                                                        <span>
                                                                            Welcome to Wholesale express, a platform
                                                                            dedicated to connecting suppliers and customers
                                                                            seamlessly.
                                                                            To ensure a positive experience for everyone, we
                                                                            have established the following rules and
                                                                            guidelines.
                                                                            By using our platform, you agree to abide by
                                                                            these rules:
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="termconditionDiv agreementDiv">
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>Verification and Acceptance Process:</h3>
                                                                        <div class="contentDiv childDiv" style="margin-top:-15px">
                                                                            <span>
                                                                                All products listed on Wholesale express
                                                                                go through a rigorous verification and
                                                                                acceptance process to ensure quality and
                                                                                accuracy. This process enhances security
                                                                                and provides assurance that customers
                                                                                receive the products they requested.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>Transparent Communication:</h3>
                                                                        <div class="contentDiv childDiv" style="margin-top:-15px">
                                                                            <span>
                                                                                Communication on our platform must
                                                                                remain transparent and within the
                                                                                confines of our messaging system. This
                                                                                ensures accountability and
                                                                                record-keeping for all interactions.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>Respectful Conduct:</h3>
                                                                        <div class="contentDiv childDiv">
                                                                            <span>
                                                                                Treat all platform users with respect
                                                                                and professionalism. Avoid offensive,
                                                                                discriminatory, or harassing language or
                                                                                behaviour.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>Product Listings Accuracy:</h3>
                                                                        <div class="contentDiv childDiv" style="margin-top:-15px">
                                                                            <span>
                                                                                Suppliers must provide accurate and
                                                                                detailed product information, including
                                                                                specifications, quantities, and pricing.
                                                                                Misrepresentation of products is
                                                                                strictly prohibited.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>Confidentiality and Privacy:</h3>
                                                                        <div class="contentDiv childDiv">
                                                                            <span>
                                                                                Protect the confidentiality and privacy
                                                                                of all platform users. Do not share
                                                                                personal or sensitive information
                                                                                outside the platform.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>Timely Responses:</h3>
                                                                        <div class="contentDiv childDiv">
                                                                            <span>
                                                                                Suppliers and customers are encouraged
                                                                                to respond to messages and inquiries
                                                                                promptly, facilitating efficient
                                                                                communication and transaction processes.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>Quoting and Pricing:</h3>
                                                                        <div class="contentDiv childDiv" style="margin-top:-15px">
                                                                            <span>
                                                                                Suppliers must provide quotes that
                                                                                accurately reflect the pricing and terms
                                                                                of the products. Any price changes must
                                                                                be communicated clearly and
                                                                                transparently.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>Transactional Integrity:</h3>
                                                                        <div class="contentDiv childDiv" style="margin-top:-15px">
                                                                            <span>
                                                                                All transactions must be conducted
                                                                                through the platform's payment and
                                                                                messaging systems. Avoid transactions
                                                                                outside of the platform, as they
                                                                                undermine security and transparency.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>Intellectual Property Rights:</h3>
                                                                        <div class="contentDiv childDiv">
                                                                            <span>
                                                                                Respect intellectual property rights. Do
                                                                                not list or sell products that infringe
                                                                                upon copyrights, trademarks, patents, or
                                                                                other proprietary rights.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>User-Generated Content:</h3>
                                                                        <div class="contentDiv childDiv">
                                                                            <span>
                                                                                Any content, reviews, or ratings
                                                                                submitted to the platform must be
                                                                                accurate, unbiased, and adhere to our
                                                                                guidelines.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv">
                                                                        <h3>Dispute Resolution:</h3>
                                                                        <div class="contentDiv childDiv">
                                                                            <span>
                                                                                In case of disputes, work towards
                                                                                amicable resolutions. Wholesale express
                                                                                may intervene if necessary to facilitate
                                                                                fair outcomes.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-2 ml-3 mr-1 statementDiv">
                                                                        <h3>Feedback and Suggestions:</h3>
                                                                        <div class="contentDiv childDiv">
                                                                            <span>
                                                                                We welcome feedback and suggestions for
                                                                                platform improvements. Feel free to
                                                                                reach out to our support team with your
                                                                                ideas.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row ml-5 mt-0 mb-0 footerContentDiv agreementDiv">
                                                                    <div class="contentDiv childDiv">
                                                                        <span>
                                                                            "Wholesale express is committed to maintaining a
                                                                            secure, transparent, and efficient platform for
                                                                            all users.
                                                                            These rules are in place to create a positive
                                                                            environment where suppliers and customers can
                                                                            engage confidently. Any violation of these rules
                                                                            may result in appropriate actions, including
                                                                            suspension or removal from the platform."
                                                                        </span>
                                                                        <span>
                                                                            "Thank you for choosing Wholesale express. Let's
                                                                            collaborate and grow together!
                                                                            Devon, Founder, Wholesale Express."
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="row infoDiv mb-0 ml-0 pswddiv">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4 d-flex flex-row">
                                                                        <input type="checkbox" name="termandcondition" id="termandcondCheckBox" value="agreed" class="checkbox style-2" :checked="this.termandcondition==null?false:true" />
                                                                        <label for="termandcondCheckBox" class="agreelabel">Agree</label>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <button class="ps-btn sendbtn saveprofile" id="sendbtn" style="float: right;padding:8px 5px;" @click.prevent="updateTermandCondition">Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="this.$route.path.includes('/vendor/quality-and-certifications')">
                                                            <div class="col mt-0 companyInfoDiv">
                                                                <div class="row ml-0 mt-0 mb-3">
                                                                </div>
                                                                <div class="termconditionDiv">
                                                                    <div class="row infoDiv mb-4 ml-0 mr-1 statementDiv">
                                                                        <h3>Quality Standards</h3>
                                                                        <div class="content d-flex flex-column">
                                                                            <textarea class="form-control Textareabox rounded" cols='200' placeholder="Add Quality Standards details" v-model="qualitycertificateform.qltystandard"></textarea>
                                                                            <div class="ImageDiv d-flex flex-row mt-2">
                                                                                <div class="btnDiv">
                                                                                    <label for="imgBox1" class="btn pull-left saveprofile uploadbtn" style="position: relative;">Upload
                                                                                        File</label>
                                                                                    <input multiple capture type="file" id="imgBox1" class="btn pull-left saveprofile" accept="image/*" style="visibility: hidden;" @change="uploadqualityimages">
                                                                                </div>
                                                                                <div v-if="qualitystandard.length > 0" class="d-flex flex-row">
                                                                                    <div v-for="(image, index) in qualitystandard" :key="index" class="mr-2">
                                                                                        <img :src="image" alt="admin" width="120" height="120" class="certificate m-r-40px" @click="showImg(index)">
                                                                                        <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index,'qualityStandard')">X</button>
                                                                                    </div>
                                                                                </div>
                                                                                <div v-else>
                                                                                    <img v-if="this.qltystandard" :src="`${this.srcimage + 'qltyStandrdfile/'+this.qltystandard}`" width="120" height="120" class="certificate m-r-40px">
                                                                                    <button v-if="this.qltystandard" style="color: #f00;font-size: 15px;float: right;" @click="removeImage('','qualityStandard')">X</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-0 mr-1 statementDiv">
                                                                        <h3>Certifications</h3>
                                                                        <div class="content d-flex flex-column">
                                                                            <textarea class="form-control Textareabox rounded" cols='200' v-model="qualitycertificateform.certificate" placeholder="Add Certificates details"></textarea>
                                                                            <div class="ImageDiv d-flex flex-row mt-2">
                                                                                <div class="btnDiv">
                                                                                    <label for="imgBox2" class="btn pull-left saveprofile uploadbtn" style="position: relative;">Upload
                                                                                        File</label>
                                                                                    <input multiple capture type="file" id="imgBox2" class="btn pull-left saveprofile" accept="image/*" style="visibility: hidden;" @change="uploadcertificate">
                                                                                </div>
                                                                                <div v-if="certificate.length > 0" class="d-flex flex-row">
                                                                                    <div v-for="(image, index) in certificate" :key="index" class="mr-2">
                                                                                        <img :src="image" alt="admin" width="120" height="120" class="certificate m-r-40px" @click="showImg(index)">
                                                                                        <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index, 'qltyCertificate')">X</button>
                                                                                    </div>
                                                                                </div>
                                                                                <div v-else>
                                                                                    <img v-if="this.qltycertificate" :src="`${this.srcimage + 'qltyCertificatefile/'+this.qltycertificate}`" width="120" height="120" class="certificate m-r-40px">
                                                                                    <button v-if="this.qltycertificate" style="color: #f00;font-size: 15px;float: right;" @click="removeImage('','qltyCertificate')">X</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-4 ml-0 mr-1 statementDiv">
                                                                        <h3>Return and Refund Policies</h3>
                                                                        <div>
                                                                            <ul class="list-dots">
                                                                                <li>It is determined that the product
                                                                                    was not damaged while in your
                                                                                    possession.

                                                                                </li>
                                                                                <li>The product is not different from
                                                                                    what was shipped to you.
                                                                                </li>
                                                                                <li>
                                                                                    The product is returned in original
                                                                                    condition (with
                                                                                    brand’s/manufacturer's box, MRP tag
                                                                                    intact, user manual, warranty card
                                                                                    and all the accessories there in).
                                                                                </li>

                                                                            </ul>
                                                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4 d-flex flex-row">
                                                                                <input type="checkbox" id="refundpolicyId" name="refundpolicy" value="agreed" class="checkbox style-2 mt-3" :checked="this.refundpolicy==null?false:true" />
                                                                                <label for="refundpolicyId" class="agreelabel">Agreed</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-0 ml-0 mr-1 statementDiv">
                                                                        <h3>Financial statements</h3>
                                                                        <div class="content d-flex flex-column">
                                                                            <textarea class="form-control Textareabox rounded" v-model="qualitycertificateform.financialstatement" cols='200' placeholder="Add your Financial statements details..."></textarea>
                                                                            <div class="ImageDiv d-flex flex-row mt-2">
                                                                                <div class="btnDiv">
                                                                                    <label for="imgBox13" class="btn pull-left saveprofile uploadbtn" style="position: relative;">Upload
                                                                                        File</label>
                                                                                    <input multiple capture type="file" id="imgBox13" class="btn pull-left saveprofile" accept="image/*" style="visibility: hidden;" @change="uploadfinancialfile">
                                                                                </div>
                                                                                <div v-if="financialcertificate.length > 0" class="d-flex flex-row">
                                                                                    <div v-for="(image, index) in financialcertificate" :key="index" class="mr-2">
                                                                                        <img :src="image" alt="admin" width="120" height="120" class="certificate m-r-40px" @click="showImg(index)">
                                                                                        <button style="color: #f00;font-size: 15px;float: right;" @click="removeImage(index, 'qltyFinancial')">X</button>
                                                                                    </div>
                                                                                </div>
                                                                                <div v-else>
                                                                                    <img v-if="this.financialstability" :src="`${this.srcimage + 'qltyFinancialfile/'+this.financialstability}`" width="120" height="120" class="certificate m-r-40px">
                                                                                    <button v-if="this.financialstability" style="color: #f00;font-size: 15px;float: right;" @click="removeImage('','qltyFinancial')">X</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-0 ml-0 pswddiv">
                                                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0 d-flex flex-row" style="padding-left: 0px;">
                                                                            <router-link class="btn btn-default  mr-3 cancelprofile" to="#" style="font-size: 12px !important;">Cancel</router-link>
                                                                            <input type="submit" name="submitbtn" value="Save" id="submitbtn" style="height:35px;padding-top:9px" class="btn pull-right saveprofile" @click.prevent="updateQltyStandard">
                                                                        </div>
                                                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        </div>
                                                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="this.$route.path.includes('/vendor/customer-support')">
                                                            <div class="col mt-5 companyInfoDiv">
                                                                <div class="row infoDiv mb-2 ml-0">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="custphonenumber" v-model="customersuportform.mobile">
                                                                        <label for="custphonenumber">Phone
                                                                            Number</label>
                                                                        <div class="validator error" v-for="error of v$.customersuportform.mobile.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <Calendar id="calendar-timeonly" class="form-control proinpfield" v-model="customersuportform.supporthr" timeOnly />
                                                                        <label for="custsupporthr">Support Hours</label>
                                                                        <div class="validator error" v-for="error of v$.customersuportform.supporthr.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="email" v-model="customersuportform.email">
                                                                        <label for="email">Email</label>
                                                                        <div class="validator error" v-for="error of v$.customersuportform.email.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row infoDiv mb-0 ml-0">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                        <input type="text" class="form-control proinpfield" id="supportaddr" v-model="customersuportform.supportaddr">
                                                                        <label for="supportaddr">Support Address</label>
                                                                        <div class="validator error" v-for="error of v$.customersuportform.supportaddr.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    </div>
                                                                </div>
                                                                <div class="row infoDiv mb-0 ml-0 pswddiv">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0 d-flex flex-row">
                                                                        <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="font-size: 12px !important;">Cancel</router-link>
                                                                        <input type="submit" name="submitbtn" value="Save" id="submitbtn" style="height:35px; padding-top:9px;" class="btn pull-right saveprofile" @click.prevent="updateCustomerSupport">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="this.$route.path.includes('/vendor/supplier-experience')">
                                                            <div class="col mt-5 companyInfoDiv">
                                                                <div class="row ml-5 mt-0 mb-0 infoDiv statementDiv ticketDiv">
                                                                    <h3 style="color: #000;">About Business</h3>
                                                                </div>
                                                                <div class="termconditionDiv mb-2" style="margin-top:-15px">
                                                                    <textarea class="form-control Textareabox rounded" cols='200' placeholder="Add About of Business details" v-model="suppexpform.aboutbusiness"></textarea>
                                                                </div>
                                                                <div class="row ml-5 mt-0 mb-0 infoDiv statementDiv ticketDiv">
                                                                    <h3 style="color: #000;">Customers
                                                                        served</h3>
                                                                </div>
                                                                <div class="termconditionDiv mb-2" style="margin-top:-15px">
                                                                    <textarea class="form-control Textareabox rounded" cols='200' placeholder="Add Customer Served details" v-model="suppexpform.custserved"></textarea>
                                                                </div>
                                                                <div class="row ml-5 mt-0 mb-0 infoDiv statementDiv ticketDiv">
                                                                    <h3 style="color: #000;">Testimonials
                                                                        or References</h3>
                                                                </div>
                                                                <div class="termconditionDiv mb-2" style="margin-top:-15px">
                                                                    <textarea class="form-control Textareabox rounded" cols='200' placeholder="Add Testimonials or References details" v-model="suppexpform.testimonials"></textarea>
                                                                </div>
                                                                <div class="row infoDiv mb-0 ml-0 pswddiv">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4 d-flex flex-row" style="margin-top:-15px">
                                                                        <router-link class="btn btn-default mr-3 cancelprofile" to="#" style="font-size: 12px !important;">Cancel</router-link>
                                                                        <input type="submit" name="submitbtn" value="Save" id="submitbtn" style="height:35px;padding-top:9px" class="btn pull-right saveprofile" @click.prevent="updateSuppExp">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="this.$route.path.includes('/vendor/agreement')">
                                                            <div class="col mt-5 companyInfoDiv">
                                                                <div class="row ml-5 mt-3 mb-3 agreementDiv">
                                                                    <span class="infoboxhead termconditionhead">Supplier
                                                                        Statement</span>
                                                                    <div class="contentDiv">
                                                                        <span>This Supplier Statement outlines the terms and
                                                                            conditions that govern the relationship between
                                                                            and our valued suppliers. By participating as a
                                                                            supplier on our platform, you agree to adhere to
                                                                            the following:</span>
                                                                    </div>
                                                                </div>
                                                                <div class="termconditionDiv agreementDiv">
                                                                    <div class="row infoDiv mb-4 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                        <h3>Purpose and Scope:</h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                This agreement defines the terms of
                                                                                engagement between Wholesale Express and
                                                                                its suppliers.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                        <h3>Supplier Responsibilities: </h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                Suppliers are responsible for accurate
                                                                                product information, quality standards,
                                                                                and prompt order fulfillment.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                        <h3>Platform's Role: </h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                Wholesale Express facilitates
                                                                                connections between buyers and
                                                                                suppliers, ensuring secure transactions.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                        <h3>Exclusivity and Contact:</h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                Suppliers are required to conduct all
                                                                                business transactions and communications
                                                                                exclusively through the platform.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                        <h3>Confidentiality:</h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                Suppliers must not share personal
                                                                                contact information or customer data
                                                                                outside the platform.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                        <h3>Pricing and Payment:</h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                Pricing is determined on the platform,
                                                                                and payments are processed securely.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                        <h3>Quality and Returns:</h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                Suppliers must meet defined quality
                                                                                standards, with clear guidelines for
                                                                                returns, replacements, and refunds.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                        <h3>Intellectual Property:</h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                Suppliers should possess necessary
                                                                                rights for listing and selling products.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv  d-flex flex-column">
                                                                        <h3>Termination and Suspension:</h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                The agreement can be terminated or
                                                                                suspended for violations of platform
                                                                                rules.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                        <h3>Liability and Indemnity:</h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                Parties' liabilities and indemnification
                                                                                are outlined, safeguarding Wholesale
                                                                                express from claims arising from
                                                                                products or actions.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv  d-flex flex-column">
                                                                        <h3>Governing Law and Dispute Resolution:</h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                Jurisdiction, laws, and dispute
                                                                                resolution mechanisms are established.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv  d-flex flex-column">
                                                                        <h3>Acknowledgment of Platform's Role:</h3>
                                                                        <div class="contentDiv" style="margin-top:-10px">
                                                                            <span>
                                                                                Suppliers recognize that Wholesale
                                                                                express is designed to amplify business
                                                                                opportunities.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row infoDiv mb-0 ml-0 pswddiv" style="margin-top:-15px;">
                                                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4 d-flex flex-row">
                                                                            <input type="checkbox" id="checkBoxId" name="agreement" value="agreed" class="checkbox style-2 mt-3" :checked="this.agreement==null?false:true" />
                                                                            <label for="checkBoxId" class="agreelabel">Agree</label>
                                                                        </div>

                                                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        </div>

                                                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-1">
                                                                            <button class="ps-btn sendbtn saveprofile" id="sendbtn" style="float:
                                                                            right; padding:8px 5px" @click.prevent="updateAgreement">Submit
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div v-if="this.$route.path.includes('/admin/bank-details')">
                                                            <div class="col mt-5">
                                                                <div class="row ml-5 mt-8 mb-4">
                                                                    <span class="infoboxhead">Account Holder
                                                                        Details</span>
                                                                </div>
                                                                <div class="row infoDiv mb-5 ml-3">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <input type="text" class="form-control proinpfield" id="acctholdername" v-model="bankdetail.acctholdername">
                                                                        <label for="acctholdername">Account Holder
                                                                            Name</label>
                                                                        <div class="validator error" v-for="error of v$.bankdetail.acctholdername.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <input type="text" class="form-control proinpfield" id="acctmono" v-model="bankdetail.acctmono">
                                                                        <label for="acctmono">Registered Mobile</label>
                                                                        <div class="validator error" v-for="error of v$.bankdetail.acctmono.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <input type="text" class="form-control proinpfield" id="acctadr" v-model="bankdetail.acctadr">
                                                                        <label for="acctadr">Residential Address</label>
                                                                        <div class="validator error" v-for="error of v$.bankdetail.acctadr.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row ml-5 mt-8 mb-4">
                                                                    <span class="infoboxhead">Account Details</span>
                                                                </div>
                                                                <div class="row infoDiv mb-5 ml-3">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <input type="text" class="form-control proinpfield" id="accttype" v-model="bankdetail.accttype">
                                                                        <label for="accttype">Account type</label>
                                                                        <div class="validator error" v-for="error of v$.bankdetail.accttype.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <input type="text" class="form-control proinpfield" id="acctno" v-model="bankdetail.acctno">
                                                                        <label for="acctno">Account Number</label>
                                                                        <div class="validator error" v-for="error of v$.bankdetail.acctno.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <input type="text" class="form-control proinpfield" id="acctbalance" v-model="bankdetail.acctbalance">
                                                                        <label for="acctbalance">Account Balance</label>
                                                                        <div class="validator error" v-for="error of v$.bankdetail.acctbalance.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row infoDiv mb-5 ml-3">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <input type="text" class="form-control proinpfield" id="acctmicr" v-model="bankdetail.acctmicr">
                                                                        <label for="acctmicr">MICR Code</label>
                                                                        <div class="validator error" v-for="error of v$.bankdetail.acctmicr.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <input type="text" class="form-control proinpfield" id="ifsc" v-model="bankdetail.ifsc">
                                                                        <label for="ifsc">IFSC Code</label>
                                                                        <div class="validator error" v-for="error of v$.bankdetail.ifsc.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <input type="text" class="form-control proinpfield" id="fdlink" v-model="bankdetail.fdlink">
                                                                        <label for="fdlink">FD Link</label>
                                                                        <div class="validator error" v-for="error of v$.bankdetail.fdlink.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row infoDiv mb-5 ml-3">
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                        <input type="text" class="form-control proinpfield" id="nominee" v-model="bankdetail.nominee">
                                                                        <label for="nominee">Nominee</label>
                                                                        <div class="validator error" v-for="error of v$.bankdetail.nominee.$errors" :key="error.$uid">
                                                                            {{ error.$message }}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
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
    sameAs,
    alpha
} from '@vuelidate/validators';
import {
    ref
} from 'vue';
export default {
    name: 'userDashboard',
    components: {
        LoaderComponent
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
    data() {
        return {
            profileapproved: require('@/assets/img/userapprovedbatch.png'),
            profiledisapproved: require('@/assets/img/disaaproved.png'),
            user_approval_status: '',
            loader: false,
            usertype: '',
            pricingtags: [],
            packagingtags: [],
            unittags: [],
            catsubprodlist: [],
            showPassword: false,
            showConfirmPassword: false,
            password: '',
            gender: '',
            form: {
                name: '',
                username: '',
                email: '',
                mobile: '',
                addr: '',
                zipcode: null,
                city: '',
                state: '',
                country: '',
                dob: '',
            },
            prodform: {
                category: '',
                subcategory: '',
                product: '',
                unit: []
            },
            qualitycertificateform: {
                qltystandard: '',
                certificate: '',
                financialstatement: ''
            },
            refundpolicy: null,
            suppexpform: {
                aboutbusiness: '',
                custserved: '',
                testimonials: '',
            },
            termandcondition: null,
            agreement: null,
            bankdetail: {
                acctholdername: '',
                acctmono: '',
                acctadr: '',
                accttype: '',
                acctno: null,
                bankcode: '',
            },
            companyform: {
                companyname: '',
                contactpersonname: '',
                companyaddr: '',
                companyemail: '',
                companyphone: '',
                bussinessname: '',
                businessname: '',
                businesstype: '',
                businessregnum: null,
                taxidentifynum: '',
                contactname: '',
                contactemail: '',
                contactmobile: '',
            },
            customersuportform: {
                supporthr: ref(''),
                supportaddr: '',
                mobile: '',
                email: '',
            },
            resetpasswordform: {
                email: '',
                password: ''
            },
            changepasswordform: {
                otp: null,
                cpassword: '',
                newpassword: '',
                cpassword: ''
            },
            changepswdform: false,
            resetpswdform: true,
            FORM_REQUIRED_FIELD: 'This field is required',
            FORM_CONFIRM_PASSWORD_FIELD: 'Confirm Password is required',
            images: [],
            certificate: [],
            license: [],
            financialcertificate: [],
            bankletter: [],
            businessref: [],
            qualitystandard: [],
            imgs: '',
            srcimage: process.env.VUE_APP_SET_PATH,
            storeimages: [],
            visibility: false,
            files: ref(''),
            profilepic: '',
            categoryoptions: [],
            subcategoryoptions: [],
            productoptions: [],
            selectedcatsub: true,
            unselectedcatsub: false,
            catName: '',
            subcatName: '',
            prod: '',
            showerror: false,
            prodadded: false,
            businessregcertificate: ref(''),
            qltycertificate: ref(''),
            qltystandard: ref(''),
            licensefile: ref(''),
            bankletterfile: ref(''),
            financialstability: ref(''),
            businessperformancemetric: '',
            businessreffile: ref(''),
        }
    },
    validations() {
        return {
            prodform: {
                category: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                subcategory: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                product: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                }
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
            bankdetail: {
                accttype: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                acctno: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                },
                bankcode: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                },
            },
            resetpasswordform: {
                email: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    containEmail: helpers.withMessage(
                        () => `Not Valid Format`,
                        email
                    ),
                },
                password: {
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
            companyform: {
                companyname: {
                    alpha
                },
                contactpersonname: {
                    alpha
                },
                mobile: {
                    integer,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                },
                companyaddr: {},
                companyemail: {
                    containEmail: helpers.withMessage(
                        () => 'Not Valid Format',
                        email
                    )
                },
                contactemail: {
                    containEmail: helpers.withMessage(
                        () => 'Not Valid Format',
                        email
                    )
                },
                contactmobile: {
                    integer,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                },
                contactname: {},
                companyphone: {
                    integer,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                },
                businessname: {},
                businesstype: {},
                businessregnum: {
                    integer,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                },
                taxidentifynum: {
                    integer,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                },
            },
            customersuportform: {
                supportaddr: {},
                supporthr: {

                },
                mobile: {
                    integer,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                },
                email: {
                    containEmail: helpers.withMessage(
                        () => 'Not Valid Format',
                        email
                    )
                },
            },
        }
    },
    methods: {
        submitagree() {},
        showImg(index) {
            this.imgs = this.images
            this.imgs = this.certificate;
            this.imgs = this.license
            this.imgs = this.financialcertificate,
                this.imgs = this.bankletter,
                this.imgs = this.businessref,
                this.imgs = this.qualitystandard,
                this.index = index
            this.visibility = true
        },
        changeImage(e) {
            let files = e.target.files
            this.storeimages.push(e.target.files[0]);
            this.files = e.target.files;
            if (!files.length) return;
            this.uploadImage(files);
        },
        uploadcertificate(e) {
            let files = e.target.files
            this.storeimages.push(e.target.files[0]);
            this.businessregcertificate = e.target.files[0];
            this.qltycertificate = e.target.files[0];
            if (!files.length) return;
            this.uploadCertificate(files);
        },
        uploadCertificate(files) {
            var vm = this
            for (var i = 0; i < files.length; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    const imgUrl = event.target.result;
                    vm.certificate.push(imgUrl)
                }
                reader.readAsDataURL(files[i])
            }
        },
        uploadlicense(e) {
            let files = e.target.files
            this.storeimages.push(e.target.files[0]);
            this.licensefile = e.target.files[0];
            if (!files.length) return;
            this.uploadLicense(files);
        },
        uploadLicense(files) {
            var vm = this
            for (var i = 0; i < files.length; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    const imgUrl = event.target.result;
                    vm.license.push(imgUrl);
                }
                reader.readAsDataURL(files[i])
            }
        },
        uploadfinancialfile(e) {
            let files = e.target.files
            this.storeimages.push(e.target.files[0]);
            this.financialstability = e.target.files[0];
            if (!files.length) return;
            this.uploadFinancialfile(files);
        },
        uploadFinancialfile(files) {
            var vm = this
            for (var i = 0; i < files.length; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    const imgUrl = event.target.result;
                    vm.financialcertificate.push(imgUrl)
                }
                reader.readAsDataURL(files[i])
            }
        },
        uploadbankletter(e) {
            let files = e.target.files
            this.storeimages.push(e.target.files[0]);
            this.bankletterfile = e.target.files[0];
            if (!files.length) return;
            this.uploadBankletter(files);
        },
        uploadBankletter(files) {
            var vm = this
            for (var i = 0; i < files.length; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    const imgUrl = event.target.result;
                    vm.bankletter.push(imgUrl);
                }
                reader.readAsDataURL(files[i])
            }
        },
        uploadref(e) {
            let files = e.target.files
            this.storeimages.push(e.target.files[0]);
            this.businessreffile = e.target.files[0];
            if (!files.length) return;
            this.uploadRef(files);
        },
        uploadRef(files) {
            var vm = this
            for (var i = 0; i < files.length; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    const imgUrl = event.target.result;
                    vm.businessref.push(imgUrl)
                }
                reader.readAsDataURL(files[i])
            }
        },
        uploadqualityimages(e) {
            let files = e.target.files
            this.storeimages.push(e.target.files[0]);
            this.qltystandard = e.target.files[0];
            if (!files.length) return;
            this.uploadQualityimages(files);
        },
        uploadQualityimages(files) {
            var vm = this
            for (var i = 0; i < files.length; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    const imgUrl = event.target.result;
                    vm.qualitystandard.push(imgUrl)
                }
                reader.readAsDataURL(files[i])
            }
        },
        uploadImage(files) {
            var vm = this
            for (var i = 0; i < files.length; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    const imgUrl = event.target.result;
                    vm.images = [];
                    vm.images.push(imgUrl)
                }
                reader.readAsDataURL(files[i])
            }
        },
        removeImage(index, filetype) {
            if (this.images.length > 0) {
                this.images.splice(index, 1);
            }
            if (filetype == 'businessCertificate') {
                this.certificate.splice(index, 1);
                this.businessregcertificate = '';
            }

            if (filetype == 'licenseCertificate') {
                this.license.splice(index, 1);
                this.licensefile = '';
            }
            if (filetype == 'financialStability') {
                this.financialcertificate.splice(index, 1);
                this.financialstability = '';
            }
            if (filetype == 'bankLetter') {
                this.bankletter.splice(index, 1);
                this.bankletterfile = '';
            }
            if (filetype == 'businessRef') {
                this.businessref.splice(index, 1);
                this.businessreffile = '';
            }
            if (filetype == 'qualityStandard') {
                this.qualitystandard.splice(index, 1);
                this.qltystandrdfile = '';
            }
            if (filetype == 'qltyCertificate') {
                this.certificate.splice(index, 1);
                this.qltycertificate = '';
            }
            if (filetype == 'qltyFinancial') {
                this.financialcertificate.splice(index, 1);
                this.financialstability = '';
            }

        },
        handleChangeTag(tags) {
            this.tags = tags;
        },
        async getUserProfile() {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token,
            }
            this.loader = true;
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/get-profile/${user_id}`, {
                    headers
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.form.name = response.data.user[0].name;
                        this.form.username = response.data.user[0].username;
                        this.form.email = response.data.user[0].email;
                        this.resetpasswordform.email = response.data.user[0].email;
                        this.resetpasswordform.password = response.data.user[0].password_txt;
                        this.gender = response.data.user[0].userprofile.gender;
                        this.form.dob = new Date(response.data.user[0].userprofile.date_of_birth);
                        this.form.mobile = response.data.user[0].userprofile.mobile;
                        this.form.addr = response.data.user[0].userprofile.address;
                        this.form.zipcode = response.data.user[0].userprofile.zipcode;
                        this.form.city = response.data.user[0].userprofile.city;
                        this.form.state = response.data.user[0].userprofile.state;
                        this.form.country = response.data.user[0].userprofile.country;
                        this.profilepic = response.data.user[0].userprofile.profile_picture;
                        this.user_approval_status = response.data.user[0].userprofile.approval_status;
                        this.bankdetail.accttype = response.data.user[0].userprofile.userbankdetails.account_type;
                        this.bankdetail.acctno = response.data.user[0].userprofile.userbankdetails.account_number;
                        this.bankdetail.bankcode = response.data.user[0].userprofile.userbankdetails.ifsc_code;
                    }
                }).catch((error) => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
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
        async updateInfo() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                this.showerror = true;
                return
            }
            let user_id = localStorage.getItem('loginid');
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
            formData.append('profile_picture', this.files[0]);
            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/update-profile/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Profile Updated Successfully!',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.showerror = false;
                            this.getUserProfile();
                        });
                    }
                }).catch((error) => {
                    this.loader = false;
                    if (error.response) {
                        if (error.response.data.data) {
                            if (error.response.data.data.mobile) {
                                if (error.response.data.data.mobile[0] == 'The mobile has already been taken.') {
                                    this.$swal.fire({
                                        icon: 'error',
                                        title: 'Mobile Number already exist',
                                        showConfirmButton: true,
                                        timer: 5000
                                    }).then(() => {
                                        this.form.mobile = "";
                                    });
                                }
                            }
                            if (error.response.data.data.email) {
                                if (error.response.data.data.email[0] == 'The email has already been taken.') {
                                    this.$swal.fire({
                                        icon: 'error',
                                        title: 'Email has already exist',
                                        showConfirmButton: true,
                                        timer: 5000
                                    }).then(() => {
                                        this.form.email = "";
                                    });
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
                    } else {
                        if (error.message == "Network Error") {
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
        async updateBankInfo() {
            const result = await this.v$.bankdetail.$validate();
            if (result == false) {
                return
            }
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('user_id', user_id);
            formData.append('account_type', this.bankdetail.accttype);
            formData.append('account_number', this.bankdetail.acctno);
            formData.append('ifsc_code', this.bankdetail.bankcode);
            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/update-bankdetails/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Bank Details Updated Successfully!',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.getUserProfile();
                        });
                    }
                }).catch((error) => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
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
        async getCompanyInfo() {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token,
            }
            this.loader = true;
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/get-companyinfo/${user_id}`, {
                    headers
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.companyform.businessname = response.data.user[0].businessname == 'null' ? '' : response.data.user[0].businessname;
                        this.companyform.businesstype = response.data.user[0].businesstype == 'null' ? '' : response.data.user[0].businesstype;
                        this.companyform.businessregnum = response.data.user[0].businessregnum == 'null' ? '' : response.data.user[0].businessregnum;
                        this.companyform.taxidentifynum = response.data.user[0].taxIdentifynum == 'null' ? '' : response.data.user[0].taxIdentifynum;
                        this.companyform.companyname = response.data.user[0].companyName == 'null' ? '' : response.data.user[0].companyName;
                        this.companyform.contactpersonname = response.data.user[0].contactpersonname == 'null' ? '' : response.data.user[0].contactpersonname;
                        this.companyform.companyaddr = response.data.user[0].companyaddr == 'null' ? '' : response.data.user[0].companyaddr;
                        this.companyform.companyemail = response.data.user[0].companyemail == 'null' ? '' : response.data.user[0].companyemail;
                        this.companyform.companyphone = response.data.user[0].companyphone == 'null' ? '' : response.data.user[0].companyphone;
                        this.companyform.contactname = response.data.user[0].contactname == 'null' ? '' : response.data.user[0].contactname;
                        this.companyform.contactemail = response.data.user[0].contactemail == 'null' ? '' : response.data.user[0].contactemail;
                        this.companyform.contactmobile = response.data.user[0].contactmobile == 'null' ? '' : response.data.user[0].contactmobile;
                        this.businessregcertificate = response.data.user[0].businessregcertificate;
                        this.licensefile = response.data.user[0].licensecertificate;
                        this.bankletterfile = response.data.user[0].bankletter;
                        this.financialstability = response.data.user[0].financialstability;
                        this.businessreffile = response.data.user[0].businessref;
                        this.businessperformancemetric = response.data.user[0].businessperform;
                        this.qualitycertificateform.qltystandard = response.data.user[0].qltystandard;
                        this.qualitycertificateform.certificate = response.data.user[0].qltycertificate;
                        this.qualitycertificateform.financialstatement = response.data.user[0].financialstatement;
                        this.refundpolicy = response.data.user[0].refundpolicy ??null;
                        this.qltystandard = response.data.user[0].qltystandrdfile;
                        this.qltycertificate = response.data.user[0].qltycertificatefile;
                        this.financialstability = response.data.user[0].qltyfinancialfile;
                        this.suppexpform.aboutbusiness = response.data.user[0].aboutbusiness;
                        this.suppexpform.custserved = response.data.user[0].customerserved;
                        this.suppexpform.testimonials = response.data.user[0].testimonialsref;
                        this.termandcondition = response.data.user[0].termandcondition??null;
                        this.agreement = response.data.user[0].aggreement??null;
                        this.customersuportform.supporthr = response.data.user[0].supporthr;
                        this.customersuportform.supportaddr = response.data.user[0].supportaddr;
                        this.customersuportform.mobile = response.data.user[0].phoneno;
                        this.customersuportform.email = response.data.user[0].email;
                    }
                }).catch((error) => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
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
        async updateCompanyInfo() {
            const result = await this.v$.companyform.$validate();
            if (result == false) {
                return
            }
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('user_id', user_id);
            formData.append('companyname', this.companyform.companyname == '' ? '' : this.companyform.companyname);
            formData.append('contactpersonname', this.companyform.contactpersonname);
            formData.append('companyaddr', this.companyform.companyaddr);
            formData.append('companyemail', this.companyform.companyemail);
            formData.append('companyphone', this.companyform.companyphone);
            formData.append('businessname', this.companyform.businessname);
            formData.append('businesstype', this.companyform.businesstype);
            formData.append('businessregnum', this.companyform.businessregnum);
            formData.append('taxidentifynum', this.companyform.taxidentifynum);
            var businessperformmetric = '';
            if (document.querySelector('input[name="q4ans"]:checked')) {
                businessperformmetric = document.querySelector('input[name="q4ans"]:checked').value;
            }
            formData.append('businessregcertificate', this.businessregcertificate);
            formData.append('license', this.licensefile);
            formData.append('financialstability', this.financialstability);
            formData.append('bankletter', this.bankletterfile);
            formData.append('businessperformancemetric', businessperformmetric);
            formData.append('businessref', this.businessreffile);
            formData.append('contactname', this.companyform.contactname);
            formData.append('contactmobile', this.companyform.contactmobile);
            formData.append('contactemail', this.companyform.contactemail);
            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/update-companyinfo/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Company Information Updated Successfully!',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.getCompanyInfo();
                        });
                    }
                }).catch((error) => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
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
        async updateQltyStandard() {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('user_id', user_id);

            formData.append('qltystandard', this.qualitycertificateform.qltystandard);
            formData.append('certificate', this.qualitycertificateform.certificate);
            formData.append('financialstatement', this.qualitycertificateform.financialstatement);
            var refundpolicy;
            if (document.querySelector('input[name="refundpolicy"]:checked')) {
                refundpolicy = document.querySelector('input[name="refundpolicy"]:checked').value;
            }
            formData.append('qltystandrdfile', this.qltystandard);
            formData.append('qltycertificate', this.qltycertificate);
            formData.append('qltyfinancialfile', this.financialstability);
            formData.append('refundpolicy', refundpolicy == undefined?'':refundpolicy);
            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/update-qltystandrd/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Quality Standard Updated Successfully!',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.getCompanyInfo();
                        });
                    }
                }).catch((error) => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
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
        async updateSuppExp() {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('user_id', user_id);
            formData.append('aboutbusiness', this.suppexpform.aboutbusiness);
            formData.append('custserved', this.suppexpform.custserved);
            formData.append('testimonials', this.suppexpform.testimonials);
            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/update-suppexperience/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Supplier Experiences Saved Successfully!',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.getCompanyInfo();
                        });
                    }
                }).catch((error) => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
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
        async updateAgreement() {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('user_id', user_id);
            var agreement;
            if (document.querySelector('input[name="agreement"]:checked')) {
                agreement = document.querySelector('input[name="agreement"]:checked').value;
            }
            formData.append('suppagreement', agreement == undefined?'':agreement);
            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/update-suppexperience/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    this.loader = false;
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Agreement Saved Successfully!',
                        showConfirmButton: true,
                        timer: 5000
                    }).then(() => {
                        this.getCompanyInfo();
                    })
                }).catch((error) => {});
        },
        async updateTermandCondition() {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('user_id', user_id);
            var termandcondition;
            if (document.querySelector('input[name="termandcondition"]:checked')) {
                termandcondition = document.querySelector('input[name="termandcondition"]:checked').value;
            }
            formData.append('termandcondition', termandcondition==undefined?'':termandcondition);
            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/update-suppexperience/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    this.loader = false;
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Term and Condition Saved Successfully!',
                        showConfirmButton: true,
                        timer: 5000
                    }).then(() => {
                        this.getCompanyInfo();
                    })
                }).catch((error) => {});
        },
        async updateCustomerSupport() {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');

            const result = await this.v$.customersuportform.$validate();
            if (result == false) {
                return
            }

            let formData = new FormData();
            formData.append('user_id', user_id);
            var time;
            if (this.customersuportform.supporthr) {
                time = new Date(this.customersuportform.supporthr).toLocaleTimeString();
            }
            formData.append('supporthr', time);
            formData.append('supportaddr', this.customersuportform.supportaddr);
            formData.append('mobile', this.customersuportform.mobile);
            formData.append('email', this.customersuportform.email);

            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/customer-support/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    this.loader = false;
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Customer Support Saved Successfully!',
                        showConfirmButton: true,
                        timer: 5000
                    }).then(() => {
                        this.getCompanyInfo();
                    })
                }).catch((error) => {});
        },
        async resetpassword() {
            const result = await this.v$.resetpasswordform.$validate();
            if (result == false) {
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
                    if (resp.status == 200) {
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
                        });
                    }
                })
                .catch((error) => {
                    this.loader = false;
                    if (error.response) {
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
                        if (error.response.data.status === 'Token is Expired' && (error.response.status == 401 || error.response.status == 404)) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
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
        async changepassword() {
            const result = await this.v$.changepasswordform.$validate();
            if (result == false) {
                return;
            }
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('otp', this.changepasswordform.otp);
            formData.append('email', localStorage.getItem('email'));
            formData.append('password', this.changepasswordform.newpassword);
            const headers = {
                'Authorization': 'Bearer' + token,
                'Content-Type': 'multipart/form-data',
            }
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/reset-password-with-token', formData, {
                    headers
                }).then((resp) => {
                    if (resp.status == 200) {
                        this.loader = false;
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
                    }
                })
                .catch((error) => {
                    this.loader = false;
                    if (error.response) {
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
                        if (error.response.data.status === 'Token is Expired' && (error.response.status == 401 || error.response.status == 404)) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        }
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
        async allcategory() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
             await this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/category', {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        if (value.id == Number(this.form.category)) {
                            this.form.category = value.id;
                            this.catName = value.name;
                        }
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.categoryoptions = array;
                })
                .catch(err => {});
        },
        async allsubcategory() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/subcategory', {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        if (value.id == Number(this.form.subcategory)) {
                            this.form.subcategory = value.id;
                            this.subcatName = value.name;
                        }
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.subcategoryoptions = array;
                    this.form.catsub = this.catName + '/' + this.subcatName;
                })
                .catch(err => {});
        },
        async allproducts() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/allProduct', {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        if (value.id == Number(this.form.product)) {
                            this.form.product = value.id;
                            this.prod = value.name;
                        }
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.productoptions = array;
                    this.form.catsub = this.catName + '/' + this.subcatName + '/' + this.prod;
                })
                .catch(err => {});
        },
        selcatSub() {
            this.selectedcatsub = false;
            this.unselectedcatsub = true;
        },
        catChange(e) {
            var array = [];
            let catid = e.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/catsubdetails/${catid}`, {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.subcategoryoptions = [];
                    this.subcategoryoptions = array;
                })
                .catch(err => {});
        },
        subChange(e) {
            var array = [];
            let subcatid = e.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/productdetails/${subcatid}`, {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.productoptions = [];
                    this.productoptions = array;
                })
                .catch(err => {});
        },
        prodChange(e) {
            var array = [];
            let prodid = e.value.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/products/${prodid}`, {
                    headers
                })
                .then(response => {
                    this.allunitmeasure();
                    var unit;
                    var unitArray = [];
                    Object.values(response.data.data).forEach(value => {
                        unit = value.unit_attributes.split(',');
                    });
                    Object.values(unit).forEach(ele => {
                        unitArray.push({
                            'attr': ele,
                            'value': ele
                        });
                    });
                    this.prodform.unit = unitArray;
                })
                .catch(err => {});
        },
        async cancelAddprod() {
            this.prodform = Object.assign({}, {});
        },
        async addCatSubprod() {
            var loginid = localStorage.getItem('loginid');
            const result = await this.v$.prodform.$validate();
            if (result == false) {
                this.showerror = true;
                return
            }
            let formData = new FormData();
            if (this.prodform.product) {
                if (this.prodform.product.length > 0) {
                    for (let i = 0; i < this.prodform.product.length; i++) {
                        let tags = this.prodform.product[i].value;
                        formData.append('product[]', tags);
                    }
                }
            }
            formData.append('user_id', loginid);
            formData.append('category', this.prodform.category);
            formData.append('subcategory', this.prodform.subcategory);
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/addproduct`, formData, {
                    headers
                })
                .then(response => {
                    this.loader = false;
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Product added successfully.Please go to Product Information section to add further details. ',
                        showConfirmButton: true,
                        timer: 5000
                    }).then(() => {
                        this.prodform.subcategory = '';
                        this.prodform.product = '';
                        this.showerror = false;
                        this.prodadded = true;
                    });
                })
                .catch(err => {
                    this.loader = false;
                    if (err.response.data.data = 'Already Exist.') {
                        this.$swal.fire({
                            icon: 'error',
                            title: err.response.data.message,
                            showConfirmButton: true,
                            timer: 500
                        }).then(() => {
                            this.prodform.product = '';
                        });
                    }
                });
        },
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        if (this.$route.path.includes('personal-info')) {
            this.getUserProfile();
            this.allcategory();
        } else {
            this.getCompanyInfo();
        }
    }
};
</script>

<style lang="scss" scoped>
body {
    font-family: 'Quicksand', sans-serif;
}

.catsubprodDiv {
    border: 1px solid #ababab;
    padding: 1rem;
    border-radius: 1rem;
}

.infoText {
    top: 34px;
}

.infoText span {
    color: rgb(68, 0, 255);
    margin-left: -125px !important;
}

.unitdropdownIcon {
    right: 25px !important;
}

.singleSelectdropdown {
    border-radius: 15px !important;
}

.infoBtnDiv {
    margin-top: -7px;
    margin-left: -10px !important;
}

.ImageDiv label,
.infoBtnDiv input {
    padding: 5px 5px !important;
}

.termconditionDiv .statementDiv .content {
    margin-top: -7px !important;
}

.agreementDiv .contentDiv span {
    font-size: 12px;
    color: #545454;
}

// .agreementDiv .contentDiv.childDiv{
//     margin-top:-15px;
// }
.profileApproved span {
    font-size: 17px !important;
    color: #025802 !important;
    font-weight: 800 !important;
}

.profileApproved p {
    // font-size: 17px !important;
    color: #025802 !important;
    margin-left: 13px // font-weight: 800 !important;
}

.profileDisapproved span {
    font-size: 17px !important;
    color: #580202 !important;
    font-weight: 800 !important;
}

.profileDisapproved p {
    color: #580202 !important;
    margin-left: 13px
}

.profileDisapproved {
    width: 300px;
    overflow-y: auto;
}
.policyInfoDiv p a{
    color: #d90505;
    text-decoration: underline !important;
    cursor: pointer !important;
}
</style>
