<template>
    <LoaderComponent v-if="this.loader" />
    <form>
        <div class="mt-3 respHead"><span>Invoice</span></div>
        <div id="sn_h_tabs" class="m-t-0 ui-tabs-scroll ui-tabs ui-corner-all ui-widget ui-widget-content">
            <div class="d-flex flex-row-reverse mr-5 downloadIconDiv">
                <font-awesome-icon @click="generateInvoicepdf" :icon="['far', 'circle-down']" />
            </div>
            <div id="supp-1" class="sn-h-tab ui-tabs-panel ui-corner-bottom ui-widget-content">
                <div class="sl-content tabContentDiv">
                    <vue3-simple-html2pdf ref="vue3SimpleHtml2pdf" :options="pdfOptions" :filename="exportFilename">
                        <form class="row mb-0 responseInvoice">
                            <div class="container-fluid incoicecontainer">
                                <div class="form">
                                    <div class="row" style="border-bottom:1px solid #cecdcd">
                                        <div class="col-md-8 leftideinvoicediv">
                                        </div>
                                        <div class="col-md-4 rightsideinvoicediv">
                                        </div>
                                    </div>
                                    <div class="row" style="border-bottom:1px solid #cecdcd">
                                        <div class="col-md-6 shippinginfo">
                                            <div class="contentdiv leftcontentdiv mt-5 mb-5">
                                                <h5> Ship To: </h5>
                                                <h6>Company Name:{{ this.invoiceDetails.company_name }}</h6>
                                                <p>Address:{{ this.invoiceDetails.address }}</p>
                                                <p>City:{{ this.invoiceDetails.city }}</p>
                                                <p>Country:{{ this.invoiceDetails.country }}</p>
                                                <p>ZipCode:{{ this.invoiceDetails.zipcode }}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-6 rightContainer">
                                            <div class="contentdiv rightcontentdiv mt-5">
                                                <h5> Invoice:</h5>
                                                <p>{{'#' +this.invoiceDetails.invoice_no }}</p>
                                                <h6>Delivery Date</h6>
                                                <p>{{this.deliveryDate}}</p>
                                                <h6>Invoice Due Date</h6>
                                                <p>{{this.dueDate}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-5">
                                                <div class="table-responsive ps-table mt-0 orderinvoiceTable">
                                                    <EasyDataTable table-class-name="customize-table"
                                                    buttons-pagination :headers="headers3" :items="items3" 
                                                    header-text-direction="left" body-text-direction="left"
                                                    alternating hide-footer>
                                                    </EasyDataTable>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 shippinginfo">
                                                    <div class="contentdiv leftcontentdiv mt-0 mb-0">
                                                        <h5>Packaging Details: </h5>
                                                        <p>
                                                            <ul>
                                                                <li>-Packaging type is <b class="boldText">{{ this.pkgtype }}</b>.
                                                                </li>
                                                                <li>-One <b class="boldText">{{ this.pkgtype }}</b> contains
                                                                    <b class="boldText">{{ this.itemperpkg }}</b> items.</li>
                                                                <li>-No of <b class="boldText">{{ this.pkgtype }}</b>'s shipped are
                                                                    <b class="boldText">{{ this.totalpkg }}</b>.</li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-md-6  rightContainer">
                                                    <div class="contentdiv rightcontentdiv mt-0 mb-0">
                                                        <div class="row mt-2">
                                                            <div class="col-md-6 calcamount">
                                                                <h5>SubTotal:</h5>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span>{{'$' + this.subtotal + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-2">
                                                            <div class="col-md-6 calcamount">
                                                                <h5>Discount:</h5>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span>{{ '$' + this.discount + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-2" style="border-bottom: 1px solid rgb(199 199 199);">
                                                            <div class="col-md-6 calcamount">
                                                                <h5>Shipping:</h5>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span>{{'$' +this.shipping + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-2" style="border-bottom: 1px solid rgb(199 199 199);">
                                                            <div class="col-md-6 calcamount">
                                                                <h5>Tax:</h5>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span>{{'$' +this.tax + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-2">
                                                            <div class="col-md-6 calcamount">
                                                                <h5>Total:</h5>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span>{{'$' + this.nettotal + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 shippinginfo">
                                                    <div class="contentdiv rightcontentdiv mt-5 mb-5">
                                                        <h5>Shipping Method: </h5>
                                                        <div class="row mt-2">
                                                            <div class="col-md-6 shippingDetails">
                                                                <span>Ship Via: &nbsp; {{this.invoiceDetails.shipvia}} </span>
                                                            </div>
                                                            <div class="col-md-6">
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 shippingDetails">
                                                                <span>Shipping Method: &nbsp; {{this.invoiceDetails.shipmethod}} </span>
                                                            </div>
                                                            <div class="col-md-6">
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 shippingDetails">
                                                                <span>Shipping Terms: &nbsp;{{this.invoiceDetails.shipterms}} </span>
                                                            </div>
                                                            <div class="col-md-6">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6  rightContainer">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="html2pdf__page-number">1</div>
                        <div class="html2pdf__page-break"></div>
                    </vue3-simple-html2pdf>
                </div>
            </div>
        </div>
        <div class="ps-form__submit text-center mb-0 mt-8 col-12 controlBtnDiv">
            <router-link to="/vendor/orders" v-if="this.$route.path.includes('/vendor/order-ship-details')">
            <span class="icon-arrow-left backarrow ml-8 mt-2" 
            >&nbsp;Back</span>
            </router-link>
            <router-link to="/admin/approved-order" v-if="this.$route.path.includes('/admin/order-ship-details')">
            <span class="icon-arrow-left backarrow ml-8 mt-2" 
            >&nbsp;Back</span>
            </router-link>
            <div class="row payinfostatusDiv mt-0">
                <div class="col-md-12 statusTextDiv messageBox">
                    <span class="StatusText" v-if="this.usertype == 'Supplier'" style="margin-bottom: 46px !important;">
                        Shipping started on - 
                        <b style="font-weight:600;font-size: 15px; color:#130692 !important;" >
                        {{this.shippingDate}}</b>
                    </span>
                    <div class="col-md-12 statusTextDiv" v-if="this.usertype =='Admin'">
                        <span>
                            Shipping started on - 
                            <b style="font-weight:600;font-size: 15px; color:#130692 !important;" >
                            {{this.shippingDate}}</b>
                        </span>
                        <br />
                        <span style="color:rgb(14, 14, 13);font-size: 15px;">
                            As you delivered the order to customer please confirm.
                                &nbsp;<br/>
                                <button type="button" class="btn btn-default
                                    mt-0 shipBtn" style="" 
                                    @click.prevent="confirmOk()">
                                    Order Delivered
                                </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
export default {
    name: 'OrderShipDetailPage',
    components: {LoaderComponent},
    data() {
        return {
            loader:false,
            pkgtype: '',
            totalpkg: '',
            itemperpkg: '',
            item_qty: '',
            username: '',
            items3: [],
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
                }
            ],
            decription: '',
            productname: '',
            subtotal:'',
            discount:'',
            shipping:'',
            tax:'',
            shippingDate:null,
            invoiceDetails:[],
            deliveryDate:null,
            dueDate:null,
        };
    },
    methods: {
        generateInvoicepdf() {
            this.$refs.vue3SimpleHtml2pdf.download();
        },
        backtoparent() {
            this.$router.back();
        },
        confirmOk() {
            let quoteid, req_id = '';
            if (this.$route.query.quoteid) {
                quoteid = this.$route.query.quoteid;
                req_id = this.$route.query.reqid;
            }
            var token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('response_id', quoteid);
            formData.append('req_id', req_id);
            formData.append('statusflag', 'delivered');
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            this.$swal({
                title: 'Do you want to confirm Order delivery?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass:'warningswal'
            }).then((result) => {
                if (result.value) {
                    this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/changeorderstatus`, formData, {
                        headers
                    })
                    .then(response => {
                        this.loader = false;
                        this.$swal({
                            icon: 'success',
                            title: 'Order Delivered!',
                            showConfirmButton: true,
                            confirmButtonColor: 'rgb(2 145 2)',
                        }).then(() => {
                          this.backtoparent();
                        });
                    })
                    .catch((error) => {
                    });
                }
                else{
                    this.loader = false;
                }
            });
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
            if(this.usertype == 'Admin'){
                formData.append('usertype',this.usertype);
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
                    if(response.status == 200){
                    var quoteData = response.data.data;
                    this.productname = quoteData[0].quoteproductname[0].name;
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
            this.loader = true;
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/getorder`, formData, {
                        headers
                    })
                .then(response => {
                    this.loader = false;
                    this.items3 = response.data.data;
                    this.items3 = this.items3.map((el) => {
                        var total = Number(el.quantity) * Number(el.unit_price);
                        var totalamt = '$' + total + '.00'
                        var price = '$' + el.unit_price 
                        this.subtotal= total,
                        this.discount= Number(el.req_response[0].discount),
                        this.tax = Number(el.req_response[0].tax),
                        this.shipping = Number(el.req_response[0].shipping),
                        this.nettotal= (this.subtotal + this.tax +  this.shipping)-this.discount;
                        this.shippingDate = new Date(el.updated_at).toLocaleString('en-UK');
                        this.pkgtype = el.req_response[0].packaging_detail;
                        this.itemperpkg = Number(el.req_response[0].qty_per_packet);
                        this.totalpkg = Number(el.quantity) /  this.itemperpkg;
                        this.description = el.req_response[0].description;
                        return {
                            id: 0,
                            prod: this.productname,
                            desc: this.description,
                            quantity: el.quantity,
                            unit:(el.req_response[0].unit_of_measurement).split('-')[1],
                            price: price,
                            total: totalamt
                        }
                    });
                })
                .catch(err => {});
        },
        async getInvoiceDetails() {
            var orderid = '';
            if (this.$route.query.orderid) {
                orderid = this.$route.query.orderid;
            }
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            };
            this.axios.get(
                    process.env.VUE_APP_API_ENDPOINT + `/getinvoicedetails/${orderid}`, {
                        headers
                    })
                .then(response => {
                    if(response.status == 200){
                        this.invoiceDetails = response.data.data[0];
                        this.deliveryDate = this.invoiceDetails.delivery_date.split(' ')[0]
                        this.dueDate =  this.invoiceDetails.invoice_due_date.split(' ')[0];
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
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.username = localStorage.getItem('name');
        this.fetchQuoteList();
        this.fetchApprovedOrder();
        this.getInvoiceDetails();
    }
};
</script>

<style scoped>
.boldText{
    color: #000;
    font-weight: 600;
    font-size: 14px;
}
.statusTextDiv{
    margin-top: -8px !important;
}
.shippingDetails span{
    text-wrap: nowrap;
}
</style>
