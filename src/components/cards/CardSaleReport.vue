<template lang="html">
<div className="ps-card ps-card--sale-report">
    <div className="ps-card__header salesHeader">
        <h4>Sales Reports</h4>
    </div>
    <div className="ps-card__content">
        <div class="toolbar">
            <button id="one_month" @click="updateData('one_month')" :class="{active: selection==='one_month'}">
                1M
            </button>
            <button id="six_months" @click="updateData('six_months')" :class="{active: selection==='six_months'}">
                6M
            </button>
            <button id="one_year" @click="updateData('one_year')" :class="{active: selection==='one_year'}">
                1Y
            </button>
            <button id="ytd" @click="updateData('ytd')" :class="{active: selection==='ytd'}">
                YTD
            </button>
            <button id="all" @click="updateData('all')" :class="{active: selection==='all'}">
                ALL
            </button>
        </div>
        <apexchart type="area" ref="chart" height="350" :options="state.chartOptions" :series="state.series"></apexchart>
    </div>
</div>
</template>

<script>
import dateFormat from '@vue-formily/date-format';
export default {
    name: "CardSaleReport",
    data() {
        return {
            state: {
                series: [{
                        name: 'New',
                        data: []
                    }, {
                        name: 'InProgress',
                        data: []
                    },
                    {
                        name: 'Cancelled',
                        data: []
                    },
                    {
                        name: 'InShipping',
                        data: []
                    },
                    {
                        name: 'Approved',
                        data: []
                    },
                    {
                        name: 'Delivered',
                        data: []
                    },
                ],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'area',
                        zoom: {
                            autoScaleYaxis: true
                        },
                        dropShadow: {
                            enabled: true,
                            color: '#000',
                            top: 18,
                            left: 7,
                            blur: 10,
                            opacity: 0.2
                        },
                        toolbar: {
                            show: true
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    colors: ['#1a04de', '#e69e02', '#ed0249', '#e34005', '#018578', '#29eb02'],
                    stroke: {
                        curve: 'straight',
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shadeIntensity: 1,
                            inverseColors: false,
                            opacityFrom: 0.0,
                            opacityTo: 0.01,
                            stops: [20, 100, 100, 100]
                        },
                    },
                    grid: {
                        borderColor: '#e7e7e7',
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {},
                        categories: [],
                        title: {
                            text: 'Dates'
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Status Count'
                        },
                    },
                    tooltip: {
                        shared: true,
                        x: {
                            format: 'dd/MM/yy HH:mm'
                        },
                    },
                    legend: {
                        position: 'bottom',
                        horizontalAlign: 'center',
                    },

                },
            },
            selection: 'all',
            usertype: '',
            testflag: '',
            salesReport: [],
            categories: [],
            chartDateList: []
        };
    },
    methods: {
        updateData: function (timeline) {
            this.selection = timeline;
            var datelist = this.chartDateList.sort();
            var one_month_ago = new Date();
            one_month_ago.setMonth(one_month_ago.getMonth() - 1);
            one_month_ago.setHours(0, 0, 0, 0);
            var six_month_ago = new Date();
            six_month_ago.setMonth(six_month_ago.getMonth() - 6);
            six_month_ago.setHours(0, 0, 0, 0);
            var one_yr_ago = new Date();
            one_yr_ago.setMonth(one_yr_ago.getMonth() - 12);
            one_yr_ago.setHours(0, 0, 0, 0);
            var getyear = new Date();
            var yr_to_date = new Date(getyear.getFullYear(), 0, 1);
            yr_to_date.setHours(0, 0, 0, 0);
            switch (timeline) {
                case 'one_month':
                    this.$refs.chart.zoomX(
                        new Date(one_month_ago).getTime(),
                        new Date().getTime()
                    )
                    break
                case 'six_months':
                    this.$refs.chart.zoomX(
                        new Date(six_month_ago).getTime(),
                        new Date().getTime()
                    )
                    break
                case 'one_year':
                    this.$refs.chart.zoomX(
                        new Date(one_yr_ago).getTime(),
                        new Date().getTime()
                    )
                    break
                case 'ytd':
                    this.$refs.chart.zoomX(
                        new Date(yr_to_date).getTime(),
                        new Date().getTime()
                    )
                    break
                case 'all':
                    this.$refs.chart.zoomX(
                        new Date(datelist[0]).getTime(),
                        new Date(datelist[(datelist.length) - 1]).getTime()
                    )
                    break
                default:
            }
        },

        async fetchQuoteList() {
            var loginid = localStorage.getItem('loginid');
            let formData = new FormData();
            formData.append('search_by_quote_id', '');
            formData.append('categoryname', '');
            formData.append('product', '');
            formData.append('reqdate', '');
            formData.append('user_id', loginid);
            formData.append('quoteflag', 'get-quote');
            if (this.usertype == 'Admin') {
                formData.append('usertype', 'Admin');
            } else {
                formData.append('usertype', 'Supplier');
            }
            var token = localStorage.getItem("token");
            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            };
            this.loader = true;
            this.testflag = '';
            await this.axios.post(
                    process.env.VUE_APP_API_ENDPOINT + '/get-reqquote', formData, {
                        headers
                    })
                .then(response => {
                    this.loader = false;
                    if (response.data) {
                        this.testflag = 'Data Found';
                    }
                    var data = response.data.data;
                    var datelist = [];
                    var series = [];
                    var status = ['New', 'InProgress', 'Cancelled', 'InShipping', 'Approved', 'Delivered'];

                    Object.values(data).forEach((el) => {
                        if (el.status == 'New') {
                            var d = new Date(el.created_at);
                            var dd = dateFormat.format("yyyy.MM.dd", d); // Sunday, Dec 27, '20
                            if (!datelist.includes(dd)) {
                                datelist.push(dd);
                                this.chartDateList.push(dd);
                            }
                        } else {
                            var d = new Date(el.updated_at);
                            var dd = dateFormat.format("yyyy.MM.dd", d);
                            if (!datelist.includes(dd)) {
                                datelist.push(dd);
                                this.chartDateList.push(dd);
                            }
                        }
                    });
                    var datelist = datelist.sort();
                    for (let s of status) {
                        let temp_res = {
                            'name': s,
                            'data': []
                        }
                        for (let date of datelist) {
                            var temp = data.filter((x) => {
                                if (s == 'New') {
                                    var d = new Date(x.created_at);
                                    var compare_dt = dateFormat.format("yyyy.MM.dd", d);
                                } else {
                                    var d = new Date(x.updated_at);
                                    var compare_dt = dateFormat.format("yyyy.MM.dd", d);
                                }
                                return x.status == s && compare_dt == date
                            })
                            temp_res.data.push(temp.length)
                        }
                        series.push(temp_res);
                    }
                    var vm = this;
                    vm.state.chartOptions = {
                            ...vm.state.chartOptions,
                            ...{
                                markers: {
                                    size: 5,
                                    hover: {
                                        size: 9
                                    }
                                },
                                xaxis: {
                                    type: 'datetime',
                                    min: new Date(datelist[0]).getTime(),
                                    max: new Date(datelist[(datelist.length) - 1]).getTime(),
                                    // tickAmount: 12,
                                    labels: {
                                        formatter: function (val, timestamp) {
                                            var date = new Date(timestamp);
                                            return dateFormat.format('yyyy.MM.dd', date);
                                        }
                                    },
                                    categories: datelist.map((e) => {
                                        return e;
                                    })
                                }
                            },
                        },
                        vm.state.series = series;
                })
                .catch(error => {});
        },
    },
    mounted() {
        this.usertype = localStorage.getItem('userType');
        this.fetchQuoteList();
    }
};
</script>

<style scoped>
.toolbar {
    padding: 1rem !important;
}

.toolbar button {
    border: 1px solid #ababab;
    padding: 0.5rem;
    border-radius: 15%;
    margin-right: 5px;
}

.toolbar button.active {
    background-color: #00c7ff;
    color: #161616;
}
</style>
