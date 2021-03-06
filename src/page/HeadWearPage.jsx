import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import TitlePageContainer from "../container/TitlePageContainer";
import ViewDisplayProductContainer from "../container/ViewDisplayProductContainer";
export default class HeadWearPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Breadcrumb title={"Headwear"} />
        <TitlePageContainer title={"Headwear"} />
        <ViewDisplayProductContainer
          history={this.props.history}
          productType={"Headwear"}
        />
      
      </div>
    );
  }
}
