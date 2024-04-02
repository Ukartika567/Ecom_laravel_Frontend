<template>
<LoaderComponent v-if="this.loader"/>
<div class="homebgContainer">
    <div class="container homeContainer" style="padding: 7rem 0rem 5rem 0rem;">
        <div class="row">
            <div class="col-md-12 mt-0">
                <div class="form">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 homeCarouselContainer leftSideCardContainer">
                            <div class="contentDiv">
                                <h3>Request Quote</h3>
                                <div class="cardContent">
                                    <div class="col-md-12">
                                        <div class="row mb-0">
                                            <div class="col-md-4  mb-5">
                                                <SingleChipsDropdown v-model="form.categoryget" 
                                                :options="this.categoryoptions" @click.stop optionLabel="title" 
                                                filter class="select select-sm proinpfield w-full md:w-20rem 
                                                groupmultiselect singleSelectdropdown" optionValue="id"  id="catDropdown"
                                                style="margin: 1px !important;" @change="catChange($event)" />
                                                <div class="select__arrow dropdownIcom"></div>
                                                <label for="catDropdown">Category</label>
                                                <div v-if="this.showerror">
                                                    <div class="validator error" v-for="error of v$.form.categoryget.$errors" :key="error.$uid">
                                                        {{ error.$message }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-5 mt-0" id="subCatDiv">
                                                <SingleChipsDropdown v-model="form.subcategoryget" 
                                                :options="this.subcategoryoptions" @click.stop optionLabel="title" 
                                                filter class="select select-sm proinpfield w-full md:w-20rem 
                                                groupmultiselect singleSelectdropdown" optionValue="value"  id="subCatDropdown"
                                                style="margin: 1px !important;" @change="subChange($event)" />
                                                <div class="select__arrow dropdownIcom"></div>
                                                <label for="subCatDropdown">SubCategory</label>
                                                <div v-if="this.showerror">
                                                    <div class="validator error" v-for="error of v$.form.subcategoryget.$errors" :key="error.$uid">
                                                    {{ error.$message }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-5 mt-0">
                                                <SingleChipsDropdown v-model="form.product" 
                                                :options="this.productoptions" @click.stop optionLabel="name" 
                                                filter class="select select-sm proinpfield w-full md:w-20rem 
                                                groupmultiselect singleSelectdropdown" optionValue="id"  id="productDropdown"
                                                style="margin: 1px !important;" />
                                                <div class="select__arrow dropdownIcom"></div>
                                                <label for="productDropdown">Product Name</label>
                                                <div v-if="this.showerror">
                                                    <div class="validator error" v-for="error of v$.form.product.$errors" :key="error.$uid">
                                                        {{ error.$message }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-0 mt-0">
                                            <div class="col-md-12 col-lg-12 d-flex flex-row mb-5" style="margin-left: -11px;">
                                                <div class="col-md-3 mt-5">
                                                    <div class="select select-sm dropdownDiv circularfield">
                                                        <select name="qtyDropdown" id="qtyDropdown" class="quantity" v-model="form.val" style="width:100%;">
                                                            <option :value="qty" v-for="qty in quantityoptions" :key="qty">{{ qty }}</option>
                                                        </select>
                                                        <label for="qtyDropdown">Selectval</label>
                                                        <div v-if="this.showerror">
                                                            <div class="validator error" v-for="error of v$.form.val.$errors" :key="error.$uid">
                                                                {{ error.$message }}
                                                            </div>
                                                        </div>
                                                        <div class="select__arrow dropdownIcom"></div>
                                                    </div>
                                                </div>
                                                <div class="mt-5">
                                                    <span>X</span>
                                                </div>
                                                <div class="col-md-3 mt-5">
                                                    <input name="quantity" v-model="form.quantity" id="quantity" class="input-control circularfield" />
                                                    <label for="quantity" class="form-label">Quantity</label>
                                                    <div v-if="this.showerror">
                                                        <div class="validator error" v-for="error of v$.form.quantity.$errors" :key="error.$uid">
                                                            {{ error.$message }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-5">
                                                    <span style="font-size:15px">=</span>
                                                </div>
                                                <div class="col-md-3 mt-5">
                                                    <input name="quantity" :value="`${this.form.val * this.form.quantity}`" id="totalquantity" class="input-control circularfield" />
                                                    <label for="totalquantity" class="form-label">Total</label>
                                                </div>
                                                <div class="col-md-3 mt-5">
                                                    <SingleChipsDropdown 
                                                    v-model="form.unit" :options="this.unitsoptions"
                                                    @click.stop optionLabel="attr" 
                                                    filter class="select select-sm proinpfield w-full
                                                    md:w-20rem groupmultiselect singleSelectdropdown" 
                                                    style="margin: 1px !important;" 
                                                    optionValue="value"
                                                    />
                                                    <div class="select__arrow  unitdropdownIcon"></div>
                                                    <label for="productDropdown">Unit</label>
                                                    <div class="validator error" v-for="error of v$.form.unit.$errors" :key="error.$uid">
                                                        {{ error.$message }}
                                                    </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="row mb-0 mt-0">
                                            <div class="col-md-3">
                                            </div>
                                            <div class="col-md-6 mb-0 datepickerDiv mt-2 ml-0">
                                                <Datepicker v-model="form.picked" :locale="locale" :upperLimit="to" :lowerLimit="from" :clearable="true" id="datepick" class="inputField circularfield" />
                                                <label for="datepick" class="form-label">Expected Date</label>
                                                <div v-if="this.showerror">
                                                    <div class="validator error" v-for="error of v$.form.picked.$errors" :key="error.$uid">
                                                        {{ error.$message }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ps-form__submit text-center mb-0 m-t-40 col-12 controlBtnDiv">
                                        <div class="buttonDiv row">
                                            <div class="col-md-6">
                                                <router-link to="/">
                                                    <span class="icon-arrow-left backarrow ml-0 mt-2">Back</span>
                                                </router-link>
                                            </div>
                                            <div class="col-md-6 d-flex">
                                                <input type="submit" name="cancelquote" 
                                                value="Cancel" id="cancelquote" 
                                                class="btn homeCreatebtn pull-center mr-3 cancelbtn"
                                                 @click.prevent="CancelQuotes">
                                                <input type="submit" name="createquote" value="Request New Quote" 
                                                id="createquote" class="btn homeCreatebtn pull-center"
                                                @click.prevent="SubmitQuotes">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 homeCarouselContainer rightSideCardContainer">
                            <div class="contentDiv categoryItemsDiv">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="snpt-row-top snpt-row-bottom-hc">
        <div class="categoryDiv text-center">
            <div class="layout-cols sls m-t-25 layout-cols-md-block">
                <div class="layout-col-left">
                    <h1 style="text-align: justify;">Top {{this.supplerList.length}} results for product {{ this.productName}}</h1>
                    <div class="m-b-25"></div>
                    <div id="sl_441468" class="sl" v-for="supplier in this.supplerList" :key="supplier.refid">
                        <div class="sl-content">
                            <div class="sl-media sd-hide">
                                <p>Supplier ID - {{ supplier.refid }}</p>
                                <p>Supplier Rating - {{ supplier.rating}}</p>
                                <p>Minimum Order Quantity - {{ supplier.min_order}}</p>
                                <p>Maximum Order Quantity - {{ supplier.max_order}}</p>
                            </div>
                        </div>
                        <div class="sl-bottom">
                            <div class="sl-review text-muted text-small">
                                <div class="sl-review-info clearfix">
                                </div>
                            </div>
                            <div class="sl-request-quote">
                                <button type="button" @click.prevent="showQuoteDialog('Supplier',this.form.categoryget, 
                                this.form.subcategoryget, this.form.product, supplier.refid )" class="lnkBEE btn btn-default-outline btn-sm block" style="font-size:15px;">
                                    Request a Quote</button>
                            </div>
                        </div>
                        <div class="sl-info" data-address="Constantine, Pietersen street, <br/>Hospital Hill, Johannesburg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<RequestQuoteModal :visible="showModal" :selectedSubmenu="this.selectedsubmenu" :catid="this.catid" :subcatid="this.subcatid" :prodid="this.prodid" :supplierid="this.supplierid" :mode="this.mode"
@close="this.showModal = false" />
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import RequestQuoteModal from '@/components/ModalsComponent/RequestQuoteModal.vue';
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
export default {
    name: 'SupplierSpecificComponent',
    components: {RequestQuoteModal, LoaderComponent},
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            unitsoptions: [],
            categoryoptions: [],
            subcategoryoptions: [],
            productoptions: [],
            quantityoptions: [25, 50, 100, 1000, 10000],
            form: {
                categoryget: '',
                subcategoryget: '',
                quantity: 0,
                val: 0,
                product: '',
                picked: new Date(),
                unit: []
            },
            usertype: '',
            FORM_REQUIRED_FIELD: 'This field is required',
            showModal: false,
            selectedsubmenu: '',
            supplerList:[],
            productName:'',
            catid: '',
            subcatid: '',
            prodid:'',
            supplierid:'',
            mode:'',
            rating:[],
            orderrating:[],
            loader:false,
            showerror:false
        }
    },
    validations() {
        return {
            form: {
                categoryget: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                subcategoryget: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                val: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                quantity: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required),
                    integer
                },
                product: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                picked: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                },
                unit: {
                    required: helpers.withMessage(this.FORM_REQUIRED_FIELD, required)
                }
            }
        }
    },
    methods: {
        requestnewquote() {
            this.$router.push({
                path: '/buyer/create-new-quote'
            })
        },
        requestNewQuote() {
            this.$router.push({
                path: '/buyer/create-new-quote',
                params: {
                    'title': 'test title'
                },
            });
        },
        showQuoteDialog(e, catid, subcatid,prodid, supplierid ) {
            var dataArry = [];
            if(!localStorage.getItem('loginid')){
                dataArry.push({
                    catid:this.$route.query.catid,
                    subcatid:this.$route.query.subcatid,
                    prodid:this.$route.query.prodid,
                    val:0,
                    quantity:0,
                    total:0,
                    unittags:''
                });
                localStorage.setItem('requestQuoteArray', JSON.stringify(dataArry));
                this.$swal({
                    title: 'Please login for supplier specific request',
                    type: 'info',
                    showCancelButton: true,
                    confirmButtonText: 'Ok',
                    cancelButtonText: 'Cancel',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                })
                .then((result)=>{
                    if (result.value) {
                        this.$router.push({
                            'path':'/login',
                            query:{
                                flag:'requestquote'
                            }
                        });
                    }
                })
            }else{
                this.showModal = true;
                this.selectedsubmenu = e;
                this.catid = catid;
                this.subcatid = subcatid;
                this.prodid = prodid; 
                this.supplierid = supplierid;
                this.mode = 'Send quote to';
            }
        },
        async SubmitQuotes() {
            const result = await this.v$.form.$validate();
            if (result == false) {
                this.showerror = true;
                return
            }
            var loginId = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            var date = document.getElementById('datepick').value;
            var quantity = document.getElementById('totalquantity').value;

            let formData = new FormData();
            formData.append('product', this.form.product);
            formData.append('qty', quantity);
            formData.append('customerid', loginId);
            formData.append('requiredtime', date);
            formData.append('category',  this.form.categoryget);
            formData.append('subcategory', this.form.subcategoryget);
            formData.append('companyname', 'Wholesale Express');
            formData.append('unit_of_measurement[]', this.form.unit);
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/reqquote`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Successfully requested a quote and send mail to supplier and admin!',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                        this.loader = false;
                        this.form.val = "";
                        this.form.quantity = "";
                        this.form.picked = "";
                        this.showerror = false;
                        if(localStorage.getItem('requestQuoteArray') != ''){
                                localStorage.removeItem('requestQuoteArray');
                            }
                            this.$router.push({
                                'name':'buyerdashboard', 
                            });
                        });
                    }
                }).catch((error) => {
                    var dataArry = [];
                    if(error.response){
                        if(error.response.data.status == 'Unauthorized'){
                            dataArry.push({
                                catid:this.$route.query.catid,
                                subcatid:this.$route.query.subcatid,
                                prodid:this.$route.query.prodid,
                                val:  this.form.val,
                                quantity:this.form.quantity,
                                total:quantity,
                                unittags:this.form.unit,
                                date:date
                            });
                            localStorage.setItem('requestQuoteArray', JSON.stringify(dataArry));
                            this.$router.push({
                                'path':'/login',
                                query:{
                                    flag:'requestquote'
                                }
                            });
                        }
                        if (error.response.data.status === 'Token is Expired' && (error.response.status == 401 || error.response.status == 404)) {
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
        async allcategory() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            var data = [] ;
            if(this.$route.query.flag){
                data = JSON.parse(localStorage.getItem('requestQuoteArray'))
            }
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/categorylist', {
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        if(data.length==0?this.$route.query.catid:data[0].catid == value.id){
                            this.form.categoryget = value.id;
                        }
                        array.push({
                            'id': value.id,
                            "title": value.name
                        });
                    });
                    this.categoryoptions = array;
                })
                .catch(err => {
                });
        },
        async allsubcategory() {
            var array = [];
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            var data = [] ;
            if(this.$route.query.flag){
                data = JSON.parse(localStorage.getItem('requestQuoteArray'))
            }
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/subcategorylist', {
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        if(data.length==0?this.$route.query.subcatid:data[0].subcatid == value.id){
                            this.form.subcategoryget = value.id;
                        }
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.subcategoryoptions = array;
                })
                .catch(err => {
                });
        },
        async allproducts() {
            var array = [];
            var subcatid ;
            if(this.$route.query.subcatid){
                subcatid = this.$route.query.subcatid;
            }
            var data = [] ;
            if(this.$route.query.flag){
                data = JSON.parse(localStorage.getItem('requestQuoteArray'));
                subcatid = data[0].subcatid;
            }
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/productlist/${subcatid}`, {
                })
                .then(response => {
                    var unit;
                    var unitArray = [];
                    Object.values(response.data.data).forEach(value => {
                        if(data.length==0?this.$route.query.prodid==value.id:data[0].prodid == value.id){
                            this.form.product = value.id;
                            this.productName = value.name;
                            if (value.unit_attributes) {
                                unit = value.unit_attributes.split(',');
                            }
                            if (unit && unit.length > 0) {
                                Object.values(unit).forEach(ele => {
                                    var attr = ele.split('-');
                                    unitArray.push({
                                        'attr': attr[1],
                                        'value': ele
                                    });
                                });
                            }
                            this.unitsoptions = unitArray;
                        }
                        array.push({
                            'id': value.id,
                            "name": value.name
                        });
                    });
                    this.productoptions = [];
                    this.productoptions = array;

                })
                .catch(err => {
                });
        },
        async searchSupplier() {
            let token = localStorage.getItem('token');
            let formData = new FormData();
            var prod_id;
            if(this.$route.query.prodid){
                prod_id = this.$route.query.prodid;
            }
            var data = [] ;
            if(this.$route.query.flag){
                data = JSON.parse(localStorage.getItem('requestQuoteArray'));
                prod_id = data[0].prodid;
            }

            formData.append('prod_id', prod_id);
            this.loader = true;
            await this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/listSupplier`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
                    this.loader = false;
                    var data = response.data.data;
                    this.supplerList=[];
                    data = data.map((ele)=>{
                        ele.map((el)=>{
                        var totalrat;
                        if(el.usersdata[0].orderrating.length>0){
                            el.usersdata[0].orderrating.map((val)=>{
                                totalrat = Math.round(((Number(val.price_rating)+
                                Number(val.quality_rating)+Number(val.time_rating))/3).toFixed());
                            })
                            if(el.usersdata[0].orderrating.length>=2){
                                totalrat = Number(((totalrat / (el.usersdata[0].orderrating.length))).toFixed())
                            }
                            if(el.product_info.length>0){
                                    this.supplerList.push({
                                        'refid':el.supplier_id,
                                        'rating':el.usersdata[0].userprofile.profile_rating + totalrat,
                                        'min_order':el.product_info[0].min_order_qty,
                                        'max_order':el.product_info[0].max_order_qty,
                                    });
                                }
                                else{
                                    this.supplerList.push({
                                        'refid':el.supplier_id,
                                        'rating':el.usersdata[0].userprofile.profile_rating + totalrat,
                                        'min_order':0,
                                        'max_order':0
                                    });
                                }
                        }
                        else{
                            if(el.product_info.length>0){
                                this.supplerList.push({
                                'refid':el.supplier_id,
                                'rating':0,
                                'min_order':el.product_info[0].min_order_qty,
                                'max_order':el.product_info[0].max_order_qty
                                })
                            }else{
                                this.supplerList.push({
                                    'refid':el.supplier_id,
                                    'rating':0,
                                    'min_order':0,
                                    'max_order':0
                                })
                            }
                        }
                    });
                    });
                }).catch((error) => {
                });
        },
        catChange(e) {
            var array = [];
            let catid = e.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/catsubdetails/${catid}`, {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.subcategoryoptions = [];
                    this.subcategoryoptions = array;
                })
                .catch(err => {
                });
        },
        subChange(e) {
            var array = [];
            let subcatid = e.value;
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            };
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/productdetails/${subcatid}`, {
                    headers
                })
                .then(response => {
                    Object.values(response.data.data).forEach(value => {
                        array.push({
                            'value': value.id,
                            "title": value.name
                        });
                    });
                    this.productoptions = [];
                    this.productoptions = array;
                })
                .catch(err => {
                });
        },
        async getsupplierRating(supp_id){
            var token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('user_id', supp_id);
            await this.axios.post(process.env.VUE_APP_API_ENDPOINT + '/getsupplier_rating',formData,{
                headers : {
                    'Authorization':'Bearer' + token,
                    'Content-Type':'multipart/form-data'
                }
            })
            .then((response)=>{
                this.rating = [];
                var data = response.data.data;
                for(var i=0; i<data.length; i++){
                    var rat = ((Number(data[i][0].price_rating)+Number(data[i][0].quality_rating)+Number(data[i][0].time_rating))/3).toFixed(1);
                    this.rating.push(rat);
                }
                var sum = 0;
                for(var k=0; k<this.rating.length; k++){
                    sum = sum + Number(this.rating[k]);
                }
                sum = sum / this.rating.length
            })
            .catch((error)=>{
            })
        }
    },
    mounted() {
        this.allcategory();
        this.allsubcategory();
        this.allproducts();
        this.searchSupplier();
        var data = [] ;
        if(this.$route.query.flag){
            data = JSON.parse(localStorage.getItem('requestQuoteArray'));
            this.form.val = data[0].val;
            this.form.quantity = data[0].quantity;
            document.getElementById('totalquantity').value = data[0].total;
            var unitArray = [];
            var itemArray = [];
            var unitattr = data[0].unittags.split(',');
            Object.values(unitattr).forEach(el => {
                var attr = el.split('-');
                unitArray.push({
                    'attr': attr[1],
                    'value': el
                });
            });

            if (unitArray.length >= 1) {
                Object.values(unitArray).forEach(item => {
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
            this.form.unit = data[0].unittags;

        }
    }
};
</script>

<style lang="scss" scoped>
.prodlabel {
    background: transparent !important;
}

.sl .sl-media {
    text-align: start;
    padding-left: 5px;
}

.sl .sl-content {
    flex-direction: column;
}

.cancelBtn {
    background-color: #222 !important;
    color: #fff !important;
}

.customLabel {
    background: #baf9f9 !important;
}

.datepickerDiv .v3dp__datepicker {
    background-color: #ffffff !important;
}

.cardContent {
    max-width: 560px;
    min-height: 520px;
    background-color: #ffffff;
    padding: 40px;
    overflow: hidden;
}

.homeCarouselContainer .cardContent:after {
    border: none !important;
}

.homebgContainer {
    position: relative;
    margin-top: 80px;
    background: #e6e6e6;
    height: 690px !important;
}

.homebgContainer:after {
    width: 35% !important;
}
.cancelbtn:hover{
    color: #0a0a0a !important;
    background-color: #dcdede !important;
    border-color: #ffffff !important;
    box-shadow: 0 6px 12px rgb(255 255 255 / 30%);
}
.select select:disabled{
    opacity: 2.5 !important;
}
.leftSideCardContainer .contentDiv{
    padding: 0px !important;
}
.buttonDiv{
    margin-bottom: 0px !important;
    padding-top: 15rem;
}
.unitdropdownIcon{
    right: 24px !important;
}
.dropdownIcom{
    top: 15px !important;
    right: 25px !important;
}
</style>
