import React from "react";
import { Tooltip } from "./Tooltip";
import "../app/[locale]/globals.css";

describe("<Tooltip />", () => {
  it("renders", () => {
    const onClick = cy.stub().as("click");
    cy.mount(<Tooltip name="Tooltip Test" onClick={onClick} />);
    cy.get("div[data-cy='tooltip']").as("tooltip");
    cy.get("@tooltip").click();
    cy.get("@click").should("have.been.called");
  });
});
