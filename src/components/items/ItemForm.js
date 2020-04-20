import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const ItemForm = ({
  item,
  users,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{item.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="Name"
        value={item.name}
        onChange={onChange}
        error={errors.name}
      />

      <SelectInput
        name="userId"
        label="User"
        value={item.userId || ""}
        defaultOption="Select User"
        options={users.map(user => ({
          value: user.id,
          text: user.name
        }))}
        onChange={onChange}
        error={errors.user}
      />

      <TextInput
        name="description"
        label="Description"
        value={item.description}
        onChange={onChange}
        error={errors.description}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

ItemForm.propTypes = {
  users: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default ItemForm;
