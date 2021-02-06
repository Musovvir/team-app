import React, {useState} from 'react';
import {Form, Input} from "antd";

function AddText(props) {
    const [text, setText] = useState()

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <Form.Item>
                <Input placeholder="Text" value={text} onChange={handleChangeText}/>
            </Form.Item>
        </div>
    );
}

export default AddText;
