import React, {useState} from 'react';
import {Form, Input} from "antd";

function AddImage(props) {
    const [image, setImage] = useState("")

    const handleChangeImage = (e) => {
        setImage(e.target.value)
    }
    return (
        <div>
            <Form.Item>
                <Input placeholder="Image" value={image} onChange={handleChangeImage}/>
            </Form.Item>
        </div>
    );
}

export default AddImage;
