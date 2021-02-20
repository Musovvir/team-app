import React from "react";
import { Col, Row } from "antd";

function Image() {
  return (
    <div className="image">
      <div className="container">
        <Row>
          <Col span={24}>
            <div
              className="commonImage"
              style={{
                backgroundImage:
                  "url(" +
                  "https://www.sostav.ru/app/public/images/news/2015/12/18/Screenshot_2.jpg?rand=0.2807936074677855" +
                  ")",
              }}
            >
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Image;
