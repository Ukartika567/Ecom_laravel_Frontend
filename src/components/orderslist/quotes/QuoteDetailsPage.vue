<template lang="html">
<LoaderComponent v-if="this.loader" />
<div class="werehouseContainer">
    <div class="ps-card__header custNameHeader" v-if="this.$route.path.includes('/admin/quote-details') ||
            this.$route.path.includes('/vendor/quote-details')">
        <h4>Requested Quote</h4>
    </div>
    <div class="ps-card__header custNameHeader" v-if="this.$route.path.includes('/admin/resp-details') || this.$route.path.includes('/admin/quote-resp-details') || 
        this.$route.path.includes('/vendor/resp-details') || this.$route.path.includes('/vendor/quote-resp-details')">
        <h4>Response Quote</h4>
    </div>
    <div class="ps-card__header custNameHeader" v-if="this.$route.path.includes('/admin/approve-quote-details') || this.$route.path.includes('/vendor/approve-quote-details')">
        <h4>Approved Quote</h4>
    </div>
    <div class="ps-card__header custNameHeader" v-if="this.$route.path.includes('/admin/order-quoteresp-details') ||
                this.$route.path.includes('/vendor/order-quoteresp-details') || this.$route.path.includes('/admin/order-ship-details') || this.$route.path.includes('/vendor/order-ship-details')">
        <h4>Order</h4>
    </div>
    <div class="form">
        <section class="widget widget-white quotedWidget">
            <div class="widget-body bodyContainer" style="padding:20px">
                <div class="form-rows p-t-no">
                    <form>
                        <div class="mt-3 respHead"><span><b class="boldText">
                                Request for Quote(RequestId- {{ this.$route.query.reqid }})</b>
                                <span v-if="(this.usertype == 'Supplier' && this.countsuppresp != '' && this.quote_status != 'InShipping')&&
                                     (this.usertype == 'Supplier' && this.countsuppresp != '' && this.quote_status != 'Approved') && (this.usertype == 'Supplier' 
                                      && this.countsuppresp != '' && this.quote_status != 'Delivered')" style="color:#0f0;float: right;">
                                      The total number of generated quotations -
                                      {{ this.countsuppresp }}
                                </span>
                            </span></div>
                        <div class="quoteHead">
                            <div class="table-responsive ps-table mt-0 quotesDetailtTable">
                                <EasyDataTable table-class-name="customize-table" buttons-pagination :headers="headers" :items="items" header-text-direction="left" body-text-direction="left" alternating hide-footer>
                                    <template #item-totalprice="item">
                                        <input type="text" v-model="item.totalprice" class="input-control inputField" style="width: 60px; height: 30px;">
                                    </template>
                                    <template #item-status="item">
                                        <span :id="item.id" :style="`color:orange`" v-if="this.$route.query.quoteid && this.$route.query.cancelorder == '' ">
                                        InProgress</span>
                                        <span :style="`color:${getColor(this.quote_status)}`" v-else>
                                            {{ this.quote_status }}</span>
                                    </template>
                                </EasyDataTable>
                            </div>
                            <div class="row mt-2 mb-0">
                                <div class="col-md-4 mb-0 pl-6">
                                    <!-- <span style="color:#4d4b4b;font-weight:600">Status: </span>
                                    <span :style="`color:orange`" v-if="this.$route.query.quoteid && this.$route.query.cancelorder == '' ">
                                        InProgress</span>
                                    <span :style="`color:${getColor(this.quote_status)}`" v-else>
                                        {{ this.quote_status }}</span> -->
                                    <span style="color:#4d4b4b;font-weight:600">Requested Date: </span>
                                    <span>{{ this.req_date }}</span>    
                                </div>
                                <div class="col-md-4 mb-0"></div>
                                <div class="col-md-4 mb-0 text-center mr-0">
                                    <span style="color:#4d4b4b;font-weight:600">Expected Date: </span>
                                    <span>{{ this.expected_date }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="ps-form__submit text-center mb-0 mt-8 col-12 controlBtnDiv">
                            <span class="icon-arrow-left backarrow ml-4 mt-2" @click.prevent="backtoparent">&nbsp;Back</span>
                            <button type="button" class="ps-btn ps-btn--gray mr-3" style="font-size:12px" :class="{ 'hidecancelbtn': 
                            this.$route.path.includes('/vendor/quote-details') }" @click.prevent="cancelquote(this.$route.query.reqid)" v-if="this.$route.path.includes('/vendor/quote-details')">
                                Delete</button>
                            <button class="ps-btn success sendbtn" id="sendbtn" v-if="this.$route.path.includes('/admin/quote-details')" @click.prevent="showSupplierDailog('Mrs. Smithi', 'Mr. John', 'Mr. Devid')">Send to
                                Supplier
                            </button>
                            <router-link :to="{ path: '/vendor/quotation-details', 
                            query: { 'id': this.req_id } }" class="ps-btn success sendbtn" id="sendbtn" v-if="this.$route.path.includes('/vendor/quote-details') &&
                            this.hidecanceleditbtn">Response</router-link>
                        </div>
                    </form>

                    <ResponseDetails v-if="this.$route.path.includes('/admin/resp-details') || this.$route.path.includes('/vendor/resp-details')" />
                    <QuoteRespDetail :prodname="this.productname" v-if="this.$route.path.includes('/admin/quote-resp-details') ||
                             this.$route.path.includes('/vendor/quote-resp-details')" />
                    <ApprovedQuoteDetail v-if="this.$route.path.includes('/admin/approve-quote-details')
                             || this.$route.path.includes('/vendor/approve-quote-details')" />
                    <OrderShipDetail v-if="this.$route.path.includes('/admin/order-ship-details')
                             || this.$route.path.includes('/vendor/order-ship-details')" />
                    <OrderQuoteRespDetail v-if="
                            this.$route.path.includes('/admin/order-quoteresp-details')
                             || this.$route.path.includes('/vendor/order-quoteresp-details')" />
                </div>
            </div>
        </section>
    </div>
