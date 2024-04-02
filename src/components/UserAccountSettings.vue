<template lang="html">
<LoaderComponent v-if="this.loader" />
<div class="container-fluid" style="background-color: #ffffff; margin-top: -20px;
    margin-bottom: 60px;">
    <div class="row">
        <div class="col-md-12 mt-0">
            <div class="form">
                <div class="row">
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="sideContainerdiv mb-5">
                                    <div class="profileDiv">
                                        <div class="row">
                                            <ul class="nav flex-column sidebar-nav itemdiv" v-if="this.usertype == 'Customer'">
                                                <div class=" row ml-0 mt-0 mb-2 ">
                                                    <span class="infoboxhead">Settings</span>
                                                </div>
                                                <template v-for="item in menuItems" :key="item">
                                                    <li class="nav-item" v-if="item.mega">
                                                        <router-link :to="item.url" class="nav-link">
                                                            <font-awesome-icon :icon="item.icon" />
                                                            <span class="megapan ml-2">{{ item.text }} </span>
                                                            <div id="child-item">
                                                                <ul class="nav flex-column sidebar-nav child-item-li">
                                                                    <li v-for="subItem in item.megaContent" :key="subItem.text" class="nav-item" @click="childmenuClicked(item, subItem, subItem.key)">
                                                                        <router-link :to="subItem.url" v-if="subItem.route" class="nav-link active">
                                                                            <span :class="{ 'selectednavli': subItem.childisSelected, 'notSelected': !subItem.childisSelected }">{{
                                                                                        subItem.text }}</span>
                                                                        </router-link>
                                                                        <router-link to="#" class="nav-link active" v-else>
                                                                            {{ subItem.text }}
                                                                        </router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item" v-else :key="item.text">
                                                        <router-link :to="item.url" class="nav-link" @click="handleLogout" v-if="item.text == 'Logout'">
                                                            <font-awesome-icon :icon="item.icon" />
                                                            <span class="megaspan ml-2">{{ item.text }}</span>
                                                        </router-link>
                                                        <router-link :to="item.url" class="nav-link" v-else>
                                                            <font-awesome-icon :icon="item.icon" />
                                                            <span class="megaspan ml-0">{{ item.text }} </span>
                                                        </router-link>
                                                    </li>
                                                </template>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-12" style="margin-top: 40px;">
                                <div class="float-right scoreDiv">
                                    <span>Enterprise Reliability Rating (ERR) score is {{this.profilerating}}%
                                    </span>
                                </div>
                                <div class="accountbg mt-8">
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="profileimgDiv">
                                            <img :src="`${this.srcimage + 'uploads/profiles_pictures/' + this.profilepic}`" alt="Customer" width="150" height="140">
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="profiletextdiv" style="float: left;">
                                            <span>Profile</span><br>
                                            <p>Update your photo and personal details.</p>
                                        </div>
                                        <div class="profiletextdiv" :class="this.user_approval_status == 'Approved'?'profileApproved':this.user_approval_status == 'Disapproved'?'profileDisapproved':'d-none'" style="float: right;">
                                            <span>
                                                <img :src="profileapproved" width="35" height="35" v-if="this.user_approval_status === 'Approved'" />
                                                <img :src="profiledisapproved" width="35" height="35" v-else/>
                                                {{this.user_approval_status}}
                                            </span><br>
                                            <p v-if="this.user_approval_status === 'Approved'">You profile has been approved</p>
                                            <p v-else>To activate your account, kindly agree to our Terms and Conditions and Platform Rules."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row  mt-5">
                            <div class="col-md-12 fieldDiv">
                                <div v-if="this.$route.path.includes('/buyer/personal-info')">
                                    <div class="col mt-0">
                                        <div class="row infoDiv mb-0 ml-0">
                                            <label for="photo" class="col-sm-4 col-form-label">
                                                Your Photo
                                                <p>This will displayed on your profile.</p>
                                            </label>
                                            <div class="col-sm-6">
                                                <div class="row">
                                                    <div class="col-md-6 divimg">
                                                        <div v-if="images.length > 0">
                                                            <div v-for="(image, index) in images" :key="index">
                                                                <img :src="image" alt="Customer" width="70" height="70" class="proimg m-r-40px" @click="showImg(index)">
                                                            </div>
                                                        </div>
                                                        <div v-else>
                                                            <img :src="`${this.srcimage + 'uploads/profiles_pictures/' + this.profilepic}`" alt="Customer" class="proimg m-r-40px" width="70" height="70">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="widget-footer clearfix form-row changebtn">
                                                            <router-link class="btn btn-default pull-left mr-0 
                                                            cancelprofile" to="#" style="margin-top:-5px;font-size: 12px !important;" 
                                                            @click="removeImage">Cancel</router-link>
                                                            <label for="imgBox" class="btn pull-right saveprofile" style="position: 
                                                            relative;padding: 7px !important;margin-top: 15px">Upload image</label>
                                                            <input multiple capture type="file" id="imgBox" class="btn pull-right 
                                                            saveprofile" accept="image/*" style="visibility: hidden;" @change="changeImage">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row infoDiv mb-2 ml-0">
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="name" v-model="form.name">
                                                <label for="name" class="">Name</label>
                                                <div class="validator error" v-for="error of v$.form.name.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="username" v-model="form.username">
                                                <label for="username">Username</label>
                                                <div class="validator error" v-for="error of v$.form.username.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0 d-flex flex-row">
                                                <span>Gender</span>
                                                <div class="row">
                                                    <div class="col-nd-6">
                                                        <input type="radio" value="M" id="male" name="checkGender" :checked="this.gender == 'M'?true:false" />
                                                        <label for="male" class="radio">Male</label>
                                                    </div>
                                                    <div class="col-nd-6" style="left:-80px !important">
                                                        <input type="radio" value="F" id="female" name="checkGender" :checked="this.gender == 'F'?true:false" />
                                                        <label for="female" class="radio">Female</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row infoDiv mb-4 ml-0">
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <Datepicker v-model="form.dob" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="datepick" class="inputField proinpfield dobpicker" />
                                                <label for="dob">Date-Of-Birth</label>
                                                <div class="validator error" v-for="error of v$.form.dob.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="email" v-model="form.email">
                                                <label for="email">Email</label>
                                                <div class="validator error" v-for="error of v$.form.email.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="mobile" v-model="form.mobile">
                                                <label for="mobile">Mobile</label>
                                                <div class="validator error" v-for="error of v$.form.mobile.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row ml-5 mt-0 mb-2">
                                            <span class="infoboxhead">Residential Address</span>
                                        </div>
                                        <div class="row infoDiv mb-2 ml-0">
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="addr" v-model="form.addr">
                                                <label for="addr">Address</label>
                                                <div class="validator error" v-for="error of v$.form.addr.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="zipcode" v-model="form.zipcode">
                                                <label for="zipcode">ZipCode</label>
                                                <div class="validator error" v-for="error of v$.form.zipcode.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="city" v-model="form.city">
                                                <label for="city">City</label>
                                                <div class="validator error" v-for="error of v$.form.city.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row infoDiv mb-0 ml-0">
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
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
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
                                        </div>
                                        <div class="row infoDiv mb-4 ml-5">
                                            <div class="widget-footer clearfix form-row changebtn" style="margin-top:-10px" v-if="this.$route.path.includes('/buyer/personal-info') ||
                                                    this.$route.path.includes('/buyer/manage-addr')">
                                                <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="font-size: 12px !important;">Cancel</router-link>
                                                <input type="submit" name="submitbtn" value="Update Info" style="height:35px;padding-top:9px;" id="submitbtn" class="btn pull-right saveprofile" @click.prevent="updateInfo">
                                            </div>
                                        </div>
                                        <div class="row ml-5 mt-0 mb-2">
                                            <span class="infoboxhead">Shipping Address</span>
                                        </div>
                                        <div class="row infoDiv mb-2 ml-0">
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="shipaddr" v-model="shippingform.shipAddr">
                                                <label for="shipaddr">Address</label>
                                                <div class="validator error" v-for="error of v$.shippingform.shipAddr.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="shipzipcode" v-model="shippingform.shipZipcode">
                                                <label for="shipzipcode">ZipCode</label>
                                                <div class="validator error" v-for="error of v$.shippingform.shipZipcode.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="shipCity" v-model="shippingform.shipCity">
                                                <label for="shipCity">City</label>
                                                <div class="validator error" v-for="error of v$.shippingform.shipCity.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row infoDiv mb-0 ml-0">
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="shipState" v-model="shippingform.shipState">
                                                <label for="shipState">State</label>
                                                <div class="validator error" v-for="error of v$.shippingform.shipState.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <input type="text" class="form-control proinpfield" id="shipCountry" v-model="shippingform.shipCountry">
                                                <label for="shipCountry">Country</label>
                                                <div class="validator error" v-for="error of v$.shippingform.shipCountry.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
                                        </div>
                                        <div class="row infoDiv mb-0 ml-5">
                                            <div class="widget-footer clearfix form-row changebtn" style="margin-top:-10px" v-if="this.$route.path.includes('/buyer/personal-info') ||
                                                    this.$route.path.includes('/buyer/manage-addr')">
                                                <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="font-size: 12px !important;">Cancel</router-link>
                                                <input type="submit" name="submitbtn" value="Update Shipping Address" 
                                                id="submitbtn" class="btn pull-right saveprofile" style="height:35px;padding-top:9px;" @click.prevent="updateShippingAddr">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="this.$route.path.includes('/buyer/manage-addr')">
                                    <div class="col mt-5">
                                        <div class="row ml-5 mt-8 mb-4">
                                            <span class="infoboxhead">Residential Address</span>
                                        </div>
                                        <div class="row infoDiv mb-0 ml-0">
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
                                        </div>
                                        <div class="row infoDiv mb-0 ml-0">
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
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4"></div>
                                        </div>

                                        <div class="row ml-5 mt-8 mb-4">
                                            <span class="infoboxhead">Shipping Address</span>
                                        </div>
                                        <div class="row infoDiv mb-5 ml-3">
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                <input type="text" class="form-control proinpfield" id="shipaddr" v-model="shippingform.shipAddr">
                                                <label for="shipaddr">Address</label>
                                                <div class="validator error" v-for="error of v$.shippingform.shipAddr.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                <input type="text" class="form-control proinpfield" id="shipzipcode" v-model="shippingform.shipZipcode">
                                                <label for="shipzipcode">ZipCode</label>
                                                <div class="validator error" v-for="error of v$.shippingform.shipZipcode.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                <input type="text" class="form-control proinpfield" id="shipCity" v-model="shippingform.shipCity">
                                                <label for="shipCity">City</label>
                                                <div class="validator error" v-for="error of v$.shippingform.shipCity.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row infoDiv mb-5 ml-3">
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                <input type="text" class="form-control proinpfield" id="shipState" v-model="shippingform.shipState">
                                                <label for="shipState">State</label>
                                                <div class="validator error" v-for="error of v$.shippingform.shipState.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                                <input type="text" class="form-control proinpfield" id="shipCountry" v-model="shippingform.shipCountry">
                                                <label for="shipCountry">Country</label>
                                                <div class="validator error" v-for="error of v$.shippingform.shipCountry.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="this.$route.path.includes('/buyer/manage-pwsd')">
                                    <div class="col mt-5">
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
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
                                        </div>
                                        <div class="row infoDiv mb-0 ml-0 pswddiv">
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                                                <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="font-size: 12px !important;" 
                                                v-if="resetpswdform">Cancel</router-link>
                                                <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="#" style="font-size: 12px !important;"
                                                 @click="cancelresetpassword" v-if="changepswdform">Cancel</router-link>
                                                <input type="submit" name="submitbtn" value="Reset Password" id="submitbtn" class="btn saveprofile" 
                                                style="margin-top:15px !important;height:35px;padding-top:9px;" @click.prevent="resetpassword" v-if="resetpswdform">
                                                <input type="submit" name="submitbtn" value="Change Password" id="submitbtn" class="btn saveprofile" 
                                                style="margin-top:15px !important;height:35px;padding-top:9px;" @click.prevent="changepassword" v-if="changepswdform">
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
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
import LoaderComponent from "@/components/LoaderComponent.vue";
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
        }
    },
    data() {
        return {
            profileapproved:require('@/assets/img/userapprovedbatch.png'),
            profiledisapproved:require('@/assets/img/disaaproved.png'),
            user_approval_status:'',
            profilerating: 0,
            loader: false,
            usertype: '',
            name: '',
            value: null,
            showPassword: false,
            showConfirmPassword: false,
            menuItems: [{
                    text: 'My Orders',
                    url: '/buyer/dashboard',
                    icon: ['fass', 'cart-shopping'],
                    isSelected: false
                },
                {
                    text: 'My Profile',
                    url: '#',
                    icon: ['fas', 'user'],
                    mega: 'true',
                    megaContent: [{
                            text: 'personal Information',
                            url: '/buyer/personal-info',
                            route: true,
                            childisSelected: true
                        },
                        {
                            text: 'Manage Address',
                            url: '/buyer/manage-addr',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Manage Password',
                            url: '/buyer/manage-pwsd',
                            route: true,
                            childisSelected: false
                        },
                    ]
                },
                {
                    text: 'Questionnaire',
                    url: '/buyer/questionnaire',
                    icon: ['fas', 'circle-question'],
                    isSelected: false
                },
                {
                    text: 'Logout',
                    url: '#',
                    icon: ['fas', 'right-from-bracket'],
                    isSelected: false
                },

            ],
            gender: '',
            form: {
                name: '',
                username: '',
                email: '',
                mobile: '',
                dob: new Date(),
                addr: '',
                zipcode: null,
                city: '',
                state: '',
                country: '',
            },
            changepswdform: false,
            resetpswdform: true,
            bussinessname: '',
            industry: '',
            cpassword: '',
            newpassword: '',
            password: '',
            otp: null,
            shippingform: {
                shipAddr: '',
                shipZipcode: null,
                shipCity: '',
                shipState: '',
                shipCountry: '',
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
            token: null,
            FORM_REQUIRED_FIELD: 'This field is required',
            FORM_CONFIRM_PASSWORD_FIELD: 'Confirm Password is required',
            images: [],
            files: ref([]),
            imgs: '',
            storeimages: [],
            visibility: false,
            srcimage: process.env.VUE_APP_SET_PATH,
        };
    },
    validations() {
        return {
            form: {
                name: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                username: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                dob: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                email: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    containEmail: helpers.withMessage(
                        () => `Not Valid Format`,
                        email
                    ),
                },
                mobile: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
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
            shippingform: {
                shipAddr: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                shipZipcode: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                    minLength: minLength(6),
                    maxLength: maxLength(6),
                },
                shipCity: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                shipState: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                shipCountry: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                }
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
        }
    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        toggleShowConfirmpswd() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
        cancelpswd() {
            document.querySelector('.changepswddiv').classList.add('d-none');
            document.querySelector('.pswddiv').classList.remove('d-none');
        },
        childmenuClicked(li, childli, index) {
            if (li.megaContent) {
                for (var k = 0; k < li.megaContent.length; k++) {
                    li.megaContent[k].childisSelected = false;
                }
                childli.childisSelected = true;
            }
        },
        handleLogout() {
            var token = localStorage.getItem("token");
            this.axios.get(
                    process.env.VUE_APP_API_ENDPOINT + '/logout', {
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(response => {
                    if (response.status == 200) {
                        localStorage.clear();
                        this.$router.push({
                            name: 'home'
                        })
                        if (this.name && this.tokencheck) {
                            this.name = '';
                            this.tokencheck = '';
                        }
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status == 400 || error.response.status == 401) {
                            localStorage.clear();
                            this.$router.push({
                                name: 'home'
                            });
                        }
                    } else {
                        if (error.message == "Network Error") {
                            localStorage.clear();
                            this.$router.push({
                                name: 'home'
                            });
                        }
                    }
                })
        },
        getUserProfile() {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token,
            }
            this.loader = true;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/get-profile/${user_id}`, {
                    headers
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.form.name = response.data.user[0].name;
                        this.form.username = response.data.user[0].username;
                        this.form.email = response.data.user[0].email;
                        this.password = response.data.user[0].password_txt;

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
                        this.profilerating = response.data.user[0].userprofile.profile_rating;
                        this.user_approval_status = response.data.user[0].userprofile.approval_status;
                        this.shippingform.shipAddr = response.data.user[0].userprofile.userbankdetails.usershippingaddress.address;
                        this.shippingform.shipZipcode = response.data.user[0].userprofile.userbankdetails.usershippingaddress.zipcode;
                        this.shippingform.shipCity = response.data.user[0].userprofile.userbankdetails.usershippingaddress.city;
                        this.shippingform.shipState = response.data.user[0].userprofile.userbankdetails.usershippingaddress.state;
                        this.shippingform.shipCountry = response.data.user[0].userprofile.userbankdetails.usershippingaddress.country;
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
        async updateShippingAddr() {
            const result = await this.v$.shippingform.$validate();
            if (result == false) {
                return
            }
            let user_id = localStorage.getItem('loginid');
            let formData = new FormData();
            formData.append('user_id', user_id);
            formData.append('address', this.shippingform.shipAddr);
            formData.append('zipcode', this.shippingform.shipZipcode);
            formData.append('city', this.shippingform.shipCity);
            formData.append('state', this.shippingform.shipState);
            formData.append('country', this.shippingform.shipCountry);
            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/update-shippingaddress/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer  ' + this.token,
                    }
                })
                .then((response) => {
                    this.loader = false;
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Shipping Address Updated Successfully!',
                        showConfirmButton: true,
                        timer: 5000
                    }).then(() => {})
                }).catch((error) => {});
        },
        async updateInfo() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                return
            }
            let user_id = localStorage.getItem('loginid');
            let dob = document.getElementById('datepick').value;
            var gender = '';
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
            formData.append('address', this.form.address);
            formData.append('zipcode', this.form.zipcode);
            formData.append('city', this.form.city);
            formData.append('state', this.form.state);
            formData.append('country', this.form.country);
            formData.append('profile_picture', this.files);
            formData.append('_method', 'put');
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/update-profile/${user_id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + this.token,
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
                        this.getUserProfile();
                    })
                }).catch((error) => {
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
                    }
                });
        },
        showImg(index) {
            this.imgs = this.images
            this.index = index
            this.visibility = true
        },
        changeImage(e) {
            let files = e.target.files
            this.storeimages.push(e.target.files[0]);
            this.files = e.target.files[0];
            if (!files.length) return;
            this.uploadImage(files);
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
        handleSubmit() {
            this.$router.push({
                name: 'buyerquestionnaire',
            });
        },
        removeImage(index) {
            this.images = []
            this.files = null;
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
                            this.form.email = "";
                        });
                        return;
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
                });
        },
        cancelresetpassword() {
            this.resetpswdform = true;
            this.changepasswordform.newpassword = "";
            this.changepasswordform.cpassword = "";
            this.changepswdform = false;
        },
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.name = localStorage.getItem('name');
        this.token = localStorage.getItem('token');
        this.getUserProfile();
    }
};
</script>

<style lang="scss" scoped>
.changebtn , .divimg{
    float: right;
    padding: 5px !important;
    border-top: none !important;
    /* margin-right: 5px !important; */
    // display: flex;
}
.proimg{
 right:0px !important;
}
.profileApproved span{
    font-size: 17px !important;
    color: #025802 !important;
    font-weight: 800 !important;
}
.profileApproved p{
    // font-size: 17px !important;
    color: #025802 !important;
    margin-left:13px
    // font-weight: 800 !important;
}
.profileDisapproved span{
    font-size: 17px !important;
    color: #580202 !important;
    font-weight: 800 !important;
}
.profileDisapproved p{
    color: #580202 !important;
    margin-left:13px
}
.profileDisapproved{
    width: 300px;
    overflow-y: auto;
}
</style>
