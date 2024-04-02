<template>
<v-row justify="center">
    <v-dialog v-model="show" width="860px" class="modalShowContainer">
        <v-card id="modalContainer" ref="scrollModal">
            <v-card-title>
                <span class="text-h5 prodModalHead">
                    <h4>Please fill your {{ paymentMethod }} details</h4>
                </span>
                <font-awesome-icon :icon="['fasl', 'xmark']" class="modalCloseIcon" @click="$emit('close')" />
            </v-card-title>
            <v-card-text>
                <v-container>
                    <h1></h1>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div class="ps-form__submit text-center col-12 controlBtnDiv">
                    <button class="ps-btn ps-btn--gray mr-3" style="font-size:12px" @click="$emit('close')">Cancel</button>
                    <button class="ps-btn success submitbtn" @click.prevent="payamount">Pay</button>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
export default {
    name: 'PaymentMethodModalPage',
    props: {
        visible: {
            type: String
        },
        paymentMethod: {
            type: String
        }
    },
    data: () => ({}),
    computed: {
        show: {
            get() {
                return this.visible
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            },
        },
    },
    mounted() {},
}
</script>
