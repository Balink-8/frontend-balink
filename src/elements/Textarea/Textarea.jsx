const Textarea = ({type, className, placeholder, id, name, rows, value, onChange, onKeyUp}) => {
      return(
            <textarea
            type={type}
            className={className}
            placeholder={placeholder}
            id={id}
            name={name}
            rows={rows}
            value={value}
            onChange={onChange}
            onKeyUp={onKeyUp}
            />
      )
   }
   export default Textarea