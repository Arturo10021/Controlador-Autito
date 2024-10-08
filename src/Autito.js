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
  } 

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

  EjecutarComandos(){
    for (let i = 0; i < this.Movimientos.length; i++) {
      const comando = this.Movimientos[i];

      if (comando === 'A') {
        this.Avanzar();
      } else if (comando === 'D') {
        this.girarDerecha();
      } else if (comando === 'I') {
        this.girarIzquierda();
      }
    }
  }

  Avanzar() {
    const direccionActual = this.direction;
  
    if (direccionActual === 'N' && this.Y < this.maxY) {
      this.Y++;
  } else if (direccionActual === 'E' && this.X < this.maxX) {
      this.X++;
  } else if (direccionActual === 'S' && this.Y > 0) {
      this.Y--;
  } else if (direccionActual === 'O' && this.X > 0) {
      this.X--;
  }
  }

  girarIzquierda() {
    const direccionActual = this.direction;
  
    if (direccionActual === 'N') {
      this.direction = 'O';
    } else if (direccionActual === 'E') {
      this.direction = 'N';
    } else if (direccionActual === 'S') {
      this.direction = 'E';
    } else if (direccionActual === 'O') {
      this.direction = 'S';
    }
  }

  girarDerecha() {
    const direccionActual = this.direction;
  
    if (direccionActual === 'N') {
      this.direction = 'E';
    } else if (direccionActual === 'E') {
      this.direction = 'S';
    } else if (direccionActual === 'S') {
      this.direction = 'O';
    } else if (direccionActual === 'O') {
      this.direction = 'N';
    }
  }

  getMovimientos(comandos){
    this.Movimientos = comandos.split('/')[2];
  }

  validarComandos(iniX, iniY, iniDirection, maxX, maxY, Movimientos){
    let resp = true;
    if (iniX > maxX || iniY > maxY|| iniX < 0 || iniY < 0) {
      resp= false;
    }
    if (maxX < 0 || maxY < 0) {
      resp= false;
    }
    if (isNaN(maxX) || isNaN(maxY)) {
      resp= false;
    }
    if (iniDirection !== 'N' && iniDirection !== 'E' && iniDirection !== 'S' && iniDirection !== 'O') {
      resp= false;
    }
    for (let i = 0; i < Movimientos.length; i++) {
      const comando = Movimientos[i];
      if (comando !== 'A' && comando !== 'D' && comando !== 'I') {
        resp= false;
      }
    }
    return resp;
  }
} 
export default Auto;
