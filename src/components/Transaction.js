import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ text, amount, id }) => {
  // Get sign
  const sign = amount < 0 ? '-' : '+'
  const { deleteTransaction } = useContext(GlobalContext)
  return (
    <div>
      <li className={amount < 0 ? 'minus' : 'plus'}>
        {text}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>
          x
        </button>
      </li>
    </div>
  )
}
