<template lang="html">
<div class="ps-card">
    <div class="ps-card__header custNameHeader">
        <h4>Add User</h4>
    </div>
    <div class="ps-card__content">
        <AddUserComponent />
    </div>
</div>
</template>

<script>
import AddUserComponent from '@/components/users/AddUserComponent.vue';
export default {
    name: 'AddUserPageModule',
    components: {
        AddUserComponent
    },
    data: () => {
        return {};
    }
};
</script>

<style lang="scss" scoped></style>
