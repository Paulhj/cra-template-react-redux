// Item template page using a class
import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import * as itemActions from "../../redux/actions/itemActions";
import * as userActions from "../../redux/actions/userActions";
import { bindActionCreators } from "redux";
import ItemList from "./ItemList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class ItemsPage extends React.Component {
  state = {
    redirectToAddItemPage: false
  };

  componentDidMount() {
    const { items, users, actions } = this.props;

    if (items.length === 0) {
      actions.loadItems().catch(error => {
        alert("Loading items failed: " + error);
      });
    }

    if (users.length === 0) {
      actions.loadUsers().catch(error => {
        alert("Loading users failed: " + error);
      });
    }
  }

  handleDeleteItem = async item => {
    toast.success("Item Deleted.");
    try {
      this.props.actions.deleteItem(item);
    } catch (error) {
      toast.error("Delete Failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddItemPage && <Redirect to="/item" />}
        <h2>Items</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddItemPage: true })}
            >
              Add Item
            </button>

            <ItemList
              items={this.props.items}
              onDeleteClick={this.handleDeleteItem}
            />
          </>
        )}
      </>
    );
  }
}

ItemsPage.propTypes = {
  items: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    items:
      state.users.length === 0
        ? []
        : state.items.map(item => {
            return {
              ...item,
              userName: state.users.find(u => u.id === item.userId).name
            };
          }),
    users: state.users,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadItems: bindActionCreators(itemActions.loadItems, dispatch),
      loadUsers: bindActionCreators(userActions.loadUsers, dispatch),
      deleteItem: bindActionCreators(itemActions.deleteItem, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);
