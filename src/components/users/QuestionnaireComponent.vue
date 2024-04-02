<template>
<LoaderComponent v-if="this.loader" />
<div class="container-fluid" style="background-color: #ffffff; margin-top: -20px;
    margin-bottom: 60px;padding: 20px;">
    <div class="QuestionDiv" v-if="this.userType='Customer'">
        <div class="row questionsDiv">
            <h2>Questionnaires:</h2>
            <div class="col-md-12 mt-0 quesdiv">
                <div class="form">
                    <div class="row">
                        <div class="col-12 col-md-12 col-sm-12 col-lg-12 mb-4">
                            <h3>Why Are You Joining the Site?</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input childquestion" type="radio" @change="quesselction($event)" name="parentqans" value="1" id="q11">
                                    <label class="form-check-label anslabel" for="q11">
                                        Starting a new business
                                    </label>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input childquestion" type="radio" @change="quesselction($event)" name="parentqans" value="2" id="q12">
                                    <label class="form-check-label anslabel" for="q12">
                                        Expanding an existing business
                                    </label>
                                </div>
                                <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input childquestion" type="radio" @change="quesselction($event)" name="parentqans" value="3" id="q13">
                                    <label class="form-check-label anslabel" for="q13">
                                        Sourcing products for personal use
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row questionsDiv" v-if="newbusiness">
            <div class="col-md-12 mt-0 quesdiv">
                <div class="form">
                    <div class="row">
                        <div class="col-12 col-md-12 col-sm-12 col-lg-12 mb-4">
                            <h3 id="q1-1">1.{{ this.q11 }}</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q1ans" id="q1ans1" :value="this.q11a1" :checked="this.ansmatched111?true:false" @change="ansselection($event,'q1')">
                                    <label class="form-check-label anslabel" for="q1ans1">
                                        {{ this.q11a1 }}
                                    </label>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q1ans" id="q1ans2" :value="this.q11a2" :checked="this.ansmatched112?true:false" @change="ansselection($event,'q1')">
                                    <label class="form-check-label anslabel" for="q1ans2">
                                        {{ this.q11a2 }}
                                    </label>
                                </div>
                                <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q1ans" id="q1ans3" :value="this.q11a3" :checked="this.ansmatched113?true:false" @change="ansselection($event, 'q1')">
                                    <label class="form-check-label anslabel" for="q1ans3">
                                        {{ this.q11a3 }}
                                    </label>
                                </div>
                                <div class="ans4 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q1ans" id="q1ans4" :value="this.q11a4" :checked="this.ansmatched114?true:false" @change="ansselection($event,'q1')">
                                    <label class="form-check-label anslabel" for="q1ans4">
                                        {{this.q11a4}}
                                    </label>
                                </div>
                            </div>

                            <h3 v-if="this.selhomemadebusiness">2. {{ this.q12 }}</h3>
                            <div v-if="this.selhomemadebusiness" class="answerdiv mt-5 mb-5">
                                <div class="ans1 childhead form-check d-flex flex-row align-center mb-2">
                                    <h4>Juice Varieties:</h4>
                                </div>
                                <div class="col-md-6 ml-8">
                                    <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2ans" id="q2ans11" :value="this.q12a1" :checked="this.ansmatched121?true:false">
                                        <label class="form-check-label anslabel" for="q2ans11">
                                            {{ this.q12a1 }}
                                        </label>
                                    </div>
                                    <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2ans" id="q2ans12" :value="this.q12a2" :checked="this.ansmatched122?true:false">
                                        <label class="form-check-label anslabel" for="q2ans12">
                                            {{ this.q12a2 }}
                                        </label>
                                    </div>
                                    <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2ans" id="q2ans13" :value="this.q12a3" :checked="this.ansmatched123?true:false">
                                        <label class="form-check-label anslabel" for="q2ans13">
                                            {{ this.q12a3 }}
                                        </label>
                                    </div>
                                    <div class="ans4 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2ans" id="q2ans14" :value="this.q12a4" :checked="this.ansmatched124?true:false">
                                        <label class="form-check-label anslabel" for="q2ans14">
                                            {{ this.q12a4 }}
                                        </label>
                                    </div>
                                </div>
                                <div class="ans1 childhead form-check d-flex flex-row align-center mb-2">
                                    <h4>Packaging:</h4>
                                </div>
                                <div class="col-md-6 ml-8">
                                    <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2opt2" id="q2opt21" :value="this.q2opta1" :checked="this.ansmatched_opt2_121?true:false">
                                        <label class="form-check-label anslabel" for="q2opt21">
                                            {{this.q2opta1}}
                                        </label>
                                    </div>
                                    <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2opt2" id="q2opt22" :value="this.q2opta2" :checked="this.ansmatched_opt2_122?true:false">
                                        <label class="form-check-label anslabel" for="q2opt22">
                                            {{this.q2opta2}}
                                        </label>
                                    </div>
                                    <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2opt2" id="q2opt23" :value="this.q2opta3" :checked="this.ansmatched_opt2_123?true:false">
                                        <label class="form-check-label anslabel" for="q2opt23">
                                            {{this.q2opta3}}
                                        </label>
                                    </div>
                                    <div class="ans4 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2opt2" id="q2opt24" :value="this.q2opta4" :checked="this.ansmatched_opt2_124?true:false">
                                        <label class="form-check-label anslabel" for="q2opt24">
                                            {{this.q2opta4}}
                                        </label>
                                    </div>
                                </div>
                                <div class="ans1 childhead form-check d-flex flex-row align-center mb-2">
                                    <h4>Ingredients:</h4>
                                </div>
                                <div class="col-md-6 ml-8">
                                    <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2opt3" id="q2opt31" :value="this.q2opt3a1" :checked="this.ansmatched_opt3_121?true:false">
                                        <label class="form-check-label anslabel" for="q2opt31">
                                            {{this.q2opt3a1}}
                                        </label>
                                    </div>
                                    <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2opt3" id="q2opt32" :value="this.q2opt3a2" :checked="this.ansmatched_opt3_122?true:false">
                                        <label class="form-check-label anslabel" for="q2opt32">
                                            {{this.q2opt3a2}}
                                        </label>
                                    </div>
                                    <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2opt3" id="q2opt34" :value="this.q2opt3a3" :checked="this.ansmatched_opt3_123?true:false">
                                        <label class="form-check-label anslabel" for="q2opt34">
                                            {{this.q2opt3a3}}
                                        </label>
                                    </div>
                                    <div class="ans4 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q2opt3" id="q2opt35" :value="this.q2opt3a4" :checked="this.ansmatched_opt3_124?true:false">
                                        <label class="form-check-label anslabel" for="q2opt35">
                                            {{this.q2opt3a4}}
                                        </label>
                                    </div>
                                </div>
                            </div>
                           
                            <h3 v-if=" this.selhomemadebusiness">3. {{this.q13}}:
                                Click on a specific sample item to view details.
                            </h3>
                            <h3 v-else>2. {{this.q13}}:
                                Click on a specific sample item to view details.
                            </h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check align-center mb-2">
                                    <!-- <h4> Sample Details Page:</h4> -->
                                    <h4>Select each of these below:</h4>
                                    <!-- <input class="form-check-input" type="radio" name="q3ans1" id="q3ans1">
                                    <label class="form-check-label anslabel" for="q3ans1" @click="showDetail">
                                    </label> -->
                                </div>
                                <!-- <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <h4>Select each of these below:</h4> -->
                                <!-- <input class="form-check-input" type="radio" name="q3ans2" id="q3ans2">
                                    <label class="form-check-label anslabel" for="q3ans2">
                                        Select each of these below:
                                    </label> -->
                                <!-- </div> -->
                                <div class="col-md-6 ml-8">
                                    <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q3ans" id="q3ans21" :value="this.q13a1" :checked="this.ansmatched131?true:false">
                                        <label class="form-check-label anslabel" for="q3ans21">
                                            {{ this.q13a1 }}
                                        </label>
                                    </div>
                                    <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q3ans" id="q3ans22" :value="this.q13a2" :checked="this.ansmatched132?true:false">
                                        <label class="form-check-label anslabel" for="q3ans22">
                                            {{ this.q13a2 }}
                                        </label>
                                    </div>
                                    <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                        <input class="form-check-input" type="radio" name="q3ans" id="q3ans23" :value="this.q13a3" :checked="this.ansmatched133?true:false">
                                        <label class="form-check-label anslabel" for="q3ans23">
                                            {{this.q13a3}}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <h3 v-if=" this.selhomemadebusiness">4. Request for Quote:
                                <br>
                                Choose to request a quote for the selected item by clicking the "Request Quote" button.
                            </h3>
                            <h3 v-else>3. Request for Quote:
                                <br>
                                Choose to request a quote for the selected item by clicking the "Request Quote" button.
                            </h3>
                            <div class="answerdiv mt-5 mb-5">
                                <input type="submit" name="requestquote" value="Request New Quote" id="requestquote" class="btn proceddbtn" @click="createnewQuote">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row questionsDiv" v-if="personaluse">
            <div class="col-md-12 mt-0 quesdiv">
                <div class="form">
                    <div class="row">
                        <div class="col-12 col-md-12 col-sm-12 col-lg-12 mb-4">
                            <h3>1.{{ this.q31 }}</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" :value="this.q31ans1" type="radio" name="q31ans" id="q31ans1" 
                                    :checked="this.q31ans1matched?true:false">
                                    <label class="form-check-label anslabel" for="q31ans1">
                                        {{ this.q31ans1 }}
                                    </label>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q31ans" id="q31ans2" :value="this.q31ans2"
                                     :checked="this.q31ans2matched?true:false">
                                    <label class="form-check-label anslabel" for="q31ans2">
                                        {{ this.q31ans2 }}
                                    </label>
                                </div>
                                <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q31ans" id="q31ans3" :value="this.q31ans3" 
                                    :checked="this.q31ans3matched?true:false">
                                    <label class="form-check-label anslabel" for="q31ans3">
                                        {{ this.q31ans3 }}
                                    </label>
                                </div>
                                <div class="ans4 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q31ans" id="q31ans4" :value="this.q31ans4" 
                                    :checked="this.q31ans4matched?true:false">
                                    <label class="form-check-label anslabel" for="q31ans4">
                                        {{ this.q31ans4 }}
                                    </label>
                                </div>
                            </div>
                            <h3>2. {{ this.q32 }}</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q32ans" id="q32ans1" 
                                    :value="this.q32ans1" :checked="this.q32ans1matched?true:false" @change="ansselection($event, 'q3','q32')">
                                    <label class="form-check-label anslabel" for="q32ans1">
                                        {{ this.q32ans1 }}
                                    </label>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q32ans" id="q32ans2" 
                                    :value="this.q32ans2" :checked="this.q32ans2matched?true:false" @change="ansselection($event, 'q3','q32')">
                                    <label class="form-check-label anslabel" for="q32ans2">
                                        {{ this.q32ans2 }}
                                    </label>
                                </div>
                                <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q32ans" id="q32ans3" 
                                    :value="this.q32ans3" :checked="this.q32ans3matched?true:false" @change="ansselection($event, 'q3','q32')">
                                    <label class="form-check-label anslabel" for="q32ans3">
                                        {{ this.q32ans3 }}
                                    </label>
                                </div>
                                <div class="ans4 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q32ans" id="q32ans4" 
                                    :value="this.q32ans4" :checked="this.q32ans4matched?true:false" @change="ansselection($event, 'q3','q32')">
                                    <label class="form-check-label anslabel" for="q32ans4">
                                        {{ this.q32ans4 }}
                                    </label>
                                </div>
                                <div class="otherinpDiv col-md-6" v-if="this.othercat">
                                    <!-- <input name="otheroption" id="otheroption" class="" /> -->
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" v-model="this.otherCat" class="input-control 
                                    inputField  mt-2 mb-5" style="height: 50px;"></textarea>
                                </div>
                            </div>
                            <h3>3. {{ this.q33 }}</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q33ans" id="q33ans1" 
                                    :value="this.q33ans1" :checked="this.q33ans1matched?true:false" @change="ansselection($event, 'q3','q33')">
                                    <label class="form-check-label anslabel" for="q33ans1">
                                        {{ this.q33ans1 }}
                                    </label>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q33ans" id="q33ans2" 
                                    :value="this.q33ans2" :checked="this.q33ans2matched?true:false" @change="ansselection($event, 'q3','q33')">
                                    <label class="form-check-label anslabel" for="q33ans2">
                                        {{ this.q33ans2 }}
                                    </label>
                                </div>
                                <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q33ans" 
                                    id="q33ans3" :value="this.q33ans3" :checked="this.q33ans3matched?true:false" @change="ansselection($event, 'q3','q33')">
                                    <label class="form-check-label anslabel" for="q33ans3">
                                        {{ this.q33ans3 }}:
                                    </label>
                                </div>
                                <div class="otherinpDiv col-md-6" v-if="this.dietaryRestrict">
                                    <!-- <input name="otheroption" id="otheroption" class="" /> -->
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" v-model="this.dietaryrestrict" style="height: 40px;"></textarea>
                                </div>
                                <!-- <div class="otherinpDiv">
                                        <input name="otheroption" id="otheroption" class="" />
                                    </div> -->
                                <!-- </div> -->
                                <div class="ans4 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q33ans" id="q33ans4"
                                     :value="this.q33ans4" :checked="this.q33ans4matched?true:false" @change="ansselection($event, 'q3','q33')">
                                    <label class="form-check-label anslabel" for="q33ans4">
                                        {{ this.q33ans4 }}:
                                    </label>
                                    <!-- <div class="otherinpDiv">
                                        <input name="otheroption" id="otheroption" class="" />
                                    </div> -->
                                </div>
                                <div class="otherinpDiv col-md-6" v-if="this.customizeOption">
                                    <!-- <input name="otheroption" id="otheroption" class="" /> -->
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" style="height: 40px;" v-model="this.customizeoption"></textarea>
                                </div>
                                <div class="ans5 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q33ans" id="q33ans5"
                                     :value="this.q33ans5" :checked="this.q33ans5matched?true:false" @change="ansselection($event, 'q3','q33')">
                                    <label class="form-check-label anslabel" for="q33ans5">
                                        {{ this.q33ans5 }}
                                    </label>
                                </div>
                            </div>
                            <h3>4. {{ this.q34 }}</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q34ans" 
                                    id="q34ans1" :value="this.q34ans1" :checked="this.q34ans1matched?true:false">
                                    <label class="form-check-label anslabel" for="q34ans1">
                                        {{ this.q34ans1 }}
                                    </label>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q34ans" 
                                    id="q34ans2" :value="this.q34ans2" :checked="this.q34ans2matched?true:false">
                                    <label class="form-check-label anslabel" for="q34ans2">
                                        {{ this.q34ans2 }}
                                    </label>
                                </div>
                            </div>
                            <h3>5. {{ this.q35 }}</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q35ans" id="q35ans1"
                                     :value="this.q35ans1" :checked="this.q35ans1matched?true:false" @change="ansselection($event, 'q3','q35')">
                                    <label class="form-check-label anslabel" for="q35ans1">
                                        {{this.q35ans1}}:
                                    </label>
                                </div>
                                <!-- <div class="otherinpDiv">
                                        <input name="otheroption" id="otheroption" class="" />
                                    </div>
                                </div> -->
                                <div class="otherinpDiv col-md-6" v-if="this.prodRecommandation">
                                    <!-- <input name="otheroption" id="otheroption" class="" /> -->
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" v-model="this.prodrecommandation" class="input-control inputField  mt-2 mb-5" style="height: 40px;"></textarea>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q35ans"
                                     :value="this.q35ans2" id="q35ans2" :checked="this.q35ans2matched?true:false" @change="ansselection($event, 'q3','q35')">
                                    <label class="form-check-label anslabel" for="q35ans2">
                                        {{ this.q35ans2 }}
                                    </label>
                                </div>
                            </div>
                            <h3>6. {{ this.q36 }}</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q36ans" id="q36ans1" :value="this.q36ans1" :checked="this.q36ans1matched?true:false">
                                    <label class="form-check-label anslabel" for="q36ans1">
                                        {{this.q36ans1}}
                                    </label>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q36ans" id="q36ans2" :value="this.q36ans2" :checked="this.q36ans2matched?true:false">
                                    <label class="form-check-label anslabel" for="q36ans2">
                                        {{this.q36ans2}}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row questionsDiv" v-if="expandingexitingbusiness">
            <div class="col-md-12 mt-0 quesdiv">
                <div class="form">
                    <div class="row">
                        <div class="col-12 col-md-12 col-sm-12 col-lg-12 mb-4">
                            <!-- <h3>1. Why Are You Joining the Site?</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q1ans" id="q1ans1">
                                    <label class="form-check-label anslabel" for="q1ans1">
                                        Starting a new business
                                    </label>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q1ans" id="q1ans2">
                                    <label class="form-check-label anslabel" for="q1ans2">
                                        Expanding an existing business
                                    </label>
                                </div>
                                <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q1ans" id="q1ans3">
                                    <label class="form-check-label anslabel" for="q1ans3">
                                        Sourcing products for personal use
                                    </label>
                                </div>
                            </div> -->
                            <h3>1. {{ this.q21 }} </h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <h4>Please provide details about your existing business that you are looking to expand.</h4>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" v-model="this.existingbusiness" class="input-control inputField  mt-2 mb-5" style="height: 50px;"></textarea>
                                </div>
                            </div>

                            <h3>2.{{ this.q22}}
                            </h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" :value="this.q22ans1" type="radio" name="q3ans" id="q3ans1" @change="ansselection($event, 'q2')" :checked="this.q22ans1matched?true:false">
                                    <label class="form-check-label anslabel" for="q3ans1">
                                        {{this.q22ans1}}
                                    </label>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q3ans" id="q3ans2" :value="this.q22ans2" @change="ansselection($event,'q2')" :checked="this.q22ans2matched?true:false">
                                    <label class="form-check-label anslabel" for="q3ans2">
                                        {{this.q22ans2}}
                                    </label>
                                </div>
                                <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" :value="this.q22ans3" name="q3ans" id="q3ans3" @change="ansselection($event,'q2')" :checked="this.q22ans3matched?true:false">
                                    <label class="form-check-label anslabel" for="q3ans3">
                                        {{this.q22ans3}}
                                    </label>
                                </div>
                            </div>

                            <h3 v-if="this.seladdcatoption">Current Product Categories:</h3>
                            <div v-if="this.seladdcatoption" class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <h4>List the product categories your existing
                                        business currently offers.</h4>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  
                                    mt-2 mb-5" style="height: 50px;" v-model="this.addcategory"></textarea>
                                </div>
                            </div>

                            <h3>3. {{ this.q23 }}</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <h4>Specify which product categories you're interested in expanding with the help of our platform.</h4>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField 
                                     mt-2 mb-5" style="height: 50px;" v-model="this.product"></textarea>
                                </div>
                            </div>

                            <h3>4. {{ this.q24 }}</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <h4>Let's help you explore sample items related to expanding your existing business.</h4>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" style="height: 50px;" v-model="this.sampleitem"></textarea>
                                </div>
                            </div>

                            <h3>5. {{ this.q25}} </h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <h4>Provide sample items relevant to the product categories you're interested in expanding.</h4>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <!-- <input name="otheroption" id="otheroption" class="" /> -->
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" style="height: 50px;" v-model="this.productsamplelist"></textarea>
                                </div>
                            </div>
                            <!-- <h3>6. Sample Selection Process:</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q8ans" id="q8ans1">
                                    <label class="form-check-label anslabel" for="q8ans1">
                                        Click on a specific sample item to view details.
                                    </label>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" style="height: 50px;"></textarea>
                                </div>
                            </div> -->
                            <!-- <h3>7. Sample Details Page:</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q9ans" id="q9ans1">
                                    <label class="form-check-label anslabel" for="q9ans1">
                                        View information about the selected item, including:
                                    </label>
                                </div>
                                <div class="ans2 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q9ans" id="q9ans2">
                                    <label class="form-check-label anslabel" for="q9ans2">
                                        Product description
                                    </label>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" style="height: 50px;"></textarea>
                                </div>
                                <div class="ans3 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q9ans" id="q9ans3">
                                    <label class="form-check-label anslabel" for="q9ans3">
                                        Price per unit
                                    </label>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" style="height: 50px;"></textarea>
                                </div>
                                <div class="ans4 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q9ans" id="q9ans4">
                                    <label class="form-check-label anslabel" for="q9ans4">
                                        Minimum order quantity
                                    </label>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" style="height: 50px;"></textarea>
                                </div>
                                <div class="ans5 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q9ans" id="q9ans5">
                                    <label class="form-check-label anslabel" for="q9ans5">
                                        Available packaging options
                                    </label>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" style="height: 50px;"></textarea>
                                </div>
                            </div> -->
                            <h3>8. Request for Quote:
                                <br />
                                Choose to request a quote for the selected item by clicking the "Request Quote" button.
                            </h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="otherinpDiv col-md-3">
                                    <input type="submit" name="requestquote" value="Request New Quote" id="requestquote" class="btn proceddbtn" @click="createnewQuote">
                                </div>
                            </div>
                            <!-- <h3>9. Repeat for Other Items:</h3>
                            <div class="answerdiv mt-5 mb-5">
                                <div class="ans1 form-check d-flex flex-row align-center mb-2">
                                    <input class="form-check-input" type="radio" name="q11ans" id="q11ans1">
                                    <label class="form-check-label anslabel" for="q11ans1">
                                        Navigate through the list and select other items of interest, repeating the process for each category.
                                    </label>
                                </div>
                                <div class="otherinpDiv col-md-6">
                                    <textarea name="otheroption" rows="3" cols="20" id="otheroption" class="input-control inputField  mt-2 mb-5" style="height: 50px;"></textarea>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-4">
                <span class="icon-arrow-left backarrow ml-4 mt-2" @click="backtoparent">&nbsp;Back</span>
            </div>
            <div class="col-md-6 mb-4">
                <button class="ps-btn success sendbtn" id="sendbtn" style="float: right;" @click.prevent="submitans()">{{this.getanswered?'Update':'Submit'}}</button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
