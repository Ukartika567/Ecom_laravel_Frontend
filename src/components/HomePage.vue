<template>
<LoaderComponent v-if="this.loader" />
<div class="homebgContainer">
    <div class="container homeContainer">
        <div class="row">
            <div class="col-md-12 mt-0">
                <div class="form">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 homeCarouselContainer leftSideCardContainer">
                            <div class="contentDiv">
                                <div class="cardContent">
                                    <span class="HeadText">Popular Items</span><br>
                                    <p>These are the popular items.<br> You can explore it & request new quote any for item.</p>
                                    <div class="widget-footer clearfix">
                                        <input type="submit" name="createquote" value="Request New Quote" 
                                        id="createquote" class="btn homeCreatebtn pull-center" @click.prevent="requestquoteDailogue('bybutton')">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 homeCarouselContainer rightSideCardContainer">
                            <div class="contentDiv categoryItemsDiv">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <swiper :slides-per-view="1" :spaceBetween="30" :grid="{ rows: 1 }"
                                         :autoplay="{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }" :pagination="{
                                                clickable: true,
                                            }" :navigation="true" :modules="modules" class="mySwiper">
                                            <swiper-slide v-for="i in items" :key="i">
                                                <div class="content swalImageDiv" @click.prevent="requestquoteDailogue('byswalitem', i.id)">
                                                    <img class="img-responsive careouselImg" :src="i.src" :alt="i.alt">
                                                </div>
                                            </swiper-slide>
                                        </swiper>
                                    </div>
                                </div>
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
            <h2>Our Categories</h2>
            <div class="border2">
                <div class="row">
                    <div class="col-md-5 pr-0">
                        <div class="line1" style="color:#016d84;"></div>
                    </div>
                    <div class="col-md-2">
                        <div class="circle1" style="color:#016d84;"></div>
                    </div>
                    <div class="col-md-5 pl-0">
                        <div class="line1" style="color:#016d84;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sn_h_tabs" class="m-t-25 ui-tabs-scroll ui-tabs ui-corner-all 
                ui-widget ui-widget-content categorytabs">
                <v-tabs
                v-model="tab"
                color="deep-purple-accent-4"
                align-tabs="center"
                >
                <v-tab :value="cat.id" v-for="cat in this.catSubcategories" 
                :key="cat.id">{{ cat.name }}</v-tab>
                </v-tabs>
                <v-window v-model="tab">
                <v-window-item
                v-for="cat in this.catSubcategories" :key="cat.id"
                :value="cat.id"
                >
                <div class="sn-h-tab ui-tabs-panel ui-corner-bottom ui-widget-content mt-8">
                    <v-row>
                        <div class="col-6 col-sm-6 col-md-3 col-lg-3 imgDiv" v-for="subcat in cat.subcate_details" 
                            :key="subcat.id">
                            <router-link to="#" 
                            class="more-service" @click.prevent="showDialog('Product',subcat.id, subcat.category_id)">
                                <img class="img-responsive" 
                                :src="`${ this.srcimage + 'subcategoryImages/'+ subcat.subcategoryImage}`" 
                                :alt="subcat.name" style="height: 145px;">
                                <span>{{ subcat.name }}</span>
                            </router-link>
                        </div>
                    </v-row>
                </div>
            </v-window-item>
            </v-window>
        </div>
    </div>
</div>
<div class="bg-white featurebgContainer">
    <div class="container">
        <h2 class="m-t-50 featureText">Why Choose Us?</h2>
        <div class="border2">
            <div class="row">
                <div class="col-md-5 pr-0">
                    <div class="line1" style="color:#fff"></div>
                </div>
                <div class="col-md-2">
                    <div class="circle1" style="color:#fff"></div>
                </div>
                <div class="col-md-5 pl-0">
                    <div class="line1" style="color:#fff"></div>
                </div>
            </div>
        </div>
        <div class="row gutter-lg mt-10">
            <div class="col-nd-4 col-sd-12 sd-m-b-15">
                <div class="box-featured featuredbox">
                    <div class="iconDiv">
                        <font-awesome-icon :icon="['fasl', 'pencil']" />
                    </div>
                    <h3 class="m-t-25 m-b-25">Free to use</h3>
                    <span class="text-thin">You never pay to use Ecommerce. Just tell us what you need done and we'll get
                        you free quotes.</span>
                </div>
            </div>
            <div class="col-nd-4 col-sd-12 sd-m-b-15">
                <div class="box-featured featuredbox">
                    <div class="iconDiv">
                        <font-awesome-icon :icon="['fas', 'handshake']" />
                    </div>
                    <h3 class="m-t-25 m-b-25">150+ Suppliers</h3>
                    <span class="text-thin">We have 150+ suppliers ,who is provided best product on delivery timeline.You never get any negative result
                        to use Ecommerce. Just tell us what you need done and we'll get you free quotes.</span>
                </div>
            </div>
            <div class="col-nd-4 col-sd-12 sd-m-b-15">
                <div class="box-featured featuredbox">
                    <div class="iconDiv">
                        <font-awesome-icon :icon="['fasr', 'file-invoice-dollar']" />
                    </div>
                    <h3 class="m-t-25 m-b-25">Get estimates</h3>
                    <span class="text-thin">You'll get multiple estimates from supplier and you can easily negotiate before approved.</span>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</div>
