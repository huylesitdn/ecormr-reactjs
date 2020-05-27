import React from "react";
import './_description.scss';
// ui
import { Row, Col } from "antd";
import { URL_MEDIA } from "../../../config";

class Description extends React.Component {
  render() {
    return (
      <div className="tab-content">
        <h3>Description</h3>
        <h6>PureVision 2 HD - Monthly Disposable Contact Lens</h6>
        <h4>PureVision 2 HD</h4>
        <h5>(now in New Black Box Packing from Bausch and Lomb India)</h5>

        <div className="des-item">
          <h4 className="title">Product Information:</h4>
          <p>
            Bausch + Lomb™ PureVision 2 HD disposable contact lenses offer
            comfort along with precise vision. The lenses can be used with
            almost all lifestyles with ease. Clear and Precise Vision The high
            definition Optics lessens spherical aberration to give extraordinary
            clarity of sight. They are especially designed to decrease halos and
            glare so as to deliver quality vision.
          </p>
        </div>

        <Row gutter={48}>
          <Col md={10} sm={8} xs={24}>
            <div className="view-img">
              <img src={`${URL_MEDIA}assets/images/products/p3.svg`} alt="" />
            </div>
          </Col>
          <Col md={14} sm={8} xs={24}>
            <div className="des-item">
              <h4>Comfort:</h4>
              <p>
                A Performa surface, along with the unique AerGel Silicone hydro
                gel material of which it is made, allows moisture retention and
                checks build-up of protein deposits. This extraordinary material
                permits oxygen and fluids to flow freely, making your eyes feel
                comfortable the whole day long. It allows almost 5 times more
                oxygen to pass through the lenses. One of the thinnest and
                almost weightless of all available lenses, they ensure gentle
                and smooth contact between the lids and the eyes. Pure Vision2
                HD possesses ultra-thin rounded edges which make insertion
                extremely convenient. Pure Vision2 HD lenses are also packed in
                a unique solution poloxamine, which also helps in easy
                insertion.
              </p>
            </div>
          </Col>
        </Row>

        <p className="des-text">
          Pure Vision2 HD lenses can be used for 30 days and required to be kept
          in a lens care solution when not in use. Get PureVsion 2 HD now from
          www.lensbazaar.com, at discounted rates you will just not believe!
          Lensbazaar, selling lenses since 2008, is the one solution for all
          your contact lenses ™ requirements.
        </p>
      </div>
    );
  }
}

export default Description;
