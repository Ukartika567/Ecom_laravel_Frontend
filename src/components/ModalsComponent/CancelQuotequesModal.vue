<template>
<v-row justify="center">
    <v-dialog v-model="show" width="860px" class="modalShowContainer">
        <v-card>
            <v-card-title>
                <span class="text-h5 cancelquotehead">
                    <h4>Cancel Quote Questionnaire </h4>
                </span>
                <font-awesome-icon :icon="['fasl', 'xmark']" class="modalCloseIcon" @click="close()" />
            </v-card-title>
            <v-card-text>
                <v-container>
                    <section class="widget widget-white feedbackmodalwidget">
                        <div class="widget-body questionsDiv">
                            <div class="form">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-sm-12 col-lg-12 mb-4">
                                        <h3>1.Reason for Not Purchasing:</h3>
                                        <h3>"We noticed you didn't complete your purchase. Could you let us know why?"</h3>
                                        <div class="otheroptionDiv">
                                            <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" style="height: 50px;"></textarea>
                                        </div>
                                        <h3>2.Price Sensitivity:</h3>
                                        <h4>"Was the price higher than you expected?"</h4>
                                        <div class="answerdiv mt-5 mb-5">
                                            <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                                <input class="form-check-input" type="radio" name="q2ans" id="q2ans1">
                                                <label class="form-check-label anslabel" for="q2ans1">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                                <input class="form-check-input" type="radio" name="q2ans" id="q2ans2">
                                                <label class="form-check-label anslabel" for="q2ans2">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        <h4>"Was the price lower than you expected?"</h4>
                                        <div class="answerdiv mt-5 mb-5">
                                            <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                                <input class="form-check-input" type="radio" name="q2ans" id="q2ans21">
                                                <label class="form-check-label anslabel" for="q2ans21">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                                <input class="form-check-input" type="radio" name="q2ans" id="q2ans22">
                                                <label class="form-check-label anslabel" for="q2ans22">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        <h3>3.Product Fit:</h3>
                                        <h4>"Did you find the product met your needs?"</h4>
                                        <div class="answerdiv mt-5 mb-5">
                                            <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                                <input class="form-check-input" type="radio" name="q2ans" id="q2ans31">
                                                <label class="form-check-label anslabel" for="q2ans31">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                                <input class="form-check-input" type="radio" name="q2ans" id="q2ans32">
                                                <label class="form-check-label anslabel" for="q2ans32">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        <h3>4.Shipping Concerns:</h3>
                                        <h4>"Were there any issues with the shipping options?"</h4>
                                        <div class="answerdiv mt-5 mb-5">
                                            <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                                <input class="form-check-input" type="radio" name="q2ans" id="q2ans41">
                                                <label class="form-check-label anslabel" for="q2ans41">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                                <input class="form-check-input" type="radio" name="q2ans" id="q2ans42">
                                                <label class="form-check-label anslabel" for="q2ans42">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="align-center col-12 col-sm-12 col-md-12 col-lg-12 mb-0">
                                <router-link id="feedback" name="feedback" class="btn btn-primary
                                    block circularfield align-center" to="#" v-b @click="submitque">Submit</router-link>
                            </div>
                        </div>
                    </section>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import {
    ref
} from "vue";
export default {
    name: 'cancelQuote',
    components: {},
    props: {
        visible: {
            type: String
        },
    },
    data: () => ({}),
    computed: {
        show: {
            get() {
                return this.visible;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            },
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
        submitque() {
            this.close();
        }
    },
    mounted() {}
}
</script>
