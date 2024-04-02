<template>
<div class="form rows p-t-no dashboardDiv1">
    <div id="sn_h_tabs" class="m-t-25 ui-tabs-scroll ui-tabs ui-corner-all 
                    ui-widget ui-widget-content paymentcontent">
        <div class="row">
            <div class="col-md-8 paymentoptDiv">
                <div class="paymentoptionDiv">
                    <div class="headdiv">
                        <h2>Choose a payment method</h2>
                        <p>You will not be change untill you review this order on the new page.</p>
                    </div>
                    <div class="col-md-12">
                        <div class="row infoDiv">
                            <label for="swichonlinemode" class="col-sm-2 col-form-label" style="font-size: 15px;letter-spacing: 1px;">Online</label>
                            <div class="col-sm-6">
                                <v-switch color="primary" :model-value="true" v-model="switchonline" hide-details true-value="Yes" id="swichonlinemode" false-value="No" :label="`${switchonline}`" class="swichpaymentmode" @change="onlineswitch(switchonline)"></v-switch>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row infoDiv">
                            <label for="swichofflinemode" class="col-sm-2 col-form-label" style="font-size: 15px;letter-spacing: 1px;">Offline</label>
                            <div class="col-sm-6">
                                <v-switch color="primary" :model-value="true" v-model="switchoffline" hide-details true-value="Yes" id="swichofflinemode" false-value="No" :label="`${switchoffline}`" class="swichpaymentmode" @change="offlineswitch(switchoffline)"></v-switch>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="OnlinePaymentDiv" v-if="this.onlinetransaction">
                            <div>
                                <button type="button" class="btn mb-5 mt-8 mr-8 circularfield paymentoptbtn mastercard" @click="mastercard">
                                <img :src="mastercardsrc" width="70" height="30" />
                                </button>
                                <button type="button" class="btn mb-5 mt-8 mr-8 circularfield paymentoptbtn visacard" @click="visacard">
                                <img :src="visasrc" width="70" height="30" />
                                </button>
                                <button type="button" class="btn mb-5 mt-8 mr-8 circularfield paymentoptbtn googlepay" @click="googlepay">
                                <img :src="googlesrc" width="70" height="30" />
                                </button>
                                <button type="button" class="btn mb-5 mt-8 circularfield paymentoptbtn paypal paypal" @click="paypal">
                                <img :src="paypalsrc" width="70" height="30" />
                                </button>
                            </div>
                            <div class="contentdiv mt-8">
                                <h2>Enter Card Details:</h2>
                                <div class="contentform">
                                    <div class=" row mt-8">
                                        <div class="col-md-12">
                                            <div class="form-group payDiv">
                                                <div class="input-icon">
                                                    <input name="cardholdername" type="text" id="cardholdername" class="form-control
                                                                                inputField circularfield payinpfield" Placeholder="Mr. John">
                                                    <label for="cardholdername">
                                                        Card Holder Name</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-md-12">
                                            <div class="form-group payDiv">
                                                <div class="input-icon">
                                                    <input name="cardnum" type="text" id="cardnum" class="form-control inputField 
                                                        circularfield payinpfield" placeholder="**** **** **** ****">
                                                    <label for="cardnum">
                                                        Card Number</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" row mt-5">
                                        <div class="col-md-6">
                                            <div class="form-group payDiv">
                                                <div class="input-icon">
                                                    <input name="expiredate" type="text" id="expiredate" class="form-control inputField circularfield payinpfield" placeholder="MM/YY">
                                                    <label for="expiredate">
                                                        Expiry Date
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group payDiv">
                                                <div class="input-icon">
                                                    <input name="seccode" type="text" id="seccode" class="form-control inputField
                                                        circularfield payinpfield" placeholder="CVC">
                                                    <label for="seccode">
                                                        Security Code
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="OnlinePaymentDiv" v-if="this.offlinetransaction">
                            <div class="contentdiv mt-8">
                                <h2>Account Details:</h2>
                                <div class="contentform">
                                    <div class=" row mt-8">
                                        <div class="col-md-12">
                                            <div class="form-group payDiv">
                                                <div class="input-icon">
                                                    <input name="bankname" type="text" id="bankname" class="form-control
                                                        inputField circularfield payinpfield" Placeholder="HDFC BANK">
                                                    <label for="bankname">
                                                        Bank Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-md-12">
                                            <div class="form-group payDiv">
                                                <div class="input-icon">
                                                    <input name="branch" type="text" id="branch" class="form-control inputField 
                                                        circularfield payinpfield" placeholder="XYZ Branch ">
                                                    <label for="branch">
                                                        Branch Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" row mt-5">
                                        <div class="col-md-6">
                                            <div class="form-group payDiv">
                                                <div class="input-icon">
                                                    <input name="acctno" type="text" id="acctno" class="form-control inputField circularfield payinpfield" placeholder="XXXXXXXXXXXX">
                                                    <label for="acctno">
                                                        Account No.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group payDiv">
                                                <div class="input-icon">
                                                    <input name="ifdccode" type="text" id="ifdccode" class="form-control inputField
                                                                                    circularfield payinpfield" placeholder="HDFC000XX">
                                                    <label for="ifdccode">
                                                        IFSC Code</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" row mt-5">
                                        <div class="col-md-12">
                                            <div class="paymessageDiv mt-8">
                                                <span>Awaiting confirmation of your payment. If you have completed the payment,please get in touch with us.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mainorderDiv" v-if="this.onlinetransaction">
                <div class="orderdetailDiv ml-0">
                    <div class="leftContainer cardleftContainer">
                        <div class="contentDiv">
                            <div class="cardContent">
                                <div class="card-group">
                                    <div class="card" v-if="this.onlinetransaction">
                                        <div class="row">
                                            <div class="col-md-6 carddetail">
                                            </div>
                                            <div class="col-md-6 carddetail">
                                                <span class="bank">
                                                    BANK
                                                </span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 carddetail mt-2">
                                                <span>
                                                    <img :src="chipsrc" width="40" height="30" class="cardIcon" />
                                                </span>
                                            </div>
                                            <div class="col-md-6 carddetail mt-2">
                                                <span>
                                                    <font-awesome-icon :icon="['fas', 'wifi']" class="wifiIcon" /></span>
                                            </div>
                                        </div>
                                        <div class="row mt-8">
                                            <div class="col-md-6 expdate"><span>Exp 07/25</span></div>
                                            <div class="col-md-6"></div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-6 cardnumber"><span>....6787</span></div>
                                            <div class="col-md-6 custname"><span style="font-size: 12px; position:absolute;color:#ffffff;letter-spacing: 2px;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);left: -5px;">CardHolder Name</span></div>
                                        </div>
                                        <div class="ring"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5 itemDiv">
                            <span>Order Summary</span>
                        </div>
                        <div class="shippingdetail">
                            <div class="contentdiv mt-5 mb-5">
                                <div class="row mt-2">
                                    <div class="col-md-6 calcamount">
                                        <h5>SubTotal:</h5>
                                    </div>
                                    <div class="col-md-6 calcamount">
                                        <span><i>$</i>{{ this.subtotal + '.00'}}</span>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-6 calcamount">
                                        <h5>Discount:</h5>
                                    </div>
                                    <div class="col-md-6 calcamount">
                                        <span><i>$</i>{{ this.discount + '.00' }}</span>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-6 calcamount">
                                        <h5>Tax:</h5>
                                    </div>
                                    <div class="col-md-6 calcamount">
                                        <span><i>$</i>{{ this.tax + '.00' }}</span>
                                    </div>
                                </div>
                                <div class="row mt-2" style="border-bottom:1px solid #d6d4d4">
                                    <div class="col-md-6 calcamount">
                                        <h5>Shipping:</h5>
                                    </div>
                                    <div class="col-md-6 calcamount">
                                        <span><i>$</i>{{ this.shipping + '.00' }}</span>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-md-6 calcamount total">
                                        <h5>Total:</h5>
                                    </div>
                                    <div class="col-md-6 calcamount total">
                                        <span><i>$</i>{{ this.nettotal + '.00' }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="contentDiv mb-5 payButton">
                                <router-link to="#" @click="payamount">
                                    <div class="cardContent paybtn text-center" :class="{'offlinecardContent':this.offlinetransaction}">
                                        <span class="mr-5">Pay</span>
                                        <font-awesome-icon :icon="['fas', 'arrow-right']" style="color:#fff;" />
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mainorderDiv" v-if="this.offlinetransaction">
                <div class="orderdetailDiv ml-0">
                    <div class="leftContainer cardleftContainer">
                        <div class="contentDiv">
                            <div class="cardContent">
                                <div class="card-group">
                                    <div class="card offlinePayCard" v-if="this.offlinetransaction">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <img :src="banktransfer" class="bankimage" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5 itemDiv">
                            <span>Order Summary</span>
                        </div>
                          <div class="shippingdetail">
                            <div class="contentdiv mt-5 mb-5">
                                <div class="row mt-2">
                                    <div class="col-md-6 calcamount">
                                        <h5>SubTotal:</h5>
                                    </div>
                                    <div class="col-md-6 calcamount">
                                        <span><i>$</i>{{ this.subtotal + '.00'}}</span>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-6 calcamount">
                                        <h5>Discount:</h5>
                                    </div>
                                    <div class="col-md-6 calcamount">
                                        <span><i>$</i>{{ this.discount + '.00' }}</span>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-6 calcamount">
                                        <h5>Tax:</h5>
                                    </div>
                                    <div class="col-md-6 calcamount">
                                        <span><i>$</i>{{ this.tax + '.00' }}</span>
                                    </div>
                                </div>
                                <div class="row mt-2" style="border-bottom:1px solid #d6d4d4">
                                    <div class="col-md-6 calcamount">
                                        <h5>Shipping:</h5>
                                    </div>
                                    <div class="col-md-6 calcamount">
                                        <span><i>$</i>{{ this.shipping + '.00' }}</span>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-md-6 calcamount total">
                                        <h5>Total:</h5>
                                    </div>
                                    <div class="col-md-6 calcamount total">
                                        <span><i>$</i>{{ this.nettotal + '.00' }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="contentDiv mb-5 payButton">
                                <router-link to="#" @click="payamount">
                                    <div class="cardContent paybtn text-center offlinecardContent">
                                        <span class="mr-5">Pay</span>
                                        <font-awesome-icon :icon="['fas', 'arrow-right']" style="color:#fff;" />
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'BuyerQuoteDetailsPage',
    components: {},
    data() {
        return {
            switchonline: 'Yes',
            switchoffline: 'NO',
            onlinetransaction: true,
            offlinetransaction: false,
            cancelQueModal: false,
            banktransfer: require('@/assets/img/bank_transfer.png'),
            chipsrc: require('@/assets/img/chip.png'),
            ShowFeedback: false,
            visasrc: require('@/assets/img/visa-payment.png'),
            googlesrc: require('@/assets/img/googlepay.png'),
            paypalsrc: require('@/assets/img/paypal-pay.png'),
            mastercardsrc: require('@/assets/img/mastercard-pay.png'),
            usertype: '',
            subtotal: 0,
            discount: 0,
            tax: 0,
            shipping: 0,
            nettotal: 0
        };
    },

    methods: {
        payamount() {
            this.$swal({
                icon: 'success',
                title: 'Payment Successful.',
                showConfirmButton: true,
                confirmButtonColor: 'rgb(2 145 2)',
            }).then(() => {
                this.$router.push({
                    path: '/buyer/dashboard'
                })
            })
        },
        onlineswitch(switchmode) {
            if (switchmode == 'No') {
                this.onlinetransaction = false;
            }
            if (switchmode == 'Yes') {
                this.onlinetransaction = true;
                this.switchoffline = 'No';
                this.offlinetransaction = false;
            }
        },
        offlineswitch(switchmode) {
            if (switchmode == 'No') {
                this.offlinetransaction = false;
            }
            if (switchmode == 'Yes') {
                this.onlinetransaction = false;
                this.switchonline = 'No';
                this.offlinetransaction = true;
            }
        },
        async fetchApprovedOrder() {
            let formData = new FormData();
            let quoteid = '';
            if (this.$route.query.quoteid) {
                quoteid = this.$route.query.quoteid;
            }
            formData.append('response_id', quoteid);
            formData.append('order_id', '');
            formData.append('order_date', '');
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/getorder`, formData, {
                        headers
                    })
                .then(response => {
                    var data = response.data.data;
                    data = data.map((el) => {
                        this.subtotal = Number(el.quantity) * Number(el.unit_price);
                        this.discount = Number(el.req_response[0].discount);
                        this.tax = Number(el.req_response[0].tax);
                        this.shipping = Number(el.req_response[0].shipping);
                        this.nettotal = this.subtotal - (this.discount + this.tax + this.shipping);
                    })
                })
                .catch(err => {});
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.fetchApprovedOrder();
    },
};
</script>

<style lang="scss" scoped>
</style>
