export class Auto{

  constructor(){
    this.maxX = 0;
    this.maxY = 0;
  }

  Inicializar(comandos) {
    this.setGrid(comandos);
  }

  setGrid(comandos) {
    let grid = comandos[0].split(',');
    this.maxX = parseInt(grid[0]);
    this.maxY = parseInt(grid[1]);
  }
}
  export default Auto;
