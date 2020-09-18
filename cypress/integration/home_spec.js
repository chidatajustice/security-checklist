import data from "../../config/data";

describe("Home", () => {
  before(() => {
    cy.visit("/");
  });

  it("should render content", () => {
    const dataKeys = Object.keys(data);
    dataKeys.map((key) => {
      cy.contains(data[key].title);
    });
  });
});
