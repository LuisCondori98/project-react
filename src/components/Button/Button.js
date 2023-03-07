const Button = (props) => {
    return <button 
                onClick={props.handleClick}
                style={{
                    color: 'white',
                    backgroundColor: 'red',
                    borderRadius: "15px",
                    cursor: "pointer",
                    margin: "5px 10px",
                    fontSize: "20px",
                    padding: "5px"
                }}
            >
                    {props.label}
            </button>
}

export default Button