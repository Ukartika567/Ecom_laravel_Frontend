<template lang="html">
<div class="ps-card" v-if="this.usertype == 'Admin' || this.usertype == 'Supplier'">
    <div class="row">
        <div class="col-12 col-sm-12">
            <div class="ps-card__header custNameHeader">
                <h4 v-if="this.$route.path.includes('/vendor/personal-info') ||
                 this.$route.path.includes('/admin/personal-info')">
                    Account Settings</h4>
                <h4 v-else-if="this.$route.path.includes('/vendor/business-info')">
                    Company Information</h4>
                <h4 v-else-if="this.$route.path.includes('/vendor/quality-and-certifications')">
                    Quality & Certificate</h4>
                <h4 v-else-if="this.$route.path.includes('/vendor/supplier-experience')">
                    Supplier Experience</h4>
                <h4 v-else-if="this.$route.path.includes('/vendor/customer-support')">
                    Customer Support</h4>
                <h4 v-else-if="this.$route.path.includes('/vendor/agreement')">
                    Supplier Agreement</h4>
                <h4 v-else-if="this.$route.path.includes('/vendor/term-and-conditions')">
                    Terms & Conditions</h4>
            </div>
        </div>
    </div>
    <div class="ps-card__content mt-0">
        <AdminAcctSettings />
    </div>
</div>
<section class="ps-page--my-account" v-if="this.usertype == 'Customer'">
    <div class="container userDashboard">
        <div class="layout-content  dashboardContaineracct">
            <div class="page-header">
                <h1 class="text-black acctblock">
                    Account Settings
                </h1>
            </div>
            <UserAccountSettings />
        </div>
    </div>
</section>
</template>

<script>
import UserAccountSettings from '@/components/UserAccountSettings.vue';
import AdminAcctSettings from '@/components/settings/AccountSettings.vue'
export default {
    name: 'AccountSettingModule',
    components: {
        UserAccountSettings,
        AdminAcctSettings
    },
    transition: 'zoom',
    data: () => {
        return {
            usertype: '',
            quoteid: ''
        };
    },
    methods: {},
    mounted() {
        this.usertype = localStorage.getItem('userType');
    },
};
</script>

<style lang="scss" scoped></style>
