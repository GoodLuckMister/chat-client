import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import s from '../chat/chat.module.css'

const Send = ({ value, onChange, onSend }) => {
    return (
        <div>
            <form className={s.Form} noValidate autoComplete="off">
                <Input
                    placeholder="Write your message"
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={onChange}
                    value={value}
                />
                <Button onClick={onSend} variant="contained" color="primary">
                    Send
                </Button>
            </form>

        </div>
    )
}

export default Send