</div>
<SupplierModal :visibles="showSuppModal" v-if="this.showSuppModal" :prodRaiseid="this.prodRaiseid" :suppliernew="this.supplier" @close="showSuppModal = false" />
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import SupplierModal from '@/components/ModalsComponent/SupplierModal.vue';
import ResponseDetails from './ResponseDetails.vue';
import QuoteRespDetail from './QuoteRespDetail.vue';
import ApprovedQuoteDetail from './ApprovedQuoteDetail.vue';
import OrderShipDetail from './OrderShipDetail.vue';
import OrderQuoteRespDetail from './OrderQuoteRespDetail.vue';
export default {
    name: 'CreateQuotePageView',
    components: {
        SupplierModal,
        ResponseDetails,
        QuoteRespDetail,
        ApprovedQuoteDetail,
        OrderShipDetail,
        OrderQuoteRespDetail,
        LoaderComponent
    },
    setup() {
        return {}
    },
    data() {
        return {
            loader: false,
            hidecanceleditbtn: true,
            showSuppModal: false,
            usertype: '',
            items: [],
            headers: [{
                    text: 'Category',
                    value: 'category',
                    sortable: true
                },
                {
                    text: 'SubCategory',
                    value: 'subcategory',
                    sortable: true
                },
                {
                    text: 'Product',
                    value: 'product',
                    sortable: true
                },
                {
                    text: 'Quantity',
                    value: 'quantity',
                    sortable: true
                },
                {
                    text: 'Status',
                    value: 'status',
                    sortable: true
                },
            ],
            supplier1: '',
            supplier2: '',
            supplier3: '',
            testflag: '',
            productname: '',
            countsuppresp: '',
            expected_date:null,
        };
    },
    methods: {
        cancelquote(id) {
            var userid = localStorage.getItem('loginid');
            var quoteid = id;
            let formData = new FormData();
            formData.append('quoteid', quoteid);
            formData.append('userid', userid);
            this.$swal({
                title: 'Do you want to delete this request?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'swal-wide warningswal',
            }).then((result) => {
                if (result.value) {
                    this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/cancelquote', formData, {
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then((response) => {
                            this.backtoparent();
                        })
                        .catch((error) => {
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
                        })
                } else {}
            });
        },

        showSupplierDailog(supp1, supp2, supp3) {
            this.showSuppModal = true;
            this.supplier1 = supp1;
            this.supplier2 = supp2;
            this.supplier3 = supp3;
        },
        backtoparent() {
            this.$router.back();
        },
        async fetchQuoteList() {
            var loginid = localStorage.getItem('loginid');
            let formData = new FormData();
            let reqid = '';
            if (this.$route.query.reqid) {
                reqid = this.$route.query.reqid;
            }
            formData.append('search_by_quote_id', reqid);
            formData.append('categoryname', '');
            formData.append('product', '');
            formData.append('reqdate', '');
            formData.append('user_id', loginid);
            formData.append('usertype', this.usertype);
            if (this.$route.path.includes('quote-resp-details') ||
                this.$route.path.includes('approve-quote-details') ||
                this.$route.path.includes('order-ship-details') ||
                this.$route.path.includes('order-quoteresp-details')) {
                this.testflag = 'quote-response';
            }
            formData.append('quoteflag', this.testflag);
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/get-reqquote', formData, {
                        headers
                    })
                .then(response => {
                    this.loader = false;
                    this.testflag = true;
                    this.items = response.data.data;
                    this.items = this.items.map((el) => {
                        this.req_id = el.id;
                        this.req_date = el.created_at.split('T')[0];
                        this.expected_date = el.requiredtime.split(' ')[0];;
                        this.quote_status = el.status;
                        this.productname = el.quoteproductname[0].name;
                        this.prodid = el.quoteproductname[0].id;
                        return {
                            category: el.quoteproductname[0].quotesubcategoryname[0].categoryname[0].name,
                            subcategory: el.quoteproductname[0].quotesubcategoryname[0].name,
                            product: el.quoteproductname[0].name,
                            quantity: el.qty + ' ' + (el.unit_of_measurement).split('-')[1],
                            status: el.status,
                        }
                    });

                })
                .catch(err => {});
        },
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
        async gettotalsupplier() {
            var token = localStorage.getItem('token');
            var quote_id = '';
            if (this.$route.query.reqid) {
                quote_id = this.$route.query.reqid;
            }
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/countresp`, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    }
                })
                .then((resp) => {
                    var totalsupp = [];
                    var data = resp.data.data;
                    data = data.map((el) => {
                        if (el.request_quote_id == quote_id) {
                            totalsupp.push(el);
                        }
                    })
                    this.countsuppresp = totalsupp.length;
                })
                .catch((error) => {});
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.username = localStorage.getItem('name');
        this.fetchQuoteList();
        this.gettotalsupplier();
    }
};
</script>

<style lang="scss" scoped></style>
