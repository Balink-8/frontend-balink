const Input = ({type, className, placeholder, id, name}) => {
   return(
         <input
         type={type}
         className={className}
         placeholder={placeholder}
         id={id}
         name={name}
         />
   )
}
export default Input