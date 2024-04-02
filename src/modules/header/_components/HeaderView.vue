<template lang="html">
<div class="headermaindiv col-sm-12">
    <div class="container">
        <div class="row w-100">
            <div class=" col-sm-12 col-md-6 col-lg-6">
                <router-link to="#" class="loggedInUser"><span class="">Call Us:</span>800-345-6789 121 | <span>Email:</span> xyz@ecom.com</router-link>
            </div>
            <div class=" col-sm-12 col-md-6 col-lg-6">
                <div class="sociallink text-right">
                    <ul class="nav nav-inline">
                        <li>
                            <router-link to="#" aria-label="facebook">
                                <font-awesome-icon :icon="['fab', 'square-facebook']" />
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" aria-label="twitter">
                                <font-awesome-icon :icon="['fab', 'square-twitter']" />
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#" aria-label="linkedin">
                                <font-awesome-icon :icon="['fab', 'linkedin']" />
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="menu-bar ">
    <div class="container">
        <nav class="headerSearchDiv">
            <div class="menu-brand ">
                <router-link to="/" class="Logo">
                    <img :src="src" alt="Ecommerce" class="sd-hide">
                </router-link>
            </div>
            <ul id="nav-search" class="nav searchBoxNav" style="display: block;">
                <div class="input-group input-group-unstyled">
                    <AutoComplete v-model="searchVal" class="input-control inputField 
                    searchCategory" :suggestions="items" optionLabel="name" @complete="search" placeholder="Search Items" />
                    <span class="input-group-addon searchButton" @click.prevent="reqQuoteforSearchData">
                        Request for Quote
                    </span>
                </div>
            </ul>
            <ul class="nav float-right">
                <li class="sd-hide">
                    <header-actions />
                </li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script>
import HeaderActions from '@/modules/headeractions';
export default {
    name: 'HeaderDefault',
    components: {
        HeaderActions,
    },
    data() {
        return {
            src: require('@/assets/img/ecom-logo.png'),
            tokencheck: '',
            usertype: '',
            searchVal: '',
            items: [],
            catSubProds: [],
            dataname: ''
        }
    },
    methods: {
        search(event) {
            if (!event.query.trim().length) {
                this.items = [...this.catSubProds];
            } else {
                this.items = this.catSubProds.filter((el) => {
                    return el.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
        },
        reqQuoteforSearchData() {
            if (this.searchVal.catid && !this.searchVal.subcatid) {
                this.$router.push({
                    'path': '/buyer/create-new-quote',
                    query: {
                        catid: this.searchVal.catid,
                        flag: 'requestquote-by-home'
                    }
                });
            } else if (this.searchVal.catid && this.searchVal.subcatid && !this.searchVal.prodid) {
                this.$router.push({
                    'path': '/buyer/create-new-quote',
                    query: {
                        catid: this.searchVal.catid,
                        subcatid: this.searchVal.subcatid,
                        flag: 'requestquote-by-home'
                    }
                });
            } else if (this.searchVal.catid && this.searchVal.subcatid && this.searchVal.prodid) {
                this.$router.push({
                    'path': '/buyer/create-new-quote',
                    query: {
                        catid: this.searchVal.catid,
                        subcatid: this.searchVal.subcatid,
                        prodid: this.searchVal.prodid,
                        flag: 'requestquote-by-home'
                    }
                });
            }
        },
        runOnScroll() {
            let number =
                window.pageXOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            const header = document.getElementById('headerSticky');
            if (header !== null) {
                if (number >= 300) {
                    header.classList.add('header--sticky');
                } else {
                    header.classList.remove('header--sticky');
                }
            }
        },
        async getAllCatSubCat() {
            await this.axios.get(process.env.VUE_APP_API_ENDPOINT + '/allCatlistProd', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((response) => {
                    var data = response.data.data;
                    var array = [];
                    Object.values(data).forEach(el => {
                        array.push({
                            catid: el.id,
                            name: el.name
                        })
                        if (el.subcate_details.length > 0) {
                            Object.values(el.subcate_details).forEach((ele) => {
                                array.push({
                                    catid: ele.category_id,
                                    subcatid: ele.id,
                                    name: ele.name
                                });
                                if (ele.product_details.length > 0) {
                                    Object.values(ele.product_details).forEach((prod) => {
                                        array.push({
                                            catid: ele.category_id,
                                            subcatid: prod.subcategory_id,
                                            prodid: prod.id,
                                            name: prod.name
                                        });
                                    });
                                }
                            });
                        }
                    });
                    this.catSubProds = array;
                })
                .catch((error) => {})
        },
    },
    mounted() {
        this.getAllCatSubCat();
        window.addEventListener('scroll', this.runOnScroll());
        this.tokencheck = localStorage.getItem("token");
        this.usertype = localStorage.getItem("userType");
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/_reset.scss';
@import "@/assets/scss/vendor/bourbon/_bourbon.scss";
@import "@/assets/scss/utils/_mixin.scss";
@import "@/assets/scss/vendor/_media_query.scss";
@import "@/assets/scss/utils/_variable.scss";

.header--1 {
    .header__top {
        background-color: $color-1st;
    }
}
</style>
`
