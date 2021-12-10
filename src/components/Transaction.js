import React from 'react'

export const Transaction = ({ text, amount }) => {
  // Get sign
  const sign = amount < 0 ? '-' : '+'

  return (
    <div>
      <li className={amount < 0 ? 'minus' : 'plus'}>
        {text}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  )
}
