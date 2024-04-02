<template lang="html">
<div class="ps-card">
    <div class="ps-card__header custNameHeader">
        <h4>Request New Quote</h4>
    </div>
    <div class="ps-card__content">
        <RequestQuotePage />
    </div>
</div>
</template>

<script>
import RequestQuotePage from '@/components/orderslist/quotes/RequestQuotePage.vue';
export default {
    name: 'AccountSettingModule',
    components: {
        RequestQuotePage,
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
