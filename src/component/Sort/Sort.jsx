import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../Store/Action/action";
class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilter: false,
      showOrderBy: false,
      sort: "",
    };
  }
  sort = (value) => {
    this.setState({
      sort: value,
    });
    this.props.sort(value);
  };

  openOrderBy = () => {
    this.setState({
      showOrderBy: !this.state.showOrderBy,
    });
  };

  onShowFilter = () => {
    this.setState({
      showFilter: !this.state.showFilter,
    });
  };

  render() {
    return (
      <div className="wrapperSort">
        <div className="filterBy" onClick={() => this.onShowFilter()}>
          filter by
        </div>
        <div className="warpOrder ">
          <div className="orderBy" onClick={() => this.openOrderBy()}>
            order by
            {this.state.showOrderBy ? (
              <i className=" ml-2 fa fa-angle-up"></i>
            ) : (
              <i className=" ml-2  fa fa-angle-down" />
            )}
          </div>
          <div
            className="orderBy__body__content"
            style={{ display: this.state.showOrderBy ? "block" : "none" }}
          >
            <ul className="listSort">
              <li
                className={`listSort--item ${
                  this.state.sort === "name-ascending" ? "active" : ""
                }`}
                onClick={() => this.sort("name-ascending")}
              >
                Name (ascending)
              </li>
              <li
                className={`listSort--item ${
                  this.state.sort === "name-descending" ? "active" : ""
                }`}
                onClick={() => this.sort("name-descending")}
              >
                Name (descending)
              </li>
              <li
                className={`listSort--item ${
                  this.state.sort === "price-ascending" ? "active" : ""
                }`}
                onClick={() => this.sort("price-ascending")}
              >
                Price (ascending)
              </li>
              <li
                className={`listSort--item ${
                  this.state.sort === "price-descending" ? "active" : ""
                }`}
                onClick={() => this.sort("price-descending")}
              >
                Price (descending)
              </li>
            </ul>
          </div>
        </div>

        <div
          className="filterChoosen"
          style={{
            transform: this.state.showFilter ? " translateY(0%)" : "",
          }}
        >
          <div className="close" onClick={() => this.onShowFilter()}>
            <i className="fa fa-times" />
          </div>
          <div className="container">
            <p className="titleFilter">FILTER BY</p>
            <div className="row filterChoosen__list ">
              <div className="col">
                <ul className="listCategoryFilter">
                  <li className="listCateforyFilter__item cateMain ">
                    category
                  </li>
                  <li className="listCateforyFilter__item">leather goods</li>
                  <li className="listCateforyFilter__item">leather goods</li>
                  <li className="listCateforyFilter__item">leather goods</li>
                  <li className="listCateforyFilter__item">leather goods</li>
                  <li className="listCateforyFilter__item">leather goods</li>
                  <li className="listCateforyFilter__item">leather goods</li>
                </ul>
              </div>
              <div className="col">
                <ul className="listCategoryFilter">
                  <li className="listCateforyFilter__item cateMain ">color</li>
                  <li className="listCateforyFilter__item">
                    BROWN/ NERO PEGASO
                  </li>
                  <li className="listCateforyFilter__item">
                    BROWN/ NERO PEGASO
                  </li>
                  <li className="listCateforyFilter__item">
                    BROWN/ NERO PEGASO
                  </li>
                  <li className="listCateforyFilter__item">
                    BROWN/ NERO PEGASO
                  </li>
                  <li className="listCateforyFilter__item">
                    BROWN/ NERO PEGASO
                  </li>
                  <li className="listCateforyFilter__item">
                    BROWN/ NERO PEGASO
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="listCategoryFilter">
                  <li className="listCateforyFilter__item cateMain ">size</li>
                  <li className="listCateforyFilter__item">37</li>
                  <li className="listCateforyFilter__item">37</li>
                  <li className="listCateforyFilter__item">37</li>
                  <li className="listCateforyFilter__item">37</li>
                  <li className="listCateforyFilter__item">37</li>
                  <li className="listCateforyFilter__item">37</li>
                </ul>
              </div>
              <div className="col">
                <ul className="listCategoryFilter">
                  <li className="listCateforyFilter__item cateMain ">price</li>
                  <li className="listCateforyFilter__item">€ 1000 - € 2000</li>
                  <li className="listCateforyFilter__item">€ 1000 - € 2000</li>
                  <li className="listCateforyFilter__item">€ 1000 - € 2000</li>
                  <li className="listCateforyFilter__item">€ 1000 - € 2000</li>
                  <li className="listCateforyFilter__item">€ 1000 - € 2000</li>
                  <li className="listCateforyFilter__item">€ 1000 - € 2000</li>
                </ul>
              </div>
              <div className="col">
                <ul className="listCategoryFilter">
                  <li className="listCateforyFilter__item cateMain ">mood</li>
                  <li className="listCateforyFilter__item">CALL</li>
                  <li className="listCateforyFilter__item">CALL</li>
                  <li className="listCateforyFilter__item">CALL</li>
                  <li className="listCateforyFilter__item">CALL</li>
                  <li className="listCateforyFilter__item">CALL</li>
                  <li className="listCateforyFilter__item">CALL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sort: (type) => {
      dispatch(action.sort(type));
    },
  };
};

export default connect(null, mapDispatchToProps)(Sort);
