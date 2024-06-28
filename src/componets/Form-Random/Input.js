function Input(props) {
    // type, id, placeholder
    return (
        <input type={props.type} id={props.id} placeholder={props.placeholder}></input>
    )
}

export default Input