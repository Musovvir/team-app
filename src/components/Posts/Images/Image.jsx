import React from "react";
import { Col, Row } from "antd";

function Image(props) {
  return (
    <div className="image">
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="commonImage">
              <img
                src="https://sun2-3.userapi.com/impg/3DlijC9qgYW_4-1fmsNA8thJMQa34MajNKU8Ig/KE8mAdiM8es.jpg?size=604x604&quality=96&sign=b4b52197356ac70bdc902332376bec5f&type=album"
                alt=""
                className="imagePost"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Image;
