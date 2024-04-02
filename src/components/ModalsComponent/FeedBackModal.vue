<template>
<v-row justify="center">
    <v-dialog v-model="show" width="860px" class="modalShowContainer">
        <v-card>
            <v-card-title>
                <span class="text-h5 feedbackhead">
                    <h4>Feedback </h4>
                </span>
                <font-awesome-icon :icon="['fasl', 'xmark']" class="modalCloseIcon" @click="close()" />
            </v-card-title>
            <v-card-text>
                <v-container>
                    <section class="widget widget-white feedbackmodalwidget">
                        <div class="widget-body">
                            <div class="d-flex flex-column align-center mb-8">
                                <h3>Please rate your review!</h3>
                            </div>
                            <div class="form">
                                <div class="form-rows p-t-no">
                                    <div class="form-row">
                                        <div class="d-flex mb-5">
                                            <label for="pricerating" class="col-sm-2 col-form-label">Price</label>
                                            <span>Rate This:{{ this.pricerating }}</span>
                                            <div class="col-sm-6">
                                                <v-rating v-model="pricerating" color="yellow-darken-3" id="pricerating" half-increments></v-rating>
                                            </div>
                                        </div>
                                        <div class="d-flex mb-5">
                                            <label for="qualityrating" class="col-sm-2 col-form-label">Quality</label>
                                            <span>Rate This:{{ this.qualityrating }}</span>
                                            <div class="col-sm-6">
                                                <v-rating v-model="qualityrating" color="yellow-darken-3" id="qualityrating" half-increments></v-rating>
                                            </div>
                                        </div>
                                        <div class="d-flex mb-5">
                                            <label for="timerating" class="col-sm-2 col-form-label">Time</label>
                                            <span>Rate This:{{ this.timerating }}</span>
                                            <div class="col-sm-6">
                                                <v-rating v-model="timerating" color="yellow-darken-3" id="timerating" half-increments></v-rating>
                                            </div>
                                        </div>
                                        <div class="align-center col-12 col-sm-12 col-md-12 col-lg-12  mb-0">
                                            <router-link id="feedback" name="feedback" class="btn btn-primary
                                              block circularfield align-center" to="#" v-b @click="sendfeedback">Submit</router-link>
                                        </div>
                                    </div>
                                </div>
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
    name: 'FeedBack',
    components: {},
    props: {
        visible: {
            type: String
        },
    },
    data: () => ({
        pricerating: 0,
        qualityrating: 0,
        timerating: 0,
    }),
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
        sendfeedback() {
            let formData = new FormData();
            var token = localStorage.getItem("token");
            var orderid = this.$route.query.orderid;
            formData.append('order_id', orderid);
            formData.append('price_rating', this.pricerating);
            formData.append('time_rating', this.timerating);
            formData.append('quality_rating', this.qualityrating);
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/feedback`, formData, {
                        headers
                    })
                .then(response => {
                    this.$swal({
                        icon: 'success',
                        title: 'Sent feedback successfully!',
                        showConfirmButton: true,
                        confirmButtonColor: 'rgb(2 145 2)',
                    }).then(() => {
                        this.close();
                        this.$router.push({
                            name: 'buyerdashboard'
                        })
                    });
                })
                .catch(err => {});
        }
    },
    mounted() {}
}
</script>
