const Button = ({text,numero}) => {

  
  return (
    //Se recomienda usar fragment en lugar de div o section
      <button>{text} - {numero}</button>
  )
}

export default Button