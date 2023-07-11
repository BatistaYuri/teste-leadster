/// <reference types="cypress" />

describe("complete lifecycle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("open modal", () => {
    cy.intercept(
      "GET",
      "https://my-json-server.typicode.com/BatistaYuri/json-server-leadster/videos?_page=1&_limit=9&_order=asc&_sort=date"
    ).as("getVideos");
    cy.wait("@getVideos").its("response.statusCode").should("eq", 200);
    clickCard();
    cy.get("div[data-cy='modal']").should("be.visible");
  });
  it("start video", () => {
    clickCard();
    cy.get("div[data-cy='spinner']").should("not.exist");
    cy.get("iframe").its("html").as("iframeHtml");
    cy.get("@iframeHtml").should("exist");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    getIframeBody().find("div.html5-video-player").as("player");
    cy.get("@player").should("have.class", "unstarted-mode");
    cy.get("@player").click();
    cy.get("@player").should("have.class", "playing-mode");
  });
  it("close modal", () => {
    clickCard();
    cy.get("div[data-cy='modal-close']").click();
    cy.get("div[data-cy='modal']").should("not.exist");
  });
});

const clickCard = () => {
  cy.get("div[data-cy='card-video-list']").children().first().click();
};

const getIframeDocument = () => {
  return cy.get("iframe").its("0.contentDocument").should("exist");
};

const getIframeBody = () => {
  return getIframeDocument()
    .its("body")
    .should("not.be.undefined")
    .then(cy.wrap);
};
