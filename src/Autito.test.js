import Auto from "./Autito";

describe("Auto", () => {
  it("Mostrar dimension X", () => {
    const auto = new Auto();
    auto.Inicializar(["5,5"]);
    expect(auto.maxX).toBe(5);
  });
  it("Mostrar dimension Y", () => {
    const auto = new Auto();
    auto.Inicializar(["5,5"]);
    expect(auto.maxY).toBe(5);
  });
  });