import React, { Component } from 'react'
import APIArticleList from '../../api/article/list';

export default class testserver extends Component {
  getData = async () => {
    const resp = await APIArticleList({
      //   user_id: this.context.user.user_id,
    });
    if (resp.status === 200) {
      this.setState({
        data: resp.data,
      });
    } else{
        alert("error")
    }
    console.log(resp)
  };

  render() {
    return <div>testserver</div>;
  }
}
