import { mostrarDimencionX, mostrarDimencionY } from "./Autito.js";

describe("MoverAuto", () => {
  it("Mostrar dimensión X de la superficie", () => {
    expect(mostrarDimencionX(1)).toEqual(1);
  });
  it("Mostrar dimensión Y de la superficie", () => {
    expect(mostrarDimencionY(2)).toEqual(2);
  });
});
