<template>
<LoaderComponent v-if="this.loader" />
<div>
    <div class="col mt-5">
        <div class="row infoDiv mb-5 ml-3">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                <input type="text" class="form-control proinpfield" id="catDropdown" v-model="productform.category">
                <label for="prodcategory">Category</label>
                <div class="validator error" v-for="error of v$.productform.category.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                <input type="text" class="form-control proinpfield" id="subCatDropdown" v-model="productform.subcategory">
                <label for="subCatDropdown">SubCategory</label>
                <div class="validator error" v-for="error of v$.productform.subcategory.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                <input type="text" class="form-control proinpfield" id="productDropdown" v-model="productform.name">
                <label for="productDropdown">Product Name</label>
                <div class="validator error" v-for="error of v$.productform.name.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-5">
                <textarea name="description" rows="3" cols="20" id="description" v-model="productform.description" class="input-control inputField mt-0 mb-0 proddecbox"></textarea>
                <label for="description">Product Description</label>
                <div class="validator error" v-for="error of v$.productform.description.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
                <div class="">
                    <SingleChipsDropdown v-model="productform.unit" :options="this.unitsoptions" @click.stop optionLabel="attr" filter class="select select-sm proinpfield w-full
                    md:w-20rem groupmultiselect singleSelectdropdown" style="margin: 1px !important;" optionValue="value">
                    </SingleChipsDropdown>
                    <div class="select__arrow dropdownIcom unitdropdownIcon"></div>
                    <label for="unitDropdown">Unit of Measurement</label>
                    <div class="validator error" v-for="error of v$.productform.unit.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0">
            </div>
        </div>
        <div class="row ml-8 mt-0 mb-0">
            <span class="infoboxhead">Pricing</span>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-2">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="priceunit" value="Whole Price Per Unit" readonly>
                <label for="priceunit">Attribute1</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control proinpfield" id="priceunitattr" 
                        v-model="productform.priceunit" @keyup="enterPrice($event)">
                        <div class=" dropdownIcom pricingDiv">
                            <span><i>$</i></span>
                        </div>
                        <label for="priceunitattr">Pricing</label>
                        <div class="validator error" v-for="error of v$.productform.priceunit.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-5 ml-3 mt-2">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="qty" value="Mininum Order Qty" v-if="this.quoteid == ''" readonly>
                <input type="text" class="form-control proinpfield" id="qty" value="Quantity" v-else readonly>
                <label for="qty">Attribute2</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control proinpfield" id="orderqty" v-model="productform.qty" readonly>
                        <label for="orderqty">Quantity</label>
                        <div class="validator error" v-for="error of v$.productform.qty.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ml-8 mt-0 mb-0">
            <span class="infoboxhead">Packaging and Shipping</span>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-2">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="pkgdetail" value="Packaging Detail" readonly>
                <label for="shipmethod">Attribute1</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-4">
                        <div class="select select-sm proinpfield">
                            <select name="pkgattr" id="pkgattr" class="category" v-model="productform.pakaging" style="width:100%;" @change="pkgChange($event)">
                                <option :value="item" v-for="item in packagedetails" :key="item">{{ item }}</option>
                            </select>
                            <div class="select__arrow"></div>
                            <label for="prodcategory">Package Type</label>
                            <div class="validator error" v-for="error of v$.productform.pakaging.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control proinpfield" id="iteminp" v-model="this.itemquantity">
                        <label for="iteminp">Item/{{ this.pkgtype }}</label>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control proinpfield" id="iteminp2" :value="productform.countpkg=this.productform.qty / this.itemquantity" v-if="this.itemquantity">
                        <input type="text" class="form-control proinpfield" id="iteminp2" value="0" v-else>
                        <label for="iteminp2">Total {{ this.totalpkg }}</label>
                        <div class="validator error" v-for="error of v$.productform.countpkg.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-2">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="shipmethod" value="Shipping Methods" readonly>
                <label for="shipmethod">Attribute2</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control proinpfield" id="shippintattr" v-model="productform.shipping">
                        <label for="shippintattr">Shipping</label>
                        <!-- <div class="validator error" v-for="error of v$.productform.shipping.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-5 ml-3 mt-2">
            <div class="col-sm-4">
                <input type="text" class="form-control proinpfield" id="estimatedtime" value="Estimated Delivery Time" readonly>
                <label for="estimatedtime">Attribute3</label>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-md-12">
                        <Datepicker v-model="productform.estimated_date" :locale="locale" :upperLimit="to" :lowerLimit="todayDate" :clearable="true" id="estimateattr" class="inputField proinpfield" />
                        <label for="estimateattr">Estimated Delivery Date</label>
                        <div class="validator error" v-for="error of v$.productform.estimated_date.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ml-5 mt-0 mb-0">
            <div class="col-md-2 mt-2">
                <span class="infoboxhead">Other Charges <span style="color: rgb(104 104 104);text-transform: capitalize;"> In</span></span>
            </div>
            <div class="col-md-10">
                <div class="row">
                    <div class="col-md-2 mt-2">
                        <SingleChipsDropdown v-model="chargesUnit" :options="this.amountChargesunit" 
                         optionLabel="attr" class="select select-sm proinpfield w-full
                        md:w-20rem groupmultiselect amountChangedropdown" style="margin: 1px !important; margin-left: -22px;" 
                        optionValue="value"  @change="changeAmount($event)"/>
                        <div class="select__arrow dropdownIcom unitdropdownIcon amtdownarrow"></div>
                    </div>
                    <div class="col-md-10"></div>
                </div>
            </div>
        </div>
        <div class="row infoDiv mb-0 ml-3 mt-2">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                <div class="" :class="this.chargesUnit==2?'chargesCountDiv':''">
                    <input type="text" class="form-control proinpfield" id="discount"
                     v-model="productform.discount" :class="this.chargesUnit==2?'chargecountinp':''" 
                     @keyup="enterVal($event, 'discount')">
                     <input type="text" class="form-control proinpfield chargecountinp" id="discount" 
                     v-model="discountpercent" v-if="this.chargesUnit==2">
                    <div class=" dropdownIcom pricingDiv changeCharges">
                        <span  v-if="this.chargesUnit==1"><i>$</i></span>
                        <span  v-else><i>%</i></span>
                    </div>
                    <label for="discount">Discount</label>
                </div>
                <div class="validator error" v-if="this.chargesUnit==2 && productform.priceunit ==''">
                    Please enter price
                </div>
                <div class="validator error" v-for="error of v$.productform.discount.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                <div class="" :class="this.chargesUnit==2?'chargesCountDiv':''">
                    <input type="text" class="form-control proinpfield" id="tax" 
                    v-model="productform.tax" :class="this.chargesUnit==2?'chargecountinp':''" 
                     @keyup="enterVal($event, 'tax')">
                    <input type="text" class="form-control proinpfield chargecountinp" id="tax" 
                    v-model="taxpercent" v-if="this.chargesUnit==2">
                    <div class=" dropdownIcom pricingDiv changeCharges">
                        <span  v-if="this.chargesUnit==1"><i>$</i></span>
                        <span  v-else><i>%</i></span>
                    </div>
                    <label for="tax">Tax</label>
                </div>
                <div class="validator error" v-if="this.chargesUnit==2 && productform.priceunit ==''">
                    Please enter price
                </div>
                <div class="validator error" v-for="error of v$.productform.tax.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-4">
                <div class="" :class="this.chargesUnit==2?'chargesCountDiv':''">
                    <input type="text" class="form-control proinpfield" 
                    id="shippingcharge" v-model="productform.shippingcharge"
                    :class="this.chargesUnit==2?'chargecountinp':''" 
                     @keyup="enterVal($event, 'shipcharge')">
                    <input type="text" class="form-control proinpfield chargecountinp"
                     id="shippingcharge"  v-model="shipchargepercent" v-if="this.chargesUnit==2">
                    <div class=" dropdownIcom pricingDiv changeCharges">
                        <span  v-if="this.chargesUnit==1"><i>$</i></span>
                        <span  v-else><i>%</i></span>
                    </div>
                    <label for="shippingcharge">Shipping</label>
                </div>
                <div class="validator error" v-if="this.chargesUnit==2 && productform.priceunit ==''">
                    Please enter price
                </div>
                <div class="validator error" v-for="error of v$.productform.shippingcharge.$errors" :key="error.$uid">
                    {{ error.$message }}
                </div>
            </div>
        </div>
        <div class="row mb-0 ml-0 mt-0">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0 ml-5">
                <span style="font-weight: 700;">Net Amount:- {{ '$' +this.netamount}}</span>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
        </div>
        <div class="row infoDiv mb-0 ml-0 mt-2 pswddiv">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0 ml-5 d-flex flex-row">
                <router-link class="btn btn-default pull-left mr-3 cancelprofile" to="/vendor/req-quotes-list" style="font-size: 12px !important;">Cancel</router-link>
                <input type="submit" name="submitbtn" value="Submit" id="submitbtn" style="margin-right: -19px !important;" class="btn pull-right saveprofile" @click.prevent="addQuotationDetails">
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mb-0"></div>
        </div>
    </div>
