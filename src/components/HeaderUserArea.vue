<template lang="html">
<div v-if="this.changeheader || (this.tokencheck==null && this.usertype !='Customer')" class="ps-block--user-header">
    <ul class="nav">
        <li class="md-hide">
            <router-link to="/login">Login</router-link>
        </li>
        <li class="dropdown ps-block--user-account">
            <router-link to="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                <font-awesome-icon :icon="['fasl', 'bars']" />
            </router-link>
            <div class="ps-block__content accountInfoModal">
                <ul class="ps-list--arrow">
                    <li>
                        <router-link to="/login">Login</router-link>
                    </li>
                    <li>
                        <router-link to="/register">Signup</router-link>
                    </li>
                    <li>
                        <router-link to="/aboutus">About Us</router-link>
                    </li>
                    <li>
                        <router-link to="/contactus">Contact Us</router-link>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
<div v-else class="userBlock">
    <div class="ps-block--user-account" :class="{'adminacctBlock':this.usertype == 'Admin', 
    'acctBlock': this.usertype == 'Supplier'}">
        <i class="icon-user"></i>
        <span class="md-hide">{{ this.username }}</span>
        <span class="caret"></span>
        <div class="ps-block__content accountInfoModal" :class="{ 'acctInfoModal': this.usertype == 'Customer' || this.usertype == 'Supplier'|| this.usertype == 'Admin' }">
            <ul class="ps-list--arrow">
                <li v-if=" this.usertype=='Admin'">
                    <router-link to="/admin">
                        Dashboard
                    </router-link>
                </li>
                <li v-if=" this.usertype=='Supplier'">
                    <router-link to="/vendor/req-quotes-list">
                        Dashboard
                    </router-link>
                </li>
                <li v-if=" this.usertype=='Customer'">
                    <router-link to="/buyer/dashboard">
                        Dashboard
                    </router-link>
                </li>
                <li v-if=" this.usertype=='Supplier'">
                    <router-link to="/vendor/purchase-credits">
                        Credit Points
                    </router-link>
                </li>
                <li v-if="this.usertype == 'Customer'">
                    <router-link to="/buyer/create-new-quote">
                        Request New Quote
                    </router-link>
                </li>
                <li v-if="this.usertype == 'Customer'">
                    <router-link to="/buyer/order">
                        My Orders
                    </router-link>
                </li>
                <li v-if="this.usertype == 'Supplier'">
                    <router-link to="/vendor/personal-info">
                        Account Settings
                    </router-link>
                </li>
                <li v-if="this.usertype == 'Customer'">
                    <router-link to="/buyer/personal-info">
                        My Account
                    </router-link>
                </li>
                <li v-if="this.usertype == 'Admin'">
                    <router-link to="/admin/account-settings">
                        Account Settings
                    </router-link>
                </li>
                <li class="ps-block__footer">
                    <router-link to="#" @click.prevent="handleLogout">
                        Logout
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HeaderUserArea',
    components: {},
    data() {
        return {
            tokencheck: '',
            username: '',
            usertype: '',
            changeheader: false,
            total: 2,
        };
    },
    methods: {
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
                        if (this.$route.name != 'home') {
                            this.$router.push({
                                name: 'home'
                            });
                        } else {
                            this.changeheader = true;
                        }
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status == 400 || error.response.status == 401) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            } else {
                                this.changeheader = true;
                            }
                        }
                    } else {
                        if (error.message == "Network Error") {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                this.$router.push({
                                    name: 'home'
                                });
                            } else {
                                this.changeheader = true;
                            }
                        }
                    }

                });
        }
    },
    mounted() {
        this.tokencheck = localStorage.getItem("token");
        this.username = localStorage.getItem("name");
        this.usertype = localStorage.getItem("userType");
    },
};
</script>

<style lang="scss" scoped></style>
