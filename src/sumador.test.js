import contar from "./contador.js";

describe("Deberia darnos una cuenta de las palabras tomando en cuenta capitalizacion", () => {
  it("Nos devolvera una sola palabra", () => {
    expect(contar("palabra")).toEqual({"palabra": 1});
  });
  it("Nos devolvera de varias palabras sin repeticion", () => {
    expect(contar("palabra tiene letras")).toEqual({"letras": 1, "palabra": 1, "tiene": 1});
  });
  it("Nos devolvera de varias palabras con repeticion", () => {
    expect(contar("palabra tiene letras y palabra es oracion")).toEqual({"es": 1, "letras": 1, "oracion": 1, "palabra": 2, "tiene": 1, "y": 1});
  });

});


describe("Deberia darnos una cuenta de las palabras sin tomar en cuenta capitalizacion", () => {
  it("Nos devolvera de varias palabras sin capitalizacion", () => {
    expect(contar("palabra tiene letras y Palabra es oracion")).toEqual({"es": 1, "letras": 1, "oracion": 1, "palabra": 2, "tiene": 1, "y": 1});
  });
});