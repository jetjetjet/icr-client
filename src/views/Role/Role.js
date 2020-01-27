import React, { Component } from 'react';
import DataGrid, { Column,
    Editing,
    Popup,
    Paging,
    FilterRow,
    Pager,
    Position,
    Form } from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';

import { Template } from 'devextreme-react/core/template';
import customStore from '../../_utilization/customStore';
const store = customStore.cLoad('/role', 'role_id');

class Role extends Component {
    constructor(props){
      super(props);
      this.state = {
        data:null
      };
    }

    onToolbarPreparing(e) {
      e.toolbarOptions.items.unshift({
        location: 'before',
        template: 'namePage'
      });
    }

    toolbarItemRender() {
      return (
        <h4 className="mg-b-0 tx-spacing--1">Peran</h4>
      );
    }

    render(){
        return (
            <div className="content-body">
              <div className="container pd-x-0">
                <div className="d-sm-flex align-items-center justify-content-between">
                  <div>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                        <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Peran</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <DataGrid 
                  dataSource={store}
                  showBorders={true}
                  onToolbarPreparing={this.onToolbarPreparing}>
                <FilterRow visible={true} />
                  <Editing mode="popup" allowUpdating={true} allowAdding={true} allowDeleting={true} >
                    <Popup title="Employee Info" showTitle={true} width={700} height={525}>
                      <Position my="top" at="top" of={window} />
                    </Popup>
                    <Form>
                      <Item itemType="group" colCount={1} colSpan={2}>
                        <Item dataField="role_name" />
                        <Item dataField="role_description" />
                      </Item>
                    </Form>
                  </Editing>
                  <Column dataField="role_id" visible={false} />
                  <Column dataField="role_name" caption="Nama Peran" />
                  <Column dataField="role_description" caption="Deskripsi" />
                  <Paging defaultPageSize={10} />
                  <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={[10, 20, 50]}
                  />
                  <Template name="namePage" render={this.toolbarItemRender} />
                </DataGrid>
              </div>
            </div>
        );
    }
  }
  
  export default (Role);