</div>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import {
    useVuelidate
} from '@vuelidate/core';
import {
    required,
    helpers,
    minLength,
    maxLength,
    integer,
    email,
    sameAs
} from '@vuelidate/validators';
import {
    ref
} from 'vue';
export default {
    name: 'profductinfoComponent',
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
            todayDate:new Date(),
            chargesUnit:1,
            netamount:0,
            discountpercent:0,
            taxpercent:0,
            shipchargepercent:0,
            amountChargesunit: [{
                    'attr': 'Amount',
                    'value': 1
                },
                {
                    'attr': 'Percentage',
                    'value': 2
                }
            ],
            loader: false,
            count: 1,
            packagecount: 1,
            removefield: false,
            removepkgfield: false,
            itemquantity: '',
            pkgtype: '',
            totalpkg: '',
            usertype: '',
            pricingtags: [],
            packagingtags: [],
            unittags: [],
            packagedetails: ['Cardboard boxes', 'wooden cases', 'steel drums', 'containers'],
            iphonesrc: require("@/assets/img/iphone.jpg"),
            productform: {
                category: '',
                subcategory: '',
                name: '',
                description: '',
                unit: '',
                priceunit: '',
                qty: null,
                pakaging: '',
                shipping: '',
                estimated_date: new Date(),
                discount: null,
                tax: null,
                shippingcharge: null,
                countpkg: ''
            },
            FORM_REQUIRED_FIELD: 'This field is required',
            FORM_INTEGER_FIELD: 'Must be an integer',
            FORM_PACKAGE_FIELD: 'Please modify the number of items per box so that every box can contain equal number of products.',
            images: [],
            imgs: '',
            srcimage: process.env.VUE_APP_SET_PATH,
            storeimages: [],
            visibility: false,
            files: ref(''),
            categoryoptions: [],
            subcategoryoptions: [],
            products: [],
            unitsoptions: [],
            pricingoptions: ['whole_price_per_unit', 'min_order_qty', 'special_offer_deals'],
            packagingoptions: ['packaging_detail', 'ship_methods', 'estimated_delivery_time'],
            subcategory: '',
            pricelist: [],
            pkglist: [],
            estimatedtime: false,
            estimated_date: new Date(),
            requested_date: new Date(),
            cust_id: null,
            requiredtime: new Date(),
            categoryId: '',
            subCategoryId: '',
            productId: ''
        }
    },
    validations() {
        return {
            productform: {
                category: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                subcategory: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                name: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                description: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                unit: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                priceunit: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    priceAsFloat:helpers.withMessage(
                       'Price should be numeric',(value)=>{
                           const priceRegex = /^-?\d*(\.\d+)?$/;
                           return  priceRegex.test(value)
                        })
                    // integer
                },
                qty: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer
                },
                pakaging: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                // shipping: {
                //     required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                // },
                estimated_date: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                discount: {
                    // integer: helpers.withMessage(this.FORM_INTEGER_FIELD, integer),
                    discountAsFloat:helpers.withMessage('Discount should be numeric', (value)=>{
                        const discountRegex = /^-?\d*(\.\d+)?$/;
                        return discountRegex.test(value);
                    })
                },
                tax: {
                    // integer: helpers.withMessage(this.FORM_INTEGER_FIELD, integer),
                    taxAsFloat:helpers.withMessage('Tax should be numeric', (value)=>{
                        const taxRegex = /^-?\d*(\.\d+)?$/;
                        return taxRegex.test(value)
                    })
                },
                shippingcharge: {
                    // integer: helpers.withMessage(this.FORM_INTEGER_FIELD, integer),
                    shipAsFloat:helpers.withMessage('Shipping Charges should be numeric', (value)=>{
                        const shipchargeRegex = /^-?\d*(\.\d+)?$/;
                        return shipchargeRegex.test(value)
                    })
                },
                countpkg: {
                    integer: helpers.withMessage(this.FORM_PACKAGE_FIELD, integer)
                }
            },
        }
    },
    methods: {
        changeAmount(e){
         console.log('amt unit e-', e)
         if (e.value == 2){
            console.log('% here')
            this.discountpercent=(((this.productform.priceunit * this.productform.qty)*(this.productform.discount))/100).toFixed(2);
            this.taxpercent =(((this.productform.priceunit * this.productform.qty)*(this.productform.tax))/100).toFixed(2);
            this.shipchargepercent =(((this.productform.priceunit * this.productform.qty)*(this.productform.shippingcharge))/100).toFixed(2);; 
            if(this.chargesUnit==2){
                let val = ((this.productform.priceunit * this.productform.qty)+Number(this.taxpercent)+Number(this.shipchargepercent))- Number(this.discountpercent)
                this.netamount = isNaN(val)?0:(val).toFixed(2);
            }
            else{
                let val = ((this.productform.priceunit * this.productform.qty)+
                Number(this.productform.tax)+Number(this.productform.shippingcharge))-  Number(this.productform.discount);
                this.netamount = isNaN(val)?0:(val).toFixed(2);
            }
         }
         else{
            let val = ((this.productform.priceunit * this.productform.qty)+
                Number(this.productform.tax)+Number(this.productform.shippingcharge))-  Number(this.productform.discount);
                this.netamount = isNaN(val)?0:(val).toFixed(2);
         }
        },
        enterVal(e, type){
            console.log('d-', e.target.value)
            if(type =='discount'){
                this.discountpercent=((this.productform.priceunit * this.productform.qty)*(e.target.value))/100;
                if(this.chargesUnit==2){
                    let val  =((this.productform.priceunit * this.productform.qty)+Number(this.taxpercent)+Number(this.shipchargepercent))- Number(this.discountpercent)
                    this.netamount =  isNaN(val)?0:(val).toFixed(2);
                }
                else{
                    let val  =((this.productform.priceunit * this.productform.qty)+
                    Number(this.productform.tax)+Number(this.productform.shippingcharge))- Number(this.productform.discount)
                    this.netamount = isNaN(val)?0:(val).toFixed(2)
                }
            }
            if(type =='tax'){
                this.taxpercent=((this.productform.priceunit * this.productform.qty)*(e.target.value))/100; 
                if(this.chargesUnit==2){
                    let val  =((this.productform.priceunit * this.productform.qty)+Number(this.taxpercent)+Number(this.shipchargepercent))- Number(this.discountpercent);
                    this.netamount = isNaN(val)?0:(val).toFixed(2);
                }
                else{
                    let val  =((this.productform.priceunit * this.productform.qty)+
                    Number(this.productform.tax)+Number(this.productform.shippingcharge))- Number(this.productform.discount)
                    this.netamount = isNaN(val)?0:(val).toFixed(2);
                }
            }
            if(type =='shipcharge'){
                this.shipchargepercent=((this.productform.priceunit * this.productform.qty)*(e.target.value))/100; 
                if(this.chargesUnit==2){
                    let val  =((this.productform.priceunit * this.productform.qty)+Number(this.taxpercent)+Number(this.shipchargepercent))- Number(this.discountpercent)
                    this.netamount = isNaN(val)?0:(val).toFixed(2);
                }
                else{
                    let val  = ((this.productform.priceunit * this.productform.qty)+
                    Number(this.productform.tax)+Number(this.productform.shippingcharge))- Number( this.productform.discount)
                    this.netamount =isNaN(val)?0:(val).toFixed(2);
                }
            }
        },
        enterPrice(e){
            console.log('price-', e.target.value)
            this.discountpercent=(((e.target.value * this.productform.qty)*(this.productform.discount))/100).toFixed(2);
            this.taxpercent = (((this.productform.priceunit * this.productform.qty)*(this.productform.tax))/100).toFixed(2);
            this.shipchargepercent =(((this.productform.priceunit * this.productform.qty)*(this.productform.shippingcharge))/100).toFixed(2); 
            if(this.chargesUnit==2){
                let val  = ((this.productform.priceunit * this.productform.qty)+Number(this.taxpercent)+Number(this.shipchargepercent))- Number(this.discountpercent)
                this.netamount = isNaN(val)?0:(val).toFixed(2);
            }
            else{
                let val  = ((this.productform.priceunit * this.productform.qty)+
                Number(this.productform.tax)+Number(this.productform.shippingcharge))- Number(this.productform.discount)
                this.netamount = isNaN(val)?0:(val).toFixed(2);
            }
        },
        async fetchQuoteList() {
            let formData = new FormData();
            var token = localStorage.getItem("token");
            var loginid = localStorage.getItem('loginid');
            let quoteno = this.$route.query.id;
            formData.append('search_by_quote_id', quoteno);
            formData.append('categoryname', '');
            formData.append('product', '');
            formData.append('reqdate', '');
            formData.append('user_id', loginid);
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/get-reqquote', formData, {
                        headers
                    })
                .then(response => {
                    this.items = response.data.data;

                    var itemArray = [];
                    var unitArray = [];
                    var baseUnitAttr = [];
                    this.items = this.items.map((el) => {
                        this.productform.category =
                            el.quoteproductname[0].quotesubcategoryname[0].categoryname[0].name;
                        this.productform.subcategory =
                            el.quoteproductname[0].quotesubcategoryname[0].name;
                        this.productform.name = el.quoteproductname[0].name;
                        if (el.unit_of_measurement != undefined) {
                            var unitattr = el.unit_of_measurement.split(',');
                            Object.values(unitattr).forEach(el => {
                                var attr = el.split('-');
                                unitArray.push({
                                    'attr': attr[1],
                                    'value': el
                                });
                            });
                            if (unitArray.length >= 1) {
                                this.productform.unit = unitArray;
                                if (el.quoteproductname[0].unit_attributes != undefined) {
                                    var base_unit_attr = el.quoteproductname[0].unit_attributes.split(',');
                                    Object.values(base_unit_attr).forEach(el => {
                                        var attr = el.split('-');
                                        baseUnitAttr.push({
                                            'attr': attr[1],
                                            'value': el
                                        });
                                    });
                                    if (unitArray.length >= 1) {
                                        Object.values(baseUnitAttr).forEach(item => {
                                            Object.values(this.unitsoptions).forEach(el => {
                                                if (el.attr === item.attr) {
                                                    if (!itemArray.includes(el)) {
                                                        itemArray.push(el);
                                                    }
                                                }
                                            });
                                        });
                                    }
                                    this.unitsoptions = itemArray;
                                }
                            }
                            this.productform.unit = el.unit_of_measurement;
                        }
                        this.categoryId = el.quoteproductname[0].quotesubcategoryname[0].categoryname[0].id;
                        this.subCategoryId = el.quoteproductname[0].quotesubcategoryname[0].id;
                        this.productId = el.quoteproductname[0].id;
                        this.cust_id = el.customerid;
                        this.productform.qty = el.qty;
                        this.requiredtime = el.created_at.split('T')[0];
                        this.productform.estimated_date = new Date(el.requiredtime);
                        return true;
                    });
                })
                .catch(err => {});
        },
        async addQuotationDetails() {
            const result = await this.v$.productform.$validate();
            if (result == false) {
                return;
            }
            let token = localStorage.getItem('token');
            let supp_id = localStorage.getItem('loginid');
            let formData = new FormData();
            let quote_id = this.$route.query.id;
            let estimated_date = document.getElementById('estimateattr').value;
            formData.append('unit_of_measurement[]', this.productform.unit);
            formData.append('request_quote_id', quote_id);
            formData.append('suplierid', supp_id);
            formData.append('customer_id', this.cust_id);
            formData.append('category_id', this.categoryId);
            formData.append('subcategory_id', this.subCategoryId);
            formData.append('product_id', this.productId);
            formData.append('description', this.productform.description);
            formData.append('requiredtime', this.requiredtime);
            formData.append('whole_price_per_unit', this.productform.priceunit);
            formData.append('min_order_qty', this.productform.qty);
            formData.append('qty_per_packet', this.itemquantity);
            formData.append('packaging_detail', this.productform.pakaging);
            formData.append('ship_methods', this.productform.shipping);
            formData.append('estimated_delivery_time', estimated_date);
            formData.append('tax', this.productform.tax);
            formData.append('discount', this.productform.discount);
            formData.append('shipping', this.productform.shippingcharge);
            this.loader = true;
            this.$swal({
                title: 'Do you want to submit this quotation?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true,
                customClass: 'warningswal'
            }).then((result) => {
                if (result.value) {
                    this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/storereqresp', formData, {
                            headers: {
                                'Authorization': 'Bearer ' + token,
                                'Content-Type': 'multipart/form-data',
                            }
                        })
                        .then((response) => {
                            this.loader = false
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Quotation submitted! Check your email for confirmation details.',
                                showConfirmButton: true,
                                timer: 5000
                            }).then(() => {
                                this.$router.push({
                                    name: 'respquotes'
                                });
                            })
                        }).catch((error) => {});
                } else {
                    this.loader = false;
                }
            });
        },
        allunitmeasure() {
            var array = [];
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/getmeasurement', {
                    headers
                })
                .then(response => {
                    var unitArray = [];
                    Object.values(response.data.data).forEach(value => {
                        var unitattr = value.attribute.split(',');
                        Object.values(unitattr).forEach(el => {
                            var attr = el.split('-');
                            unitArray.push({
                                'attr': attr[1],
                                'value': el
                            });
                        });
                    });
                    this.unitsoptions = unitArray;
                })
                .catch(err => {});
        },
        pkgChange(e) {
            var val = e.target.value;
            if (val == 'Cardboard boxes') {
                this.pkgtype = 'boxes';
                this.totalpkg = 'boxes';
            } else if (val == 'wooden cases') {
                this.pkgtype = 'cases';
                this.totalpkg = 'cases';
            } else if (val == 'steel drums') {
                this.pkgtype = 'drums';
                this.totalpkg = 'drums';
            } else {
                this.pkgtype = 'container';
                this.totalpkg = 'container';
            }
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.quoteid = this.$route.query.quoteid;
        this.allunitmeasure();
        this.fetchQuoteList();
    }
};
</script>

<style lang="scss" scoped>
body {
    font-family: 'Quicksand', sans-serif;
}

#priceunitattr {
    padding-left: 2.5rem !important;
}

.pricingDiv {
    top: 0px !important;
    position: absolute;
    padding: 1rem;
}

.pricingDiv span>i {
    color: #aaa8ab !important;
}

.unitdropdownIcon {
    right: 30px !important;
}

.singleSelectdropdown {
    border-radius: 15px !important;
}
.amountChangedropdown{
    height: 17px !important;
    border-radius: 15px !important;
}
.amtdownarrow{
    right: 42px !important;
    top: 8px !important;
    border-width: 5px 4px 0 5px !important;
}


.changeCharges {
    right: 15px;
    border: 1px #cdcdcd;
    height: 39px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: #cdcdcd;
    padding: 13px;
    cursor: pointer;
}

.changeCharges span>i {
    color: #000 !important;
}

.chargesCountDiv {
    display: inline-flex;
}

.chargecountinp {
    width: 50% !important;
}

.chargecountinp:nth-child(1) {
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
}

.chargecountinp:last-of-type {
    border-left: 0;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
}
</style>
