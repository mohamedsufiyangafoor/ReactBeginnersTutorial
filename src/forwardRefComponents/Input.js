import React from 'react'

function Input({placeholder,keyPressHandle,name},ref) {
  return (
    <div>
        <input placeholder={placeholder} ref={ref} onKeyDown={(e) => keyPressHandle(e,name)}/>
    </div>
  )
}

const correctRef = React.forwardRef(Input);
export default correctRef;