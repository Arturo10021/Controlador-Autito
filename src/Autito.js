export class Auto{

  constructor(){
    this.maxX = 0;
    this.maxY = 0;
    this.X = 0;
    this.Y = 0;
  }

  Inicializar(comandos) {
    this.setGrid(comandos);
    this.setPosicion(comandos);
  }

  setGrid(comandos) {
    const gridData = comandos.split('/')[0].split(',');
    this.maxX = parseInt(gridData[0], 10); 
    this.maxY = parseInt(gridData[1], 10);
  }

  setPosicion(comandos) {
    const positionData = comandos.split('/')[1];
    const posData = positionData.split(',');
    this.X = parseInt(posData[0], 10);
    this.Y = parseInt(posData[1], 10);
  }
}
  export default Auto;
