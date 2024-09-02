export class Auto{

  constructor(){
    this.maxX = 0;
    this.maxY = 0;
    this.X = 0;
    this.Y = 0;
    this.direction='';
    this.iniX = 0;
    this.iniY = 0;
    this.iniDirection = '';
    this.Movimientos = '';
  }

  Inicializar(comandos) {
    this.setGrid(comandos);
    this.getPosicionInicial(comandos)
    this.setPosicion(comandos);
    this.getMovimientos(comandos);
  }

  setGrid(comandos) {
    const gridData = this.getComandoDimension(comandos);
    const parte1 = gridData.split(',');
      this.maxX = parseInt(parte1[0]);
      this.maxY = parseInt(parte1[1]);
  }

  setPosicion(comandos) {
    const positionData = this.getComandoPosicion(comandos);
    const parte2 = positionData.split(',');
      this.X = parseInt(parte2[0]);
      this.Y = parseInt(parte2[1].charAt(0));
      this.direction = parte2[1].charAt(1);
  } //5,5/1,2N/IAIAIAIAA

  getComandoDimension(comandos) {
    return comandos.split('/')[0];
  }

  getComandoPosicion(comandos) {
    return comandos.split('/')[1];
  }

  getPosicionInicial(comandos) {
    const positionData = this.getComandoPosicion(comandos);
    const parte2 = positionData.split(',');
      this.iniX = parseInt(parte2[0]);
      this.iniY = parseInt(parte2[1].charAt(0));
      this.iniDirection = parte2[1].charAt(1);
  }

  Avanzar() {
    const direccionActual = this.direction;
  
    if (direccionActual === 'N') {
      this.Y--;
    }
    if (direccionActual === 'E') {
      this.X++;
    }
    if (direccionActual === 'S') {
      this.Y++;
    }
    if (direccionActual === 'O') {
      this.X--;
    }
  }

  girarIzquierda() {
    const direccionActual = this.direction;
  
    if (direccionActual === 'N') {
      this.direction = 'O';
    }
    if (direccionActual === 'E') {
      this.direction = 'N';
    }
    if (direccionActual === 'S') {
      this.direction = 'E';
    }
    if (direccionActual === 'O') {
      this.direction = 'S';
    }
  }

  girarDerecha() {
    const direccionActual = this.direction;
  
    if (direccionActual === 'N') {
      this.direction = 'E';
    }
    if (direccionActual === 'E') {
      this.direction = 'S';
    }
    if (direccionActual === 'S') {
      this.direction = 'O';
    }
    if (direccionActual === 'O') {
      this.direction = 'N';
    }
  }

  getMovimientos(comandos){
    this.Movimientos = comandos.split('/')[2];
  }
} 
export default Auto;
