import React, { Component } from 'react'

export default class MyDashboard extends Component {
    render() {
        return (
            <div className="wrappAccount">
            <h2 className="title">MY DASHBOARD</h2>
            <div className="Shipping">
              <div
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                className="myAccount"
              >
                MY ACCOUNT
                <i className="fa fa-chevron-down ml-3 " />
              </div>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <ul className="listIcon">
                    <li className="itemIcon">
                      <i className="  mr-3 fa fa-user" />
                      <div className="text">Account Dashboard</div>
                    </li>
                    <li className="itemIcon">
                      <i className="  mr-3 fa fa-house-damage" />

                      <div className="text">Account Information</div>
                    </li>

                    <li className="itemIcon">
                      <i className="  mr-3 fa fa-book"></i>
                      <div className="text">Address Book</div>
                    </li>

                    <li className="itemIcon">
                      <i class="  mr-3 fab fa-first-order"></i>
                      <div className="text">My Orders</div>
                    </li>

                    <li className="itemIcon">
                      <i class="  mr-3 fa fa-credit-card"></i>
                      <div className="text">Billing Agreements</div>
                    </li>

                    <li className="itemIcon">
                      <i className="  mr-3 fa fa-star"></i>
                      <div className="text">My Wishlist</div>
                    </li>

                    <li className="itemIcon">
                      <i className="  mr-3 fa fa-envelope"></i>
                      <div className="text">Newsletter Subscriptions</div>
                    </li>
                    <li className="itemIcon">
                      <i className="  mr-3 fab fa-cc-amazon-pay"></i>
                      <div className="text">RMA</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wrappAccount__body">
              <div className="container-fluid">
                <div className="row list ">
                  <div className="col-md-3 col-sm-12">
                    <div className="item  active">
                      <i className="fa fa-user" />

                      <div className="text">Account Dashboard</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="item">
                      <i className="fa fa-house-damage" />

                      <div className="text">Account Information</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="item">
                      <i className="fa fa-book"></i>
                      <div className="text">Address Book</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="item">
                      <i class="fab fa-first-order"></i>
                      <div className="text">My Orders</div>
                    </div>
                  </div>
                </div>

                <div className="row list ">
                  <div className="col-md-3 col-sm-12">
                    <div className="item">
                      <i class="fa fa-credit-card"></i>
                      <div className="text">Billing Agreements</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="item">
                      <i className="fa fa-star"></i>
                      <div className="text">My Wishlist</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="item">
                      <i className="fa fa-envelope"></i>
                      <div className="text">Newsletter Subscriptions</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="item">
                      <i className="fab fa-cc-amazon-pay"></i>
                      <div className="text">RMA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}