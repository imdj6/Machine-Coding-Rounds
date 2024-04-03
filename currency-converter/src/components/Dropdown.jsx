import React from 'react'

function Dropdown({ currencies }) {
    return (
        <div>
            <div>
                From:
            </div>
            <select className='w-full p-2 focus:outline-none border border-gray-500 rounded-md shadow-sm'>
                {
                    currencies.map((currency) => {
                        return (
                            <option key={currency.key} value={currency.code} >
                                {currency.value}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Dropdown