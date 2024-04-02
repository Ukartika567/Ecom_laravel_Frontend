<template>
<LoaderComponent v-if="this.loader" />
<div class="container userDashboard">
    <div class="row">
        <div class="col-nd-7 col-sd-12 col-md-12 dashboardDiv1">
            <div class="headContainerdiv mb-0">
                <div class="row">
                    <div class="col-md-12">
                        <div class="ps-block__left imgmaindiv headText">
                            User Dashboard
                        </div>
                    </div>
                </div>
            </div>
            <div class="sls custdashboardDiv">
                <div class="row">
                    <div class="col-md-8 w-50 h-50 gap-2 ">
                        <div class="row">
                            <div class="col-md-3">
                                <Card>
                                    <template #title>ReqQuoteIcon</template>
                                    <template #content>
                                        <p class="m-0">
                                            50%
                                            Request Quote
                                        </p>
                                    </template>
                                </Card>
                            </div>
                            <div class="col-md-3">
                                <Card>
                                    <template #title>RespQuoteIcon</template>
                                    <template #content>
                                        <p class="m-0">
                                            30%
                                            Response Quote
                                        </p>
                                    </template>
                                </Card>
                            </div>
                            <div class="col-md-3">
                                <Card>
                                    <template #title>ApprovedQuoteIcon</template>
                                    <template #content>
                                        <p class="m-0">
                                            15%
                                            Approved
                                        </p>
                                    </template>
                                </Card>
                            </div>
                            <div class="col-md-3">
                                <Card>
                                    <template #title>DeleveredQuoteIcon</template>
                                    <template #content>
                                        <p class="m-0">
                                            15%
                                            Delivered
                                        </p>
                                    </template>
                                </Card>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <Card>
                                    <template #title>Requested Quote</template>
                                    <template #content>
                                        <apexchart type="area" ref="chart" height="350" :options="lineChartState.chartOptions" :series="lineChartState.series"></apexchart>
                                    </template>
                                </Card>
                            </div>
                            <div class="col-md-6">
                                <Card>
                                    <template #title>Resonse Quote</template>
                                    <template #content>
                                        <apexchart type="bar" height="350" :options="columnChartState.chartOptions" :series="columnChartState.series"></apexchart>
                                    </template>
                                </Card>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <Card>
                                    <template #title>Approved Orders</template>
                                    <template #content>
                                        <apexchart type="area" height="350" :options="areaChartState.chartOptions" :series="areaChartState.series"></apexchart>
                                    </template>
                                </Card>
                            </div>
                            <div class="col-md-6 pieChartDiv">
                                <Card>
                                    <template #title>Delivered Order</template>
                                    <template #content>
                                        <apexchart type="pie" width="380"  :options="pieChartState.chartOptions" :series="pieChartState.series"></apexchart>
                                    </template>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 w-90 h-75">
                        <div class="row">
                            <div class="col-md-12">
                                <Card>
                                    <template #title>Customer Satisfaction</template>
                                    <template #content>
                                        <apexchart type="pie" width="380"  :options="pieChartState.chartOptions" :series="pieChartState.series"></apexchart>
                                    </template>
                                </Card>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <Card>
                                    <template #title>Inventories</template>
                                    <template #content>
                                        <p class="m-0">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                                            quas!
                                        </p>
                                    </template>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
export default {
    name: 'customerDashboard',
    components: {
        LoaderComponent
    },
    data() {
        return {
            loader: false,
            lineChartState: {
                series: [{
                    name: "Desktops",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                }],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'line',
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    title: {
                        text: 'Product Trends by Month',
                        align: 'left'
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    markers: {
                        size: 1
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    }
                },
            },
            columnChartState: {
                series: [{
                    name: 'PRODUCT A',
                    data: [44, 55, 41, 67, 22, 43]
                }, {
                    name: 'PRODUCT B',
                    data: [13, 23, 20, 8, 13, 27]
                }, {
                    name: 'PRODUCT C',
                    data: [11, 17, 15, 15, 21, 14]
                }, {
                    name: 'PRODUCT D',
                    data: [21, 7, 25, 13, 22, 8]
                }],
                chartOptions: {
                    chart: {
                        type: 'bar',
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true
                        },
                        zoom: {
                            enabled: true
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            borderRadius: 10,
                            dataLabels: {
                                total: {
                                    enabled: true,
                                    style: {
                                        fontSize: '13px',
                                        fontWeight: 900
                                    }
                                }
                            }
                        },
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                            '01/05/2011 GMT', '01/06/2011 GMT'
                        ],
                    },
                    legend: {
                        position: 'right',
                        offsetY: 40
                    },
                    fill: {
                        opacity: 1
                    }
                },
            },
            areaChartState: {
                series: [{
                    name: 'series1',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }, {
                    name: 'series2',
                    data: [11, 32, 45, 32, 34, 52, 41]
                }],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'area'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                    },
                    tooltip: {
                        x: {
                            format: 'dd/MM/yy HH:mm'
                        },
                    },
                },

            },
            pieChartState: {
                series: [44, 55, 13, 43, 22],
                chartOptions: {
                    chart: {
                        width: 380,
                        type: 'pie',
                        height:400

                    },
                    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
            }
        };
    },
    methods: {},
    mounted() {
        // this.loader = true;
        this.usertype = localStorage.getItem('userType');
    }
};
</script>

<style scoped>
.custdashboardDiv .pieChartDiv .p-card.p-component{
    height: 410px !important
}
</style>
