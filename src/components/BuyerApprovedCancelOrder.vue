<template>
<div class="form rows p-t-no dashboardDiv1" v-if="this.$route.path.includes('/buyer/approve-supp-resp')">
    <div id="sn_h_tabs" class="m-t-0 ui-tabs-scroll ui-tabs ui-corner-all ui-widget ui-widget-content OrdersTab">
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center" class="OrdersTab">
            <v-tab :value="item.resp_ref_id" v-for="item in this.items3" :key="item.resp_ref_id">{{ item.resp_ref_id }}</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="item in this.items3" :key="item.resp_ref_id" :value="item.resp_ref_id">
                <div class="sl-content tabContentDiv">
                    <form class="mb-0 responseInvoice">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row mb-8">
                                    <div class="table-responsive ps-table mt-0 orderinvoiceTable orderestinvoicetable">
                                        <EasyDataTable table-class-name="customize-table" buttons-pagination :headers="headers3" :items="[item]" header-text-direction="left" body-text-direction="left" alternating hide-footer>
                                            <template #item-action="item">
                                                <div class="operation-wrapper" :id="item.id">
                                                    <div>
                                                        <v-icon color="grey">
                                                            mdi-content-save
                                                        </v-icon>
                                                        <v-icon color="red" v-if="itemslength > 1">
                                                            mdi-delete
                                                        </v-icon>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #item-quantity="item">
                                                <span>{{ item.quantity}}</span>
                                            </template>
                                            <template #item-price="item">
                                                <div class="input-group input-group-unstyled">
                                                    <span class="input-group-addon dollarinpspan">
                                                        $
                                                    </span>
                                                    <span>{{ item.price + '.00' }}</span>
                                                </div>
                                            </template>
                                            <template #item-total="item">
                                                <div class="input-group input-group-unstyled">
                                                    <span class="input-group-addon dollarinpspan">
                                                        $
                                                    </span>
                                                    <span>{{ item.total }}</span>
                                                </div>
                                            </template>
                                        </EasyDataTable>
                                    </div>
                                </div>
                                <div class="row" style="border-bottom:1px solid #cecdcd">
                                    <div class="col-md-6 shippinginfo">
                                        <div class="contentdiv leftcontentdiv mt-0 mb-0">
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
                                    <div class="col-md-6 shippinginfo" style="right: -15px;">
                                        <div class="contentdiv rightcontentdiv mt-5 mb-5">
                                            <div class="row mt-2">
                                                <div class="col-md-6 calcamount">
                                                    <h5>SubTotal:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" id="subtotal" name="subtotal" class="centered-input" v-model="item.subtotal" disabled></v-text-field>
                                                        <span class="input-group-addon dollarspan">
                                                            $
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-md-6 calcamount">
                                                    <h5>Discount:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" name="discount" id="discount" class="centered-input" v-model="item.discount" disabled></v-text-field>
                                                        <span class="input-group-addon dollarspan">
                                                            $
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-md-6 calcamount">
                                                    <h5>Tax:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" name="tax" id="tax" class="centered-input" v-model="item.tax" disabled></v-text-field>
                                                        <span class="input-group-addon dollarspan">
                                                            $
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2" style="border-bottom:1px solid #d6d4d4">
                                                <div class="col-md-6 calcamount">
                                                    <h5>Shipping:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" id="shipping" name="shipping" class="centered-input" v-model="item.shipping" disabled></v-text-field>
                                                        <span class="input-group-addon dollarspan">
                                                            $
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-5">
                                                <div class="col-md-6 calcamount">
                                                    <h5>Total:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" name="nettotal" id="nettotal" class="centered-input" v-model="item.nettotal" disabled></v-text-field>
                                                        <span class="input-group-addon dollarspan">
                                                            $
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row paystatusDiv mt-0">
                            <div class="col-md-12 statusTextDiv messageBox">
                            <span style="">
                                You have made payment for this order, {{ this.shippingText }}
                                <vue-barcode :value="storevalue" :options="this.Options"></vue-barcode>
                            </span>
                            </div>
                        </div>
                    </form>
                    <div class="ps-form__submit text-center mb-0 mt-8 col-12 controlBtnDiv">
                        <router-link to="/buyer/dashboard" v-if="this.usertype == 'Customer'">
                            <span class="icon-arrow-left backarrow ml-4 mt-2">
                                &nbsp;Back</span>
                        </router-link>
                        <router-link to="/buyer/dashboard">
                            <span class="ps-btn success addbtn" @click.prevent="backtoparent">OK</span>
                        </router-link>
                    </div>
                </div>
            </v-window-item>
        </v-window>
    </div>
