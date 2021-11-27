// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headImage,
    headsCount: 0,
    tailsCount: 0,
  }

  onCoinToss = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestheadsCount = headsCount
    let latesttailscount = tailsCount

    if (toss === 0) {
      tossImg = headImage
      latestheadsCount += 1
    } else {
      tossImg = tailImage
      latesttailscount += 1
    }
    this.setState({
      tossResultImage: tossImg,
      headsCount: latestheadsCount,
      tailsCount: latesttailscount,
    })
  }

  render() {
    const {headsCount, tailsCount, tossResultImage} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img src={tossResultImage} className="image" alt="toss result" />
          <button className="button" type="button" onClick={this.onCoinToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
