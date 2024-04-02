<template lang="html">
<LoaderComponent v-if="this.loader" />
<div class="werehouseContainer">
    <div class="form">
        <section class="widget widget-white viewsuppprofile accountdWidget">
            <div class="werehousetitleDiv">
                <h3>{{ this.usertype }} Details</h3>
            </div>
            <div class="widget-body" style="padding: 30px;">
                <div class="form-rows p-t-no">
                    <form class="row">
                        <div class="row mb-0 ml-0">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                <span class="infoboxhead">Personal Information</span>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                            <div class="row infoDiv personalDiv mb-0 ml-0">
                                <div class="col-12 col-sm-12 col-md-4 col-lg-2 imgDiv mt-0">
                                    <img :src="`${this.srcimage + 'uploads/profiles_pictures/' + this.profilepic}`" alt="user" class="proimg m-r-40px" width="70" height="70">
                                </div>
                                <div class="col-12 col-sm-12 col-md-8 col-lg-8 mt-0">
                                    <div class="row infoDiv mb-0 ml-0">
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-0">
                                            <div class="headDiv">
                                                <font-awesome-icon :icon="['fas', 'user']" />Name</div>
                                            <div class="dataDiv">{{ this.form.name }}</div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-0">
                                            <div class="headDiv">
                                                <font-awesome-icon :icon="['fas', 'phone']" />Contact
                                            </div>
                                            <div class="dataDiv">{{ this.form.mobile }}</div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-0">
                                            <div class="headDiv">
                                                <font-awesome-icon :icon="['fas', 'envelope']" /> Email</div>
                                            <div class="dataDiv">{{ this.form.email }}</div>
                                        </div>
                                    </div>
                                    <hr class="devidborder" />
                                    <div class="row mb-0 ml-0">
                                        <div class="col-12 col-sm-12 col-md-8 col-lg-8 mt-3">
                                            <div class="headDiv">
                                                <font-awesome-icon :icon="['fas', 'location-dot']" /> Address</div>
                                            <div class="dataDiv">{{ this.form.addr }}</div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-0">
                                            <div class="scoreDiv mt-8">
                                                <div class="headDiv mr-5">
                                                    <!-- <font-awesome-icon :icon="['fas', 'envelope']" />ERR Score</div> -->
                                                    <img :src="user_score" width="25" height="25" />Enterprise Reliability Rating (ERR) score -</div>
                                                    <div class="dataDiv">{{ this.form.profilerating + '%' }}</div>
                                                </div>
                                        </div>
                                        <!-- <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-0">
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-0">
                                            </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-0 ml-0 mt-3">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                <span class="infoboxhead">profile questionaires</span>
                            </div>
                            <div class="" v-if="this.$route.query.roleid == 3 && this.questionaireData.length>0">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0" v-for="q in this.questionaireData" :key="q.id">
                                    <div class="row mb-0 ml-0 questionsDiv">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                            {{ q.question }}
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                            &nbsp;{{q.ans.split(',')[0]}}
                                            <div v-if="q.ans.includes('Homemade')" class="childDiv">
                                                <ul>
                                                    <li>
                                                        <h4>Juice Varieties: {{ q.ans.split(',')[1] }}</h4>
                                                    </li>
                                                    <li>
                                                        <h4>Packaging: {{ q.ans.split(',')[2] }}</h4>
                                                    </li>
                                                    <li>
                                                        <h4>Ingredients: {{ q.ans.split(',')[3] }}</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="" v-else-if="this.$route.query.roleid == 2 && this.suppCompanyInfo.length>0">

                                <div class="sls vieprofileDiv custdashboardDiv">
                                    <div id="sl_434986" class="sl">
                                        <div class="sl-content orderContentDiv">
                                            <div id="sn_h_tabs" class="m-t-25 ui-tabs-scroll ui-tabs ui-corner-all 
                                                ui-widget ui-widget-content">
                                                <TabsDiv class="OrdersTab">
                                                    <TabDiv name="Company Information">
                                                        <div class="sl-content tabContentDiv">
                                                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Company Information
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <ul>
                                                                                <li>
                                                                                    <h4>Company Name: {{ this.suppCompanyInfo[0].companyName }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Contact Person name: {{ this.suppCompanyInfo[0].contactpersonname }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Business Address:{{ this.suppCompanyInfo[0].companyaddr }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Contact Email:{{ this.suppCompanyInfo[0].companyemail }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Phone No:{{ this.suppCompanyInfo[0].companyphone }}</h4>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Business Information
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <ul>
                                                                                <li>
                                                                                    <h4>Legal Business Name: {{ this.suppCompanyInfo[0].businessname }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Business Type: {{ this.suppCompanyInfo[0].businesstype }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Business Registration Number:{{ this.suppCompanyInfo[0].businessregnum }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Tax Identification Number:{{ this.suppCompanyInfo[0].taxIdentifynum }}</h4>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Contact Information
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <ul>
                                                                                <li>
                                                                                    <h4>Primary Contact Name: {{ this.suppCompanyInfo[0].contactname }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Email: {{ this.suppCompanyInfo[0].contactemail }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Phone Number:{{ this.suppCompanyInfo[0].contactmobile }}</h4>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Business registration and incorporation certificate:
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv" v-if="this.suppCompanyInfo[0].businessregcertificate">
                                                                            <img :src="`${this.srcimage + 'businessRegCertificate/'+this.suppCompanyInfo[0].businessregcertificate}`" width="120" height="120" class="certificate m-r-40px">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Licenses certificate:
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv" v-if="this.suppCompanyInfo[0].licensecertificate !=''">
                                                                            <img :src="`${this.srcimage + 'businessRegCertificate/'+this.suppCompanyInfo[0].licensecertificate}`" width="120" height="120" class="certificate m-r-40px">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Financial Stability::
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv" v-if="this.suppCompanyInfo[0].financialstability">
                                                                            <img :src="`${this.srcimage + 'businessRegCertificate/'+this.suppCompanyInfo[0].financialstability}`" width="120" height="120" class="certificate m-r-40px">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Bank Letter:
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv" v-if="this.suppCompanyInfo[0].bankletter">
                                                                            <img :src="`${this.srcimage + 'businessRegCertificate/'+this.suppCompanyInfo[0].bankletter}`" width="120" height="120" class="certificate m-r-40px">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Do you have any experience selling on other platforms?
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <span>{{ this.suppCompanyInfo[0].businessperform }}</span>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Business References:
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv" v-if="this.suppCompanyInfo[0].businessref">
                                                                            <img :src="`${this.srcimage + 'businessRegCertificate/'+this.suppCompanyInfo[0].businessref}`" width="120" height="120" class="certificate m-r-40px">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TabDiv>
                                                    <TabDiv name="Quality and Certificate">
                                                        <div class="sl-content tabContentDiv">
                                                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Quality Standard
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <span>{{ this.suppCompanyInfo[0].qltystandard }}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv" v-if="this.suppCompanyInfo[0].qltystandrdfile">
                                                                            <img :src="`${this.srcimage + 'businessRegCertificate/'+this.suppCompanyInfo[0].qltystandrdfile}`" width="120" height="120" class="certificate m-r-40px">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Certification
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <span>{{ this.suppCompanyInfo[0].qltycertificate }}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv" v-if="this.suppCompanyInfo[0].qltycertificatefile">
                                                                            <img :src="`${this.srcimage + 'businessRegCertificate/'+this.suppCompanyInfo[0].qltycertificatefile}`" width="120" height="120" class="certificate m-r-40px">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Return and Refund Policies
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <span> {{this.suppCompanyInfo[0].refundpolicy}}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Financial Statement
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <span>{{ this.suppCompanyInfo[0].financialstatement }}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv" v-if="this.suppCompanyInfo[0].qltyfinancialfile">
                                                                            <img :src="`${this.srcimage + 'businessRegCertificate/'+this.suppCompanyInfo[0].qltyfinancialfile}`" width="120" height="120" class="certificate m-r-40px">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TabDiv>
                                                    <TabDiv name="Supplier Experiences">
                                                        <div class="sl-content tabContentDiv">
                                                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        About Business
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <span>{{ this.suppCompanyInfo[0].aboutbusiness }}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Customer Served
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <span>{{ this.suppCompanyInfo[0].customerserved }}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Testimonials References
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <span>{{ this.suppCompanyInfo[0].testimonialsref }}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TabDiv>
                                                    <TabDiv name="Supplier Agreement">
                                                        <div class="sl-content tabContentDiv">
                                                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Supplier Agreement
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <span>{{ this.suppCompanyInfo[0].aggreement }}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <v-expansion-panels class="mb-6">
                                                                <v-expansion-panel>
                                                                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                                                                        See Agreement
                                                                    </v-expansion-panel-title>
                                                                    <v-expansion-panel-text>
                                                                        <div class="col mt-5 companyInfoDiv">
                                                                            <div class="row ml-5 mt-3 mb-3">
                                                                                <span class="infoboxhead termconditionhead">Supplier
                                                                                    Statement</span>
                                                                                <span>This Supplier Statement outlines the terms and
                                                                                    conditions that govern the relationship between
                                                                                    and our valued suppliers. By participating as a
                                                                                    supplier on our platform, you agree to adhere to
                                                                                    the following:</span>
                                                                            </div>
                                                                            <div class="termconditionDiv">
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                                    <h3>Purpose and Scope:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            This agreement defines the terms of
                                                                                            engagement between Wholesale Express and
                                                                                            its suppliers.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                                    <h3>Supplier Responsibilities: </h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Suppliers are responsible for accurate
                                                                                            product information, quality standards,
                                                                                            and prompt order fulfillment.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                                    <h3>Platform's Role: </h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Wholesale Express facilitates
                                                                                            connections between buyers and
                                                                                            suppliers, ensuring secure transactions.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                                    <h3>Exclusivity and Contact:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Suppliers are required to conduct all
                                                                                            business transactions and communications
                                                                                            exclusively through the platform.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                                    <h3>Confidentiality:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Suppliers must not share personal
                                                                                            contact information or customer data
                                                                                            outside the platform.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                                    <h3>Pricing and Payment:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Pricing is determined on the platform,
                                                                                            and payments are processed securely.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                                    <h3>Quality and Returns:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Suppliers must meet defined quality
                                                                                            standards, with clear guidelines for
                                                                                            returns, replacements, and refunds.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                                    <h3>Intellectual Property:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Suppliers should possess necessary
                                                                                            rights for listing and selling products.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv  d-flex flex-column">
                                                                                    <h3>Termination and Suspension:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            The agreement can be terminated or
                                                                                            suspended for violations of platform
                                                                                            rules.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv d-flex flex-column">
                                                                                    <h3>Liability and Indemnity:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Parties' liabilities and indemnification
                                                                                            are outlined, safeguarding Wholesale
                                                                                            express from claims arising from
                                                                                            products or actions.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv  d-flex flex-column">
                                                                                    <h3>Governing Law and Dispute Resolution:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Jurisdiction, laws, and dispute
                                                                                            resolution mechanisms are established.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv  d-flex flex-column">
                                                                                    <h3>Acknowledgment of Platform's Role:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Suppliers recognize that Wholesale
                                                                                            express is designed to amplify business
                                                                                            opportunities.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </v-expansion-panel-text>
                                                                </v-expansion-panel>
                                                            </v-expansion-panels>
                                                        </div>
                                                    </TabDiv>
                                                    <TabDiv name="Term and Condition">
                                                        <div class="sl-content tabContentDiv">
                                                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Term and Condition
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <span>{{ this.suppCompanyInfo[0].termandcondition }}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <v-expansion-panels class="mb-6">
                                                                <v-expansion-panel>
                                                                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                                                                        See Term and Condition
                                                                    </v-expansion-panel-title>
                                                                    <v-expansion-panel-text>
                                                                        <div class="col mt-5 companyInfoDiv">
                                                                            <div class="row ml-5 mt-3 mb-3">
                                                                                <span class="infoboxhead termconditionhead">Term &
                                                                                    Condition</span>
                                                                            </div>
                                                                            <div class="termconditionDiv">
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Platform Usage Agreement</h3>
                                                                                    <div>
                                                                                        <ul class="list-dots">
                                                                                            <li>
                                                                                                Wholesale Express facilitates
                                                                                                connections between buyers and
                                                                                                suppliers, ensuring secure
                                                                                                transactions and Suppliers are
                                                                                                required to conduct all business
                                                                                                transactions and communications
                                                                                                exclusively through the platform.
                                                                                            </li>
                                                                                            <li>Pricing is determined on the
                                                                                                platform, and payments are processed
                                                                                                securely.
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3> Supplier Guidelines</h3>
                                                                                    <div>
                                                                                        <ul class="list-dots">
                                                                                            <li>
                                                                                                Suppliers are responsible for
                                                                                                accurate product information,
                                                                                                quality standards, and prompt order
                                                                                                fulfillment and Suppliers should
                                                                                                possess necessary rights for listing
                                                                                                and selling products.
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row ml-5 mt-3 mb-3">
                                                                                <span class="infoboxhead termconditionhead">Platform
                                                                                    rules</span>
                                                                                <span>
                                                                                    Welcome to Wholesale express, a platform
                                                                                    dedicated to connecting suppliers and customers
                                                                                    seamlessly.
                                                                                    To ensure a positive experience for everyone, we
                                                                                    have established the following rules and
                                                                                    guidelines.
                                                                                    By using our platform, you agree to abide by
                                                                                    these rules:
                                                                                </span>
                                                                            </div>
                                                                            <div class="termconditionDiv">
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Verification and Acceptance Process:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            All products listed on Wholesale express
                                                                                            go through a rigorous verification and
                                                                                            acceptance process to ensure quality and
                                                                                            accuracy. This process enhances security
                                                                                            and provides assurance that customers
                                                                                            receive the products they requested.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Transparent Communication:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Communication on our platform must
                                                                                            remain transparent and within the
                                                                                            confines of our messaging system. This
                                                                                            ensures accountability and
                                                                                            record-keeping for all interactions.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Respectful Conduct:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Treat all platform users with respect
                                                                                            and professionalism. Avoid offensive,
                                                                                            discriminatory, or harassing language or
                                                                                            behaviour.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Product Listings Accuracy:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Suppliers must provide accurate and
                                                                                            detailed product information, including
                                                                                            specifications, quantities, and pricing.
                                                                                            Misrepresentation of products is
                                                                                            strictly prohibited.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Confidentiality and Privacy:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Protect the confidentiality and privacy
                                                                                            of all platform users. Do not share
                                                                                            personal or sensitive information
                                                                                            outside the platform.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Timely Responses:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Suppliers and customers are encouraged
                                                                                            to respond to messages and inquiries
                                                                                            promptly, facilitating efficient
                                                                                            communication and transaction processes.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Quoting and Pricing:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Suppliers must provide quotes that
                                                                                            accurately reflect the pricing and terms
                                                                                            of the products. Any price changes must
                                                                                            be communicated clearly and
                                                                                            transparently.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Transactional Integrity:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            All transactions must be conducted
                                                                                            through the platform's payment and
                                                                                            messaging systems. Avoid transactions
                                                                                            outside of the platform, as they
                                                                                            undermine security and transparency.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Intellectual Property Rights:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Respect intellectual property rights. Do
                                                                                            not list or sell products that infringe
                                                                                            upon copyrights, trademarks, patents, or
                                                                                            other proprietary rights.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>User-Generated Content:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            Any content, reviews, or ratings
                                                                                            submitted to the platform must be
                                                                                            accurate, unbiased, and adhere to our
                                                                                            guidelines.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Dispute Resolution:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            In case of disputes, work towards
                                                                                            amicable resolutions. Wholesale express
                                                                                            may intervene if necessary to facilitate
                                                                                            fair outcomes.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row infoDiv mb-5 ml-3 mr-1 statementDiv">
                                                                                    <h3>Feedback and Suggestions:</h3>
                                                                                    <div class="contentDiv">
                                                                                        <span>
                                                                                            We welcome feedback and suggestions for
                                                                                            platform improvements. Feel free to
                                                                                            reach out to our support team with your
                                                                                            ideas.
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row ml-5 mt-3 mb-3 footerContentDiv">
                                                                                <span>
                                                                                    "Wholesale express is committed to maintaining a
                                                                                    secure, transparent, and efficient platform for
                                                                                    all users.
                                                                                    These rules are in place to create a positive
                                                                                    environment where suppliers and customers can
                                                                                    engage confidently. Any violation of these rules
                                                                                    may result in appropriate actions, including
                                                                                    suspension or removal from the platform."
                                                                                </span>
                                                                                <span>
                                                                                    "Thank you for choosing Wholesale express. Let's
                                                                                    collaborate and grow together!
                                                                                    Devon, Founder, Wholesale Express."
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </v-expansion-panel-text>
                                                                </v-expansion-panel>
                                                            </v-expansion-panels>
                                                        </div>
                                                    </TabDiv>
                                                    <TabDiv name="Customer Support">
                                                        <div class="sl-content tabContentDiv">
                                                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                <div class="row mb-0 ml-0 questionsDiv">
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0 questionDiv">
                                                                        Customer Support
                                                                    </div>
                                                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0">
                                                                        <div class="childDiv">
                                                                            <ul>
                                                                                <li>
                                                                                    <h4>Support Hour: {{ this.suppCompanyInfo[0].supporthr }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Support Address: {{ this.suppCompanyInfo[0].supportaddr }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Phone Number:{{ this.suppCompanyInfo[0].phoneno }}</h4>
                                                                                </li>
                                                                                <li>
                                                                                    <h4>Email:{{ this.suppCompanyInfo[0].email }}</h4>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TabDiv>
                                                </TabsDiv>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-0" v-else>
                                <span>Not answered</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="ps-form__submit text-center col-12 mt-5 controlBtnDiv">
                    <span class="icon-arrow-left backarrow ml-4 mt-2" v-if="this.$route.query.roleid == 3" @click.prevent="backtoparent">&nbsp;Back</span>
                    <span class="icon-arrow-left backarrow ml-4 mt-2" v-if="this.$route.query.roleid == 2" @click.prevent="backtotable">&nbsp;Back</span>
                    <!-- <button type="button" class="ps-btn ps-btn--gray mr-3 cancelbtn" 
                    style="font-size:12px" @click.prevent="resetfield">Cancel</button> -->
                    <!-- <button type="submit" class="ps-btn success addCustbtn" @click.prevent="backtoparent">OK</button> -->
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
export default {
    name: 'ViewUserPageComponent',
    components: {
        LoaderComponent
    },
    props: {
        visible: {
            type: String
        },
    },
    data: () => ({
        user_score: require('@/assets/img/user_score3.png'),
        count: 1,
        loader: false,
        role_id: null,
        showerror: false,
        usertype: '',
        profilepic: '',
        srcimage: process.env.VUE_APP_SET_PATH,
        form: {
            name: '',
            email: '',
            mobile: '',
            addr: '',
            profilerating:0
        },
        questionaireData: [],
        suppCompanyInfo: []
    }),
    methods: {
        getUserProfile() {
            let user_id = this.$route.query.id;
            let token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token,
            }
            this.loader = true;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/get-profile/${user_id}`, {
                    headers
                })
                .then((response) => {
                    if(response.status == 200){
                    this.loader = false;
                    var userdata = response.data.user;
                    if (userdata[0].role_id == 2) {
                        this.usertype = 'Supplier';
                    } else {
                        this.usertype = 'Customer';
                    }
                    this.form.name = userdata[0].name;
                    this.form.email = userdata[0].email;
                    this.form.mobile = userdata[0].userprofile.mobile;
                    if (userdata[0].role_id == 2) {
                    if(userdata[0].userprofile.profile_rating.toString().length == 1){
                        this.form.profilerating = '0'+userdata[0].userprofile.profile_rating;
                    }else{
                        this.form.profilerating = userdata[0].userprofile.profile_rating;
                    }}
                    var addr = '',
                        zipcode = '',
                        state = '',
                        country = '';
                    if (userdata[0].userprofile.address != undefined) {
                        addr = userdata[0].userprofile.address + ', ';
                    }
                    if (userdata[0].userprofile.zipcode != undefined) {
                        zipcode = userdata[0].userprofile.zipcode + ', ';
                    }
                    if (userdata[0].userprofile.state != undefined) {
                        state = userdata[0].userprofile.state + ', ';
                    }
                    if (userdata[0].userprofile.country != undefined) {
                        country = userdata[0].userprofile.country;
                    }
                    this.form.addr = addr + zipcode + state + country;
                    this.profilepic = userdata[0].userprofile.profile_picture;
                }
                }).catch((error) => {
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
        backtoparent() {
            this.$router.back();
        },
        backtotable(){
            this.$router.push({
                path:'/admin/supplier-list',
            })
        },
        getQuestions() {
            let user_id = this.$route.query.id;
            let token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token,
                'Content-Type': 'multipart/form-data'
            }
            this.loader = true;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/questionnaire/${user_id}`, {
                    headers
                })
                .then((response) => {
                    var data = response.data.data;
                    this.questionaireData = data;
                    this.loader = false;
                })
                .catch((error) => {
                })
        },
        getSupplierCompanyInfo() {
            let user_id = this.$route.query.id;
            let token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token,
                'Content-Type': 'multipart/form-data'
            }
            this.loader = true;
            this.axios.get(process.env.VUE_APP_API_ENDPOINT + `/get-companyinfo/${user_id}`, {
                    headers
                })
                .then((response) => {
                    var data = response.data.user;
                    this.suppCompanyInfo = data;
                    this.loader = false;
                })
                .catch((error) => {
                });
        }
    },
    mounted() {
        this.getUserProfile();
        if (this.$route.query.roleid == 3) {
            this.getQuestions();
        } else {
            this.getSupplierCompanyInfo();
        }
    }
};
</script>

<style scoped>
.personalDiv {
    /* background-color: #000 !important; */
    padding: 1rem !important;
    box-shadow: 0 6px 12px rgb(0 0 0 / 9%);
}

/* .infoDiv {
    border-bottom: 1px solid #04b6c1;
} */

.proimg {
    float: left !important;
    right: 0px !important;
}

.headDiv {
    gap: 1rem;
    display: flex;
    flex-direction: row;
    text-wrap: nowrap;
    color: #9b9999
}

.dataDiv {
    font-size: 13px;
    font-weight: 800;
    padding-left: 22px;
}

.imgDiv {
    background: #d5fdfd;
    padding: 4rem;
}

.imgDiv img.proimg {
    top: 12px !important;
}

.childDiv {
    padding-left: 3rem;
}

.questionDiv {
    font-size: 15px !important;
    color: #000;
    font-weight: 700;
}

hr.devidborder {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(82, 226, 245, 0.75), rgba(0, 0, 0, 0));
}

.questionsDiv {
    background-color: #f1f1f1;
    padding: 0px !important;
}
/* .scoreDiv .dataDiv{
    padding-left: 35px !important;
} */
.scoreDiv .headDiv{
    color:#000 !important;
}
.scoreDiv{
    /*padding-left: 98px;*/
    display: flex;
    flex-direction: row;
}
/* .custdashboardDiv {
    padding-top: 2rem !important;
} */
</style>
