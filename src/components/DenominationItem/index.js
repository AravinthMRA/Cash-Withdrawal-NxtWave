import './index.css'

const DenominationItem = props => {
  const {denominationValue, withdrawAmount} = props
  const onAmountWithdrawal = () => {
    withdrawAmount(denominationValue)
  }
  return (
    <li className="value-list-item1">
      <button
        className="denomination-button1"
        onClick={onAmountWithdrawal}
        type="button"
      >
        {denominationValue}
      </button>
    </li>
  )
}

export default DenominationItem
