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
    /*const auto = new Auto();
    auto.Inicializar("5,5/1,2N/A");
    auto.girarIzquierda();
    expect(auto.direction).toBe('O');*/
    const autito = new Auto();
  
  // Girar izquierda desde el Norte
  autito.direction = 'N';
  autito.girarIzquierda();
  expect(autito.direction).toBe('O');
  
  // Girar izquierda desde el Este
  autito.direction = 'E';
  autito.girarIzquierda();
  expect(autito.direction).toBe('N');
  
  // Girar izquierda desde el Sur
  autito.direction = 'S';
  autito.girarIzquierda();
  expect(autito.direction).toBe('E');
  
  // Girar izquierda desde el Oeste
  autito.direction = 'O';
  autito.girarIzquierda();
  expect(autito.direction).toBe('S');
  });

  it("Comando girar a la derecha", () => {
    /*const auto = new Auto();
    auto.Inicializar("5,5/1,2N/A");
    auto.girarDerecha();
    expect(auto.direction).toBe('E');*/
    const autito = new Auto();
  
  // Girar derecha desde el Norte
  autito.direction = 'N';
  autito.girarDerecha();
  expect(autito.direction).toBe('E');
  
  // Girar derecha desde el Este
  autito.direction = 'E';
  autito.girarDerecha();
  expect(autito.direction).toBe('S');
  
  // Girar derecha desde el Sur
  autito.direction = 'S';
  autito.girarDerecha();
  expect(autito.direction).toBe('O');
  
  // Girar derecha desde el Oeste
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
    //const auto = new Auto();
    //auto.Inicializar("5,5/1,2N/IAIAIAIAA");
    //expect(auto.validarComandos(auto.iniX, auto.iniY, auto.iniDirection, auto.maxX, auto.maxY, auto.Movimientos)).toBe(true);
    const autito = new Auto();
  expect(autito.validarComandos(7, 7, 'X', 6, 6, 'AIAIAI')).toBe(false);  // dirección inválida
  expect(autito.validarComandos(0, 0, 'N', 6, 6, 'AIAIAZ')).toBe(false);  // comando inválido
  expect(autito.validarComandos(7, 7, 'N', 6, 6, 'AIAIAI')).toBe(false);  // posición fuera de límites
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
