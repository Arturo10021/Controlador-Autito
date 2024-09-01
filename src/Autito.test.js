import Auto from "./Autito";

describe("Auto", () => {
  it("Mostrar dimension X", () => {
    const auto = new Auto();
    auto.Inicializar("5,5");
    expect(auto.maxX).toBe(5);
  });

  it("Mostrar dimension Y", () => {
    const auto = new Auto();
    auto.Inicializar("5,5");
    expect(auto.maxY).toBe(5);
  });

  it("Mostrar Posición inicial X", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2");
    expect(auto.X).toBe(1);
  });

  it("Mostrar Posición inicial Y", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2");
    expect(auto.Y).toBe(2);
  });
});
