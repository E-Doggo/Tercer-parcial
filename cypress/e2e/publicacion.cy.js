describe("Publicacion", () => {
  it("Muestra las publicaciones en la lista de publicaciones", () => {
    cy.visit("/");
    cy.get("#publicacion").type("Esta publicacion deberia verse en el html");
    cy.get("#publicar-button").click();
    cy.get("#resultado-div").should("contain", "Esta publicacion deberia verse en el html");
  });
});
