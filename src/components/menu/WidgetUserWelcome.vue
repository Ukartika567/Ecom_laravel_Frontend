<template lang="html">
<div class="sidebar_logo text-center">
    <img :src="src" alt="Ecommerce" class="sd-hide mt-5 mb-5" />
</div>
</template>

<script>
export default {
    name: 'WidgetUserWelcome',
    data() {
        return {
            src: require('@/assets/img/ecom-logo.png')
        }
    },
    methods: {},
    mounted() {}
};
</script>

<style lang='scss' scoped></style>
