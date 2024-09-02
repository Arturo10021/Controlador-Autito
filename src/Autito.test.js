import Auto from "./Autito";

describe("Auto", () => {
  it("Mostrar dimension X", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    expect(auto.maxX).toBe(5);
  });

  it("Mostrar dimension Y", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    expect(auto.maxY).toBe(5);
  });

  it("Mostrar Posición inicial X", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    expect(auto.X).toBe(1);
  });

  it("Mostrar Posición inicial Y", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    expect(auto.Y).toBe(2);
  });

  it("Mostrar dirección inicial", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    expect(auto.direction).toBe('N');
  });

  it("Comando Avanzar", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/A");
    auto.Avanzar();
    expect(auto.X).toBe(1);
    expect(auto.Y).toBe(1);
    expect(auto.direction).toBe('N');
  });
});
