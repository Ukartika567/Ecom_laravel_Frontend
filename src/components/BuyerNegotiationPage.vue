<template>
<LoaderComponent v-if="this.loader" />
<div class="form rows p-t-no dashboardDiv1">
    <div id="sn_h_tabs" class="m-t-0 ui-tabs-scroll ui-tabs ui-corner-all ui-widget ui-widget-content">
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center" class="OrdersTab">
            <v-tab :value="item.resp_ref_id" v-for="item in this.items3" :key="item.resp_ref_id">{{ 'Quote Id - '+item.resp_ref_id }}</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="item in this.items3" :key="item.resp_ref_id" :value="item.resp_ref_id">
                <div class="sl-content tabContentDiv">
                    <form class="mb-0 responseInvoice">
                        <div class="row">
                            <v-expansion-panels class="mb-6" v-if="item.negotiation>0">
                                <v-expansion-panel v-for="negotiate in negotiations" :key="negotiate">
                                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                                        {{ negotiate.negotiate1.title }}
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <div class="mt-3 respHead resphead">
                                            <span>Supplier's quotation</span>
                                        </div>
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
                                                                <span>{{ item.prod}}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.desc }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.suppnegotiateddata.quantity }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.unit }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{ item.suppnegotiateddata.price + '.00' }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{ item.suppnegotiateddata.total + '.00' }}</span>
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
                                                                    <b class="boldText">{{ item.suppnegotiateddata.quantity / item.itemperpkg  }}</b>.</li>
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
                                                                <span><i>$</i>{{ item.suppnegotiateddata.ordersubtotal + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{ item.suppnegotiateddata.orderdiscount + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{ item.suppnegotiateddata.ordertax + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{ item.suppnegotiateddata.ordershipcharges + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{ item.suppnegotiateddata.ordernettotal + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3 respHead resphead" v-if="this.negotiateduser =='supp'">
                                            <span>Your Changes</span>
                                        </div>
                                        <div style="border:1px solid #aeadad" v-if="this.negotiateduser == 'supp'">
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
                                                                <span>{{ item.desc }}</span>
                                                            </td>
                                                            <td>
                                                                <span :class="{'fontColor':this.changeQty}">{{ item.custnegotiateddata.quantity }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.unit }}</span>
                                                            </td>
                                                            <td>
                                                                <span :class="{'fontColor':this.changePrice}"><i>$</i>{{ item.custnegotiateddata.price + '.00' }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{ item.custnegotiateddata.total + '.00' }}</span>
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
                                                                    <b class="boldText">{{ item.custnegotiateddata.quantity /  item.itemperpkg }}</b>.</li>
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
                                                                <span><i>$</i>{{item.custnegotiateddata.ordersubtotal + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{ item.custnegotiateddata.orderdiscount + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{ item.custnegotiateddata.ordertax + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{ item.custnegotiateddata.ordershipcharges + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{ item.custnegotiateddata.ordernettotal + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                        <div class="row mt-3  respHead resphead d-flex flex-row">
                            <div class="col-md-6">
                                <span v-if="item.negotiation>1">Supplier's Quotation</span>
                                <span v-else>Your Changes</span>
                            </div>
                            <div class="col-md-6">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row mb-8">
                                    <div class="table-responsive ps-table mt-0 orderinvoiceTable orderestinvoicetable">
                                        <EasyDataTable table-class-name="customize-table" buttons-pagination :headers="headers3" :items="[item]" header-text-direction="left" body-text-direction="left" alternating hide-footer>
                                            <template #item-action="item">
                                                <div class="operation-wrapper">
                                                    <div v-if="item.id === editedItem.id">
                                                        <v-icon color="red" class="mr-3" @click="closebox">
                                                            mdi-window-close
                                                        </v-icon>
                                                        <v-icon color="green" @click.prevent="savedata(item.itemperpkg)">
                                                            mdi-content-save
                                                        </v-icon>
                                                    </div>

                                                    <div v-else-if="item.negotiation>0">
                                                        <v-icon color="grey">
                                                            mdi-content-save
                                                        </v-icon>
                                                    </div>

                                                    <div v-else>
                                                        <v-icon color="blue" class="mr-3" @click="editdata(item)">
                                                            mdi-pencil
                                                        </v-icon>
                                                        <v-icon color="red" v-if="itemslength > 1" @click="deletedata(item)">
                                                            mdi-delete
                                                        </v-icon>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #item-quantity="item">
                                                <div class="form-group" v-if="item.id === editedItem.id">
                                                    <div class="input-icon">
                                                        <input type="text" class="form-control inputField invoiceinpfield" v-model="editedItem.quantity" :id="'quantityinp'+item.id" :name="'quantityinp'+item.id">
                                                    </div>
                                                </div>
                                                <span v-else-if="item.negotiation>1" id="respquantity" :class="{'fontColor':this.changeQty2 && item.negotiation>1}">{{ item.quantity}}</span>
                                                <span v-else id="respquantity" :class="{'fontColor':this.changeQty}">{{ item.quantity}}</span>
                                            </template>
                                            <template #item-price="item">
                                                <div class="form-group" v-if="item.id === editedItem.id">
                                                    <div class="input-icon">
                                                        <input type="text" class="form-control inputField invoiceinpfield " v-model="editedItem.price" :id="'priceinp'+item.id" :name="'priceinp'+item.id">
                                                    </div>
                                                </div>
                                                <div class="input-group input-group-unstyled" v-else>
                                                    <i v-if="item.negotiation>1" :class="{'fontColor':this.changePrice2 && item.negotiation>1}">$</i>
                                                    <i v-else :class="{'fontColor':this.changePrice 
                                                    }">$</i>
                                                    <span v-if="item.negotiation>1" id="respprice" :class="{'fontColor':this.changePrice2 && item.negotiation>1}">
                                                        {{ item.price + '.00' }}
                                                    </span>
                                                    <span v-else id="respprice" :class="{'fontColor':this.changePrice}">
                                                        {{ item.price + '.00' }}
                                                    </span>
                                                </div>
                                            </template>
                                            <template #item-total="item">
                                                <div class="input-group input-group-unstyled" v-if="item.id === editedItem.id">
                                                    <span class="input-group-addon dollarinpspan">
                                                        $
                                                    </span>
                                                    <span>{{ item.total + '.00' }}</span>
                                                </div>
                                                <div class="input-group input-group-unstyled" v-else>
                                                    <span class="input-group-addon dollarinpspan">
                                                        $
                                                    </span>
                                                    <span>{{ item.total + '.00' }}</span>
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
                                                        <b class="boldText">{{ item.quantity / item.itemperpkg }}</b>.</li>
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
                                                        <v-text-field :hide-details="true" dense single-line :autofocus="true" id="subtotal" name="subtotal" class="centered-input" v-model="item.total" disabled></v-text-field>
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
                                                        <v-text-field :hide-details="true" dense single-line 
                                                        :autofocus="true" name="discount" id="discount" 
                                                        class="centered-input" v-model="item.discount" disabled></v-text-field>
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
                                                        <v-text-field :hide-details="true" dense single-line 
                                                        :autofocus="true" name="tax" id="tax" class="centered-input" 
                                                        v-model="item.tax" disabled></v-text-field>
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
                                                    <h5>Net Total:</h5>
                                                </div>
                                                <div class="col-md-6 calcamount">
                                                    <div class="input-group input-group-unstyled">
                                                        <v-text-field :hide-details="true" dense single-line 
                                                        :autofocus="true" name="nettotal" id="nettotal" 
                                                        class="centered-input" :value="(item.total+item.tax+item.shipping)-item.discount" disabled></v-text-field>
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
                        <div class="mt-2" v-if="item.status == 'Cancelled'">
                            <span style="color:red">You have Cancelled this order</span></div>
                        <div class="mt-2" v-if="item.negotiation==1 && item.status != 'Cancelled'">
                            <span style="color:red">Waiting for supplier's response</span></div>
                    </form>
                    <div class="ps-form__submit text-center mb-0 mt-8 col-12 controlBtnDiv">
                        <router-link to="/buyer/dashboard" v-if="this.usertype == 'Customer'">
                            <span class="icon-arrow-left backarrow ml-4 mt-2">&nbsp;Back</span>
                        </router-link>
                        <button type="submit" class="ps-btn success addbtn mr-3" v-if="item.status == 'Cancelled'">Ok</button>
                        <button v-if="item.status != 'Cancelled'" class="ps-btn ps-btn--gray mr-3" style="font-size:12px" @click.prevent="cancelresponse(item.quote_id, item.resp_ref_id)">
                            Cancel</button>
                        <button type="submit" class="ps-btn success addbtn mr-3" v-if="item.negotiation==0 && item.status != 'Cancelled'" @click.prevent="negotiate(item.quote_id, item.resp_ref_id)">Negotiate</button>
                        <button type="submit" class="ps-btn success addbtn " v-if="item.status != 'Cancelled' && item.negotiation>1" @click.prevent="accept(item.quote_id, item.resp_ref_id)">Accept</button>
                    </div>
                </div>
            </v-window-item>
        </v-window>
    </div>
</div>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import useVuelidate from '@vuelidate/core';
import {
    helpers,
    required,
    minLength,
    maxLength,
    integer,
    email,
    sameAs
} from '@vuelidate/validators';
import {
    useTimer
} from 'vue-timer-hook';
import {
    ref
} from 'vue';
var time = new Date();
time = time.setSeconds(time.getSeconds() + 3600);
export default {
    name: 'BuyerQuoteDetailsPage',
    components: {
        LoaderComponent
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            changeQty2: '',
            changePrice2: '',
            loader: false,
            tablist: [{
                val: 1,
                title: 'Landscape'
            }, {
                val: 2,
                title: 'city'
            }, {
                val: 3,
                title: 'Abstract'
            }],
            tab: 0,
            testTabs: ref(),
            older_totalpkg: '',
            pkgtype: '',
            totalpkg: '',
            itemperpkg: '',
            negotiations: [{
                negotiate1: {
                    title: 'See previous quotation',
                },
            }],
            prevnegotiate: false,
            cancelQueModal: false,
            negotiationlength: 0,
            timer: useTimer(time),
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
            editedIndex: -1,
            editedItem: {
                id: 0,
                prod: '',
                desc: '',
                quantity: 0,
                price: 0,
                total: 0
            },
            defaultItem: {
                id: 0,
                prod: 'New Item',
                desc: '',
                quantity: 0,
                price: 0,
                total: 0
            },
            nettotal: null,
            subtotal: null,
            discount: null,
            tax: null,
            shipping: null,
            total: null,
            exportFilename: 'Invoice.pdf',
            itemslength: null,
            qty: ref([0]),
            req_id: null,
            quote_id: null,
            customer_id: null,
            product_id: null,
            respqty: null,
            respprice: null,
            productName: '',
            description: '',
            suppnegotiateddata: [{
                id: 0,
                prod: '',
                description: '',
                quantity: 0,
                unitprice: 0,
                total: 0,
                ordersubtotal: '',
                orderdiscount: '',
                ordertax: '',
                ordershipcharges: '',
                ordernettotal: ''
            }],
            FORM_REQUIRED_FIELD: 'This field is required',
            changePrice: '',
            changeQty: '',
            isSupplierNego: '',
            resp_ref_id: ''
        };
    },
    validations() {
        return {
            editedItem: {
                quantity: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                },
                price: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                },
                total: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer,
                }
            }
        }
    },
    methods: {
        editdata(item) {
            var i = this.items3.map(function (e) {
                return e.prod;
            }).indexOf(item.prod);
            if (i == '-1') i = 'not found'
            this.editedIndex = i;
            this.editedItem = Object.assign({}, item)
        },
        deletedata(item) {
            const index = this.items3.indexOf(item);
            confirm('Are you sure you want to delete this item?') && this.items3.splice(index, 1);
            this.itemslength = this.items3.length;
            this.calcamount();
        },
        closebox() {
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            }, 300)
        },
        async savedata(itemperpkg) {
            if (this.editedIndex > -1) {
                const result = await this.v$.editedItem.$validate();
                if (result == false) {
                    this.$swal('', 'Please enter integer value', 'info');
                    return
                }
                var quantity = this.editedItem.quantity / itemperpkg
                const isFloat = /\d+\.\d+/.test(quantity);
                if (isFloat) {
                    this.totalpkg = quantity;
                    this.$swal('', 'Please enter quantities multiple of ' + itemperpkg, 'info');
                    return
                } else {
                    this.totalpkg = quantity;
                    Object.assign(this.items3[this.editedIndex], this.editedItem);
                }
            }
            this.calcamount();
            this.closebox();
        },
        async calcamount() {
            var rowIndex = this.editedIndex;
            if (rowIndex > -1) {
                const result = await this.v$.editedItem.$validate();
                if (result == false) {
                    alert('please enter integer value.')
                    return
                }
                this.respqty = document.getElementsByName('quantityinp' + (rowIndex + 1))[0].value;
                this.respprice = document.getElementsByName('priceinp' + (rowIndex + 1))[0].value;
                var total = Number(this.respqty) * Number(this.respprice);
                this.editedItem.total = total;
                Object.assign(this.items3[this.editedIndex], this.editedItem);
            }
            this.calTotalamt();
        },
        calTotalamt() {
            var sum = 0;
            for (var i = 0; i < this.items3.length; i++) {
                var subtotal = this.items3[i].total;
                sum = sum + subtotal;
            }
            this.subtotal = sum;
            this.nettotal = this.subtotal - (Number(this.shipping) + Number(this.tax) + Number(this.discount));
        },
        close() {
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            }, 300)
        },
        accept(quoteid, resp_ref_id) {
            var token = localStorage.getItem('token');
            var qnty = null,
                price = null;
            if (this.respqty == null) {
                qnty = document.getElementById('respquantity').innerText;
            } else {
                qnty = this.respqty
            }
            if (this.respprice == null) {
                price = document.getElementById('respprice').innerText;
            } else {
                price = this.respprice
            }
            var formData = new FormData();
            formData.append('resp_ref_id', resp_ref_id);
            formData.append('request_id', this.req_id);
            formData.append('response_id', quoteid);
            formData.append('customer_id', this.customer_id);
            formData.append('product_id', this.product_id);
            formData.append('quantity', qnty);
            formData.append('unit_price', price);
            this.loader = true;
            this.$swal({
                title: 'Do you want to accept this quotation?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'warningswal'
            }).then((result) => {
                if (result.value) {
                    this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/storeorder`, formData, {
                            headers: {
                                'Authorization': 'Bearer ' + token,
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then((response) => {
                            this.loader = false;
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Order is approved!',
                                showConfirmButton: true,
                                timer: 5000
                            }).then(() => {
                                this.$router.push({
                                    path: '/buyer/payment',
                                    query: {
                                        quoteid: this.$route.query.quoteid,
                                    }
                                })
                            })
                        }).catch((error) => {});
                } else {
                    this.loader = false;
                }
            });
        },
        async cancelresponse(quoteid, resp_ref_id) {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'multipart/form-data'
            };
            let formData = new FormData();
            formData.append('flag', 'cancel');
            formData.append('_method', 'put');
            this.loader = true;
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/update-response/${quoteid}`, formData, {
                        headers
                    })
                .then((response) => {
                    this.loader = false;
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Successfully Cancel response and next response if available!',
                        showConfirmButton: true,
                        timer: 5000
                    }).then(() => {
                        this.tab = 0;
                        this.fetchRespNegotiation();
                    })
                })
                .catch((error) => {})
        },
        negotiate(quoteid, resp_ref_id) {
            var token = localStorage.getItem('token');
            var qnty = null,
                price = null;
            const isFloat = /\d+\.\d+/.test(this.totalpkg);
            if (isFloat) {
                this.$swal('', 'Please enter quantities multiple of ' + this.itemperpkg, 'info');
                return
            }
            if (this.respqty == null) {
                qnty = document.getElementById('respquantity').innerText;
            } else {
                qnty = this.respqty
            }
            if (this.respprice == null) {
                price = document.getElementById('respprice').innerText;
            } else {
                price = this.respprice
            }
            var formData = new FormData();
            formData.append('resp_ref_id', resp_ref_id);
            formData.append('request_id', this.req_id);
            formData.append('response_id', quoteid);
            formData.append('customer_id', this.customer_id);
            formData.append('product_id', this.product_id);
            formData.append('quantity', qnty);
            formData.append('unit_price', price);
            this.loader = true;
            this.$swal({
                title: 'Do you want to go for negotiation?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'warningswal'
            }).then((result) => {
                if (result.value) {
                    this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/storenegotiation`, formData, {
                            headers: {
                                'Authorization': 'Bearer ' + token,
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then((response) => {
                            this.loader = false;
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Details submitted! Check your email for confirmation details.',
                                showConfirmButton: true,
                                timer: 5000
                            }).then(() => {
                                this.$router.push({
                                    name: 'buyerdashboard'
                                })
                            })
                        }).catch((error) => {});
                } else {
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
        async fetchQuoteRespList() {
            let formData = new FormData();
            var token = localStorage.getItem("token");
            var loginid = localStorage.getItem('loginid');
            var quoteid = this.$route.query.quoteid;
            var reqid = this.$route.query.reqid;
            formData.append('search_by_quote_id', reqid);
            formData.append('categoryname', '');
            formData.append('search_by_resp_id', '');
            formData.append('response_date', '');
            formData.append('user_id', loginid);
            formData.append('flag', 'CustomerEnd');
            if (this.$route.query.cancelorder != '') {
                formData.append('cancelorder', 'cancelorder');
            }
            this.loader = true;
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/searchreqresp`, formData, {
                        headers
                    })
                .then(response => {
                    this.loader = false;
                    this.items3 = response.data.data;
                    this.items3 = this.items3.map((el) => {
                        this.resp_ref_id = el.resp_ref_id;
                        this.req_id = el.request_quote_id;
                        this.quote_id = el.id;
                        this.customer_id = el.customer_id;
                        this.product_id = el.product_id;
                        var total = Number(el.min_order_qty) * Number(el.whole_price_per_unit);
                        this.productName = el.productname;
                        this.description = el.description;
                        this.pkgtype = el.packaging_detail;
                        this.itemperpkg = Number(el.qty_per_packet);
                        this.totalpkg = Number(el.min_order_qty) / this.itemperpkg;
                        this.discount = Number(el.discount);
                        this.tax = Number(el.tax);
                        this.shipping = Number(el.shipping);
                        return {
                            id: 1,
                            negotiation: 0,
                            resp_ref_id: el.resp_ref_id,
                            quote_id: this.quote_id,
                            req_id: this.req_id,
                            customer_id: this.customer_id,
                            product_id: this.product_id,
                            prod: el.productname,
                            desc: el.description,
                            quantity: el.min_order_qty,
                            unit: (el.unit_of_measurement).split('-')[1],
                            price: el.whole_price_per_unit,
                            pkgtype: this.pkgtype,
                            itemperpkg: Number(el.qty_per_packet),
                            totalpkg: this.totalpkg,
                            discount: this.discount,
                            tax: this.tax,
                            shipping: this.shipping,
                            total: total,
                            status: el.status
                        }
                    });
                    this.calTotalamt();
                    if (!this.prevnegotiate) {
                        this.prevnegotiate = false;
                    }
                })
                .catch(err => {});
        },
        async fetchQuoteRespNegotiation() {
            var token = localStorage.getItem('token');
            let reqid = '';
            if (this.$route.query.quoteid) {
                reqid = this.$route.query.reqid;
            }
            this.loader = true;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/getquotenego/${reqid}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                })
                .then((response) => {
                    var isNegotiation = '';
                    var data = response.data.data;
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].negotiations.length > 0) {
                                isNegotiation = 'yes';
                                break;
                            }
                        }
                    }
                    if (isNegotiation != '') {
                        this.loader = false;
                        this.items3 = response.data.data;
                        this.items3 = this.items3.map((el) => {
                            this.resp_ref_id = el.resp_ref_id;
                            this.req_id = el.request_quote_id;
                            this.quote_id = el.id;
                            this.customer_id = el.customer_id;
                            this.product_id = el.product_id;
                            var totalamt = Number(el.min_order_qty) * Number(el.whole_price_per_unit);
                            var nettotal = (totalamt + Number(el.tax) + Number(el.shipping)) - (Number(el.discount));
                            this.description = el.description;
                            this.negotiationlength = el.negotiations.length;
                            var qty, price, total;
                            if (el.negotiations.length > 0) {
                                for (var i = 0; i < el.negotiations.length; i++) {
                                    if (el.negotiations[i].supplier_id != null) {
                                        this.isSupplierNego = 'yes';
                                        qty = el.negotiations[i].quantity;
                                        price = el.negotiations[i].unit_price;
                                        var total = Number(el.negotiations[i].quantity) * Number(el.negotiations[i].unit_price);
                                        this.negotiateduser = 'supp';
                                    } else {
                                        qty = el.negotiations[i].quantity;
                                        price = el.negotiations[i].unit_price;
                                        total = Number(el.negotiations[i].quantity) * Number(el.negotiations[i].unit_price);
                                        this.negotiateduser = 'cust';
                                        if (Number(el.min_order_qty) != Number(el.negotiations[i].quantity)) {
                                            this.changeQty = 'changed';
                                        } else if (Number(el.whole_price_per_unit) != Number(el.negotiations[i].unit_price)) {
                                            this.changePrice = 'changed';
                                        }
                                    }
                                    this.pkgtype = el.packaging_detail;
                                    this.itemperpkg = Number(el.qty_per_packet);
                                    this.totalpkg = Number(el.negotiations[i].quantity) / this.itemperpkg;
                                }
                            } else {
                                qty = el.min_order_qty;
                                price = el.whole_price_per_unit;
                                total = Number(qty) * Number(price);
                            }
                            this.pkgtype = el.packaging_detail;
                            this.itemperpkg = Number(el.qty_per_packet);
                            this.totalpkg = Number(el.min_order_qty) / this.itemperpkg;
                            this.discount = Number(el.discount);
                            this.tax = Number(el.tax);
                            this.shipping = Number(el.shipping);
                            return {
                                id: 1,
                                negotiation: this.negotiationlength,
                                resp_ref_id: el.resp_ref_id,
                                quote_id: this.quote_id,
                                req_id: this.req_id,
                                customer_id: this.customer_id,
                                product_id: this.product_id,
                                prod: this.productName,
                                desc: el.description,
                                quantity: qty,
                                price: price,
                                pkgtype: this.pkgtype,
                                itemperpkg: this.itemperpkg,
                                totalpkg: this.totalpkg,
                                discount: this.discount,
                                tax: this.tax,
                                shipping: this.shipping,
                                total: total,
                                suppnegotiateddata: {
                                    quantity: el.min_order_qty,
                                    price: el.whole_price_per_unit,
                                    total: totalamt,
                                    ordersubtotal: totalamt,
                                    orderdiscount: el.discount,
                                    ordertax: el.tax,
                                    ordershipcharges: el.shipping,
                                    ordernettotal: nettotal
                                },
                                custnegotiateddata: {
                                    quantity: qty,
                                    price: price,
                                    total: total,
                                    ordersubtotal: total,
                                    orderdiscount: this.discount,
                                    ordertax: this.tax,
                                    ordershipcharges: this.shipping,
                                    ordernettotal: ((total + this.tax + this.shipping) - this.discount)
                                }
                            }

                        });
                        this.calTotalamt();
                    } else {
                        this.fetchQuoteRespList();
                    }
                })
                .catch((error) => {});
        },
        async fetchRespNegotiation() {
            var token = localStorage.getItem('token');
            let formData = new FormData();
            var token = localStorage.getItem("token");
            var loginid = localStorage.getItem('loginid');
            var reqid = this.$route.query.reqid;
            formData.append('search_by_quote_id', reqid);
            formData.append('categoryname', '');
            formData.append('search_by_resp_id', '');
            formData.append('response_date', '');
            formData.append('user_id', loginid);
            formData.append('flag', 'nego');
            if (this.$route.query.cancelorder != '') {
                formData.append('cancelorder', 'cancelorder');
            }
            this.loader = true;
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/searchreqresp`, formData, {
                        headers
                    })
                .then((response) => {
                    if (response.status == 200) {
                        var isNegotiation = '';
                        var data = response.data.data;
                        var secondnego = '';
                        if (data) {
                            for (var i = 0; i < data.length; i++) {
                                if (data[i].negotiations.length > 0) {
                                    isNegotiation = 'yes';
                                    break;
                                }
                            }
                        }
                        if (isNegotiation != '') {
                            this.loader = false;
                            this.items3 = response.data.data;
                            this.items3 = this.items3.map((el) => {
                                this.resp_ref_id = el.resp_ref_id;
                                this.req_id = el.request_quote_id;
                                this.quote_id = el.id;
                                this.customer_id = el.customer_id;
                                this.product_id = el.product_id;
                                var totalamt = Number(el.min_order_qty) * Number(el.whole_price_per_unit);
                                var nettotal = (totalamt + Number(el.tax) + Number(el.shipping)) - (Number(el.discount));
                                this.description = el.description;
                                this.negotiationlength = el.negotiations.length;
                                var qty, price, total;
                                var qyt2, price2, total2, nettotal2;
                                if (el.negotiations.length > 0) {
                                    for (var i = 0; i < el.negotiations.length; i++) {
                                        if (el.negotiations[i].supplier_id != null) {
                                            secondnego = 'yes';
                                            this.isSupplierNego = 'yes';
                                            qty = el.negotiations[1].quantity;
                                            price = el.negotiations[1].unit_price;
                                            var total = Number(el.negotiations[1].quantity) * Number(el.negotiations[1].unit_price);
                                            this.negotiateduser = 'supp';
                                            qyt2 = el.negotiations[0].quantity;
                                            price2 = el.negotiations[0].unit_price;
                                            total2 = Number(qyt2) * Number(price2);
                                            nettotal2 = (total2 + Number(el.shipping) + Number(el.tax)) - Number(el.discount);
                                            if (Number(qty) != Number(qyt2)) {
                                                this.changeQty2 = 'changed';
                                            } else if (Number(price) != Number(price2)) {
                                                this.changePrice2 = 'changed';
                                            }
                                        } else {
                                            secondnego = '';
                                            qty = el.negotiations[i].quantity;
                                            price = el.negotiations[i].unit_price;
                                            total = Number(el.negotiations[i].quantity) * Number(el.negotiations[i].unit_price);
                                            this.negotiateduser = 'cust';
                                            if (Number(el.min_order_qty) != Number(el.negotiations[i].quantity)) {
                                                this.changeQty = 'changed';
                                            } else if (Number(el.whole_price_per_unit) != Number(el.negotiations[i].unit_price)) {
                                                this.changePrice = 'changed';
                                            }
                                        }
                                        this.pkgtype = el.packaging_detail;
                                        this.itemperpkg = Number(el.qty_per_packet);
                                        this.totalpkg = Number(el.negotiations[i].quantity) / this.itemperpkg;
                                    }
                                } else {
                                    qty = el.min_order_qty;
                                    price = el.whole_price_per_unit;
                                    total = Number(qty) * Number(price);
                                }
                                this.pkgtype = el.packaging_detail;
                                this.itemperpkg = Number(el.qty_per_packet);
                                this.totalpkg = Number(el.min_order_qty) / this.itemperpkg;
                                this.discount = Number(el.discount);
                                this.tax = Number(el.tax);
                                this.shipping = Number(el.shipping);
                                return {
                                    id: 1,
                                    negotiation: this.negotiationlength,
                                    resp_ref_id: el.resp_ref_id,
                                    quote_id: this.quote_id,
                                    req_id: this.req_id,
                                    customer_id: this.customer_id,
                                    product_id: this.product_id,
                                    prod: this.productName,
                                    desc: el.description,
                                    quantity: qty,
                                    unit: (el.unit_of_measurement).split('-')[1],
                                    price: price,
                                    pkgtype: this.pkgtype,
                                    itemperpkg: Number(el.qty_per_packet),
                                    totalpkg: this.totalpkg,
                                    discount: this.discount,
                                    tax: this.tax,
                                    shipping: this.shipping,
                                    total: total,
                                    suppnegotiateddata: {
                                        quantity: el.min_order_qty,
                                        unit: (el.unit_of_measurement).split('-')[1],
                                        price: el.whole_price_per_unit,
                                        total: totalamt,
                                        ordersubtotal: totalamt,
                                        orderdiscount: el.discount,
                                        ordertax: el.tax,
                                        ordershipcharges: el.shipping,
                                        ordernettotal: nettotal
                                    },
                                    custnegotiateddata: {
                                        quantity: secondnego == '' ? qty : qyt2,
                                        unit: (el.unit_of_measurement).split('-')[1],
                                        price: secondnego == '' ? price : price2,
                                        total: secondnego == '' ? total : total2,
                                        ordersubtotal: secondnego == '' ? total : total2,
                                        orderdiscount: this.discount,
                                        ordertax: this.tax,
                                        ordershipcharges: this.shipping,
                                        ordernettotal: secondnego == '' ? ((total + this.tax + this.shipping) - this.discount) : nettotal2
                                    }
                                }
                            });
                            this.calTotalamt();
                        } else {
                            this.fetchQuoteRespList();
                        }
                    }
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
                });
        },
        changeTab() {
            this.$refs.testTabs.selectTab('#WER-2530271');
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.fetchQuoteList();
        this.fetchRespNegotiation();
    },
};
</script>

<style scoped>
.fontColor {
    color: red;
}

.responseInvoice {
    padding: 15px !important;
}

.tabContentDiv {
    margin-top: -25px !important;
}
</style>
