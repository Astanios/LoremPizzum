import React from "react";
import { connect } from "react-redux";
import OrdersModal from "../components/OrdersModal";
import OrdersLogModal from "../components/OrdersLogModal";
import image1 from "../assets/pizza1.jpeg";
import image2 from "../assets/pizza2.jpg";
import image3 from "../assets/pizza3.jpg";
import image4 from "../assets/pizza4.jpg";
import image5 from "../assets/pizza5.jpg";
import image6 from "../assets/pizza6.jpg";

import { order, orders, update } from "../store/actions/actions";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
];
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {}
    };
  }
  handleInput = e => this.setState({ order: { ...this.state.order, [e.target.name]: e.target.value } })

  handleSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.search);
  };

  handleOpenLog = () => this.props.orders();
  handleOpenOrders = () => this.props.order(this.state.order);

  closeModal = () => this.props.update({ openModal: false });

  closeLogModal = () => this.props.update({ openLogModal: false });

  closeLogModal = () => this.props.update({ openLogModal: false });

  confirmOrder = () => {
    if (this.props.auth.isAuthenticated()) {
      const ordersLog = JSON.parse(localStorage.getItem("orders")) || [];
      console.log("ordenes", ordersLog);

      ordersLog.push({ ...this.state.order, timestamp: new Date() });
      localStorage.setItem("orders", JSON.stringify(ordersLog));
    }
    this.setState({ order: {} });
    this.props.update({ openModal: false });
  }

  orderValid = () => Object.keys(this.state.order).length !== 0 && !!Object.values(this.state.order).find(e => parseInt(e, 10) > 0);

  render() {
    const { data, openModal, openLogModal } = this.props;
    const { order } = this.state;
    const { isAuthenticated } = this.props.auth;

    const login = () => {
      this.props.auth.login();
    }

    const logout = () => {
      this.props.auth.logout();
    }
    const isAuth = isAuthenticated();
    //localStorage.removeItem("orders")

    return (
      <div className="body">
        <OrdersModal
          order={order}
          confirm={this.confirmOrder}
          isOpen={openModal}
          closeModal={this.closeModal}
        />
        <OrdersLogModal
          orders={JSON.parse(localStorage.getItem("orders"))}
          isOpen={openLogModal}
          closeModal={this.closeLogModal}
        />
        <div className="nav">
          <div>
            <h1>Welcome to Lorem Pizzum</h1>
          </div>
          <div>
            {
              isAuth ? (
                <div className="nav-list">
                  <div>
                    <button
                      onClick={this.handleOpenLog}
                      className="header-button"
                    >
                      Your orders
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={logout}
                      className="header-button"
                    >
                      Logout
                    </button>
                  </div>
                </div>

              ) : (
                  <button
                    onClick={login}
                    className="header-button"
                  >
                    Login
                  </button>
                )
            }
          </div>
        </div>
        <div
          className={`searchSubtitle${this.orderValid() ? "-active" : ""}`}
          onClick={this.handleOpenOrders}
        >
          <h2>Click here to make your order</h2>
        </div>
        <div className="gif-list">
          {data &&
            data.map((pizza, i) => (
              <div
                key={i}
                className="gif-item"
              >
                <img
                  alt="Pizza demonstration"
                  src={images[i]}
                  height="200"
                  width="200"
                />
                <div className="gif-item_content">
                  <h1>{pizza.name}</h1>
                  <ul>
                    {pizza.ingredients.map((ingredient, i) =>
                      <li key={i}>
                        {ingredient}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="gif-item_quantity">
                  <label>
                    Quantity:
                  </label>
                  <input
                    name={pizza.name}
                    type="number"
                    min="0"
                    max="99"
                    value={order[pizza.name] || 0}
                    placeholder="0"
                    onChange={this.handleInput}
                  />
                </div>
              </div>
            ))}
        </div>
      </div >
    );
  }
}
const mS = ({ dataFetchReducer }) => {
  return {
    data: dataFetchReducer.data,
    openModal: dataFetchReducer.openModal,
    openLogModal: dataFetchReducer.openLogModal
  };
};

const mD = {
  order,
  orders,
  update
};

export default connect(mS, mD)(Home);

/*
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleInput}
            placeholder="Search something!"
          />
          <button onClick={this.handleSubmit}>Submit</button>
*/