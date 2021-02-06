import React, {useState} from 'react';
import {Form, Input} from "antd";

function AddTitle(props) {
    const [title, setTitle] = useState()

    const handleChangeText = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <Form.Item>
                <Input placeholder="Title" value={title} onChange={handleChangeText}/>
            </Form.Item>
        </div>
    );
}

export default AddTitle;
