import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    this.state = {denominationsList: props.denominationsList, balance: 2000}
  }

  withdrawAmount = value => {
    console.log(`You have withdrawn: ${value}`)
    const {balance} = this.state
    if (balance >= value) {
      this.setState(prevState => ({balance: prevState.balance - value}))
    }
  }

  render() {
    const {denominationsList, balance} = this.state
    return (
      <div className="bg-container1">
        <div className="card-container1">
          <div className="profile-container1">
            <p className="initial-para">S</p>
            <h3 className="name-heading1">Sarah Williams</h3>
          </div>
          <div className="balance-container1">
            <p className="your-balance-para1">Your Balance</p>
            <div className="balance-container2">
              <p className="balance1">{balance}</p>
              <p className="currency-para">In Rupees</p>
            </div>
            <p className="withdraw-heading1">Withdraw</p>
            <p className="your-balance-para1">CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map(item => (
                <DenominationItem
                  denominationValue={item.value}
                  key={item.id}
                  withdrawAmount={this.withdrawAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
