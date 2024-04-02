<template>
<div v-if="this.$route.path.includes('login')">
    <section class="ps-page--my-account logsignupsection">
        <div class="layout-content logsignupcontent">
            <login />
        </div>
    </section>
</div>
<div v-else-if="this.$route.path.includes('register')">
    <section class="ps-page--my-account logsignupsection">
        <div class="layout-content logsignupcontent">
            <registration />
        </div>
    </section>
</div>
<div v-else-if="this.$route.path.includes('forget-password')">
    <section class="ps-page--my-account logsignupsection">
        <div class="layout-content logsignupcontent">
            <ForgetpswdPage />
        </div>
    </section>
</div>
<div v-else-if="this.$route.path.includes('change-password')">
    <section class="ps-page--my-account logsignupsection">
        <div class="layout-content logsignupcontent">
            <ChangePasswordComponent />
        </div>
    </section>
</div>
<div class="layout" v-else>
    <div class="layout-header fixed-top navbar  p-0">
        <HeaderContainer />
    </div>
    <div class="layout-content" :class="(this.$route.path.includes('/privacy-policy'))?'privacyPage':''">
        <router-view />
    </div>
    <div class="layout-footer">
        <FooterContainer />
    </div>
</div>
</template>

<script>
import HeaderContainer from "@/modules/header"
import FooterContainer from '@/modules/footer'
import Login from '@/components/LoginPage.vue';
import Registration from '@/components/SignUpPage.vue';
import ForgetpswdPage from '@/components/ForgetPswdPage.vue';
import ChangePasswordComponent from '@/components/ChangePassword.vue';
export default {
    name: "StandardLayout",
    components: {
        HeaderContainer,
        FooterContainer,
        Login,
        Registration,
        ForgetpswdPage,
        ChangePasswordComponent
    },
    data: () => {
        return {};
    },
    mounted() {}
}
</script>
