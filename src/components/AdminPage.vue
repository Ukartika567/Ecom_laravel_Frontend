<template lang="html">
<section class="ps-dashboard" id="homepage">
    <div class="ps-section__left">
        <div class="row">
            <div class="col-xl-12 col-12">
                <card-sale-report />
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12 col-12">
                <card-recent-orders />
            </div>
        </div>
    </div>
</section>
</template>

<script>
import CardRecentOrders from "@/components/cards/CardRecentOrders.vue";
import CardSaleReport from "@/components/cards/CardSaleReport.vue";
export default {
    name: "AdminPage",
    components: {
        CardSaleReport,
        CardRecentOrders
    },
};
</script>
