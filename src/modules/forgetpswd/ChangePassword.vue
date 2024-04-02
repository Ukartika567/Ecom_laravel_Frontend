<template lang="html">
<section class="ps-page--my-account">
    <div class="layout-content">
        <div class="m-auto" style="max-width: 500px;">
            <div class="page-header">
                <div class="container">
                    <h1 class="text-center">Change Password</h1>
                </div>
            </div>
            <ChangePasswordComponent />
        </div>
    </div>
</section>
</template>

<script>
import ChangePasswordComponent from '@/components/ChangePassword.vue';
export default {
    name: 'ChangePasswordModule',
    components: {
        ChangePasswordComponent
    },
    transition: 'zoom',
};
</script>

<style lang="scss" scoped></style>
