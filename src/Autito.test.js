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
    expect(auto.iniX).toBe(1);
  });

  it("Mostrar Posición inicial Y", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    expect(auto.iniY).toBe(2);
  });

  it("Mostrar dirección inicial", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    expect(auto.iniDirection).toBe('N');
  });

  it("Comando Avanzar", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/A");
    auto.Avanzar();
    expect(auto.X).toBe(1);
    expect(auto.Y).toBe(3);
    expect(auto.direction).toBe('N');
  });

  it("Comando girar a la izquierda", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/A");
    auto.girarIzquierda();
    expect(auto.direction).toBe('O');
  });

  it("Comando girar a la derecha", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/A");
    auto.girarDerecha();
    expect(auto.direction).toBe('E');
  });

  it("Mostrar Comandos", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    expect(auto.Movimientos).toBe('IAIAIAIAA');
  });

  it("Mostrar Posicion Final", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    auto.EjecutarComandos();
    expect(auto.X).toBe(1);
    expect(auto.Y).toBe(3);
    expect(auto.direction).toBe('N');
  });

  it("Validar entrada de comando", () => {
    const auto = new Auto();
    auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    expect(auto.validarComandos(auto.iniX, auto.iniY, auto.iniDirection, auto.maxX, auto.maxY, auto.Movimientos)).toBe(true);
  });
});
