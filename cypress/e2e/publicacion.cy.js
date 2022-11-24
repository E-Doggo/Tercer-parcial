describe("Publicacion", () => {
  it("Muestra una publicacion en la lista de publicaciones", () => {
    cy.visit("/");
    cy.get("#publicacion").type("Esta publicacion deberia verse en el html");
    cy.get("#publicar-button").click();
    cy.get("#resultado-ul").should("contain", "Esta publicacion deberia verse en el html");
  });

  it("Muestra varias publicaciones en la lista de publicaciones", () => {
    cy.visit("/");
    cy.get("#publicacion").type("Esta publicacion deberia verse en el html");
    cy.get("#publicar-button").click();
    cy.get("#publicacion").clear()
    cy.get("#publicacion").type("Esta es mi segunda publicacion");
    cy.get("#publicar-button").click();
    cy.get("#publicacion").clear()
    cy.get("#publicacion").type("Y esta es mi tercera publicacion");
    cy.get("#publicar-button").click();
    cy.get("#publicacion").clear()
    cy.get("#resultado-ul").eq(0).should("contain", "Esta publicacion deberia verse en el html");
    cy.get("#resultado-ul").eq(0).should("contain", "Esta es mi segunda publicacion");
    cy.get("#resultado-ul").eq(0).should("contain", "Y esta es mi tercera publicacion");

  });

  it("Si esta vacio salta error", () => {
    cy.visit("/");
    cy.get("#publicar-button").click();
    cy.get("#resultado-div").should("contain", "No se puede ingresar un post sin texto");

  });
});
