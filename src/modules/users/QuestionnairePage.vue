<template lang="html">
<section class="ps-page--my-account">
    <div class="container userDashboard">
        <div class="layout-content  dashboardContaineracct">
            <div class="page-header">
                <h1 class="text-black acctblock">
                    Customer Questionnaire
                </h1>
            </div>
            <QuestionnaireComponent />
        </div>
    </div>
</section>
</template>

<script>
import QuestionnaireComponent from '@/components/users/QuestionnaireComponent.vue';
export default {
    name: 'QuestionnaireModule',
    components: {
        QuestionnaireComponent
    },
    data: () => {
        return {};
    }
};
</script>

<style lang="scss" scoped></style>
