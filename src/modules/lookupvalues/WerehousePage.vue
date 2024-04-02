<template lang="html">
<div class="ps-card">
    <div class="ps-card__header custNameHeader">
        <h4> Werehouse</h4>
    </div>
    <div class="ps-card__content">
        <WerehousePage />
    </div>
</div>
</template>

<script>
import WerehousePage from '@/components/lookupvalues/WerehousePage.vue'
export default {
    name: ' WerehouseModule',
    components: {
        WerehousePage
    },
    transition: 'zoom',
    data: () => {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>

<style lang="scss" scoped></style>
