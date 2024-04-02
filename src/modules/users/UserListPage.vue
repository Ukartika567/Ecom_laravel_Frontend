<template lang="html">
<UserListComponent />
</template>

    
<script>
import UserListComponent from '@/components/users/UserListComponent.vue';
export default {
    name: 'UserListPageModule',
    components: {
        UserListComponent
    },
    data: () => {
        return {};
    }
};
</script>

    
<style lang="scss" scoped></style>
