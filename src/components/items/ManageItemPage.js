// Item template page using a class
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { loadItems, saveItem } from "../../redux/actions/itemActions";
import { loadUsers } from "../../redux/actions/userActions";
import ItemForm from "./ItemForm";
import { newItem } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageItemPage({
  items,
  users,
  loadItems,
  loadUsers,
  saveItem,
  history,
  ...props
}) {
  const [item, setItem] = useState({ ...props.item });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      loadItems().catch(error => {
        alert("Loading items failed: " + error);
      });
    } else {
      setItem({ ...props.item });
    }

    if (users.length === 0) {
      loadUsers().catch(error => {
        alert("Loading users failed: " + error);
      });
    }
  }, [props.item]);

  function handleChange(event) {
    const { name, value } = event.target;

    setItem(prevItem => ({
      ...prevItem,
      [name]: name === "userId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { name, userId } = item;
    const errors = {};

    if (!name) errors.name = "Name is required.";
    if (!userId) errors.user = "User is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveItem(item)
      .then(() => {
        toast.success("Item Saved");
        history.push("/items");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return items.length === 0 || users.length === 0 ? (
    <Spinner />
  ) : (
    <ItemForm
      item={item}
      errors={errors}
      users={users}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageItemPage.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  loadItems: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

//THIS IS A SELECTOR.  COURSES CAN BE MEMOIZED.  Could use a library like Reselect.
export function getItemBySlug(items, slug) {
  return items.find(item => item.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const item =
    slug && state.items.length > 0 ? getItemBySlug(state.items, slug) : newItem;
  return {
    item,
    items: state.items,
    users: state.users
  };
}

const mapDispatchToProps = {
  loadItems,
  loadUsers,
  saveItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageItemPage);
