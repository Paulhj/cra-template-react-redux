import React from "react";
import ItemForm from "./ItemForm";
import { shallow } from "enzyme";

function renderItemForm(args) {
  const defaultProps = {
    users: [],
    item: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<ItemForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderItemForm();
  console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderItemForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderItemForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
