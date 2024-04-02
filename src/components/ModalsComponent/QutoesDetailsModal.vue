<template>
<v-row justify="center">
    <v-dialog v-model="show" width="860px" class="modalShowContainer">
        <v-card id="modalContainer" ref="scrollModal">
            <v-card-title>
                <span class="text-h5 prodModalHead">
                    <h4>Requested Quote Details</h4>
                </span>
                <font-awesome-icon :icon="['fasl', 'xmark']" class="modalCloseIcon" @click="$emit('close')" />
            </v-card-title>
            <v-card-text>
                <v-container class="quoteDetailsContainer">
                    <v-row class="align-center quoteDetailsDiv">
                        <div class="col-md-4 mb-5">
                            <div class="contentDiv">
                                <strong>Quote Number:</strong> <span>{{ this.quoteno }}</span>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <div class="contentDiv">
                                <strong>Category:</strong> <span>{{ this.category }}</span>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <div class="contentDiv">
                                <strong>Product:</strong> <span>{{ this.product }}</span>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <div class="contentDiv">
                                <strong>Quantity:</strong> <span>{{ this.quantity }}</span>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <div class="contentDiv">
                                <strong>Status:</strong>
                                <span :style="`color:${getColor(this.status)}`" class="badgeDiv text-center">
                                    {{ this.status }}
                                </span>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <div class="contentDiv">
                                <strong>{{this.ordertype}} Date:</strong> <span>{{ this.date }}</span>
                            </div>
                        </div>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div class="ps-form__submit text-center col-12 controlBtnDiv">
                    <button class="ps-btn success submitbtn" @click="$emit('close')">OK</button>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
export default {
    name: 'QuotesDetailPage',
    props: {
        visible: {
            type: String
        },
        quoteno: {
            type: String
        },
        category: {
            type: String
        },
        product: {
            type: String
        },
        quantity: {
            type: String
        },
        date: {
            type: String
        },
        status: {
            type: String
        },
        ordertype: {
            type: String
        }
    },
    data() {
        return {}
    },
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
    methods: {
        getColor(status) {
            if (status === 'Pending') {
                return "#f00"
            } else if (status === 'New') {
                return "#00f"
            } else if (status === 'Approved') {
                return "teal"
            } else if (status === 'Delivered') {
                return "rgb(7 197 7)"
            } else if (status === 'InProgress') {
                return "Orange"
            } else if (status === 'InShipping') {
                return "rgb(187 107 5)"
            } else if (status === 'Cancelled') {
                return "crimson"
            } else {
                return "rgb(1, 185, 1)"
            }
        },
    }
}
</script>
