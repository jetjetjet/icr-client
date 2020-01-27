import React, { Component } from 'react';
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  FilterRow,
  Pager,
  Position,
  Form
} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';

import { Template } from 'devextreme-react/core/template';
import customStore from '../../_utilization/customStore';
import Role from './Role';
const store = customStore.cLoad('/role', 'role_id');

class RoleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  onToolbarPreparing = (e) => {
    e.toolbarOptions.items.unshift({
      location: 'before',
      template: 'namePage'
    });
  }

  toolbarItemRender = () => {
    return (
      <h4 className="mg-b-0 tx-spacing--1">Peran</h4>
    );
  }

  render() {
    return (
      <Role
        {...this.state}
        onToolbarPreparing={this.onToolbarPreparing}
        toolbarItemRender={this.toolbarItemRender}
      />
    )
  }
}

export default (RoleContainer);