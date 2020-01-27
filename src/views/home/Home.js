import React, { Component } from 'react';

// import home_1 from '../../_assets/img/home-1.png';
// import home_2 from '../../_assets/img/home-2.png';

class Home extends Component {

    render(){
        return(
            <div className="content-body">
        <div className="container pd-x-0">
          <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
            <div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                  <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Sales Monitoring</li>
                </ol>
              </nav>
              <h4 className="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
            </div>
            <div className="d-none d-md-block">
              <button className="btn btn-sm pd-x-15 btn-white btn-uppercase"><i data-feather="mail" className="wd-10 mg-r-5"></i> Email</button>
              <button className="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><i data-feather="printer" className="wd-10 mg-r-5"></i> Print</button>
              <button className="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><i data-feather="file" className="wd-10 mg-r-5"></i> Generate Report</button>
            </div>
          </div>

          <div className="row row-xs">
            <div className="col-sm-6 col-lg-3">
              <div className="card card-body">
                <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Conversion Rate</h6>
                <div className="d-flex d-lg-block d-xl-flex align-items-end">
                  <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">0.81%</h3>
                  <p className="tx-11 tx-color-03 mg-b-0"><span className="tx-medium tx-success">1.2% <i className="icon ion-md-arrow-up"></i></span></p>
                </div>
                <div className="chart-three">
                    <div id="flotChart3" className="flot-chart ht-30"></div>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
              <div className="card card-body">
                <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Unique Purchases</h6>
                <div className="d-flex d-lg-block d-xl-flex align-items-end">
                  <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">3,137</h3>
                  <p className="tx-11 tx-color-03 mg-b-0"><span className="tx-medium tx-danger">0.7% <i className="icon ion-md-arrow-down"></i></span></p>
                </div>
                <div className="chart-three">
                    <div id="flotChart4" className="flot-chart ht-30"></div>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
              <div className="card card-body">
                <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Avg. Order Value</h6>
                <div className="d-flex d-lg-block d-xl-flex align-items-end">
                  <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">$306.20</h3>
                  <p className="tx-11 tx-color-03 mg-b-0"><span className="tx-medium tx-danger">0.3% <i className="icon ion-md-arrow-down"></i></span></p>
                </div>
                <div className="chart-three">
                    <div id="flotChart5" className="flot-chart ht-30"></div>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
              <div className="card card-body">
                <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Order Quantity</h6>
                <div className="d-flex d-lg-block d-xl-flex align-items-end">
                  <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">1,650</h3>
                  <p className="tx-11 tx-color-03 mg-b-0"><span className="tx-medium tx-success">2.1% <i className="icon ion-md-arrow-up"></i></span></p>
                </div>
                <div className="chart-three">
                    <div id="flotChart6" className="flot-chart ht-30"></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }

}

export default (Home);