<CatSubCategoryModal  v-if="this.showModal" :visible="showModal" 
:selectedSubmenu="this.selectedsubmenu" 
:catid="this.catid" :subcatid="this.subcatid" :mode="this.mode"
 @close="this.showModal = false" />
<RequestQuoteModal :visible="requestquote"  v-if="this.requestquote"
:selectedSubmenu="this.selectedsubmenu" 
:mode="this.mode" @close="this.requestquote = false" />
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import CatSubCategoryModal from '@/components/ModalsComponent/CatSubCategoryModal.vue';
import RequestQuoteModal from '@/components/ModalsComponent/RequestQuoteModal.vue'
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import {
    ref
} from 'vue';
import {
    Autoplay,
    Pagination,
    Navigation,
    Mousewheel,
    Grid
} from 'swiper';
export default {
    components: {
        Swiper,
        SwiperSlide,
        CatSubCategoryModal,
        RequestQuoteModal,
        LoaderComponent
    },
    props:{
        options: {
                type: Object,
                required: false,
                default: () => ({
                    useUrlFragment: true,
                    defaultTabHash: null,
                    disableScrollBehavior: false,
                }),
            },
            navItemActiveClass: {
  type: String,
  default: 'is-active'
},
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Grid, Navigation],
        }
    },
    data() {
        return {
            loader:false,
            requestquote:false,
            tab: 0,
            srcimage: process.env.VUE_APP_SET_PATH,
            items:[],
            catSubcategories: [],
            firstCatSubcategories:[],
            showModal:false,
            catid: '',
            subcatid: '',
            mode:'',
            subCategoryDetails:[]
        }
    },
    methods: {
        requestquoteDailogue(e, categoryid){
            if(e=='bybutton'){
                this.$router.push({
                    'path':'/buyer/create-new-quote',
                    query:{
                        flag:'requestquote-by-home'
                    }
                });
            }else{
                this.$router.push({
                    'path':'/buyer/create-new-quote',
                    query:{
                        catid:categoryid,
                        flag:'requestquote-by-home'
                    }
                });
            }
        },
        showDialog(e,subcatid, catid){
            this.showModal = true;
            this.selectedsubmenu = e;
            this.catid = catid;
            this.subcatid = subcatid; 
            this.mode = 'Select';
        },
        tabClicked(selectedTab){
        },
        tabChanged (selectedTab) {
            selectedTab.tab.isActive = selectedTab.tab.name;
        },
        selectedTab(selectedTab) {
            this.$emit('tabChanged', selectedTab);
        },
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
        async getAllCatSubCat() {
            this.loader = true;
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/allCatlistProd', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((response) => {
                    this.loader = false;
                    this.catSubcategories = response.data.data;
                    this.subCategoryDetails=[];
                    for(var i=0; i<this.catSubcategories.length; i++){
                        this.subCategoryDetails.push(this.catSubcategories[i].subcate_details);
                    }
                    var array = [];
                    Object.values(this.catSubcategories).forEach(el=>{
                        if(array.length>10){
                            return;
                        }
                        array.push({
                            id:el.id,
                            src:this.srcimage + 'categoryImages/' + el.categoryImage,
                            alt:el.categoryImage
                        }); 
                    });
                    this.items = array;
                })
                .catch((error) => {
                })
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
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/reqquote`, formData, {
                    headers: {
                        'Authorization': 'Bearer' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((response) => {
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
                    })
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
                    }
                });
        },
    },
    mounted() {
        this.getAllCatSubCat();
    }
};
</script>

<style lang="scss" scoped>
</style>

