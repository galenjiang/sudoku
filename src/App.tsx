import * as PIXI from 'pixi.js'
import * as React from 'react'

import './App.css'

class App extends React.Component {

  private cantainer: React.RefObject<HTMLDivElement>
  private app: PIXI.Application
  private width: number
  private height: number
  private grid: PIXI.Graphics
  constructor(props: any) {
    super(props)
    this.cantainer = React.createRef()
  }
  public render() {
    return (
      <div ref={this.cantainer} className="App" />
    );
  }

  public componentDidMount() {
    const container = this.cantainer.current
    if (!container) {
      return
    }
    const width = container.offsetWidth
    const height = container.offsetHeight
    const app = new PIXI.Application(width, height, {
      // transparent: true
    })
    container.appendChild(app.view)





    this.width = width
    this.height = height

    this.app = app
    this.initGrid()
    // tslint:disable-next-line:no-console
    console.log(this.grid)
    // this.grid.position.set(0,100)

  }

  private initGrid() {
    const grid = new PIXI.Graphics()
    grid.lineStyle(10, 0xff0000, 1)
    grid.moveTo(0, 0)
    grid.lineTo(this.width, 0)
    grid.lineTo(this.width, this.height)
    
    grid.lineTo(0, this.height)
    grid.closePath()

    this.app.stage.addChild(grid)
    this.grid = grid
    // grid.lineTo(this.width, this.height)
  }
}

export default App;
