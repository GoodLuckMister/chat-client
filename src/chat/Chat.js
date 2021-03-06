import { PureComponent } from 'react';
import Send from '../send/Send'
import Message from '../message/Message'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import s from './chat.module.css'

import { socket } from './socket'

class Chat extends PureComponent {
    socket = socket
    state = {
        currentUser: '',
        messages: [],
        message: '',
        isLogin: false,
        users: {}
    }
    componentDidMount() {
        this.socket.on('message', (data) => {
            if (this.state.isLogin) {
                this.setState(({ messages }) => {
                    const newMessages = [...messages]
                    if (newMessages.length > 10) {
                        newMessages.shift()
                    }
                    return {
                        messages: [...newMessages, { user: data.user, text: data.message }]
                    }
                })
            }
        })
        this.socket.on('users', (data) => {
            this.setState({ users: data })
        })
    }
    componentWillUnmount() {
        this.socket.disconnect()
    }
    changeName = (event) => {

        this.setState({ currentUser: event.target.value })
    }
    inputName = event => {
        event.preventDefault()
        const user = this.state.currentUser
        if (user.trim().length > 0) {
            this.socket.emit('change:name', user)
            this.setState({ isLogin: true })
        }
    }
    changeMessage = (event) => {
        this.setState({ message: event.target.value })
    }
    sendMessage = (event) => {
        event.preventDefault()

        const { currentUser, message } = this.state
        if (message.trim().length > 0) {
            this.socket.emit('message', { user: currentUser, message: message.trim() })
            this.setState({ message: '' })
        }
    }
    render() {
        const { message, messages, currentUser, isLogin, users } = this.state
        if (!isLogin) {
            return (
                <div className={s.Box} >
                    <p>Send your name in form</p>
                    <form onSubmit={this.inputName} className={s.Form} noValidate autoComplete="off">
                        <Input
                            placeholder="Write your name"
                            inputProps={{ 'aria-label': 'description' }}
                            onChange={this.changeName}
                            value={currentUser}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Connect
                        </Button>
                    </form>

                </div>
            )
        }

        return (
            <div className={s.Container}>

                <div className={s.Send}>
                    <Send
                        value={message}
                        onChange={this.changeMessage}
                        onSend={this.sendMessage}
                    />
                </div>
                <div className={s.MessageList}>
                    {messages.map((item, key) => (
                        <Message item={item} key={key} />
                    ))}

                </div>
                <ul>

                    {Object.values(users).map((user, id) => (
                        <li key={id}>{user}</li>
                    ))}

                </ul>

            </div>

        )
    }
}

export default Chat;