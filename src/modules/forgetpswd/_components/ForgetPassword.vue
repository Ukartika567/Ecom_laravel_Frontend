<template lang="html">
<section class="ps-page--my-account">
    <div class="layout-content">
        <div class="m-auto" style="max-width: 500px;">
            <div class="page-header">
                <div class="container">
                    <h1 class="text-center" v-if="this.token==null">Forgot Password?</h1>
                    <h1 class="text-center" v-else>Update Password</h1>
                </div>
            </div>
            <ForgetpswdPage />
        </div>
    </div>
</section>
</template>

<script>
import ForgetpswdPage from '@/components/ForgetPswdPage.vue';
export default {
    name: 'ForgetPswdView',
    components: {
        ForgetpswdPage
    },
    data() {
        return {
            token: '',
        }
    },
    transition: 'zoom',
    mounted() {
        this.token = localStorage.getItem('token');
    }
};
</script>

<style lang="scss" scoped></style>
