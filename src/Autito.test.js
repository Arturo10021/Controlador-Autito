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
    const autito = new Auto();
  
  autito.direction = 'N';
  autito.girarIzquierda();
  expect(autito.direction).toBe('O');
  
  autito.direction = 'E';
  autito.girarIzquierda();
  expect(autito.direction).toBe('N');
  
  autito.direction = 'S';
  autito.girarIzquierda();
  expect(autito.direction).toBe('E');
  
  autito.direction = 'O';
  autito.girarIzquierda();
  expect(autito.direction).toBe('S');
  });

  it("Comando girar a la derecha", () => {
    const autito = new Auto()
  
  autito.direction = 'N';
  autito.girarDerecha();
  expect(autito.direction).toBe('E');
  
  autito.direction = 'E';
  autito.girarDerecha();
  expect(autito.direction).toBe('S');
  
  autito.direction = 'S';
  autito.girarDerecha();
  expect(autito.direction).toBe('O');
  
  autito.direction = 'O';
  autito.girarDerecha();
  expect(autito.direction).toBe('N');
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
    const autito = new Auto();
  expect(autito.validarComandos(7, 7, 'X', 6, 6, 'AIAIAI')).toBe(false);
  expect(autito.validarComandos(0, 0, 'N', 6, 6, 'AIAIAZ')).toBe(false);  
  expect(autito.validarComandos(7, 7, 'N', 6, 6, 'AIAIAI')).toBe(false);  
  });

  test('Validar comandos con posición inicial fuera de los límites', () => {
    const autito = new Auto();
    expect(autito.validarComandos(6, 6, 'N', 5, 5, 'AIAIAIAIAA')).toBe(false);
  });

  test('Validar comandos con dirección inicial inválida', () => {
    const autito = new Auto();
    expect(autito.validarComandos(1, 1, 'X', 5, 5, 'AIAIAIAIAA')).toBe(false);
  });
  
  test('Validar comandos con comandos inválidos', () => {
    const autito = new Auto();
    expect(autito.validarComandos(1, 1, 'N', 5, 5, 'AXAAIAIAA')).toBe(false);
  });

  test('Validar comandos válidos', () => {
    const autito = new Auto();
    expect(autito.validarComandos(1, 1, 'N', 5, 5, 'AIAIAIAAA')).toBe(true);
  });
  
  
  
});
