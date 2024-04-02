<template>
<v-row justify="center">
    <v-dialog v-model="show" width="860px" class="modalShowContainer">
        <LoaderComponent v-if="this.loader" />
        <v-card>
            <v-card-title>
                <span class="text-h5 feedbackhead" v-if="this.mode == 'addInvoice'">
                    <h4>Add ShipTo Details</h4>
                </span>
                <span class="text-h5 feedbackhead" v-else>
                    <h4>Feedback</h4>
                </span>
                <font-awesome-icon :icon="['fasl', 'xmark']" class="modalCloseIcon" @click.prevent="close()" />
            </v-card-title>
            <v-card-text>
                <v-container>
                    <section class="widget widget-white feedbackmodalwidget" v-if="this.mode == 'addInvoice'">
                        <div class="widget-body">
                            <div class="form">
                                <div class="form-rows p-t-no">
                                    <div class="form-row">
                                        <span class="infoboxhead">Company Details</span>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4   mb-4">
                                            <input type="text" class="form-control inputField circularfield" name="cname" v-model="form.cname" id="cname">
                                            <label for="cname" class="form-label">Company Name</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.cname.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4  mb-4">
                                            <input type="text" class="form-control inputField circularfield" name="addr" v-model="form.addr" id="addr">
                                            <label for="addr" class="form-label">Address</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.addr.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4  mb-4">
                                            <input type="text" class="form-control inputField circularfield" name="city" v-model="form.city" id="city">
                                            <label for="city" class="form-label">City</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.city.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                            <input type="text" class="form-control inputField circularfield" name="country" v-model="form.country" id="country">
                                            <label for="country" class="form-label">Country</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.country.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                            <input type="text" class="form-control inputField circularfield" name="zipcode" v-model="form.zipcode" id="zipcode">
                                            <label for="zipcode" class="form-label">Zipcode</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.zipcode.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4"></div>
                                    </div>
                                    <div class="form-row">
                                        <span class="infoboxhead">Invoice Details</span>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                            <input type="text" class="form-control inputField circularfield" name="invoiceno" v-model="form.invoiceno" id="invoiceno">
                                            <label for="invoiceno" class="form-label">Invoice No.</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.invoiceno.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                            <Datepicker v-model="form.deliverydate" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="deliverydate" class="form-control inputField circularfield" />
                                            <label for="deliverydate" class="form-label">Delivery Date</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.deliverydate.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                            <Datepicker v-model="form.duedate" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="duedate" class="form-control inputField circularfield" />
                                            <label for="duedate" class="form-label">Invoice Due Date</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.duedate.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <span class="infoboxhead">Shipping Details</span>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                            <input type="text" class="form-control inputField circularfield" name="shipvia" v-model="form.shipvia" id="shipvia">
                                            <label for="shipvia" class="form-label">Shipping Via</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.shipvia.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                            <input type="text" class="form-control inputField circularfield" name="shipmethod" v-model="form.shipmethod" id="shipmethod">
                                            <label for="shipmethod" class="form-label">Shipping Method</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.shipmethod.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                                            <input type="text" class="form-control inputField circularfield" name="shipterms" v-model="form.shipterms" id="shipterms">
                                            <label for="shipterms" class="form-label">Shipping Terms</label>
                                            <div v-if="this.showerror">
                                                <div class="validator error" v-for="error of v$.form.shipterms.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="align-center col-12 col-sm-12 col-md-12 col-lg-12  mb-0">
                                            <button id="feedback" name="feedback" class="btn btn-primary
                                                    block circularfield align-center" type="button" @click.prevent="submitDetails" v-b>Submit</button>
                                            <div class="messageBox mt-2">
                                                <span>
                                                    As you click on this button customer will get
                                                    notified that shipping has started.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="widget widget-white feedbackmodalwidget" v-else>
                        <div class="widget-body">
                            <div class="d-flex flex-column align-center mb-8">
                                <h3>Customer has rate the order!</h3>
                            </div>
                            <div class="form">
                                <div class="form-rows p-t-no">
                                    <div class="form-row">
                                        <div class="d-flex mb-5">
                                            <label for="pricerating" class="col-sm-2 col-form-label">Price</label>
                                            <span>Rate This:{{this.pricerating }}</span>
                                            <div class="col-sm-6">
                                                <v-rating readonly v-model="this.pricerating" color="yellow-darken-3" id="pricerating" half-increments></v-rating>
                                            </div>
                                        </div>
                                        <div class="d-flex mb-5">
                                            <label for="qualityrating" class="col-sm-2 col-form-label">Quality</label>
                                            <span>Rate This:{{this.qualityrating }}</span>
                                            <div class="col-sm-6">
                                                <v-rating readonly v-model="this.qualityrating" color="yellow-darken-3" id="qualityrating" half-increments></v-rating>
                                            </div>
                                        </div>
                                        <div class="d-flex mb-5">
                                            <label for="timerating" class="col-sm-2 col-form-label">Time</label>
                                            <span>Rate This:{{this.timerating}}</span>
                                            <div class="col-sm-6">
                                                <v-rating readonly v-model="this.timerating" color="yellow-darken-3" id="timerating" half-increments></v-rating>
                                            </div>
                                        </div>
                                        <div class="align-center col-12 col-sm-12 col-md-12 col-lg-12  mb-0">
                                            <button id="feedback" name="feedback" class="btn btn-primary
                                                  block circularfield align-center" type="button" @click.prevent="reviewfeedback" v-b>ok</button>
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
import useVuelidate from '@vuelidate/core';
import LoaderComponent from "@/components/LoaderComponent.vue";
import {
    helpers,
    required,
    minLength,
    maxLength,
    integer,
    email,
    sameAs
} from '@vuelidate/validators';
export default {
    name: 'FeedBack',
    components: {
        LoaderComponent
    },
    props: {
        visible: {
            type: String
        },
        mode: {
            type: String
        },
        creditpoint: {
            type: Number
        }
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data: () => ({
        pricerating: 0,
        qualityrating: 0,
        timerating: 0,
        feedbackData: [],
        form: {
            cname: '',
            addr: '',
            city: '',
            country: '',
            zipcode: '',
            invoiceno: null,
            deliverydate: null,
            duedate: null,
            shipvia: '',
            shipmethod: '',
            shipterms: ''
        },
        FORM_REQUIRED_FIELD: 'This field is required',
        showerror: false,
        loader: false,
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
    validations() {
        return {
            form: {
                cname: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                addr: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                city: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                country: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                zipcode: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                    minLength: minLength(6),
                    maxLength: maxLength(6),
                },
                invoiceno: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                deliverydate: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                duedate: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                shipvia: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                shipmethod: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                shipterms: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                }
            },
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        reviewfeedback() {
            this.close();
        },
        async getFeedback() {
            let orderid = '';
            if (this.$route.query.orderid) {
                orderid = this.$route.query.orderid;
            }
            let formData = new FormData();
            formData.append('orderid', orderid);
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/getfeedback', formData, {
                        headers
                    })
                .then((resp) => {
                    this.feedbackData = resp.data.data;
                    this.feedbackData = this.feedbackData.map((el) => {
                        this.pricerating = Number(el.price_rating);
                        this.qualityrating = Number(el.quality_rating);
                        this.timerating = Number(el.time_rating);
                    });
                })
                .catch((error) => {});
        },
        async submitDetails() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                this.showerror = true;
                return
            }

            let quoteid, reqid = '';
            if (this.$route.query.quoteid) {
                quoteid = this.$route.query.quoteid;
            }
            if (this.$route.query.reqid) {
                reqid = this.$route.query.reqid;
            }
            var orderid = this.$route.query.orderid;
            var loginId = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            var date = document.getElementById('deliverydate').value;
            var duedate = document.getElementById('duedate').value;

            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };

            let formData = new FormData();
            formData.append('response_id', quoteid);
            formData.append('req_id', reqid);
            formData.append('statusflag', 'inshipping');
            formData.append('creditpoint', this.creditpoint);

            formData.append('order_id', orderid);
            formData.append('user_id', loginId);
            formData.append('company_name', this.form.cname);
            formData.append('address', this.form.addr);
            formData.append('city', this.form.city);
            formData.append('country', this.form.country);
            formData.append('zipcode', this.form.zipcode);
            formData.append('invoice_no', this.form.invoiceno);
            formData.append('delivery_date', date);
            formData.append('invoice_due_date', duedate);
            formData.append('shipvia', this.form.shipvia);
            formData.append('shipmethod', this.form.shipmethod);
            formData.append('shipterms', this.form.shipterms);
            this.loader = true;
            this.$swal({
                title: 'Do you want to start shipping?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'warningswal'
            }).then((result) => {
                if (result.value) {
                    this.loader = true;
                    this.axios.post(
                            process.env.VUE_APP_API_ENDPOINT + `/changeorderstatus`, formData, {
                                headers
                            })
                        .then(response => {
                            this.loader = false;
                            this.$swal({
                                icon: 'success',
                                title: 'Shipping started!',
                                showConfirmButton: true,
                                confirmButtonColor: 'rgb(2 145 2)',
                            }).then(() => {
                                document.querySelector('.shipBtn').classList.add('d-none');
                                document.querySelector('.StatusText').innerText = 'Shipping has been started!';
                                this.statusnotchange = false;
                                this.changedstatus = true;
                                this.shippingText = 'Amount is received.Shipping has been started.';
                                this.shippingText2 = 'Shipping Started'
                                this.$router.push({
                                    name: 'orders'
                                });
                            });
                        }).catch((error) => {
                            this.loader = false;
                            if (error.response) {
                                if (error.response.data.status === 'Token is Expired' && (error.response.status == 401 || error.response.status == 404)) {
                                    localStorage.clear();
                                    if (this.$route.name != 'home') {
                                        this.$router.push({
                                            name: 'home'
                                        });
                                    }
                                }
                            } else {
                                if (error.message == "Network Error") {
                                    localStorage.clear();
                                    if (this.$route.name != 'home') {
                                        this.$router.push({
                                            name: 'home'
                                        });
                                    }
                                }
                            }
                        });
                } else {
                    this.loader = false;
                }
            });
        }
    },
    mounted() {
        this.getFeedback();
    }
}
</script>

<style scoped>
.messageBox {
    text-align: center;
    color: #033aa1;
    font-size: 15px;
}

.messageBox span {
    font-weight: 700;
}
</style>
