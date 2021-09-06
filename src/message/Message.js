import Toast from 'react-bootstrap/Toast'




const Message = ({ item }, key) => {

    return (
        <Toast key={key}>
            <Toast.Body >{`${item.user}: ${item.text}`}</Toast.Body>
        </Toast>
    )
}

export default Message