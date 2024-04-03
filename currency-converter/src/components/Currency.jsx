import React, { useEffect, useState } from 'react'

function Currency() {
  //https://api.frankfurter.app/latest?amount=84&from=INR&to=USD
  //https://api.frankfurter.app/currencies
  const [currencies, setCurrencies] = useState("");
  const [loading, setLoading] = useState(false);
  const [currency,setCurrency]=useState("")
  useEffect(() => {
    const getcurrencies = async () => {
      try {
        setLoading(true);
        const data = await fetch("https://api.frankfurter.app/currencies");
        const resp = await data.json();
        setCurrencies(currencies)
      } catch (error) {
        console.error("error while fetching the currecies..")
      }
      finally {
        setLoading(false);
      }

    }
    getcurrencies();
  }, [])
  if (loading) {
    return (
      <div>Loading....</div>
    )
  }
  else {
    return (
      <div className="bg-white max-w-xl mx-auto my-10 p-10 shadow-lg rounded-xl">
        <h2 className='text-center text-2xl font-semibold mb-5 text-gray-500'>Currency Converter</h2>
        <div className='flex space-x-10'>
          <div className='mt-4'>
            <label htmlFor="amount"
              className='font-semibold text-xl mb-5 text-grey-500 block'
            >
              Amount:
            </label>
            <input type="number" className='w-full border border-gray-400 rounded-md focus:outline-none p-2 px-2 shadow-sm' />
          </div><div className='mt-4'>
            <label htmlFor="amount"
              className='font-semibold text-xl mb-5 text-grey-500 block'
            >
              Amount:
            </label>
            <input type="number" className='w-full border border-gray-400 rounded-md focus:outline-none p-2 px-2 shadow-sm'/>
          </div>
        </div>
        <div className='mt-4'>
          <label htmlFor="amount"
            className='font-semibold text-xl mb-5 text-grey-500 block'
          >
            Amount:
          </label>
          <input type="number" className='w-full border border-gray-400 rounded-md focus:outline-none p-2 px-2 shadow-sm' />
        </div>
        <div className='justify-end flex mt-6'>
          <button className='px-5 py-2 bg-indigo-500 focus:outline-none focus:ring-2 focus:bg-indigo-500 focus:ring-offset-2 rounded-xl'>Convert</button>
        </div>
        <div className='text-green-600 font-bold text-lg text-center mt-10 tracking-wider'>
          Converted Amount: <span>12.21</span>
        </div>
      </div>
    )
  }
}

export default Currency