<template lang="html">
<ul class="menuitem adminmenuitem" id="sidemenuitem" v-if="this.usertype == 'Admin'">
    <template v-for="item in menuItems" :key="item">
        <li class="menu-item-has-children has-child-menu menuItem" v-if="item.mega" @click="menuItemClicked(item, item.key)" v-bind:class="{ selectedli: item.isSelected, notselected: !item.isSelected }">
            <i :class="item.icon"> </i>
            <span class="megaspan">{{ item.text }}
                <font-awesome-icon :icon="['fasl', 'angle-down']" class="down-arrow-icon" />
            </span>
            <div :class="{'': item.isSelected, 'd-none': !item.isSelected }" id="child-item">
                <ul class="mega-menu__list child-list-item">
                    <li v-for="subItem in item.megaContent" :key="subItem.text" class="listitem" @click="childmenuClicked(item,subItem, subItem.key)" v-bind:class="{ selectedchildli: subItem.childisSelected, notselected: !subItem.childisSelected }">
                        <router-link :to="subItem.url" v-if="subItem.route">
                            <i :class="subItem.icon"> </i>
                            {{ subItem.text }}
                        </router-link>
                        <router-link to="#" class="" v-else>
                            <i :class="subItem.icon"> </i>
                            {{ subItem.text }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menuItem" v-else :key="item.text" @click="menuItemClicked(item, item.key)" v-bind:class="{ selectedli: item.isSelected, notselected: !item.isSelected }">
            <router-link :to="item.url" class="menu__text">
                <i :class="item.icon"> </i>
                <span class="megaspan" v-if="item.text=='Logout'">{{ item.text }}</span>
                <span class="megaspan" v-else>{{ item.text }} </span>
            </router-link>
        </li>
    </template>
</ul>
<ul class="menuitem vendormenuitem" id="sidemenuitem" v-if="this.usertype == 'Supplier'">
    <template v-for="item in vendorMenuItems" :key="item">
        <li class="menu-item-has-children has-child-menu menuItem" v-if="item.mega" @click="vendormenuItemClicked(item, item.key)" v-bind:class="{ selectedli: item.isSelected, notselected: !item.isSelected }">
            <i :class="item.icon"> </i>
            <span class="megaspan">{{ item.text }}
                <font-awesome-icon :icon="['fasl', 'angle-down']" class="down-arrow-icon" />
            </span>
            <div :class="{ '': item.isSelected, 'd-none': !item.isSelected }" id="child-item">
                <ul class="mega-menu__list child-list-item">
                    <li v-for="subItem in item.megaContent" :key="subItem.text" class="listitem" @click="childmenuClicked(item, subItem, subItem.key)" v-bind:class="{ selectedchildli: subItem.childisSelected, notselected: !subItem.childisSelected }">
                        <router-link :to="subItem.url" v-if="subItem.route">
                            <i :class="subItem.icon"> </i>
                            {{ subItem.text }}
                        </router-link>
                        <router-link to="#" class="" v-else>
                            <i :class="subItem.icon"> </i>
                            {{ subItem.text }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menuItem" v-else :key="item.text" @click="vendormenuItemClicked(item, item.key)" v-bind:class="{ selectedli: item.isSelected, notselected: !item.isSelected }">
            <router-link :to="item.url" class="menu__text">
                <i :class="item.icon"> </i>
                <span class="megaspan" v-if="item.text == 'Logout'">{{ item.text }}</span>
                <span class="megaspan" v-else>{{ item.text }} </span>
            </router-link>
        </li>
    </template>
</ul>
</template>

<script>
export default {
    name: 'MenuSidebar',
    components: {},
    data() {
        return {
            menuItems: [{
                    text: 'Dashboard',
                    url: '/admin',
                    icon: 'icon-home selectedliIcon',
                    isSelected: true,
                },
                {
                    text: 'Users',
                    url: '#',
                    icon: 'icon-users2 selectedliIcon',
                    mega: 'true',
                    isSelected: false,
                    megaContent: [{
                            text: 'Customers',
                            url: '/admin/customer-list',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Supplier',
                            url: '/admin/supplier-list',
                            route: true,
                            childisSelected: false
                        },
                    ]
                },
                {
                    text: 'Orders List',
                    url: '#',
                    icon: 'icon-bag2 selectedliIcon',
                    mega: 'true',
                    isSelected: false,
                    megaContent: [{
                            text: 'Requested Quotes',
                            url: '/admin/quotes-list',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Response Quotes',
                            url: '/admin/respequotes-list',
                            route: true,
                            childisSelected: false,
                        },
                        {
                            text: 'Orders',
                            url: '/admin/approved-order',
                            route: true,
                            childisSelected: false,
                        },
                    ]
                },
                {
                    text: 'Lookup values',
                    url: '#',
                    icon: 'icon-file-search selectedliIcon',
                    mega: 'true',
                    isSelected: false,
                    megaContent: [{
                            text: 'Category',
                            url: '/admin/add-category',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Werehouse',
                            url: '/admin/werehouse',
                            route: true,
                            childisSelected: false
                        },
                    ]
                },
                {
                    text: 'Account Settings',
                    url: '#',
                    icon: 'icon-cog selectedliIcon',
                    mega: 'true',
                    isSelected: false,
                    megaContent: [{
                        text: 'Personal Information',
                        url: '/admin/personal-info',
                        route: true,
                        childisSelected: false
                    }, ]
                },
                {
                    text: 'Logout',
                    url: '#',
                    icon: 'icon-user',
                    isSelected: false,
                }
            ],
            vendorMenuItems: [{
                    text: 'Orders List',
                    url: '#',
                    icon: 'icon-bag2 selectedliIcon',
                    mega: 'true',
                    isSelected: false,
                    megaContent: [{
                            text: 'Requested Quotes',
                            url: '/vendor/req-quotes-list',
                            route: true,
                            childisSelected: true,
                        },
                        {
                            text: 'Response Quotes',
                            url: '/vendor/resp-quotes-list',
                            route: true,
                            childisSelected: false,
                        },
                        {
                            text: 'Orders',
                            url: '/vendor/orders',
                            route: true,
                            childisSelected: false,
                        },
                    ]
                },
                {
                    text: 'Credit Points',
                    url: '/vendor/purchase-credits',
                    icon: 'icon-tag selectedliIcon',
                    isSelected: false,
                },

                {
                    text: 'Account Settings',
                    url: '#',
                    icon: 'icon-cog selectedliIcon',
                    mega: 'true',
                    isSelected: false,
                    megaContent: [{
                            text: 'Personal Information',
                            url: '/vendor/personal-info',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Company Information',
                            url: '/vendor/business-info',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Product Information',
                            url: '/vendor/product-information',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Quality & Certificate',
                            url: '/vendor/quality-and-certifications',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Supplier Experience',
                            url: '/vendor/supplier-experience',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Customer Support',
                            url: '/vendor/customer-support',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Supplier Agreement',
                            url: '/vendor/agreement',
                            route: true,
                            childisSelected: false
                        },
                        {
                            text: 'Terms & Conditions',
                            url: '/vendor/term-and-conditions',
                            route: true,
                            childisSelected: false
                        },
                    ]
                },
                {
                    text: 'Logout',
                    url: '#',
                    icon: 'icon-user',
                    isSelected: false,
                }
            ],
            usertype: '',
            loader: false,
        }
    },
    methods: {
        handleLogout() {
            var token = localStorage.getItem("token");
            this.axios.get(
                    process.env.VUE_APP_API_ENDPOINT + '/logout', {
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(response => {
                    if (response.status == 200) {
                        localStorage.clear();
                        this.$router.push({
                            name: 'home'
                        });
                        if (this.name && this.tokencheck) {
                            this.name = '';
                            this.tokencheck = '';
                        }
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status == 400 || error.response.status == 401) {
                            localStorage.clear();
                            this.$router.push({
                                name: 'home'
                            });
                        }
                    } else {
                        if (error.message == "Network Error") {
                            localStorage.clear();
                            this.$router.push({
                                name: 'home'
                            });
                        }
                    }
                })
        },
        childmenuClicked(li, childli, index) {
            if (li.megaContent) {
                for (var k = 0; k < li.megaContent.length; k++) {
                    li.megaContent[k].childisSelected = false;
                }
                childli.childisSelected = true;
                li.isSelected = false;
            }
        },
        menuItemClicked(li, index) {
            if (!li) {
                if (this.menuItems[i].url === this.$route.path) {
                    this.menuItems[i].isSelected = true;
                }
            } else {
                if (li.text == 'Logout') {
                    for (var i = 0; i < this.menuItems.length; i++) {
                        this.menuItems[i].isSelected = false;
                    }
                    li.isSelected = true;
                    this.loader = true;
                    this.handleLogout();
                } else {
                    if (li.text == 'Users' || li.text == 'Orders List' || li.text == 'Lookup values' || 'Account Settings') {
                        if (li.isSelected == false) {
                            for (var i = 0; i < this.menuItems.length; i++) {
                                this.menuItems[i].isSelected = false;
                                li.isSelected = true;
                            }
                        } else {
                            for (var i = 0; i < this.menuItems.length; i++) {
                                this.menuItems[i].isSelected = false;
                                li.isSelected = false;
                            }
                        }
                    } else {
                        for (var i = 0; i < this.menuItems.length; i++) {
                            this.menuItems[i].isSelected = false;
                            li.isSelected = true;
                        }
                    }
                }
            }
        },
        vendormenuItemClicked(li, index) {
            if (!li) {
                if (this.vendorMenuItems[i].url === this.$route.path) {
                    this.vendorMenuItems[i].isSelected = true;
                }
            } else {
                if (li.text == 'Logout') {
                    for (var i = 0; i < this.vendorMenuItems.length; i++) {
                        this.vendorMenuItems[i].isSelected = false;
                    }
                    li.isSelected = true;
                    this.handleLogout();
                } else {
                    if (li.text == 'Users' || li.text == 'Orders List' || li.text == 'Lookup values' || 'Account Settings') {
                        if (li.isSelected == false) {
                            for (var i = 0; i < this.vendorMenuItems.length; i++) {
                                this.vendorMenuItems[i].isSelected = false;
                                li.isSelected = true;
                            }
                        } else {
                            for (var i = 0; i < this.vendorMenuItems.length; i++) {
                                this.vendorMenuItems[i].isSelected = false;
                                li.isSelected = false;
                            }
                        }
                    } else {
                        for (var i = 0; i < this.vendorMenuItems.length; i++) {
                            this.vendorMenuItems[i].isSelected = false;
                            li.isSelected = true;
                        }
                    }
                }
            }
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType')
    }
};
</script>

<style lang="scss" scoped></style>
