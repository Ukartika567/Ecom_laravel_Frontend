<template lang="html">
<div class="ps-card">
    <div class="ps-card__header custNameHeader">
        <h4>View User Details</h4>
    </div>
    <div class="ps-card__content">
        <ViewUserComponent />
    </div>
</div>
</template>

<script>
import ViewUserComponent from '@/components/users/ViewUserComponent.vue';
export default {
    name: 'ViewUserModule',
    components: {
        ViewUserComponent
    },
    data: () => {
        return {};
    }
};
</script>

    
<style lang="scss" scoped></style>
