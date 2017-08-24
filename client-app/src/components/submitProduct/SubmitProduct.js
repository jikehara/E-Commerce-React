import React from 'react'

const formStyle = {
  marginTop: '10em'
}

const SubmitProduct = (props) => {
  return(
    <div style={formStyle}>
      <h3>This is a message to let you know that this is working (submit product component).</h3>
      <form>
        <label>Product Name</label>
        <input type="text" onChange={(event) => props.onChange('name', event.target.value)}/>
        <label>Product Price</label>
        <input type="number" onChange={(event) => props.onChange('price', event.target.value)}/>
        <label>Image</label>
        <input type="text" onChange={(event) => props.onChange('image', event.target.value)}/>
      </form>
    </div>
  )
}

export default SubmitProduct
