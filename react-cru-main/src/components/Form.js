import React from 'react'

const form = () => {
  const [title, setfirst] = useState('')
  const [amount, setAmount] = useState('')
  const  addList =() => {
    const listData{
        title:title,
        amount:amount
    }
    porps.addItem(listData)
  }
  return (
    <>
    <h3>{listData.title}</h3>
    <h3>{listData.amount}</h3>
    <form onSubmit={}>
    <div>
      <label>รายการ</label>
      <input type="text" name="list" onChange={(event) => setTitle(event.target.value)}/>
      </div>
      <div>
      <label>จำนวนเงิน</label>
      <input type="number" name="amount" onChange={(event) => setAmount(event.target.value)}/>
      </div>
      <button type="submit" name="submit" ></button>
      </form>
      </>
  )
}

export default form