import React from "react";
import { mount } from "enzyme";
import { users, newItem, items } from "../../../tools/mockData";
import { ManageItemPage } from "./ManageItemPage";

function render(args) {
  const defaultProps = {
    items,
    users,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    loadItems: jest.fn(),
    loadUsers: jest.fn(),
    history: {},
    saveItem: jest.fn(),
    item: newItem,
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageItemPage {...props} />);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Name is required.");
});
