export class Auto{

  constructor(){
    this.maxX = 0;
    this.maxY = 0;
    this.X = 0;
    this.Y = 0;
    this.direction='';
  }

  Inicializar(comandos) {
    this.setGrid(comandos);
    this.setPosicion(comandos);
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

}
  export default Auto;