</div>
<div class="form rows p-t-no dashboardDiv1" v-if="this.$route.path.includes('/buyer/cancel-supp-resp')">
    <div id="sn_h_tabs" class="m-t-25 ui-tabs-scroll ui-tabs ui-corner-all ui-widget ui-widget-content">
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center" class="OrdersTab">
            <v-tab :value="item.resp_ref_id" v-for="item in this.items3" :key="item.resp_ref_id">{{ item.resp_ref_id }}</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="item in this.items3" :key="item.resp_ref_id" :value="item.resp_ref_id">
                <div class="sl-content tabContentDiv">
                    <form class="mb-0 responseInvoice">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row mb-8">
                                    <div class="table-responsive ps-table mt-0 orderinvoiceTable orderestinvoicetable">
                                        <EasyDataTable table-class-name="customize-table" buttons-pagination :headers="headers3" :items="[item]" header-text-direction="left" body-text-direction="left" alternating hide-footer>
                                            <template #item-action="item">
                                                <div class="operation-wrapper" :id="item.id">
                                                    <div>
                                                        <v-icon color="grey">
                                                            mdi-content-save
                                                        </v-icon>
                                                        <v-icon color="red" v-if="itemslength > 1">
                                                            mdi-delete
                                                        </v-icon>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #item-quantity="item">
                                                <span>{{ item.quantity}}</span>
                                            </template>
                                            <template #item-price="item">
                                                <div class="input-group input-group-unstyled">
                                                    <span class="input-group-addon dollarinpspan">
                                                        $
                                                    </span>
                                                    <span>{{ item.price + '.00' }}</span>
                                                </div>
                                            </template>
                                            <template #item-total="item">
                                                <div class="input-group input-group-unstyled">
                                                    <span class="input-group-addon dollarinpspan">
                                                        $
                                                    </span>
                                                    <span>{{ item.total }}</span>
                                                </div>
                                            </template>
                                        </EasyDataTable>
                                    </div>
                                </div>
                                <div class="row" style="border-bottom:1px solid #cecdcd">
                                    <div class="col-md-6 shippinginfo">
                                        <div class="contentdiv leftcontentdiv mt-0 mb-0">
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
                                    <div class="col-md-6 shippinginfo" style="right: -15px;">
                                        <div class="contentdiv rightcontentdiv mt-5 mb-5">
                                            <div class="row mt-2">
                                                <div class="col-md-6 calcamount">
                                                    <h5>SubTotal:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" id="subtotal" name="subtotal" class="centered-input" v-model="item.subtotal" disabled></v-text-field>
                                                        <span class="input-group-addon dollarspan">
                                                            $
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-md-6 calcamount">
                                                    <h5>Discount:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" name="discount" id="discount" class="centered-input" v-model="item.discount" disabled></v-text-field>
                                                        <span class="input-group-addon dollarspan">
                                                            $
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-md-6 calcamount">
                                                    <h5>Tax:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" name="tax" id="tax" class="centered-input" v-model="item.tax" disabled></v-text-field>
                                                        <span class="input-group-addon dollarspan">
                                                            $
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2" style="border-bottom:1px solid #d6d4d4">
                                                <div class="col-md-6 calcamount">
                                                    <h5>Shipping:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" id="shipping" name="shipping" class="centered-input" v-model="item.shipping" disabled></v-text-field>
                                                        <span class="input-group-addon dollarspan">
                                                            $
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-5">
                                                <div class="col-md-6 calcamount">
                                                    <h5>Total:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" name="nettotal" id="nettotal" class="centered-input" v-model="item.nettotal" disabled></v-text-field>
                                                        <span class="input-group-addon dollarspan">
                                                            $
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row paystatusDiv mt-5">
                            <div class="col-md-12 statusTextDiv messageBox">
                            <span style="">
                                You have made payment for this order, {{ this.shippingText }}
                                <vue-barcode :value="storevalue" :options="this.Options"></vue-barcode>
                            </span>
                            </div>
                        </div>
                    </form>
                    <div class="ps-form__submit text-center mb-0 mt-8 col-12 controlBtnDiv">
                        <router-link to="/buyer/dashboard" v-if="this.usertype == 'Customer'">
                            <span class="icon-arrow-left backarrow ml-4 mt-2">
                                &nbsp;Back</span>
                        </router-link>
                        <router-link to="/buyer/dashboard">
                            <span class="ps-btn success addbtn" @click.prevent="backtoparent">OK</span>
                        </router-link>
                    </div>
                </div>
            </v-window-item>
        </v-window>
    </div>
