
const Message = ({ item }) => {

    return (
        <div>
            <span>{item.user}: {item.text}</span>
        </div>
    )
}

export default Message