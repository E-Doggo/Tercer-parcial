import contar from "./contador.js";

describe("Deberia darnos una cuenta de las palabras tomando en cuenta capitalizacion", () => {
  it("Nos devolvera una sola palabra", () => {
    expect(contar("palabra")).toEqual("palabra = 1 ");
  });
  it("Nos devolvera de varias palabras", () => {
    expect(contar("palabra tiene letras")).toEqual("palabra = 1 tiene = 1 letras = 1 ");
  });
});
