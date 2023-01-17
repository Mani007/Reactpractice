import React from 'react'

function Alert(props) {
  return (
    // Very important stntax below
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{props.alert.type}</strong>{props.alert.msg}
  
</div>
  )
}

export default Alert