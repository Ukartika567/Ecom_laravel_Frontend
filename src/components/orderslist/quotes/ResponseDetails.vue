<template>
<form>
    <div class="mt-3 respHead"><span><b class="boldText">
        Request for quote</b> details</span></div>
    <div class="quoteHead">
        <div class="table-responsive ps-table mt-0 quotesDetailtTable">
            <EasyDataTable table-class-name="customize-table" buttons-pagination 
            :headers="headers" :items="items" header-text-direction="left"
             body-text-direction="left" hide-footer>
                <template>
                    <p>
                        <ul>
                            <li :id="item" v-for="inst in instructions" :key="inst">
                                <span>{{ inst.instruct }}</span>
                            </li>
                        </ul>
                    </p>
                </template>
                <template #item-totalprice="item">
                    <input type="text" v-model="item.totalprice" 
                    class="input-control inputField" style="width: 60px; height: 30px;">
                </template>
            </EasyDataTable>
        </div>
        <div class="row mt-2 mb-0">
            <div class="col-md-4 mb-0 pl-6">
                <span style="color:#4d4b4b;font-weight:600">Status: </span>
                <span style="color:Orange;">In Process</span>
            </div>
            <div class="col-md-4 mb-0"></div>
            <div class="col-md-4 mb-0 text-center">
                <span style="color:#4d4b4b;font-weight:600">Expected Date: </span>
                <span>05/07/2023</span>
            </div>
        </div>
    </div>
    <div class="mt-8 respHead"><span>Negotiation on Quote (Category/SubCategory [2 Credit
            Points])</span></div>
    <div id="sn_h_tabs" v-if="this.usertype == 'Admin'" class="m-t-0 ui-tabs-scroll ui-tabs ui-corner-all ui-widget ui-widget-content">
        <TabsDiv>
            <TabDiv name="WSES-10001">
                <div id="cust-1" class="sn-h-tab ui-tabs-panel p-5 ui-corner-bottom ui-widget-content">
                    <div>
                        <div class="mt-1">
                            <v-expansion-panels class="mb-6">
                                <v-expansion-panel v-for="negotiate in negotiations" :key="negotiate">
                                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                                        {{ negotiate.negotiate1.title }}
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <div class="mt-3 respHead resphead" v-if="this.usertype == 'Supplier'">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].unitprice
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].total + '.00'
                                                                                        }}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 rightContainer">
                                                    <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>SubTotal:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordersubtotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].orderdiscount +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordertax + '.00'
                                                                                        }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordershipcharges
                                                                                            + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordernettotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3 respHead resphead">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span style="color: red;">{{
                                                                                            supprespdata[0].unitprice
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].total + '.00'
                                                                                        }}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                        <h5 style="color: #000;font-weight: 600;">
                                                            Customer Comments:</h5>
                                                        <p>
                                                            <textarea name="description" rows="3" cols="20" id="description" class="input-control inputField  mt-0 mb-5" placeholder="Customer comments..." style="height: 50px;" value="Can you please Reduce Unit Price." disabled></textarea>
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
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordersubtotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].orderdiscount +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordertax + '.00'
                                                                                        }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordershipcharges
                                                                                            + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordernettotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3 respHead resphead">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>19</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>38.00</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 rightContainer">
                                                    <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>SubTotal:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>38.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>2.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>1.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>1.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>42.00</span>
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
                        <div class="mt-3 respHead resphead" v-if="this.usertype == 'Admin'">
                            <span>WEQ-100001</span>
                        </div>
                        <div style="border:1px solid #aeadad">
                            <div class="table-responsive ps-table mt-0 resptable">
                                <table class="table table-bordered resptable orderresptable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price/unit</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>{{ supprespdata[0].prod }}</span>
                                            </td>
                                            <td>
                                                <span>{{ supprespdata[0].quantity }}</span>
                                            </td>
                                            <td>
                                                <span>19</span>
                                            </td>
                                            <td>
                                                <span><i>$</i>38.00</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row mt-0">
                                <div class="col-md-6">
                                    <div class="mt-0 ml-2">
                                        <h5 style="color: #000;font-weight: 600;">Customer Comments:
                                        </h5>
                                        <p>
                                            <textarea name="description" rows="3" cols="20" id="description" class="input-control inputField  mt-0 mb-5" placeholder="Customer comments..." style="height: 50px;" value="We have added last product , can you please add that." disabled></textarea>
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
                                                <span><i>$</i>38.00</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Discount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>2.00</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Tax:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>1.00</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                            <div class="col-md-6 calcamount">
                                                <h4>Shipping:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>1.00</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>NetAmount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>42.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-3 respHead resphead">
                            <span>WEQ-100001</span>
                        </div>
                        <div style="border:1px solid #aeadad">
                            <div class="table-responsive ps-table mt-0 resptable">
                                <table class="table table-bordered resptable orderresptable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price/unit</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>{{ supprespdata[0].prod }}</span>
                                            </td>
                                            <td>
                                                <span>{{ supprespdata[0].quantity }}</span>
                                            </td>
                                            <td>
                                                <span>19</span>
                                            </td>
                                            <td>
                                                <span><i>$</i>38.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>Apple</span>
                                            </td>
                                            <td>
                                                <span>1</span>
                                            </td>
                                            <td>
                                                <span>15</span>
                                            </td>
                                            <td>
                                                <span><i>$</i>15.00</span>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row mt-0">
                                <div class="col-md-6">
                                    <div class="mt-0 ml-2">
                                    </div>
                                </div>
                                <div class="col-md-6 rightContainer">
                                    <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>SubTotal:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>53.00</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Discount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>2.00</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Tax:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>1.00</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                            <div class="col-md-6 calcamount">
                                                <h4>Shipping:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>1.00</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>NetAmount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>57.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabDiv>
            <TabDiv name="WSES-10002">
                <div id="cust-1" class="sn-h-tab ui-tabs-panel p-5 ui-corner-bottom ui-widget-content">
                    <div>
                        <div class="mt-1">
                            <v-expansion-panels class="mb-6">
                                <v-expansion-panel v-for="negotiate in negotiations" :key="negotiate">
                                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                                        {{ negotiate.negotiate1.title }}
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <div class="mt-3 respHead resphead" v-if="this.usertype == 'Supplier'">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].unitprice
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].total + '.00'
                                                                                        }}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 rightContainer">
                                                    <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>SubTotal:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordersubtotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].orderdiscount +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordertax + '.00'
                                                                                        }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordershipcharges
                                                                                            + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordernettotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3 respHead resphead">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span style="color: red;">{{
                                                                                            supprespdata[0].unitprice
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].total + '.00'
                                                                                        }}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                        <h5 style="color: #000;font-weight: 600;">
                                                            Customer Comments:</h5>
                                                        <p>
                                                            <textarea name="description" rows="3" cols="20" id="description" class="input-control inputField  mt-0 mb-5" placeholder="Customer comments..." style="height: 50px;" value="Can you please Reduce Unit Price." disabled></textarea>
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
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordersubtotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].orderdiscount +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordertax + '.00'
                                                                                        }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordershipcharges
                                                                                            + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordernettotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-3 respHead resphead">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>19</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>38.00</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 rightContainer">
                                                    <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>SubTotal:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>38.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>2.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>1.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>1.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>42.00</span>
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
                    <div>
                        <span style="color:rgb(255, 8, 0)">No next negotiation yet</span>
                    </div>
                </div>
            </TabDiv>
            <TabDiv name="WSES-10003">
                <div id="cust-1" class="sn-h-tab ui-tabs-panel p-5 ui-corner-bottom ui-widget-content">
                    <div>
                        <div class="mt-1">
                            <v-expansion-panels class="mb-6">
                                <v-expansion-panel v-for="negotiate in negotiations" :key="negotiate">
                                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                                        {{ negotiate.negotiate1.title }}
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <div class="mt-3 respHead resphead" v-if="this.usertype == 'Supplier'">
                                            <span>WEQ-100001
                                            </span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].unitprice
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].total + '.00'
                                                                                        }}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 rightContainer">
                                                    <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>SubTotal:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordersubtotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].orderdiscount +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordertax + '.00'
                                                                                        }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordershipcharges
                                                                                            + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordernettotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3 respHead resphead">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span style="color: red;">{{
                                                                                            supprespdata[0].unitprice
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].total + '.00'
                                                                                        }}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                        <h5 style="color: #000;font-weight: 600;">
                                                            Customer Comments:</h5>
                                                        <p>
                                                            <textarea name="description" rows="3" cols="20" id="description" class="input-control inputField  mt-0 mb-5" placeholder="Customer comments..." style="height: 50px;" value="Can you please Reduce Unit Price." disabled></textarea>
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
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordersubtotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].orderdiscount +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordertax + '.00'
                                                                                        }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordershipcharges
                                                                                            + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordernettotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-3 respHead resphead">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>19</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>38.00</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 rightContainer">
                                                    <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>SubTotal:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>38.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>2.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>1.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>1.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>42.00</span>
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
                    <div>
                        <span style="color:rgb(255, 8, 0)">No next negotiation yet</span>
                    </div>
                </div>
            </TabDiv>
            <TabDiv name="Supplier 4">
                <div id="cust-1" class="sn-h-tab ui-tabs-panel p-5 ui-corner-bottom ui-widget-content">
                    <div>
                        <div class="mt-1">
                            <v-expansion-panels class="mb-6">
                                <v-expansion-panel v-for="negotiate in negotiations" :key="negotiate">
                                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                                        {{ negotiate.negotiate1.title }}
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <div class="mt-3 respHead resphead" v-if="this.usertype == 'Supplier'">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].unitprice
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].total + '.00'
                                                                                        }}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 rightContainer">
                                                    <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>SubTotal:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordersubtotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].orderdiscount +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordertax + '.00'
                                                                                        }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordershipcharges
                                                                                            + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordernettotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3 respHead resphead">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span style="color: red;">{{
                                                                                            supprespdata[0].unitprice
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].total + '.00'
                                                                                        }}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                        <h5 style="color: #000;font-weight: 600;">
                                                            Customer Comments:</h5>
                                                        <p>
                                                            <textarea name="description" rows="3" cols="20" id="description" class="input-control inputField  mt-0 mb-5" placeholder="Customer comments..." style="height: 50px;" value="Can you please Reduce Unit Price." disabled></textarea>
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
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordersubtotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].orderdiscount +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordertax + '.00'
                                                                                        }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordershipcharges
                                                                                            + '.00' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>{{
                                                                                            supprespdata[0].ordernettotal +
                                                                                            '.00' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-3 respHead resphead">
                                            <span>WEQ-100001</span>
                                        </div>
                                        <div style="border:1px solid #aeadad">
                                            <div class="table-responsive ps-table mt-0 resptable">
                                                <table class="table table-bordered resptable orderresptable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price/unit</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span>{{ supprespdata[0].prod
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>{{ supprespdata[0].quantity
                                                                                        }}</span>
                                                            </td>
                                                            <td>
                                                                <span>19</span>
                                                            </td>
                                                            <td>
                                                                <span><i>$</i>38.00</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row mt-0">
                                                <div class="col-md-6">
                                                    <div class="mt-0 ml-2">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 rightContainer">
                                                    <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>SubTotal:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>38.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Discount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>2.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Tax:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>1.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>Shipping:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>1.00</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-0">
                                                            <div class="col-md-6 calcamount">
                                                                <h4>NetAmount:</h4>
                                                            </div>
                                                            <div class="col-md-6 calcamount">
                                                                <span><i>$</i>42.00</span>
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
                    <div>
                        <span style="color:rgb(255, 8, 0)">No next negotiation yet</span>
                    </div>
                </div>
            </TabDiv>
        </TabsDiv>
    </div>
    <div id="sn_h_tabs" v-if="this.usertype == 'Supplier'" class="m-t-0 ui-tabs-scroll ui-tabs ui-corner-all ui-widget ui-widget-content">
        <TabsDiv>
            <TabDiv name="Customer 1">
                <div id="cust-1" class="sn-h-tab ui-tabs-panel p-5 ui-corner-bottom ui-widget-content">
                    <div class="resppage mt-8">
                        <div class="mt-3 respHead resphead" v-if="this.usertype == 'Supplier'">
                            <span>WEQ-100001</span>
                        </div>
                        <div style="border:1px solid #aeadad">
                            <div class="table-responsive ps-table mt-0 resptable">
                                <table class="table table-bordered resptable orderresptable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price/unit</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>{{ supprespdata[0].prod }}</span>
                                            </td>
                                            <td>
                                                <span>{{ supprespdata[0].quantity }}</span>
                                            </td>
                                            <td>
                                                <span>{{ supprespdata[0].unitprice }}</span>
                                            </td>
                                            <td>
                                                <span><i>$</i>{{ supprespdata[0].total + '.00'
                                                                        }}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row mt-0">
                                <div class="col-md-6">
                                    <div class="mt-0 ml-2">
                                    </div>
                                </div>
                                <div class="col-md-6 rightContainer">
                                    <div class="contentdiv rightcontentdiv mt-0 mb-5 mr-5">
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>SubTotal:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ supprespdata[0].ordersubtotal +
                                                                            '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Discount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ supprespdata[0].orderdiscount +
                                                                            '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Tax:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ supprespdata[0].ordertax + '.00'
                                                                        }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                            <div class="col-md-6 calcamount">
                                                <h4>Shipping:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ supprespdata[0].ordershipcharges +
                                                                            '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>NetAmount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ supprespdata[0].ordernettotal +
                                                                            '.00' }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 respHead resphead">
                            <span>WEQ-100001</span>
                        </div>
                        <div style="border:1px solid #aeadad">
                            <div class="table-responsive ps-table mt-0 resptable">
                                <table class="table table-bordered resptable orderresptable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price/unit</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>{{ supprespdata[0].prod }}</span>
                                            </td>
                                            <td>
                                                <span>{{ supprespdata[0].quantity }}</span>
                                            </td>
                                            <td>
                                                <span style="color: red;">{{
                                                                            supprespdata[0].unitprice }}</span>
                                            </td>
                                            <td>
                                                <span><i>$</i>{{ supprespdata[0].total + '.00'
                                                                        }}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row mt-0">
                                <div class="col-md-6">
                                    <div class="mt-0 ml-2">
                                        <h5 style="color: #000;font-weight: 600;">Customer Comments:
                                        </h5>
                                        <p>
                                            <textarea name="description" rows="3" cols="20" id="description" class="input-control inputField  mt-0 mb-5" placeholder="Customer comments..." style="height: 50px;" value="Can you please Reduce Unit Price." disabled></textarea>
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
                                                <span><i>$</i>{{ supprespdata[0].ordersubtotal +
                                                                            '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Discount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ supprespdata[0].orderdiscount +
                                                                            '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>Tax:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ supprespdata[0].ordertax + '.00'
                                                                        }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0" style="border-bottom:1px solid #d6d4d4">
                                            <div class="col-md-6 calcamount">
                                                <h4>Shipping:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ supprespdata[0].ordershipcharges +
                                                                            '.00' }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-0">
                                            <div class="col-md-6 calcamount">
                                                <h4>NetAmount:</h4>
                                            </div>
                                            <div class="col-md-6 calcamount">
                                                <span><i>$</i>{{ supprespdata[0].ordernettotal +
                                                                            '.00' }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 respHead resphead"><span>You can response here</span></div>
                        <div style="border:1px solid #aeadad">
                            <router-link class="btn btn-default mt-0 mb-5 ml-2 pull-left addrowbtn" to="#" @click="addprod()">
                                <i class="icon icon-plus plusicon mr-1" />
                                Add
                            </router-link>
                            <div class="table-responsive ps-table mt-0 resptable">
                                <table class="table table-bordered resptable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price/unit</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span class="saveprod">IPhone</span>
                                            </td>
                                            <td>
                                                <span class="savequantity">1</span>
                                            </td>
                                            <td>
                                                <span class="saveunitprice">20</span>
                                            </td>
                                            <td>
                                                <span class="savetotal"><i>$</i>40.00</span>
                                            </td>
                                            <td>
                                                <div id="saveoptiondiv">
                                                    <v-icon color="grey">
                                                        mdi-content-save
                                                    </v-icon>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr v-for="key in count4" :key="key">
                                            <td>
                                                <input type="text" class="form-control inputField invoiceinpfield" :id="'prod' + key" v-model="items4[key - 1].prod" required>
                                                <span :class="'prod' + key" class="d-none">{{
                                                                            editedItem4[key - 1].prod }}</span>
                                            </td>
                                            <td>
                                                <input type="number" class="form-control inputField invoiceinpfield" :id="'quantity' + key" v-model="items4[key -
                                                                                1].quantity" required>
                                                <span :class="'quantity' + key" class="d-none">{{
                                                                            editedItem4[key - 1].quantity }}</span>
                                            </td>
                                            <td>
                                                <input type="number" class="form-control inputField 
                                                                                invoiceinpfield" :id="'unitprice' + key" v-model="items4[key -
                                                                                1].unitprice" required>
                                                <span :class="'unitprice' + key" class="d-none">{{
                                                                            editedItem4[key - 1].unitprice }}</span>

                                            </td>
                                            <td>
                                                <span :id="'total' + key" class="d-none"><i>$</i>{{
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
                                                        <v-icon color="green" @click="savedata(key)">
                                                            mdi-content-save
                                                        </v-icon>
                                                        <v-icon color="red" @click="deletedata">
                                                            mdi-delete
                                                        </v-icon>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mt-8 ml-2">
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
                                                    <v-text-field :hide-details="true" dense single-line :autofocus="true" class="centered-input" v-model="this.savesubtotal1" disabled></v-text-field>
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
                                                    <v-text-field :hide-details="true" dense single-line :autofocus="true" class="centered-input" v-model="this.savediscount1"></v-text-field>
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
                                                    <v-text-field :hide-details="true" dense single-line :autofocus="true" class="centered-input" v-model="this.savetax1"></v-text-field>
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
                                                    <v-text-field :hide-details="true" dense single-line :autofocus="true" class="centered-input" v-model="this.saveship1"></v-text-field>
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
                                                    <v-text-field :hide-details="true" dense single-line :autofocus="true" class="centered-input" v-model="this.savenettotal1" disabled></v-text-field>
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
            </TabDiv>
        </TabsDiv>
    </div>
    <div class="ps-form__submit text-center mb-0 mt-8 col-12 controlBtnDiv">
        <router-link to="/admin/quotes-list" v-if="this.$route.path.includes('/admin/resp-details')">
            <span class="icon-arrow-left backarrow ml-4 mt-2">&nbsp;Back</span>
        </router-link>
        <button type="submit" class="ps-btn success addbtn" v-if="this.$route.path.includes('/admin/resp-details')">OK</button>
        <router-link to="/vendor/req-quotes-list" v-if="this.$route.path.includes('/vendor/resp-details')">
            <span class="icon-arrow-left backarrow ml-4 mt-2">&nbsp;Back</span>
        </router-link>
        <button class="ps-btn ps-btn--gray mr-3" style="font-size:12px" v-if="this.$route.path.includes('/vendor/resp-details')">Cancel</button>
        <button type="submit" class="ps-btn success addbtn mr-3" v-if="this.$route.path.includes('/vendor/resp-details')">Send</button>
    </div>
</form>
</template>

<script>
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
    components: {},
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            inpfield: false,
            panel: [0],
            pricerating: 1,
            qualityrating: 2,
            timerating: 3,
            pkgtype: '',
            totalpkg: '',
            itemperpkg: '',
            item_qty: '',
            readonly: false,
            statusnotchange: true,
            changedstatus: false,
            showfeedbackModal: false,
            username: '',
            prevnegotiate: false,
            status: null,
            reqdate: null,
            quotestatus: null,
            negotiations: [{
                negotiate1: {
                    title: 'See previous negotiation',
                }
            }],
            picked: new Date(),
            instructions: [{
                instruct: 'All delivery to be made to the shipping address mentioned above.'
            }],
            supplier1: '',
            supplier2: '',
            supplier3: '',
            prodRaiseid: '',
            supplier: '',
            showSuppModal: false,
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
            ],
            items2: [],
            items3: [{
            }, ],
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
                quantity: null,
                unitprice: null,
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
                category: 'Electronic',
                subcategory: 'Mobile Phone',
                prod: 'IPhone',
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
            custnegotiateddata: [{
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
                ordernettotal: ''
            }],
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
        showSupplierDailog(supp1, supp2, supp3) {
            this.showSuppModal = true;
            this.supplier1 = supp1;
            this.supplier2 = supp2;
            this.supplier3 = supp3;
        },
        generateInvoicepdf() {
            this.$refs.vue3SimpleHtml2pdf.download();
        },
        calTotalamt() {
            var sum = 0;
            for (var i = 0; i < this.items2.length; i++) {
                var subtotal = this.items2[i].total;
                sum = sum + subtotal;
            }
            this.subtotal = sum;
            this.discount = 1
            this.shipping = 2
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
                alert('Please enter quantity of product.');
                return
            } else if ((this.items4[index - 1].unitprice == null)) {
                alert('Please enter unit price.');
                return
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
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                confirmButtonColor: 'rgb(2 145 2)',
                customClass:'warningswal'
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
                .catch((error) => {
                });
        },
        async fetchQuoteList() {
            let formData = new FormData();
            let reqid = '';
            if (this.$route.query.reqid) {
                reqid = this.$route.query.reqid;
            }
            formData.append('search_by_quote_id', reqid);
            formData.append('categoryname', '');
            formData.append('product', '');
            formData.append('reqdate', '');
            formData.append('quoteflag', '');
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
                    this.testflag = true;
                    this.items = response.data.data;
                    this.items = this.items.map((el) => {
                        this.req_id = el.id;
                        this.req_date = el.created_at.split('T')[0];
                        this.quote_status = el.status;
                        this.productname = el.quoteproductname[0].name;
                        return {
                            category: el.quoteproductname[0].quotesubcategoryname[0].categoryname[0].name,
                            subcategory: el.quoteproductname[0].quotesubcategoryname[0].name,
                            product: el.quoteproductname[0].name,
                            quantity: el.qty,
                            status: el.status,
                        }
                    });
                })
                .catch(err => {});
        },
        async fetchQuoteRespNegotiation() {
            var token = localStorage.getItem('token');
            let quoteid = '';
            if (this.$route.query.quoteid) {
                quoteid = this.$route.query.quoteid;
            }
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/getquotenego/${quoteid}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                })
                .then((response) => {
                    this.suppnegotiateddata = response.data.data;
                    this.suppnegotiateddata = this.suppnegotiateddata.map((el) => {
                        this.req_id = el.request_quote_id;
                        this.quote_id = el.id;
                        this.product_id = el.product_id;
                        this.customer_id = el.customer_id;
                        var totalamt = Number(el.min_order_qty) * Number(el.whole_price_per_unit);
                        var nettotal = totalamt + Number(el.discount) + Number(el.tax) + Number(el.shipping);
                        return {
                            id: el.id,
                            prod: this.productname,
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
                    this.custnegotiateddata = response.data.data;
                    this.custnegotiateddata = this.custnegotiateddata.map((el) => {
                        var totalamt = Number(el.negotiations[0].quantity) * Number(el.negotiations[0].unit_price);
                        var nettotal = totalamt + Number(el.discount) + Number(el.tax) + Number(el.shipping);
                        return {
                            id: 1,
                            prod: this.productname,
                            description: el.description,
                            quantity: el.negotiations[0].quantity,
                            unitprice: el.negotiations[0].unit_price,
                            total: totalamt,
                            ordersubtotal: totalamt,
                            orderdiscount: el.discount,
                            ordertax: el.tax,
                            ordershipcharges: el.shipping,
                            ordernettotal: nettotal
                        }
                    });
                    this.currentdata = response.data.data;
                    this.currentdata = this.currentdata.map((el) => {
                        var totalamt = Number(el.negotiations[0].quantity) * Number(el.negotiations[0].unit_price);
                        var nettotal = totalamt + Number(el.discount) + Number(el.tax) + Number(el.shipping);
                        return {
                            id: 1,
                            prod: this.productName,
                            description: this.description,
                            quantity: el.negotiations[0].quantity,
                            unitprice: el.negotiations[0].unit_price,
                            total: totalamt,
                            ordersubtotal: totalamt,
                            orderdiscount: el.discount,
                            ordertax: el.tax,
                            ordershipcharges: el.shipping,
                            ordernettotal: nettotal
                        }
                    });
                    this.negotiateddata = response.data.data;
                    var productname = this.items[0].product;
                    this.negotiateddata = this.negotiateddata.map((el) => {
                        this.request_id = el.request_quote_id;
                        this.quote_id = el.id;
                        this.product_id = el.product_id;
                        this.customer_id = el.customer_id;
                        this.decription = el.description;
                        var totalamt = Number(el.negotiations[0].quantity) * Number(el.negotiations[0].unit_price);
                        var nettotal = totalamt + Number(el.discount) + Number(el.tax) + Number(el.shipping);
                        return {
                            id: el.id,
                            prod: productname,
                            description: el.description,
                            quantity: el.negotiations[0].quantity,
                            unitprice: el.negotiations[0].unit_price,
                            total: totalamt,
                            ordersubtotal: totalamt,
                            orderdiscount: el.discount,
                            ordertax: el.tax,
                            ordershipcharges: el.shipping,
                            ordernettotal: nettotal
                        }
                    });
                    this.items4 = response.data.data;
                    this.items4 = this.items4.map((el) => {
                        var totalamt = Number(el.negotiations[0].quantity) * Number(el.negotiations[0].unit_price);
                        this.savesubtotal = totalamt;
                        this.savediscount = el.discount;
                        this.savetax = el.tax;
                        this.saveship = el.shipping;
                        this.savenettotal = totalamt - Number(this.savediscount) + Number(this.savetax) + Number(this.saveship);
                        return {
                            id: 0,
                            prod: productname,
                            description: el.description,
                            quantity: el.negotiations[0].quantity,
                            unitprice: el.negotiations[0].unit_price,
                            total: totalamt,
                        }
                    });

                })
                .catch((error) => {
                });
        },
        sendRespOnNegotiation() {
            var token = localStorage.getItem('token');
            var formData = new FormData();
            var supplier_id = localStorage.getItem('loginid');
            formData.append('request_id', this.request_id);
            formData.append('response_id', this.quote_id);
            formData.append('supplier_id', supplier_id);
            formData.append('product_id', this.product_id);
            formData.append('quantity', this.editedItem4[0].quantity);
            formData.append('unit_price', this.editedItem4[0].unitprice);
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/storenegotiation`, formData, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Successfully negotiated and send mail to customer and admin!',
                        showConfirmButton: true,
                        timer: 5000
                    }).then(() => {
                        this.$router.push({
                            name: 'respquotes'
                        })
                    })
                }).catch((error) => {});
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
                    var description =  el.req_response[0].decription;
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
        async fetchQuoteRespList() {
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
                    response.data.data.map((el) => {
                        this.pkgtype = el.packaging_detail;
                        this.itemperpkg = el.qty_per_packet;
                        this.totalpkg = Number(el.quantity) / Number(el.qty_per_packet);
                    });
                })
                .catch(err => {});
        },
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.username = localStorage.getItem('name');
        this.calTotalamt();
        this.fetchQuoteList();
        this.fetchQuoteRespNegotiation();
        this.gettotalsupplier();
        this.fetchApprovedOrder();
        this.fetchQuoteRespList();
        if (this.usertype == 'Admin') {
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
