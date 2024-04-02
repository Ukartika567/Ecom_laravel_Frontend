<template>
<div class="ps-card">
    <div class="ps-card__header custNameHeader">
        <h4>Edit User</h4>
    </div>
    <div class="ps-card__content">
        <EditUserComponent />
    </div>
</div>
</template>

    
<script>
import EditUserComponent from '@/components/users/EditUserComponent.vue';
export default {
    name: 'EditUserPageModule',
    components: {
        EditUserComponent
    },
    data: () => {
        return {};
    }
};
</script>

    
<style lang="scss" scoped></style>
