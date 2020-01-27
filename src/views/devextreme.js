import React, { Component } from 'react';
import Chart, {
    ArgumentAxis,
    Series,
    Legend
} from 'devextreme-react/chart';

const data = [{
    arg: 1990,
    val: 5320816667
}, {
    arg: 2000,
    val: 6127700428
}, {
    arg: 2010,
    val: 6916183482
}];
 
class devextreme extends Component {
    componentWillMount() {
    }

    render(){
        return (
            <div className="content-body">
        <div className="container pd-x-0">
          <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
            <div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                  <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Devextreme</li>
                </ol>
              </nav>
              <h4 className="mg-b-0 tx-spacing--1">Chart</h4>
            </div>
            <div className="d-none d-md-block">
              <button className="btn btn-sm pd-x-15 btn-white btn-uppercase"><i data-feather="mail" className="wd-10 mg-r-5"></i> Email</button>
              <button className="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><i data-feather="printer" className="wd-10 mg-r-5"></i> Print</button>
              <button className="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><i data-feather="file" className="wd-10 mg-r-5"></i> Generate Report</button>
            </div>
          </div>

          <Chart dataSource={data}>
                <ArgumentAxis tickInterval={10} />
                <Series type="bar" />
                <Legend visible={false} />
            </Chart>
          </div>
          </div>

            
        );
    }

}

export default (devextreme);