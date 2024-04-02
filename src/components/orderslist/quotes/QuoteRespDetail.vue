<template>
<LoaderComponent v-if="this.loader" />
<form>
    <div class="mt-8 respHead"><span><b style="float: right;">
                It will cost - {{ this.creditpoint }} Credit Points</b></span></div>
    <div id="sn_h_tabs" v-if="this.usertype == 'Admin'" class="m-t-0 ui-tabs-scroll ui-tabs ui-corner-all 
    ui-widget ui-widget-content quotationTabs">
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center" class="OrdersTab">
            <v-tab :value="item.resp_ref_id" v-for="item in this.negotiateddata" :key="item.resp_ref_id">{{ 'QuoteId-'+item.resp_ref_id }}
            </v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="item in this.negotiateddata" :key="item.resp_ref_id" :value="item.resp_ref_id">
                <div id="cust-1" class="sn-h-tab ui-tabs-panel p-5 ui-corner-bottom ui-widget-content">
                    <div>
                        <div class="mt-1">
                            <v-expansion-panels class="mb-6" v-if="item.negotiation>0">
                                <v-expansion-panel v-for="negotiate in negotiations" :key="negotiate">
                                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                                        {{ negotiate.negotiate1.title }}
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <div class="mt-3 respHead resphead">
                                            <span></span>
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
                                                                <span>{{item.prod}}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.desc }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.suppnegotiateddata.quantity
                                                                                    }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.measurement_unit }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{item.suppnegotiateddata.unitprice
                                                                                    + '.00'}}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{item.suppnegotiateddata.total + '.00'
                                                                                    }}</span>
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
                                                                <li>-No of <b class="boldText">{{ item.pkgtype }}</b> shipped are
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
                                                                <span><i>$</i>{{item.suppnegotiateddata.ordersubtotal +
                                                                                        '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{item.suppnegotiateddata.orderdiscount +
                                                                                        '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{item.suppnegotiateddata.ordertax + '.00'
                                                                                    }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{item.suppnegotiateddata.ordershipcharges
                                                                                        + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                ((item.suppnegotiateddata.ordersubtotal+item.suppnegotiateddata.ordertax+
                                                                item.suppnegotiateddata.ordershipcharges)-item.suppnegotiateddata.orderdiscount)+
                                                                                           '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-3 respHead resphead" v-if="item.negotiation>1">
                                            <span>WEQ-100001-cust</span>
                                        </div>
                                        <div style="border:1px solid #aeadad" v-if="item.negotiation>1">
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
                                                                <span>{{item.desc}}</span>
                                                            </td>
                                                            <td>
                                                                <span :class="{'fontColor':this.changeQty}">{{
                                                                                       item.custnegotiateddata.quantity
                                                                                    }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.measurement_unit }}</span>
                                                            </td>
                                                            <td>
                                                                <span :class="{'fontColor':this.changePrice}"><i>$</i>{{
                                                                                       item.custnegotiateddata.unitprice
                                                                                        + '.00' }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{item.custnegotiateddata.total +
                                                                                        '.00' }}</span>
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
                                                                <li>-No of <b class="boldText">{{ item.pkgtype }}</b> shipped are
                                                                    <b class="boldText">{{ item.custnegotiateddata.quantity / item.itemperpkg }}</b>.</li>
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
                                                                <span><i>$</i>{{item.custnegotiateddata.ordersubtotal
                                                                                        + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{item.custnegotiateddata.orderdiscount
                                                                                        + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{item.custnegotiateddata.ordertax +
                                                                                        '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{item.custnegotiateddata.ordershipcharges
                                                                                        + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{((item.custnegotiateddata.ordersubtotal+item.custnegotiateddata.ordertax+
                                                item.custnegotiateddata.ordershipcharges)-item.custnegotiateddata.orderdiscount)+ '.00' }}</span>
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
                    </div>
                    <div class="resppage mt-8">
                        <div class="mt-3 respHead resphead">
                            <span v-if="item.negotiation==0||item.negotiation>1"></span>
                            <span v-else>WEQ-100001-cust</span>
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
                                                <span>{{ item.prod }}</span>
                                            </td>
                                            <td>
                                                <span>{{ item.desc }}</span>
                                            </td>
                                            <td>
                                                <span v-if="item.negotiation>1" :class="{'fontColor':this.changeQty2}">{{ item.quantity }}</span>
                                                <span v-else :class="{'fontColor':item.negotiation>0 && this.changeQty}">{{ item.quantity }}</span>
                                            </td>
                                            <td>
                                                <span>{{ item.measurement_unit }}</span>
                                            </td>
                                            <td>
                                                <span v-if="item.negotiation>1" :class="{'fontColor':this.changePrice2}"><i>$</i>{{item.unitprice + '.00' }}</span>
                                                <span v-else :class="{'fontColor':item.negotiation>0 && this.changePrice}"><i>$</i>{{item.unitprice + '.00' }}</span>
                                            </td>
                                            <td>
                                                <span><i>$</i>{{ item.total + '.00'}}</span>
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
                                                <li>-No of <b class="boldText">{{ item.pkgtype }}</b> shipped are
                                                    <b class="boldText">{{ item.quantity / item.itemperpkg }}</b>.</li>
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
                                                <span><i>$</i>{{ item.ordersubtotal +
                                                                        '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Discount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ item.orderdiscount +
                                                                        '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Tax:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ item.ordertax + '.00'
                                                                    }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                            <div class="col-md-6 calcamount">
                                                <h4>Shipping:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ item.ordershipcharges
                                                                        +
                                                                        '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>NetAmount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ ((item.ordersubtotal+item.ordertax+ item.ordershipcharges)-item.orderdiscount) + '.00' }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-2" v-if="item.status == 'Cancelled'">
                            <span style="color:red">Customer has cancelled this quotation.</span></div>
                        <div class="mt-2" v-if="item.negotiation>1">
                            <span style="color:red">Waiting for customer's approval</span></div>

                        <div class="mt-2" v-else-if="item.negotiation==1">
                            <span style="color:red">Waiting for supplier's response</span></div>
                        <div class="mt-2" v-else-if="item.negotiation==0 && item.status != 'Cancelled'">
                            <span style="color:red">Waiting for customer's response</span></div>
                    </div>
                </div>
            </v-window-item>
        </v-window>
    </div>

    <div id="sn_h_tabs" v-if="this.usertype == 'Supplier'" class="m-t-0 ui-tabs-scroll ui-tabs ui-corner-all
     ui-widget ui-widget-content quotationTabs">
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center" class="OrdersTab">
            <v-tab :value="item.resp_ref_id" v-for="item in this.negotiateddata" :key="item.resp_ref_id">{{ 'Quote Id - '+item.resp_ref_id }}
            </v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="item in this.negotiateddata" :key="item.resp_ref_id" :value="item.resp_ref_id">
                <div id="cust-1" class="sn-h-tab ui-tabs-panel p-5 ui-corner-bottom ui-widget-content">
                    <div>
                        <div class="mt-1">
                            <v-expansion-panels class="mb-6" v-if="item.negotiation>0">
                                <v-expansion-panel v-for="negotiate in negotiations" :key="negotiate">
                                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                                        {{ negotiate.negotiate1.title }}
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <div class="mt-3 respHead resphead">
                                            <span></span>
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
                                                                <span>{{item.prod}}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.desc }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.suppnegotiateddata.quantity
                                                                                    }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ item.measurement_unit }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{item.suppnegotiateddata.unitprice
                                                                                    +'.00'}}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{item.suppnegotiateddata.total + '.00'
                                                                                    }}</span>
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
                                                                <li>-No of <b class="boldText">{{ item.pkgtype }}</b> shipped are
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
                                                                <span><i>$</i>{{item.suppnegotiateddata.ordersubtotal +
                                                                                        '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{item.suppnegotiateddata.orderdiscount +
                                                                                        '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{item.suppnegotiateddata.ordertax + '.00'
                                                                                    }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{item.suppnegotiateddata.ordershipcharges
                                                                                        + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{((item.suppnegotiateddata.ordersubtotal+item.suppnegotiateddata.ordertax+
                                                                item.suppnegotiateddata.ordershipcharges)-item.suppnegotiateddata.orderdiscount) +
                                                                                        '.00' }}</span>
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
                    </div>
                    <div class="resppage mt-8">
                        <div class="mt-3 respHead resphead" v-if="this.negotiateduser =='supp'">
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
                                                <span v-if="(this.isSupplierNego == '' && item.negotiation==0)">{{ item.quantity }}</span>
                                                <span v-else :class="{'fontColor':this.changeQty}">{{ item.custnegotiateddata.quantity }}</span>
                                            </td>
                                            <td>
                                                <span>{{ item.measurement_unit }}</span>
                                            </td>
                                            <td>
                                                <span v-if="(this.isSupplierNego == '' && item.negotiation==0)"><i>$</i>{{ item.unitprice+'.00' }}</span>
                                                <span v-else :class="{'fontColor':this.changePrice}"><i>$</i>{{ item.custnegotiateddata.unitprice + '.00' }}</span>
                                            </td>
                                            <td>
                                                <span v-if="(this.isSupplierNego == '' && item.negotiation==0)"><i>$</i>{{ item.total+'.00' }}</span>
                                                <span v-else><i>$</i>{{ item.custnegotiateddata.total + '.00' }}</span>
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
                                                <li>-No of <b class="boldText">{{ item.pkgtype }}</b> shipped are
                                                    <b class="boldText" v-if="(this.isSupplierNego == '' && item.negotiation==0)">{{ item.quantity / item.itemperpkg }}</b>
                                                    <b v-else class="boldText">{{ item.custnegotiateddata.quantity /  item.itemperpkg }}</b>.</li>
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
                                                <span v-if="(this.isSupplierNego == '' && item.negotiation==0)"><i>$</i>{{item.ordersubtotal + '.00' }}</span>
                                                <span v-else><i>$</i>{{item.custnegotiateddata.ordersubtotal + '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Discount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span v-if="(this.isSupplierNego == '' && item.negotiation==0)"><i>$</i>{{item.orderdiscount + '.00' }}</span>
                                                <span v-else><i>$</i>{{ item.custnegotiateddata.orderdiscount + '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Tax:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span v-if="(this.isSupplierNego == '' && item.negotiation==0)"><i>$</i>{{item.ordertax + '.00' }}</span>
                                                <span v-else><i>$</i>{{ item.custnegotiateddata.ordertax + '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                            <div class="col-md-6 calcamount">
                                                <h4>Shipping:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span v-if="(this.isSupplierNego == '' && item.negotiation==0)"><i>$</i>{{item.ordershipcharges + '.00' }}</span>
                                                <span v-else><i>$</i>{{ item.custnegotiateddata.ordershipcharges + '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>NetAmount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span v-if="(this.isSupplierNego == '' && item.negotiation==0)"><i>$</i>{{((item.ordersubtotal+item.ordertax+item.ordershipcharges)-item.orderdiscount) + '.00' }}</span>
                                                <span v-else><i>$</i>{{ ((item.custnegotiateddata.ordersubtotal+item.custnegotiateddata.ordertax+
                                                item.custnegotiateddata.ordershipcharges)-item.custnegotiateddata.orderdiscount) + '.00' }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-2" v-if="item.negotiation==0 && item.status != 'Cancelled'">
                            <span style="color:red">Waiting for customer's response</span>
                        </div>
                        <div class="mt-2" v-if="item.status == 'Cancelled'">
                            <span style="color:red">Customer has cancel this quotation.</span></div>
                        <div class="mt-8 respHead resphead" v-if="item.negotiation>0"><span>You can response here</span></div>
                        <div v-if="item.negotiation>0" style="border:1px solid #aeadad">
                            <router-link class="btn btn-default mt-0 mb-5 ml-2 pull-left addrowbtn" to="#" @click="addprod(item)">
                                <i class="icon icon-plus plusicon mr-1" />
                                Add
                            </router-link>
                            <div class="table-responsive ps-table mt-0 resptable">
                                <table class="table table-bordered resptable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Price/unit</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="key in count4" :key="key">
                                            <td>
                                                <span class="saveprod">{{ item.prod}}</span>
                                            </td>
                                            <td>
                                                <span class="savedesc">{{item.desc}}</span>
                                            </td>
                                            <td>
                                                <input :disabled="item.negotiation>1?true:false" :class="item.negotiation>1?'disabledinputBox':''" type="number" class="form-control inputField invoiceinpfield" :id="'quantity' + key" v-model="items4[key -
                                                                                                    1].quantity" required>
                                                <span :class="'quantity' + key" class="d-none">{{
                                                                                                editedItem4[key - 1].quantity }}</span>
                                            </td>
                                            <td>
                                                <span>{{ item.measurement_unit }}</span>
                                            </td>
                                            <td>
                                                <input :disabled="item.negotiation>1?true:false" :class="item.negotiation>1?'disabledinputBox':''" type="number" class="form-control inputField 
                                                                                                                invoiceinpfield" :id="'unitprice' + key" v-model="items4[key -
                                                                                                    1].unitprice" required>
                                                <span :class="'unitprice' + key" class="d-none"><i>$</i>{{
                                                                                                    editedItem4[key - 1].unitprice + '.00' }}</span>
                                            </td>
                                            <td>
                                                <span :id="'total' + key" class=""><i>$</i>{{
                                                                                                items4[key - 1].total + '.00' }}</span>
                                                <span :class="'total' + key" class="d-none"><i>$</i>{{
                                                                                                    editedItem4[key - 1].total + '.00' }}</span>
                                            </td>
                                            <td>
                                                <div class="operation-wrapper" :id="'wrapperdiv' + key">
                                                    <div :id="'editoptiondiv' + key" class="d-none">
                                                        <v-icon color="blue" class="mr-0" @click="editdataItem(key)">
                                                            mdi-pencil
                                                        </v-icon>
                                                        <v-icon color="red" @click="deletedata">
                                                            mdi-delete
                                                        </v-icon>
                                                    </div>
                                                    <div :id="'saveoptiondiv' + key">
                                                        <div v-if="item.negotiation>1">
                                                            <v-icon color="grey">
                                                                mdi-content-save
                                                            </v-icon>
                                                        </div>
                                                        <div v-else>
                                                            <v-icon color="green" @click="savedata(key)">
                                                                mdi-content-save
                                                            </v-icon>
                                                            <v-icon color="red" @click="deletedata">
                                                                mdi-delete
                                                            </v-icon>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-md-6 shippinginfo">
                                    <div class="contentdiv leftcontentdiv mt-0 mb-0 p-2">
                                        <h5>Packaging Details: </h5>
                                        <p>
                                            <ul>
                                                <li>-Packaging type is <b class="boldText">{{ this.pkgtype }}</b>.
                                                </li>
                                                <li>-One <b class="boldText">{{ this.pkgtype }}</b> contains
                                                    <b class="boldText">{{ this.itemperpkg }}</b> items.</li>
                                                <li>-No of <b class="boldText">{{ this.pkgtype }}</b> shipped are
                                                    <b class="boldText">{{ item.quantity / this.itemperpkg }}</b>.</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 shippinginfo">
                                    <div class="contentdiv rightcontentdiv mt-5 mb-5 orderrightcaldiv">
                                        <div class="row mt-2">
                                            <div class="col-md-6 calcamount">
                                                <h5>SubTotal:</h5>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <div class="input-group input-group-unstyled">
                                                    <v-text-field :hide-details="true" dense single-line :autofocus="true" class="centered-input" v-model="this.savesubtotal" disabled></v-text-field>
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
                                                    <v-text-field :hide-details="true" dense single-line :autofocus="true" class="centered-input" v-model="this.savediscount" :disabled="item.negotiation>1?true:false"></v-text-field>
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
                                                    <v-text-field :hide-details="true" dense single-line :autofocus="true" class="centered-input" v-model="this.savetax" :disabled="item.negotiation>1?true:false"></v-text-field>
                                                    <span class="input-group-addon dollarspan">
                                                        $
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2 mb-0" style="border-bottom:1px solid #d6d4d4">
                                            <div class="col-md-6 calcamount">
                                                <h5>Shipping:</h5>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <div class="input-group input-group-unstyled">
                                                    <v-text-field :hide-details="true" dense single-line :autofocus="true" class="centered-input" v-model="this.saveship" :disabled="item.negotiation>1?true:false"></v-text-field>
                                                    <span class="input-group-addon dollarspan">
                                                        $
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-md-6 calcamount">
                                                <h5>NetAmount:</h5>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <div class="input-group input-group-unstyled">
                                                    <v-text-field :hide-details="true" dense single-line :autofocus="true" class="centered-input" :value="((Number(this.savesubtotal)+ 
                                                                        Number(this.savetax) + 
                                                                        Number(this.saveship))-Number(this.savediscount))" disabled></v-text-field>
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
                </div>
            </v-window-item>
        </v-window>

    </div>
    <div class="ps-form__submit text-center mb-0 mt-8 col-12 controlBtnDiv">
        <span class="icon-arrow-left backarrow ml-4 mt-2" @click.prevent="backtoparent">
            &nbsp;Back</span>
        <button type="button" class="ps-btn success addbtn" v-if="this.$route.path.includes('/admin/quote-resp-details')" @click.prevent="backtoparent">OK</button>
        <button class="ps-btn ps-btn--gray mr-3" style="font-size:12px" v-if="this.$route.path.includes('/vendor/quote-resp-details')">Cancel</button>
        <button type="submit" class="ps-btn success addbtn" v-if="!this.$route.path.includes('/admin/quote-resp-details')
          && this.isSupplierNego == '' && this.nego != ''" @click.prevent="sendRespOnNegotiation">Send</button>
        <button type="submit" class="ps-btn success addbtn disabledSend" v-else @click.prevent="sendRespOnNegotiation">Send</button>
    </div>
</form>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import {
    useVuelidate
} from '@vuelidate/core'
import {
    required,
    helpers,
    minLength,
    maxLength,
    integer,
    email,
    sameAs
} from '@vuelidate/validators'
export default {
    name: 'CreateQuotePageView',
    components: {
        LoaderComponent
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    props: {
        prodname: {
            type: String
        }
    },
    data() {
        return {
            creditpoint: 0,
            tab: 0,
            loader: false,
            negotiationlength: 0,
            older_totalpkg: '',
            pkgtype: '',
            totalpkg: '',
            itemperpkg: '',
            item_qty: '',
            statusnotchange: true,
            changedstatus: false,
            username: '',
            prevnegotiate: false,
            status: null,
            reqdate: null,
            quotestatus: null,
            negotiations: [{
                negotiate1: {
                    title: 'See previous negotiation',
                    comment: 'You have forget to add last item .Can you please add left item which i have given in description.',
                    suppcomment: 'Yes sure.'
                },
                negotiate2: {
                    title: 'See previous Details',
                    comment: 'Can you please reduce the price.',
                    suppcomment: 'Yes sure.'
                },
            }],
            picked: new Date(),
            supplier: '',
            form: {
                categoryget: '',
                subcategoryget: '',
                productname: '',
                quantity: '',
                custname: '',
                datepicker: '',
                otherdetails: '',
            },
            usertype: '',
            FORM_REQUIRED_FIELD: 'This field is required',
            categorylist: [],
            subcateget: [],
            itemslength: null,
            suppresprecords: [],
            items2: [],
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
            shipping: null,
            total: null,
            olditems: [],
            changes: false,
            items4: [{
                id: 0,
                prod: '',
                quantity: 0,
                unitprice: 0,
                total: 0
            }],
            count4: 1,
            editedItem4: [{
                id: 0,
                prod: '',
                quantity: null,
                unitprice: null,
                total: null
            }],
            defaultItem4: {
                id: 0,
                prod: '',
                quantity: null,
                unitprice: null,
                total: null
            },
            editedIndex4: -1,
            itemslength4: null,
            ordernettotal: 0,
            ordersubtotal: 0,
            orderdiscount: 0,
            ordertax: 0,
            ordershipping: 0,
            respPageshow: false,
            supprespdata: [{
                id: 0,
                prod: '',
                quantity: 2,
                unitprice: 20,
                total: 40,
                ordersubtotal: 40,
                orderdiscount: 2,
                ordertax: 1,
                ordershipcharges: 1,
                ordernettotal: 44
            }],
            negotiateddata: [{
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
            savetotal: '',
            savesubtotal: '',
            savediscount: '',
            savetax: '',
            saveship: '',
            savenettotal: '',
            savetotal1: '',
            savesubtotal1: '',
            savediscount1: '',
            savetax1: '',
            saveship1: '',
            savenettotal1: '',
            req_id: null,
            req_date: new Date(),
            quote_status: '',
            category: '',
            subcat: '',
            prod: '',
            qty: null,
            request_id: null,
            quote_id: null,
            product_id: null,
            customer_id: null,
            decription: '',
            amount: null,
            nego: '',
            suppnegotiateddata: [{
                id: 0,
                prod: '',
                description: '',
                quantity: 0,
                unitprice: 0,
                total: 0,
                ordersubtotal: 0,
                orderdiscount: 0,
                ordertax: 0,
                ordershipcharges: 0,
                ordernettotal: 0
            }],
            currentdata: [{
                id: 0,
                prod: '',
                description: '',
                quantity: 0,
                unitprice: 0,
                total: 0,
                ordersubtotal: 0,
                orderdiscount: 0,
                ordertax: 0,
                ordershipcharges: 0,
                ordernettotal: 0
            }],
            productname: '',
            description: '',
            suppnegotiation: false,
            changeQty: '',
            changePrice: '',
            isSupplierNego: '',
            isCustomerNego: '',
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

            },
            form: {
                custname: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                categoryget: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                subcategoryget: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                productname: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)

                },
                quantity: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)

                },
                datepicker: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                otherdetails: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                }
            }
        }
    },
    methods: {
        calTotalamt() {
            var sum = 0;
            for (var i = 0; i < this.items2.length; i++) {
                var subtotal = this.items2[i].total;
                sum = sum + subtotal;
            }
            this.subtotal = sum;
            this.discount = 1;
            this.shipping = 2;
            this.nettotal = sum + this.discount + this.shipping;
        },
        editdataItem(index) {
            document.querySelector('#editoptiondiv' + index).classList.add('d-none');
            document.querySelector('#saveoptiondiv' + index).classList.remove('d-none');
            Object.assign(this.items4[index - 1], this.editedItem4[index - 1]);
            document.querySelector('#quantity' + index).classList.remove('d-none');
            document.querySelector('.quantity' + index).classList.add('d-none');
            document.querySelector('#unitprice' + index).classList.remove('d-none');
            document.querySelector('.unitprice' + index).classList.add('d-none');
            document.querySelector('#total' + index).classList.remove('d-none');
            document.querySelector('.total' + index).classList.add('d-none');
        },
        async savedata(index) {
            if ((this.items4[index - 1].quantity == null)) {
                this.$swal('', 'Please enter quantity of product', 'info');
                return
            } else if ((this.items4[index - 1].unitprice == null)) {
                this.$swal('', 'Please enter unit price', 'info');
                return
            }
            var quantity = this.items4[index - 1].quantity / this.itemperpkg;
            const isFloat = /\d+\.\d+/.test(quantity);
            if (isFloat) {
                this.totalpkg = quantity;
                this.$swal('', 'Please enter quantities multiple of ' + this.itemperpkg, 'info');
                return
            } else {
                this.totalpkg = quantity;
            }
            document.querySelector('#editoptiondiv' + index).classList.remove('d-none');
            document.querySelector('#saveoptiondiv' + index).classList.add('d-none');
            this.editedItem4[index - 1].quantity = document.querySelector('#quantity' + index).value;
            this.editedItem4[index - 1].unitprice = document.querySelector('#unitprice' + index).value;
            document.querySelector('#total' + index).innerText = (this.editedItem4[index - 1].quantity *
                this.editedItem4[index - 1].unitprice)
            this.editedItem4[index - 1].total = document.querySelector('#total' + index).innerText;
            var sumtotal = 0
            for (var i = 0; i < this.editedItem4.length; i++) {
                if (this.editedItem4[i].total == null) {
                    this.editedItem4[i].total = 0
                }
                var subtotal = Number(this.editedItem4[i].total);
                sumtotal = sumtotal + subtotal;
            }
            this.savesubtotal = sumtotal;
            document.querySelector('#quantity' + index).classList.add('d-none');
            document.querySelector('.quantity' + index).classList.remove('d-none');
            document.querySelector('#unitprice' + index).classList.add('d-none');
            document.querySelector('.unitprice' + index).classList.remove('d-none');
            document.querySelector('#total' + index).classList.add('d-none');
            document.querySelector('.total' + index).classList.remove('d-none');
            if (this.$route.path.includes('/vendor/resp-details') || this.$route.path.includes('/vendor/quote-resp-details')) {
                this.calcsavenetamount();
            } else {
                this.calcnetamount();
            }
        },
        addprod() {
            this.items4[this.count4] = Object.assign({}, this.defaultItem4);
            this.editedItem4[this.count4] = Object.assign({}, this.defaultItem4);
            this.count4++;
        },
        deletedata() {
            confirm('Are you sure you want to delete this item?') && this.count4--;
            this.editedItem4.splice(this.count4, 1)
        },
        calcnetamount() {
            this.ordernettotal = Number(this.ordersubtotal) + Number(this.orderdiscount) + Number(this.ordertax) + Number(this.ordershipping);
        },
        calcsavenetamount() {
            this.savenettotal = Number(this.savesubtotal) + Number(this.savediscount) + Number(this.savetax) + Number(this.saveship);
        },
        netamount() {
            this.savenettotal1 = Number(this.savesubtotal1) + Number(this.savediscount1) + Number(this.savetax1) + Number(this.saveship1);
        },
        backtoparent() {
            this.$router.back();
        },
        backtoparentquote() {
            this.$router.push({
                path: '/vendor/req-quotes-list'
            })
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
            let quoteid = '';
            if (this.$route.query.quoteid) {
                quoteid = this.$route.query.quoteid;
            }
            var token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('response_id', quoteid);
            formData.append('statusflag', 'inshipping');
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/changeorderstatus`, formData, {
                        headers
                    })
                .then(response => {
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
                        this.$router.push({
                            name: 'orders'
                        });
                    });
                })
                .catch((error) => {});
        },
        sendRespOnNegotiation() {
            const isFloat = /\d+\.\d+/.test(this.totalpkg);
            if (isFloat) {
                this.$swal('', 'Please enter quantities multiple of ' + this.itemperpkg, 'info');
                return
            } else {
                this.totalpkg = this.items4[0].quantity / this.itemperpkg;
            }
            var token = localStorage.getItem('token');
            var formData = new FormData();
            var supplier_id = localStorage.getItem('loginid');
            var resp_ref_id = document.querySelector('.quotationTabs .v-tab--selected').value;
            formData.append('resp_ref_id', resp_ref_id);
            formData.append('request_id', this.request_id);
            formData.append('response_id', this.quote_id);
            formData.append('supplier_id', supplier_id);
            formData.append('product_id', this.product_id);
            formData.append('quantity', this.editedItem4[0].quantity != undefined ? this.editedItem4[0].quantity : this.items4[0].quantity);
            formData.append('unit_price', this.editedItem4[0].unitprice != undefined ? this.editedItem4[0].unitprice : this.items4[0].unitprice);
            this.loader = true;
            this.$swal({
                title: 'Do you want to submit quotation?',
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
                                title: 'Quotation submitted! Check your email for confirmation details.',
                                showConfirmButton: true,
                                timer: 5000
                            }).then(() => {
                                this.$router.push({
                                    name: 'respquotes'
                                })
                            })
                        }).catch((error) => {});
                } else {
                    this.loader = false;
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
                    this.testflag = true;
                    var product = el.req_response[0].productname[0].name;
                    var description = el.req_response[0].decription;
                    this.approveddata = response.data.data;
                    this.approveddata = this.approveddata.map((el) => {
                        this.item_qty = Number(el.quantity);
                        var totalamt = Number(el.quantity) * Number(el.unit_price);
                        var nettotal = totalamt - Number(el.req_response[0].discount) + Number(el.req_response[0].tax) + Number(el.req_response[0].shipping);
                        this.amount = nettotal;
                        return {
                            id: 0,
                            prod: product,
                            description: description,
                            quantity: el.quantity,
                            unitprice: el.unit_price,
                            total: totalamt,
                            subtotal: totalamt,
                            discount: el.req_response[0].discount,
                            tax: el.req_response[0].tax,
                            shippingcharges: el.req_response[0].shipping,
                            nettotal: nettotal
                        }
                    });
                })
                .catch(err => {});
        },
        gettotalsupplier() {
            var token = localStorage.getItem('token');
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/countresp`, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((resp) => {
                    this.countsuppresp = resp.data.data
                })
                .catch((error) => {});
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
            if (this.usertype == 'Admin') {
                formData.append('usertype', this.usertype);
            }
            formData.append('quoteflag', 'get-quote');
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/get-reqquote', formData, {
                        headers
                    })
                .then(response => {
                    var quoteData = response.data.data;
                    this.productname = quoteData[0].quoteproductname[0].name;
                })
                .catch(err => {});
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
            if (this.$route.query.cancelorder != '') {
                formData.append('cancelorder', 'cancelorder');
            }
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/searchreqresp`, formData, {
                        headers
                    })
                .then(response => {
                    var data = response.data.data;
                    this.loader = false;
                    this.negotiateddata = response.data.data;
                    this.negotiateddata = this.negotiateddata.map((el) => {
                        this.productname = el.productname;
                        this.request_id = el.request_quote_id;
                        this.quote_id = el.id;
                        this.product_id = el.product_id;
                        this.customer_id = el.customer_id;
                        this.decription = el.description;
                        var qnty, unitprice;
                        this.prevnegotiate = false;
                        this.suppnegotiation = true;
                        this.negotiateduser = 'supp';
                        qnty = el.min_order_qty;
                        unitprice = el.whole_price_per_unit;
                        var totalamt = Number(el.min_order_qty) * Number(el.whole_price_per_unit);
                        var nettotal = (totalamt + Number(el.tax) + Number(el.shipping)) - Number(el.discount);
                        this.pkgtype = el.packaging_detail;
                        this.itemperpkg = Number(el.qty_per_packet);
                        this.totalpkg = Number(qnty) / this.itemperpkg;
                        if (nettotal == 5000 || nettotal == 5050 || nettotal < 5000 || nettotal < 5050 ||
                            (nettotal > 5000 && nettotal < 5050)) {
                            this.creditpoint = 1;
                        } else if (nettotal > 5050) {
                            this.creditpoint = Math.ceil((1 / 5000) * (nettotal - 5000) + 1)
                        }
                        return {
                            id: el.id,
                            negotiation: 0,
                            resp_ref_id: el.resp_ref_id,
                            request_id: this.request_id,
                            quote_id: this.quote_id,
                            desc: el.description,
                            product_id: this.product_id,
                            prod: this.productname,
                            customer_id: this.customer_id,
                            decription: this.decription,
                            quantity: qnty,
                            measurement_unit: (el.unit_of_measurement).split('-')[1],
                            unitprice: unitprice,
                            pkgtype: this.pkgtype,
                            itemperpkg: Number(el.qty_per_packet),
                            totalpkg: this.totalpkg,
                            total: totalamt,
                            status: el.status,
                            ordersubtotal: totalamt,
                            orderdiscount: Number(el.discount),
                            ordertax: Number(el.tax),
                            ordershipcharges: Number(el.shipping),
                            ordernettotal: nettotal
                        }
                    });
                })
                .catch(err => {});
        },
        async fetchQuoteRespNegotiation() {
            var token = localStorage.getItem('token');
            let quoteid = '',
                reqid = '';
            if (this.$route.query.quoteid) {
                quoteid = this.$route.query.quoteid;
            }
            if (this.$route.query.reqid) {
                reqid = this.$route.query.reqid;
            }
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
                        this.suppnegotiateddata = response.data.data;
                        this.suppnegotiateddata = this.suppnegotiateddata.map((el) => {
                            this.req_id = el.request_quote_id;
                            this.quote_id = el.id;
                            this.product_id = el.product_id;
                            this.customer_id = el.customer_id;
                            var totalamt = Number(el.min_order_qty) * Number(el.whole_price_per_unit);
                            var nettotal = totalamt - (Number(el.discount) + Number(el.tax) + Number(el.shipping));
                            this.pkgtype = el.packaging_detail;
                            this.itemperpkg = el.qty_per_packet;
                            this.older_totalpkg = Number(el.min_order_qty) / this.itemperpkg;
                            return {
                                id: el.id,
                                prod: '',
                                description: el.description,
                                quantity: el.min_order_qty,
                                unitprice: el.whole_price_per_unit,
                                total: totalamt,
                                ordersubtotal: totalamt,
                                orderdiscount: el.discount,
                                ordertax: el.tax,
                                ordershipcharges: el.shipping,
                                ordernettotal: nettotal
                            }
                        });
                        this.negotiateddata = response.data.data;
                        this.negotiateddata = this.negotiateddata.map((el) => {
                            this.request_id = el.request_quote_id;
                            this.quote_id = el.id;
                            this.product_id = el.product_id;
                            this.customer_id = el.customer_id;
                            this.decription = el.description;
                            var qnty, unitprice;
                            if (el.negotiations.length > 0) {
                                this.prevnegotiate = true;
                                for (var i = 0; i < el.negotiations.length; i++) {
                                    if (el.negotiations[i].supplier_id != null) {
                                        this.isSupplierNego = 'yes';
                                        this.isCustomerNego = 'yes';
                                    }
                                }
                                if (this.suppnegotiation && this.isSupplierNego != '') {
                                    this.negotiateduser = 'supp';
                                    qnty = el.negotiations[0].quantity;
                                    this.pkgtype = el.packaging_detail;
                                    this.itemperpkg = el.qty_per_packet;
                                    this.totalpkg = Number(qnty) / this.itemperpkg;
                                } else {
                                    this.negotiateduser = 'supp';
                                    qnty = el.negotiations[0].quantity;
                                    this.pkgtype = el.packaging_detail;
                                    this.itemperpkg = el.qty_per_packet;
                                    this.totalpkg = Number(qnty) / this.itemperpkg;
                                }
                                unitprice = el.negotiations[0].unit_price;
                                var totalamt = Number(el.negotiations[0].quantity) * Number(el.negotiations[0].unit_price);
                                var nettotal = totalamt - (Number(el.discount) + Number(el.tax) + Number(el.shipping));
                                if (Number(el.min_order_qty) != Number(el.negotiations[0].quantity)) {
                                    this.changeQty = 'changed';
                                } else if (Number(el.whole_price_per_unit) != Number(el.negotiations[0].unit_price)) {
                                    this.changePrice = 'changed';
                                }
                            } else {
                                this.prevnegotiate = false;
                                this.suppnegotiation = true;
                                this.negotiateduser = 'supp';
                                qnty = el.min_order_qty;
                                unitprice = el.whole_price_per_unit;
                                var totalamt = Number(el.min_order_qty) * Number(el.whole_price_per_unit);
                                var nettotal = totalamt - (Number(el.discount) + Number(el.tax) + Number(el.shipping));
                                this.pkgtype = el.packaging_detail;
                                this.itemperpkg = el.qty_per_packet;
                                this.totalpkg = Number(qnty) / this.itemperpkg;
                            }
                            return {
                                id: el.id,
                                resp_ref_id: el.resp_ref_id,
                                request_id: this.request_id,
                                quote_id: this.quote_id,
                                description: el.description,
                                product_id: this.product_id,
                                customer_id: this.customer_id,
                                decription: this.decription,
                                quantity: qnty,
                                unitprice: unitprice,
                                pkgtype: this.pkgtype,
                                itemperpkg: this.itemperpkg,
                                totalpkg: this.totalpkg,
                                total: totalamt,
                                ordersubtotal: totalamt,
                                orderdiscount: Number(el.discount),
                                ordertax: Number(el.tax),
                                ordershipcharges: Number(el.shipping),
                                ordernettotal: nettotal
                            }
                        });
                        this.items4 = response.data.data;
                        this.items4 = this.items4.map((el) => {
                            if (el.negotiations.length > 0) {
                                var totalamt = Number(el.negotiations[0].quantity) * Number(el.negotiations[0].unit_price);
                                this.savesubtotal = totalamt;
                                this.savediscount = el.discount;
                                this.savetax = el.tax;
                                this.saveship = el.shipping;
                                this.savenettotal = totalamt - (Number(this.savediscount) + Number(this.savetax) + Number(this.saveship));
                                return {
                                    id: 0,
                                    prod: '',
                                    description: el.description,
                                    quantity: el.negotiations[0].quantity,
                                    unitprice: el.negotiations[0].unit_price,
                                    total: totalamt,
                                }
                            }
                        });
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
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + `/searchreqresp`, formData, {
                        headers
                    })
                .then((response) => {
                    var secondnego = '';
                    var isNegotiation = '';
                    var data = response.data.data;
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].negotiations.length > 0) {
                                isNegotiation = 'yes';
                                this.nego = 'yes';
                                break;
                            }
                        }
                    }
                    if (isNegotiation != '') {
                        this.loader = false;
                        this.negotiateddata = response.data.data;
                        this.negotiateddata = this.negotiateddata.map((el) => {
                            var nettotal = 0;
                            this.request_id = el.request_quote_id;
                            this.quote_id = el.id;
                            this.product_id = el.product_id;
                            this.customer_id = el.customer_id;
                            var totalamt = Number(el.min_order_qty) * Number(el.whole_price_per_unit);
                            this.description = el.description;
                            this.negotiationlength = el.negotiations.length;
                            var qnty, unitprice, totalamt;
                            var qyt2, price2, total2, nettotal2 = 0;
                            var qyt3, price3, total3, nettotal3 = 0;
                            if (el.negotiations.length > 0) {
                                this.prevnegotiate = true;
                                for (var i = 0; i < el.negotiations.length; i++) {
                                    if (el.negotiations[i].length > 1) {
                                        this.suppnegotiation = true;
                                    }
                                    if (el.negotiations[i].supplier_id != null) {
                                        this.isSupplierNego = 'yes';
                                        this.isCustomerNego = 'yes';
                                    } else {
                                        this.isSupplierNego = ''
                                    }
                                    if (this.isSupplierNego != '') {
                                        this.negotiateduser = 'supp';
                                        secondnego = 'yes';
                                        qyt3 = el.negotiations[1].quantity;
                                        price3 = el.negotiations[1].unit_price;
                                        total3 = Number(el.negotiations[1].quantity) * Number(el.negotiations[1].unit_price);
                                        nettotal3 = (totalamt + Number(el.tax) + Number(el.shipping)) - Number(el.discount)
                                        qyt2 = el.negotiations[0].quantity;
                                        price2 = el.negotiations[0].unit_price;
                                        total2 = Number(qyt2) * Number(price2);
                                        this.savesubtotal = total3;
                                        nettotal2 = (total2 + Number(el.shipping) + Number(el.tax)) - Number(el.discount);
                                        if (Number(qyt3) != Number(qyt2)) {
                                            this.changeQty2 = 'changed';
                                        } else if (Number(price3) != Number(price2)) {
                                            this.changePrice2 = 'changed';
                                        }
                                    } else {
                                        secondnego = '';
                                        this.negotiateduser = 'supp';
                                        qnty = el.negotiations[i].quantity;
                                        this.totalpkg = Number(qnty) / this.itemperpkg;
                                        unitprice = el.negotiations[i].unit_price;
                                        totalamt = Number(el.negotiations[i].quantity) * Number(el.negotiations[i].unit_price);
                                        this.savesubtotal = totalamt;
                                        nettotal = (totalamt + Number(el.tax) + Number(el.shipping)) - Number(el.discount)
                                        if (Number(el.min_order_qty) != Number(el.negotiations[i].quantity)) {
                                            this.changeQty = 'changed';
                                        } else if (Number(el.whole_price_per_unit) != Number(el.negotiations[i].unit_price)) {
                                            this.changePrice = 'changed';
                                        }
                                    }
                                }
                            } else {
                                this.prevnegotiate = false;
                                this.suppnegotiation = false;
                                this.negotiateduser = 'supp';
                                qnty = el.min_order_qty,
                                    unitprice = el.whole_price_per_unit,
                                    totalamt = Number(el.min_order_qty) * Number(el.whole_price_per_unit);
                                nettotal = (totalamt + Number(el.tax) + Number(el.shipping)) - Number(el.discount)
                            }
                            this.pkgtype = el.packaging_detail;
                            this.itemperpkg = el.qty_per_packet;
                            this.totalpkg = Number(qnty) / this.itemperpkg;
                            this.savediscount = Number(el.discount);
                            this.savetax = Number(el.tax);
                            this.saveship = Number(el.shipping);
                            var finaltotal = secondnego == '' ? nettotal : nettotal3;
                            if (finaltotal == 5000 || finaltotal == 5050 || finaltotal < 5000 || finaltotal < 5050 ||
                                (finaltotal > 5000 && finaltotal < 5050)) {
                                this.creditpoint = 1;
                            } else if (finaltotal > 5050) {
                                this.creditpoint = Math.ceil((1 / 5000) * (finaltotal - 5000) + 1)
                            }
                            return {
                                id: el.id,
                                negotiation: this.negotiationlength,
                                resp_ref_id: el.resp_ref_id,
                                request_id: this.request_id,
                                quote_id: this.quote_id,
                                desc: el.description,
                                product_id: this.product_id,
                                prod: this.productname,
                                customer_id: this.customer_id,
                                decription: this.decription,
                                quantity: secondnego == '' ? qnty : qyt3,
                                measurement_unit: (el.unit_of_measurement).split('-')[1],
                                unitprice: secondnego == '' ? unitprice : price3,
                                pkgtype: this.pkgtype,
                                itemperpkg: Number(el.qty_per_packet),
                                totalpkg: this.totalpkg,
                                status: el.status,
                                total: secondnego == '' ? totalamt : total3,
                                ordersubtotal: secondnego == '' ? totalamt : total3,
                                orderdiscount: Number(el.discount),
                                ordertax: Number(el.tax),
                                ordershipcharges: Number(el.shipping),
                                ordernettotal: secondnego == '' ? nettotal : nettotal3,
                                suppnegotiateddata: {
                                    quantity: el.min_order_qty,
                                    measurement_unit: (el.unit_of_measurement).split('-')[1],
                                    unitprice: el.whole_price_per_unit,
                                    total: (Number(el.min_order_qty) * Number(el.whole_price_per_unit)),
                                    ordersubtotal: (Number(el.min_order_qty) * Number(el.whole_price_per_unit)),
                                    orderdiscount: Number(el.discount),
                                    ordertax: Number(el.tax),
                                    ordershipcharges: Number(el.shipping),
                                    ordernettotal: nettotal
                                },
                                custnegotiateddata: {
                                    quantity: secondnego == '' ? qnty : qyt2,
                                    measurement_unit: (el.unit_of_measurement).split('-')[1],
                                    unitprice: secondnego == '' ? unitprice : price2,
                                    total: secondnego == '' ? totalamt : total2,
                                    ordersubtotal: secondnego == '' ? totalamt : total2,
                                    orderdiscount: Number(el.discount),
                                    ordertax: Number(el.tax),
                                    ordershipcharges: Number(el.shipping),
                                    ordernettotal: secondnego == '' ? nettotal : nettotal2
                                }
                            }
                        });
                        this.items4 = response.data.data;
                        this.items4 = this.items4.map((el) => {
                            var qyt2, price2, total3, totalamt, nettotal3;
                            var qyt3, price3, qnty, unitprice;
                            if (el.negotiations.length > 0) {
                                for (var i = 0; i < el.negotiations.length; i++) {
                                    if (el.negotiations[i].supplier_id != null) {
                                        this.isSupplierNego = 'yes';
                                        this.isCustomerNego = 'yes';
                                    }
                                }
                                if (this.isSupplierNego != '') {
                                    this.negotiateduser = 'supp';
                                    secondnego = 'yes';
                                    qyt3 = el.negotiations[1].quantity;
                                    price3 = el.negotiations[1].unit_price;
                                    total3 = Number(el.negotiations[1].quantity) * Number(el.negotiations[1].unit_price);
                                    nettotal3 = (total3 + Number(el.tax) + Number(el.shippingcharges)) - Number(el.discount)
                                    qyt2 = el.negotiations[0].quantity;
                                    price2 = el.negotiations[0].unit_price;
                                    this.savesubtotal = total3;
                                    if (Number(qyt3) != Number(qyt2)) {
                                        this.changeQty2 = 'changed';
                                    } else if (Number(price3) != Number(price2)) {
                                        this.changePrice2 = 'changed';
                                    }
                                } else {
                                    secondnego = '';
                                    qnty = el.negotiations[0].quantity;
                                    unitprice = el.negotiations[0].unit_price;
                                    totalamt = Number(el.negotiations[0].quantity) * Number(el.negotiations[0].unit_price);
                                    this.savesubtotal = totalamt;
                                }
                                this.savediscount = el.discount;
                                this.savetax = el.tax;
                                this.saveship = el.shipping;
                                this.savenettotal = (totalamt + Number(this.savetax) + Number(this.saveship)) - Number(this.savediscount);
                                return {
                                    id: 0,
                                    prod: '',
                                    description: el.description,
                                    quantity: secondnego == '' ? qnty : qyt3,
                                    measurement_unit: (el.unit_of_measurement).split('-')[1],
                                    unitprice: secondnego == '' ? unitprice : price3,
                                    total: secondnego == '' ? totalamt : total3
                                }
                            }
                        });
                    } else {
                        this.fetchQuoteRespList();
                    }
                })
                .catch((error) => {});
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.username = localStorage.getItem('name');
        this.calTotalamt();
        this.fetchQuoteList();
        this.fetchRespNegotiation();
        this.gettotalsupplier();
        if (this.usertype == 'Admin') {}
    }
}
</script>

<style lang="scss" scoped>
.fontColor {
    color: red;
}

.disabledinputBox {
    border: none !important;
    margin-top: 0px !important;
    text-align: center !important;
}

.disabledSend {
    pointer-events: none !important;
}
</style>