export default {
    name: 'AddUserPageComponent',
    components: {
        LoaderComponent
    },
    props: {
        visible: {
            type: String
        },
    },
    data: () => ({
        loader: false,
        q11: 'What Business Would You Like to Start?',
        q11a1: 'Juice Bar',
        q11a2: 'Smoothie Shop',
        q11a3: 'Beverage Distribution',
        q11a4: 'Homemade Juice Business: Sample Selection:',
        q12: "You've indicated an interest in starting a homemade juice business.",
        q12a1: 'Apple Juice',
        q12a2: 'Orange Juice',
        q12a3: 'Mixed Berry Juice',
        q12a4: 'Green Detox Juice',

        q2opta1: 'Juice Bottles',
        q2opta2: 'Bottle Caps',
        q2opta3: 'Labels',
        q2opta4: 'Packaging Boxes',

        q2opt3a1: 'Fresh Apples',
        q2opt3a2: 'Oranges',
        q2opt3a3: 'Berries',
        q2opt3a4: 'Leafy Greens',

        q13: "Sample Selection Process:",
        q13a1: 'Product Description',
        q13a2: 'Price per unit',
        q13a3: 'Packaging options',
        newbusiness: false,
        personaluse: false,
        expandingexitingbusiness: false,
        usertype: '',
        getanswered: false,
        ansmatched111: false,
        ansmatched112: false,
        ansmatched113: false,
        ansmatched114: false,
        ansmatched121: false,
        ansmatched122: false,
        ansmatched123: false,
        ansmatched124: false,
        ansmatched131: false,
        ansmatched132: false,
        ansmatched133: false,

        ansmatched_opt2_121: false,
        ansmatched_opt2_122: false,
        ansmatched_opt2_123: false,
        ansmatched_opt2_124: false,

        ansmatched_opt3_121: false,
        ansmatched_opt3_122: false,
        ansmatched_opt3_123: false,
        ansmatched_opt3_124: false,

        q22ans1matched: false,
        q22ans2matched: false,
        q22ans3matched: false,

        ques_id: null,
        q21: 'What Business Are You Looking to Expand?',
        q22: 'Business Expansion Goals: Share your goals for expanding your existing business. For example:',

        q22ans1: 'Adding new product categories',
        q22ans2: 'Increasing product variety',
        q22ans3: 'Exploring new markets',

        q23: "Products You're Interested in Expanding:",
        q24: 'Sample Selection: Business Expansion:',
        q25: 'Sample List for Business Expansion:',
        addcategory: '',
        product: '',
        sampleitem: '',
        existingbusiness: '',
        productsamplelist: '',
        seladdcatoption: false,
        selhomemadebusiness: false,

        q31: 'Why are you joining our platform?',
        q32: 'Which categories interest you the most?',
        q33: "Do you have specific preferences or requirements for the products you're interested in?",
        q34: 'Are you interested in receiving bulk quantities? (This then will be showcased to different types of suppliers)',
        q35: 'Do you have any specific product recommendations or requests?',
        q36: 'Would you be interested in subscribing to a newsletter for updates and promotions?',
        q31ans1: 'Exploring new products',
        q31ans2: 'Finding quality items at wholesale prices',
        q31ans3: 'Convenient shopping for household needs',
        q31ans4: 'Discovering unique products',

        q32ans1: 'Pet Supplies',
        q32ans2: 'Office and Stationery',
        q32ans3: 'Perishables with Long Shelf Lives',
        q32ans4: 'Other',
        otherCat: '',
        othercat: false,

        q33ans1: 'Organic and natural options',
        q33ans2: 'Eco-friendly products',
        q33ans3: 'Dietary restrictions (please specify)',
        dietaryrestrict: '',
        dietaryRestrict: false,
        q33ans4: 'Customization options',
        customizeoption: '',
        customizeOption: false,
        q33ans5: 'No specific preferences',
        ansmatched_opt2_125: false,
        q34ans1: 'Yes for long-term use',
        q34ans2: 'No standard quantities are sufficient',
        q35ans1: "Yes I'm looking for",
        prodrecommandation: '',
        prodRecommandation: false,
        q35ans2: "No I'm open to exploring options",
        q36ans1: 'Yes',
        q36ans2: 'No',
        q36ans1matched: false,
        q36ans2matched: false,

        q31ans1matched: false,
        q31ans2matched: false,
        q31ans3matched: false,
        q31ans4matched: false,

        q32ans1matched: false,
        q32ans2matched: false,
        q32ans3matched: false,
        q32ans4matched: false,

        q33ans1matched:false,
        q33ans2matched:false,
        q33ans5matched:false,
        q33ans3matched:false,
        q33ans4matched:false,

        q34ans1matched:false,
        q34ans2matched:false,

        q35ans2matched:false,
        q35ans1matched:false

    }),
    methods: {
        backtoparent() {
            this.$router.back();
        },
        ansselection(e, question, qsection) {
            if (question === 'q2') {
                if (e.target.value === "Adding new product categories") {
                    this.seladdcatoption = true;
                } else {
                    this.seladdcatoption = false;
                }
            } else if (question === 'q1') {
                if (e.target.value === this.q11a4) {
                    this.selhomemadebusiness = true;
                } else {
                    this.selhomemadebusiness = false;
                }
            } else if (question === 'q3') {
                if (qsection == 'q32') {
                    if (e.target.value === this.q32ans4) {
                        this.othercat = true;
                    } else {
                        this.othercat = false;
                    }
                }
                if (qsection == 'q33') {
                    if (e.target.value === this.q33ans3) {
                        this.dietaryRestrict = true;
                    } else {
                        this.dietaryRestrict = false;
                    }
                    if (e.target.value === this.q33ans4) {
                        this.customizeOption = true;
                    } else {
                        this.customizeOption = false;
                    }
                }
                if (qsection == 'q35') {
                    if (e.target.value === this.q35ans1) {
                        this.prodRecommandation = true;
                    } else {
                        this.prodRecommandation = false;
                    }
                }

            }
        },
        quesselction(e) {
            if (e.target.value == "1") {
                this.newbusiness = true;
                this.expandingexitingbusiness = false;
                this.personaluse = false;
                this.ques_id = null;
                this.ques_id = e.target.value;
                this.getQuestions(e.target.value);
            } else if (e.target.value == "2") {
                this.expandingexitingbusiness = true;
                this.newbusiness = false;
                this.personaluse = false;
                this.ques_id = null;
                this.ques_id = e.target.value;
                this.getQuestions(e.target.value);
            } else {
                this.personaluse = true;
                this.expandingexitingbusiness = false;
                this.newbusiness = false;
                this.ques_id = null;
                this.ques_id = e.target.value;
                this.getQuestions(e.target.value);
            }

        },
        submitans() {
            if (this.ques_id == 1) {
                var parent_ques_id = '';
                if (document.querySelector('input[name="parentqans"]:checked')) {
                    parent_ques_id = document.querySelector('input[name="parentqans"]:checked').value;
                }
                var loginId = localStorage.getItem('loginid');
                var token = localStorage.getItem('token');

                var ques_ans_array = [];
                let q1ans = '',
                    q2ans = [],
                    q3ans = '';
                if (document.querySelector('input[name="q1ans"]:checked')) {
                    q1ans = document.querySelector('input[name="q1ans"]:checked').value;
                    q2ans.push(q1ans);
                }

                if (q1ans === this.q11a4) {
                    if (document.querySelector('input[name="q2ans"]:checked')) {
                        q2ans.push(document.querySelector('input[name="q2ans"]:checked').value);
                        if (document.querySelector('input[name="q2opt2"]:checked')) {
                            q2ans.push(document.querySelector('input[name="q2opt2"]:checked').value);
                        }
                        if (document.querySelector('input[name="q2opt3"]:checked')) {
                            q2ans.push(document.querySelector('input[name="q2opt3"]:checked').value);
                        }
                    }
                }

                if (q1ans != '' && (q1ans != this.q11a4)) {
                    ques_ans_array.push({
                        "q": this.q11,
                        "a": q2ans
                    })
                }
                if (q1ans === this.q11a4) {
                    ques_ans_array.push({
                        "q": this.q11,
                        "a": q2ans
                    })
                }

                if (document.querySelector('input[name="q3ans"]:checked')) {
                    q3ans = document.querySelector('input[name="q3ans"]:checked').value;
                }
                if (q3ans != '') {
                    ques_ans_array.push({
                        "q": this.q13,
                        "a": q3ans
                    })
                }
            } else if (this.ques_id == 2) {
                var parent_ques_id = '';
                if (document.querySelector('input[name="parentqans"]:checked')) {
                    parent_ques_id = document.querySelector('input[name="parentqans"]:checked').value;
                }
                var loginId = localStorage.getItem('loginid');
                var token = localStorage.getItem('token');

                var ques_ans_array = [];

                let existingbusiness = this.existingbusiness;

                let q1ans = '';
                let q1ans1 = [];
                let q2ans = this.product;
                let q3ans = this.sampleitem;
                let q4ans = this.productsamplelist;
                if (document.querySelector('input[name="q3ans"]:checked')) {
                    q1ans = document.querySelector('input[name="q3ans"]:checked').value;
                    q1ans1.push(q1ans);
                }
                if (existingbusiness != '') {
                    ques_ans_array.push({
                        "q": this.q21,
                        "a": existingbusiness
                    })
                }

                if (q1ans != '' && q1ans != this.q22ans1) {
                    ques_ans_array.push({
                        "q": this.q22,
                        "a": q1ans1
                    })
                }
                if (q1ans === this.q22ans1) {
                    this.seladdcatoption = true;
                    q1ans1.push(this.addcategory);
                    ques_ans_array.push({
                        "q": this.q22,
                        "a": q1ans1
                    })
                }
                if (q2ans != '') {
                    ques_ans_array.push({
                        "q": this.q23,
                        "a": q2ans
                    })
                }
                if (q3ans != '') {
                    ques_ans_array.push({
                        "q": this.q24,
                        "a": q3ans
                    })
                }
                if (q4ans != '') {
                    ques_ans_array.push({
                        "q": this.q25,
                        "a": q4ans
                    })
                }
            } else if (this.ques_id == 3) {
                var parent_ques_id = '';
                if (document.querySelector('input[name="parentqans"]:checked')) {
                    parent_ques_id = document.querySelector('input[name="parentqans"]:checked').value;
                }
                var loginId = localStorage.getItem('loginid');
                var token = localStorage.getItem('token');

                var ques_ans_array = [];

                let q1ans = '';
                let q2ans = '';
                let q2ans1 = [];
                let q3ans = '';
                let q3ans1 = [];
                let q3ans2 = [];
                let q4ans = '';
                let q5ans = '';
                let q5ans1 = [];
                let q6ans = '';

                if (document.querySelector('input[name="q31ans"]:checked')) {
                    q1ans = document.querySelector('input[name="q31ans"]:checked').value;
                }
                if (q1ans != '') {
                    ques_ans_array.push({
                        "q": this.q31,
                        "a": q1ans
                    })
                }

                if (document.querySelector('input[name="q32ans"]:checked')) {
                    q2ans = document.querySelector('input[name="q32ans"]:checked').value;
                    q2ans1.push(q2ans);
                }
                if (q2ans != '' && q2ans != this.q32ans4) {
                    ques_ans_array.push({
                        "q": this.q32,
                        "a": q2ans1
                    })
                }
                if (q2ans === this.q32ans4) {
                    this.othercat = true;
                    q2ans1.push(this.otherCat);
                    ques_ans_array.push({
                        "q": this.q32,
                        "a": q2ans1
                    })
                }

                if (document.querySelector('input[name="q33ans"]:checked')) {
                    q3ans = document.querySelector('input[name="q33ans"]:checked').value;
                    q3ans1.push(q3ans);
                    q3ans2.push(q3ans)
                }
                if (q3ans != '' && (q3ans != this.q33ans3 || q3ans != this.q33ans4)) {
                    ques_ans_array.push({
                        "q": this.q33,
                        "a": q3ans1
                    })
                }
                if (q3ans === this.q33ans3) {
                    this.dietaryRestrict = true;
                    q3ans1.push(this.dietaryrestrict);
                    ques_ans_array.push({
                        "q": this.q33,
                        "a": q3ans1
                    })
                }
                if (q3ans === this.q33ans4) {
                    this.customizeOption = true;
                    q3ans2.push(this.customizeoption);
                    ques_ans_array.push({
                        "q": this.q33,
                        "a": q3ans2
                    })
                }

                if (document.querySelector('input[name="q34ans"]:checked')) {
                    q4ans = document.querySelector('input[name="q34ans"]:checked').value;
                }
                if (q4ans != '') {
                    ques_ans_array.push({
                        "q": this.q34,
                        "a": q4ans
                    })
                }

                if (document.querySelector('input[name="q35ans"]:checked')) {
                    q5ans = document.querySelector('input[name="q35ans"]:checked').value;
                    q5ans1.push(q5ans);
                }
                if (q5ans != '' && q5ans != this.q35ans1) {
                    ques_ans_array.push({
                        "q": this.q35,
                        "a": q5ans1
                    })
                }
                if (q5ans === this.q35ans1) {
                    this.prodRecommandation = true;
                    q5ans1.push(this.prodrecommandation);
                    ques_ans_array.push({
                        "q": this.q35,
                        "a": q5ans1
                    })
                }
                if (document.querySelector('input[name="q36ans"]:checked')) {
                    q6ans = document.querySelector('input[name="q36ans"]:checked').value;
                }
                if (q6ans != '') {
                    ques_ans_array.push({
                        "q": this.q36,
                        "a": q6ans
                    })
                }
            }
            let formData = new FormData();
            if (ques_ans_array.length > 0) {
                for (let i = 0; i < ques_ans_array.length; i++) {
                    var d = JSON.stringify(ques_ans_array[i]);
                    formData.append('ques_ans_array[]', d);
                }
            }
            formData.append('customer_id', loginId);
            this.loader = true;
            var headers = {
                'Authorization': 'Bearer' + token,
                'Content-Type': 'multipart/form-data'
            }
            if (!this.getanswered) {
                formData.append('parent_ques_id', parent_ques_id);
                formData.append('questionnaireType', 'profile_update');
                this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/questionnaire`, formData, {
                        headers
                    })
                    .then((response) => {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Successfully submit your response.',
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {
                            this.$router.push({
                                path: '/buyer/personal-info'
                            })
                        })
                    })
                    .catch((error) => {
                    });
            } else {
                formData.append('parent_ques_id', parent_ques_id);
                formData.append('questionnaireType', 'profile_update');
                formData.append('_method', 'put');
                this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/questionnaire/${this.ques_id}`, formData, {
                        headers
                    })
                    .then((response) => {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'success',
                            title: response.data.message,
                            showConfirmButton: true,
                            timer: 5000
                        }).then(() => {})
                    })
                    .catch((error) => {
                    })
            }
        },
        createnewQuote() {
            this.$router.push({
                name: 'createquote'
            })
        },
        getQuestions(quesid) {
            let user_id = localStorage.getItem('loginid');
            let token = localStorage.getItem('token');
            const headers = {
                'Authorization': 'Bearer' + token,
                'Content-Type': 'multipart/form-data'
            }
            let formData = new FormData();
            formData.append('user_id', user_id);
            formData.append('parent_ques_id', quesid);
            this.loader = true;
            this.axios.post(process.env.VUE_APP_API_ENDPOINT + `/getquestion`, formData, {
                    headers
                })
                .then((response) => {
                    var data = response.data.data;
                    if (data.length > 0) {
                        this.getanswered = true;
                        Object.values(data).forEach(el => {
                            if (quesid == 1) {
                                if (el.question === this.q11) {
                                    var ans = el.ans;
                                    ans = ans.split(',');
                                    if (ans.length == 1) {
                                        if (this.q11a1 === ans[0]) {
                                            this.ansmatched111 = true;
                                        } else if (this.q11a2 === ans[0]) {
                                            this.ansmatched112 = true;
                                        } else if (this.q11a3 === ans[0]) {
                                            this.ansmatched113 = true;
                                        } else if (this.q11a4 === ans[0]) {
                                            this.ansmatched114 = true;
                                            this.selhomemadebusiness = true;
                                        }
                                    } else if (ans.length > 1) {
                                        if (this.q11a4 === ans[0]) {
                                            this.ansmatched114 = true;
                                            this.selhomemadebusiness = true;
                                            if (ans[1] && ((ans[1]).trim() === (this.q12a1).trim() || (ans[1]).trim() === (this.q12a2).trim() ||
                                                    (ans[1]).trim() === (this.q12a3).trim() || (ans[1]).trim() === (this.q12a4).trim())) {
                                                if ((this.q12a1).trim() === (ans[1]).trim()) {
                                                    this.ansmatched121 = true;
                                                } else if ((this.q12a2).trim() === (ans[1]).trim()) {
                                                    this.ansmatched122 = true;
                                                } else if ((this.q12a3).trim() === (ans[1]).trim()) {
                                                    this.ansmatched123 = true;
                                                } else if ((this.q12a4).trim() === (ans[1]).trim()) {
                                                    this.ansmatched124 = true;
                                                }
                                            }
                                            if (ans[2] && ((ans[2]).trim() === (this.q2opta1).trim() || (ans[2]).trim() === (this.q2opta2).trim() ||
                                                    (ans[2]).trim() === (this.q2opta3).trim() || (ans[2]).trim() === (this.q2opta4).trim())) {
                                                if ((this.q2opta1).trim() === (ans[2]).trim()) {
                                                    this.ansmatched_opt2_121 = true;
                                                } else if ((this.q2opta2).trim() === (ans[2]).trim()) {
                                                    this.ansmatched_opt2_122 = true;
                                                } else if ((this.q2opta3).trim() === (ans[2]).trim()) {
                                                    this.ansmatched_opt2_123 = true;
                                                } else if ((this.q2opta4).trim() === (ans[2]).trim()) {
                                                    this.ansmatched_opt2_124 = true;
                                                }
                                            }
                                            if (ans[3] && ((ans[3]).trim() === (this.q2opt3a1).trim() || (ans[3]).trim() === (this.q2opt3a2).trim() ||
                                                    (ans[3]).trim() === (this.q2opt3a3).trim() || (ans[3]).trim() === (this.q2opt3a4).trim())) {
                                                if ((this.q2opt3a1).trim() === (ans[3]).trim()) {
                                                    this.ansmatched_opt3_121 = true;
                                                } else if ((this.q2opt3a2).trim() === (ans[3]).trim()) {
                                                    this.ansmatched_opt3_122 = true;
                                                } else if ((this.q2opt3a3).trim() === (ans[3]).trim()) {
                                                    this.ansmatched_opt3_123 = true;
                                                } else if ((this.q2opt3a4).trim() === (ans[3]).trim()) {
                                                    this.ansmatched_opt3_124 = true;
                                                }
                                            }
                                        }
                                    }
                                } else if (el.question === this.q13) {
                                    if (this.q13a1 === el.ans) {
                                        this.ansmatched131 = true
                                    } else if (this.q13a2 === el.ans) {
                                        this.ansmatched132 = true
                                    } else if (this.q13a3 === el.ans) {
                                        this.ansmatched133 = true
                                    }
                                }
                            }
                            if (quesid == 2) {
                                if (el.question === this.q21) {
                                    this.existingbusiness = el.ans;
                                }
                                if (el.question === this.q22) {
                                    var ans = el.ans;
                                    ans = ans.split(',');
                                    if (this.q22ans1 === ans[0]) {
                                        this.q22ans1matched = true;
                                        this.addcategory = ans[1];
                                    }
                                    if (this.q22ans2 === ans[0]) {
                                        this.q22ans2matched = true;
                                    }
                                    if (this.q22ans3 === ans[0]) {
                                        this.q22ans3matched = true;
                                    }
                                }
                                if (el.question === this.q23) {
                                    this.product = el.ans;
                                }
                                if (el.question === this.q24) {
                                    this.sampleitem = el.ans;
                                }
                                if (el.question === this.q25) {
                                    this.productsamplelist = el.ans;
                                }
                            }
                            if (quesid == 3) {
                                if (el.question === this.q31) {
                                    if (this.q31ans1 === el.ans) {
                                        this.q31ans1matched = true;
                                    } else if (this.q31ans2 === el.ans) {
                                        this.q31ans2matched = true;
                                    } else if (this.q31ans3 === el.ans) {
                                        this.q31ans3matched = true;
                                    } else if (this.q31ans4 === el.ans) {
                                        this.q31ans4matched = true;
                                    }
                                }
                                if (el.question === this.q32) {
                                    var ans = el.ans;
                                    ans = ans.split(',');
                                    if (this.q32ans1 === ans[0]) {
                                        this.q32ans1matched = true;
                                    }
                                    if (this.q32ans2 === ans[0]) {
                                        this.q32ans2matched = true;
                                    }
                                    if (this.q32ans3 === ans[0]) {
                                        this.q32ans3matched = true;
                                    }
                                    if (this.q32ans4 === ans[0]) {
                                        this.q32ans4matched = true;
                                        this.othercat = true;
                                        this.otherCat = ans[1];
                                    }
                                }
                                if (el.question === this.q33) {
                                    var ans = el.ans;
                                    ans = ans.split(',');
                                    if (ans.length == 1) {
                                        if (this.q33ans1 === ans[0]) {
                                            this.q33ans1matched = true;
                                        }
                                        if (this.q33ans2 === ans[0]) {
                                            this.q33ans2matched = true;
                                        }
                                        if (this.q33ans5 === ans[0]) {
                                            this.q33ans5matched = true;
                                        }
                                    } else if (ans.length > 1) {
                                        if (this.q33ans3 === ans[0]) {
                                            this.q33ans3matched = true;
                                            this.dietaryRestrict = true;
                                            this.dietaryrestrict = ans[1]
                                        }
                                        if (this.q33ans4 === ans[0]) {
                                            this.q33ans4matched = true;
                                            this.customizeOption = true;
                                            this.customizeoption = ans[1];
                                        }
                                    }
                                }
                                if (el.question === this.q34) {
                                    if (this.q34ans1 === el.ans) {
                                        this.q34ans1matched = true;
                                    } else if (this.q34ans2 === el.ans) {
                                        this.q34ans2matched = true;
                                    }
                                }
                                if (el.question === this.q35) {
                                    var ans = el.ans;
                                    ans = ans.split(',');
                                    if (ans.length == 1) {
                                        if (this.q35ans2 === ans[0]) {
                                            this.q35ans2matched = true;
                                        }
                                    } else if (ans.length > 1) {
                                        if (this.q35ans1 === ans[0]) {
                                            this.q35ans1matched = true;
                                            this.prodRecommandation = true;
                                            this.prodrecommandation = ans[1]
                                        }
                                    }
                                }
                                if (el.question === this.q36) {
                                    if (this.q36ans1 === el.ans) {
                                        this.q36ans1matched = true;
                                    } else if (this.q36ans2 === el.ans) {
                                        this.q36ans2matched = true;
                                    }
                                }
                            }
                        })
                    } else {
                        this.getanswered = false;
                    }
                    this.loader = false;
                })
                .catch((error) => {
                })
        }
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
    }
};
</script>

<style scoped>
/* .childhead{
    color:#000;
    font-weight:800;
} */
</style>
