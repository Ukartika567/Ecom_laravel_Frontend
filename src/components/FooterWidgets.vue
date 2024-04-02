<template lang="html">
<div class="footer-top">
    <div class="container pt-8 pb-5">
        <div class="row">
            <div class="col-md-3 col-12 col-sm-12 footerHead" style="text-align: center;">
                <span class="footerLogo">
                    <img width="180" :src="src" alt="Ecommerce" />
                </span>
                <p style="color: #fff; text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div class="col-md-6 col-12 col-sm-12">
                <div class="row">
                    <div class="col-md-6 col-12 col-sm-12 mt-5 footerHead">
                        <div class="ml-sm-10 ml-md-10 ml-lg-10 ml-0">
                            <h3>Quick links</h3>
                            <div class="border1 mb-5"></div>
                            <ul class="list">
                                <li>
                                    <router-link to="/aboutus">About Us</router-link>
                                </li>
                                <li>
                                    <router-link to="/how-it-works">How It Works</router-link>
                                </li>
                                <li>
                                    <router-link to="/contactus">Contact Us</router-link>
                                </li>
                                <li>
                                    <router-link to="/privacy-policy">Privacy</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 col-sm-12 mt-5 footerHead">
                        <h3>Contact Us</h3>
                        <div class="border1 mb-5"></div>
                        <div class="contact-detail">
                            <div class="row">
                                <div class="col-sm-2 col-2">
                                    <div class="social_icon">
                                        <div class="icon-home"></div>
                                    </div>
                                </div>
                                <div class="col-sm-10 col-10 social_heading">
                                    <h4 class="mb-0 font-weight-bold" style="color:#fff">Address</h4>
                                    <p style="color:#fff">XYZ,South Africa</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-2 col-2">
                                    <div class="social_icon">
                                        <div class="icon-phone-wave"></div>
                                    </div>
                                </div>
                                <div class="col-sm-10 col-10 social_heading">
                                    <h4 class="mb-0 font-weight-bold" style="color:#fff">Call Us</h4>
                                    <p style="color:#fff">+91 9876543210</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-2 col-2">
                                    <div class="social_icon">
                                        <div class="icon-voicemail"></div>
                                    </div>
                                </div>
                                <div class="col-sm-10 col-10 social_heading">
                                    <h4 class="mb-0 font-weight-bold" style="color:#fff">Email</h4>
                                    <p style="color:#fff">xyz@abc.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-12 col-sm-12 mt-5 footerHead">
                <h3>Let's Connect with us</h3>
                <div class="border1 mb-10"></div>
                <div class="row">
                    <div class="col-sm-3 col-3">
                        <div class="social_icon1">
                            <router-link to="#" aria-label="facebook">
                                <font-awesome-icon :icon="['fab', 'facebook']" />
                            </router-link>
                        </div>
                    </div>
                    <div class="col-sm-3 col-3">
                        <div class="social_icon1">
                            <router-link to="#" aria-label="twitter">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                            </router-link>
                        </div>
                    </div>
                    <div class="col-sm-3 col-3">
                        <div class="social_icon1">
                            <router-link to="#" aria-label="linkedin">
                                <font-awesome-icon :icon="['fab', 'linkedin']" />
                            </router-link>
                        </div>
                    </div>
                    <div class="col-sm-3 col-3">
                        <div class="social_icon1">
                            <router-link to="#" aria-label="google">
                                <font-awesome-icon :icon="['fab', 'google']" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="footer-bottom col-12">
    <p style="color:#fff; margin-bottom:0;">© 2023 www.Ecom.com. All rights reserved.</p>
</div>
</template>

<script>
export default {
    name: 'FooterWidgets',
    data() {
        return {
            src: require('@/assets/img/ecom-logo.png'),
        }
    }
};
</script>

<style lang="scss" scoped></style>
