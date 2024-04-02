<template lang="html">
<div class="header__actions">
    <header-user-area />
</div>
</template>

<script>
import HeaderUserArea from '@/components/HeaderUserArea.vue';
export default {
    name: 'HeaderActions',
    components: {
        HeaderUserArea,
    },
    data() {
        return {}
    },
    mounted() {}
};
</script>

<style lang="scss" scoped></style>
