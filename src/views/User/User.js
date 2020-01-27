import React, { Component } from 'react';
import DataGrid, { Column,
    Editing,
    Popup,
    Paging,
    Lookup,
    Position,
    Form } from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import broker from '../../_utilization/broker';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:null
    }
  }
  componentDidMount() {
    broker.fetch.get('/user/getAll')
    .then(res => {
      this.setState({data:res.data.data});
    })
    .catch(err => {
    });
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
                      <li className="breadcrumb-item active" aria-current="page">User</li>
                    </ol>
                  </nav>
                  <h4 className="mg-b-0 tx-spacing--1">User</h4>
                </div>
              </div>
              <DataGrid dataSource={this.state.data} keyExpr="user_id" showBorders={true} >
              <Paging enabled={false} />
                <Editing mode="popup" allowUpdating={true} allowAdding={true} >
                  <Popup title="Employee Info" showTitle={true} width={700} height={525}>
                    <Position my="top" at="top" of={window} />
                  </Popup>
                  <Form>
                    <Item itemType="group" colCount={1} colSpan={2}>
                      <Item dataField="user_name" />
                      <Item dataField="user_role" />
                      <Item dataField="user_fullname" />
                      <Item dataField="user_phone" />
                    </Item>
                  </Form>
                </Editing>
                <Column dataField="user_name" />
                <Column dataField="user_role" />
                <Column dataField="user_fullname" />
                <Column dataField="user_phone" />
              </DataGrid>
            </div>
          </div>
      );
  }
}

export default (User);