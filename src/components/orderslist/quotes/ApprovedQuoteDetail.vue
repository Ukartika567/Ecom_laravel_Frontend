<template>
<LoaderComponent v-if="this.loader" />
<form>
    <div class="mt-8 respHead">
        <span><b style="float: right;">Order is approved. When you start shipping {{ this.creditpoint }} credit point will be deducted.</b></span>
    </div>
    <div id="sn_h_tabs" class="m-t-0 ui-tabs-scroll ui-tabs ui-corner-all ui-widget 
    ui-widget-content quotationTabs">
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center" class="OrdersTab">
            <v-tab :value="item.resp_ref_id" v-for="item in this.approveddata" :key="item.resp_ref_id">{{ 'Quote Id - '+item.resp_ref_id }}
            </v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="item in this.approveddata" :key="item.resp_ref_id" :value="item.resp_ref_id">
                <div id="cust-1" class="sn-h-tab ui-tabs-panel p-5 ui-corner-bottom ui-widget-content">
                    <div>
                        <div class="mt-1">
                            <span style="color: rgb(20, 2, 122);"> Approval Date - {{item.approved_date}}</span>
                            <div style="border:1px solid #aeadad">
                                <div class="table-responsive ps-table mt-0 resptable">
                                    <table class="table table-bordered resptable orderresptable">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Unit</th>
                                                <th scope="col">Price/unit</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span>{{ item.prod }}</span>
                                                </td>
                                                <td>
                                                    <span>{{ item.desc
                                                                                }}</span>
                                                </td>
                                                <td>
                                                    <span>{{ item.quantity }}</span>
                                                </td>
                                                <td>
                                                    <span>
                                                        {{ item.measurement_unit }}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span><i>$</i>{{ item.unitprice}}</span>
                                                </td>
                                                <td>
                                                    <span><i>$</i>{{ item.total + '.00' }}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row mt-0">
                                    <div class="col-md-6 shippinginfo">
                                        <div class="contentdiv leftcontentdiv mt-0 mb-0 p-2">
                                            <h5>Packaging Details: </h5>
                                            <p>
                                                <ul>
                                                    <li>-Packaging type is <b class="boldText">{{ item.pkgtype }}</b>.
                                                    </li>
                                                    <li>-One <b class="boldText">{{ item.pkgtype }}</b> contains
                                                        <b class="boldText">{{ item.itemperpkg }}</b> items.</li>
                                                    <li>-No of <b class="boldText">{{ item.pkgtype }}</b>'s shipped are
                                                        <b class="boldText">{{ item.totalpkg }}</b>.</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 rightContainer">
                                        <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                            <div class="row mt-0">
                                                <div class="col-md-6 calcamount">
                                                    <h4>SubTotal:</h4>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <span><i>$</i>{{ item.subtotal +
                                                                                    '.00' }}</span>
                                                </div>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6 calcamount">
                                                    <h4>Discount:</h4>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <span><i>$</i>{{ item.discount +
                                                                                    '.00' }}</span>
                                                </div>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6 calcamount">
                                                    <h4>Tax:</h4>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <span><i>$</i>{{ item.tax +
                                                                                    '.00' }}</span>
                                                </div>
                                            </div>
                                            <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                <div class="col-md-6 calcamount">
                                                    <h4>Shipping:</h4>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <span><i>$</i>{{
                                                                                   item.shippingcharges +
                                                                                    '.00' }}</span>
                                                </div>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6 calcamount">
                                                    <h4>NetAmount:</h4>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <span><i>$</i>{{ item.nettotal +
                                                                                    '.00' }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-window-item>
        </v-window>
    </div>
    <div class="ps-form__submit text-center mb-0 mt-8 col-12 controlBtnDiv">
        <router-link to="/vendor/orders" v-if="this.$route.path.includes('/vendor/approve-quote-details')">
            <span class="icon-arrow-left backarrow ml-5 mt-2">&nbsp;Back</span>
        </router-link>

        <router-link to="/admin/approved-order" v-if="this.$route.path.includes('/admin/approve-quote-details')">
            <span class="icon-arrow-left backarrow ml-5 mt-2">&nbsp;Back</span>
        </router-link>

        <button type="button" class="ps-btn success addbtn" v-if="!this.$route.path.includes('approve-quote-details')" @click.prevent="backtoparent">
            OK</button>
        <div class="row payinfostatusDiv mt-0" v-if="this.$route.path.includes('/vendor/approve-quote-details')">
            <div class="col-md-12 statusTextDiv">
                <span style="" class="d-none">
                    <vue3-simple-html2pdf ref="vue3SimpleHtml2pdf" :options="pdfOptions" :filename="exportFilename">
                        <vue-barcode :value="storevalue" :options="this.Options"></vue-barcode>
                        <div class="html2pdf__page-number">1</div>
                        <div class="html2pdf__page-break"></div>
                    </vue3-simple-html2pdf>
                </span>
                <span v-if="changedstatus">{{this.shippingText2}}</span>
                <span class="messageBox" v-else>
                    <span class="StatusText">For the above quotation amount
                        <span><i>$</i>{{ this.amount + '.00' }}
                        </span>is recieved on admin side.
                    </span>
                    <br />
                    <span style="color:rgb(14, 14, 13)">
                        Please specify shipping details to start shipping
                    </span>
                    <div class="row">
                        <div class="col-md-12">
                            &nbsp;<button type="button" class="btn btn-default mt-0 shipBtn" style="" @click="startshipping()">
                                Enter Shipping Details
                            </button>
                            <button type="button" style="margin-top: 0px !important;" class="d-none btn pull-right mt-5 btn-default mt-0 shipBtn" @click.prevent="generateInvoicepdf">
                                Download Barcode
                            </button>
                        </div>
                    </div>
                </span>
            </div>
        </div>
        <div class="row payinfostatusDiv mt-0" v-if="this.$route.path.includes('/admin/approve-quote-details')">
            <div class="col-md-12 statusTextDiv">
                <span class="messageBox">
                    <span class="StatusText">
                        {{ this.shippingText }}
                    </span>
                </span>
            </div>
        </div>

    </div>
</form>
<InvoiceDetailsModal :visible="this.showModal" v-if="this.showModal" @close="this.showModal = false" :mode="this.addinvoice" :creditpoint="this.creditpoint" />
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import InvoiceDetailsModal from "@/components/ModalsComponent/ReviewFeedBackModal.vue"
export default {
    name: 'CreateQuotePageView',
    components: {
        LoaderComponent,
        InvoiceDetailsModal
    },
    data() {
        return {
            storevalue: 'Usha Yadav | ushacec1234@gmail.com',
            exportFilename: 'Barcode',
            addinvoice: 'addInvoice',
            showModal: false,
            shippingstarted: false,
            tab: 0,
            loader: false,
            pkgtype: '',
            totalpkg: '',
            itemperpkg: '',
            approvedDate: new Date(),
            panel: [0],
            item_qty: 0,
            readonly: false,
            statusnotchange: true,
            changedstatus: false,
            username: '',
            status: null,
            negotiations: [{
                negotiate1: {
                    title: ' See Approved Order'
                },
                negotiate2: {
                    title: ''
                },
            }],
            usertype: '',
            approveddata: [{
                id: 0,
                prod: '',
                description: '',
                quantity: 0,
                unitprice: 0,
                total: 0,
                subtotal: '',
                discount: '',
                tax: '',
                shippingcharges: '',
                nettotal: ''
            }],
            decription: '',
            amount: null,
            shippingText: 'Amount is received.Shipping has not started yet.',
            shippingText2: 'Please start shipping',
            productName: '',
            creditpoint: 0,
            userCreditpoints: 0
        };
    },
    methods: {
        generateInvoicepdf() {
            this.$refs.vue3SimpleHtml2pdf.download();
        },
        backtoparent() {
            this.$router.back();
        },
        startdispatching() {
            this.$swal({
                title: 'Are you sure you want to start Shipping?',
                text: 'You can\'t revert your action',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                confirmButtonColor: 'rgb(2 145 2)',
                customClass: 'warningswal'
            }).then(() => {
                document.querySelector('.dispatchBtn').classList.add('d-none');
                document.querySelector('.StatusText').innerText = 'Shipping has been started!'
            });
        },
        startshipping() {
            if (this.userCreditpoints < this.creditpoint) {
                this.$swal.fire({
                    icon: 'info',
                    title: 'You have  insufficiant credit points.',
                    showConfirmButton: true,
                    timer: 5000
                }).then(() => {
                    this.$router.push({
                        path: '/vendor/purchase-credits',
                    })
                });
            } else {
                this.showModal = true;
                return;
            }
        },
        async fetchQuoteList() {
            var loginid = localStorage.getItem('loginid');
            var reqid = '';
            if (this.$route.query.reqid) {
                reqid = this.$route.query.reqid;
            }
            let formData = new FormData();
            formData.append('search_by_quote_id', reqid);
            formData.append('categoryname', '');
            formData.append('product', '');
            formData.append('reqdate', '');
            formData.append('user_id', loginid);
            formData.append('quoteflag', 'get-quote');
            if (this.usertype == 'Admin') {
                formData.append('usertype', this.usertype);
            }
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/get-reqquote', formData, {
                        headers
                    })
                .then(response => {
                    if (response.status == 200) {
                        var quoteData = response.data.data;
                        this.productName = quoteData[0].quoteproductname[0].name;
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
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
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/getorder`, formData, {
                        headers
                    })
                .then(response => {
                    this.approveddata = response.data.data;
                    this.approveddata = this.approveddata.map((el) => {
                        this.item_qty = Number(el.quantity);
                        var totalamt = Number(el.quantity) * Number(el.unit_price);
                        var nettotal = ((totalamt + Number(el.req_response[0].tax) + Number(el.req_response[0].shipping)) - Number(el.req_response[0].discount));
                        this.amount = nettotal;
                        this.description = el.req_response[0].description;
                        this.approvedDate = new Date(el.updated_at).toLocaleDateString();

                        this.pkgtype = el.req_response[0].packaging_detail;
                        this.itemperpkg = Number(el.req_response[0].qty_per_packet);
                        this.totalpkg = Number(el.quantity) / this.itemperpkg;
                        if (nettotal == 5000 || nettotal == 5050 || nettotal < 5000 || nettotal < 5050 || (nettotal > 5000 && nettotal < 5050)) {
                            this.creditpoint = 1;
                        } else if (nettotal > 5050) {
                            this.creditpoint = Math.ceil((1 / 5000) * (nettotal - 5000) + 1);
                        }
                        return {
                            id: 0,
                            resp_ref_id: el.resp_ref_id,
                            approved_date: this.approvedDate,
                            reqid: el.request_id,
                            quoteid: el.response_id,
                            prod: this.productName,
                            desc: this.description,
                            quantity: this.item_qty,
                            measurement_unit: (el.req_response[0].unit_of_measurement).split('-')[1],
                            unitprice: el.unit_price,
                            total: totalamt,
                            subtotal: totalamt,
                            discount: el.req_response[0].discount,
                            tax: el.req_response[0].tax,
                            shippingcharges: el.req_response[0].shipping,
                            nettotal: nettotal,
                            pkgtype: this.pkgtype,
                            itemperpkg: this.itemperpkg,
                            totalpkg: this.totalpkg
                        }
                    });
                })
                .catch(err => {});
        },
        getUserProfile() {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token,
            }
            this.loader = true;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/get-profile/${user_id}`, {
                    headers
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.loader = false;
                        this.userCreditpoints = response.data.user[0].userprofile.credit_points;
                    }
                }).catch((error) => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404 || error.response.status == 400) {
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
        },
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.username = localStorage.getItem('name');
        this.fetchQuoteList();
        this.fetchApprovedOrder();
        this.getUserProfile();
    }
};
</script>

<style scoped>
.payinfostatusDiv {
    margin-top: -30px !important;
}

.quotationTabs.ui-tabs .ui-tabs-panel {
    margin-top: -30px !important;
}

.statusTextDiv {
    margin-top: 0px !important;
}
</style>