</div>
</template>

<script>
export default {
    name: 'BuyerQuoteDetailsPage',
    components: {},
    data() {
        return {
            tab:0,
            pkgtype: '',
            totalpkg: '',
            itemperpkg: '',
            usertype: '',
            headers3: [{
                    text: 'Product',
                    value: 'prod',
                    sortable: true
                },
                {
                    text: 'Description',
                    value: 'desc',
                    sortable: true
                },
                {
                    text: 'Quantity',
                    value: 'quantity',
                    sortable: true
                },
                {
                    text: 'Unit',
                    value: 'unit',
                    sortable: true
                },
                {
                    text: 'Unit Price',
                    value: 'price',
                    sortable: true
                },
                {
                    text: 'total',
                    value: 'total',
                    sortable: true
                },
                {
                    text: 'Action',
                    value: 'action',
                    sortable: true
                }
            ],
            items3: [],
            nettotal: 0,
            subtotal: 0,
            discount: 0,
            tax: 0,
            shipping: 0,
            total: 0,
            itemslength: null,
            productName: '',
            description: '',
            netTotal: '',
            storevalue: 'Usha Yadav | ushacec1234@gmail.com',
            value: {
                type: String,
                default: undefined,
            },
            options: {
                type: Object,
                default: undefined,
            },
            tag: {
                type: String,
                default: 'canvas',
            },
            status: '',
            shippingText: 'waiting for the supplier to start the shipping.'
        };
    },
    methods: {
        backtoparent() {
            this.$router.back();
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
            formData.append('usertype', 'Customer');
            formData.append('quoteflag', 'get-quote');

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
                    if(response.status == 200){
                        var quoteData = response.data.data;
                        this.productName = quoteData[0].quoteproductname[0].name;
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status == 401 || error.response.status == 404  || error.response.status == 400) {
                            localStorage.clear();
                            if (this.$route.name != 'home') {
                                    this.$router.push({
                                    name: 'home'
                                });
                            } 
                        }
                    }
                    else{
                        if(error.message == "Network Error"){
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
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/getorder`, formData, {
                        headers
                    })
                .then(response => {
                    this.items3 = response.data.data;
                    this.items3 = this.items3.map((el) => {
                        var total = Number(el.quantity) * Number(el.unit_price);
                        var totalamt = total + '.00';
                        this.subtotal = total;
                        this.discount = el.req_response[0].discount;
                        this.tax = el.req_response[0].tax;
                        this.shipping = el.req_response[0].shipping;
                        this.nettotal = ((this.subtotal+ Number(this.tax) + Number(this.shipping))-Number(this.discount));
                        this.status = el.status;
                        if (el.status != 'Approved') {
                            this.shippingText = 'Shipping has been started.'
                        }
                        this.description = el.req_response[0].description;
                        this.pkgtype = el.req_response[0].packaging_detail;
                        this.itemperpkg = Number(el.req_response[0].qty_per_packet);
                        this.totalpkg = Number(el.quantity) / this.itemperpkg;
                        return {
                            id: 0,
                            resp_ref_id: el.resp_ref_id,
                            reqid: el.request_id,
                            quoteid: el.response_id,
                            prod: this.productName,
                            desc: this.description,
                            quantity: el.quantity,
                            unit: (el.req_response[0].unit_of_measurement).split('-')[1],
                            price: el.unit_price,
                            total: totalamt,
                            subtotal: this.subtotal,
                            discount: this.discount,
                            tax: this.tax,
                            shipping: this.shipping,
                            nettotal: this.nettotal,
                            pkgtype: this.pkgtype,
                            itemperpkg: this.itemperpkg,
                            totalpkg: this.totalpkg
                        }
                    });
                })
                .catch(err => {});
        },
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.fetchQuoteList();
        this.fetchApprovedOrder();
    },
};
</script>

<style scoped>
.responseInvoice{
padding:15px !important;
}.tabContentDiv{
    margin-top: -25px !important;
}
</style>
