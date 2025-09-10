

function Wrapper({children}) {
  return (
    <div style={ {backgroundColor: 'red', width: '400px', padding: '10px', margin: '5px auto'} }>
      {children}
    </div>
  )
}

export default Wrapper
