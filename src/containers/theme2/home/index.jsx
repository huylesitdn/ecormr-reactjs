import React from "react";
import "./_index.scss";
import ReactDOM from "react-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { URL_MEDIA } from "../../../config";
import { Button, Space, Row, Col } from "antd";
import HeaderSlice from "../../../components/theme2/home/HeaderSlice";

// icons
import {
  FaFacebook,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn
} from "react-icons/fa";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const Pink = ({ children }) => (
  <span style={{ color: "#FF6AC1" }}>{children}</span>
);
const Yellow = ({ children }) => (
  <span style={{ color: "#EFF59B" }}>{children}</span>
);
const Lightblue = ({ children }) => (
  <span style={{ color: "#9AEDFE" }}>{children}</span>
);
const Green = ({ children }) => (
  <span style={{ color: "#57EE89" }}>{children}</span>
);
const Blue = ({ children }) => (
  <span style={{ color: "#57C7FF" }}>{children}</span>
);
const Gray = ({ children }) => (
  <span style={{ color: "#909090" }}>{children}</span>
);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      space: 0,
      offsetIndex: 0,
      spaceOffset: 0,
      spaceOffsetPrev: 0,
      currentScroll: 0,
      action: null
    };
  }

  componentDidMount = () => {
    let current = this.parallax.current;
    let space = this.parallax.space;
    console.log(current, space);
    this.setState({ current, space, spaceOffset: space });
  };

  changeScroll = scroll => {
    // console.log('scroll: ', scroll)
    console.log("this.parallax: ", this.parallax);
  };

  changeScrollPage = async scroll => {
    const {
      offsetIndex,
      spaceOffset,
      spaceOffsetPrev,
      currentScroll,
      action
    } = this.state;

    let currentNow = this.parallax.current;
    let space = this.parallax.space;

    if (action === "backTop") {
      if (currentNow === 0) {
        this.setState({
          action: null,
          offsetIndex: 0,
          currentScroll: 0,
          spaceOffset: space,
          spaceOffsetPrev: 0
        });
      }
    } else {
      if (currentNow > currentScroll) {
        // scroll down

        if (currentNow === spaceOffset) {
          // next slice
          this.setState({
            offsetIndex: offsetIndex + 1,
            spaceOffset: spaceOffset + space,
            spaceOffsetPrev: spaceOffset,
            currentScroll: currentNow
          });
        }
        await this.parallax.scrollTo(offsetIndex + 1);
      } else {
        // scroll up

        if (currentNow === spaceOffsetPrev - space) {
          // prev slice
          this.setState({
            offsetIndex: offsetIndex - 1,
            spaceOffset: spaceOffsetPrev,
            spaceOffsetPrev: spaceOffsetPrev - space,
            currentScroll: currentNow
          });
        }
        await this.parallax.scrollTo(offsetIndex - 1);
      }
    }
  };

  onScrollTo = async action => {
    const { offsetIndex } = this.state;

    if (action === "next") {
      await this.parallax.scrollTo(offsetIndex + 1);
    } else if (action === "prev") {
      await this.parallax.scrollTo(offsetIndex - 1);
    } else {
      this.setState({ action: "backTop" });
      this.parallax.scrollTo(0);
    }
  };

  render() {
    const { offsetIndex } = this.state;

    return (
      <div className="ex-page" onScroll={this.changeScrollPage}>
        <div className="fixed-content">
          <HeaderSlice offsetIndex={offsetIndex} />

          <div className="actions-page">
            {offsetIndex === 0 ? (
              <a
                className="scroll-to-shop"
                onClick={() => this.onScrollTo("next")}
              >
                SCROLL TO SHOP
              </a>
            ) : offsetIndex === 7 ? (
              <a
                className="btn-back-top"
                onClick={() => this.onScrollTo("top")}
              >
                <img
                  src={`${URL_MEDIA}assets/images/theme2/icons/back-top.svg`}
                  alt=""
                />
              </a>
            ) : (
              <>
                <a onClick={() => this.onScrollTo("next")}>Next</a>
                <a onClick={() => this.onScrollTo("prev")}>Prev</a>
              </>
            )}
          </div>
        </div>

        <Parallax
          ref={ref => (this.parallax = ref)}
          pages={8}
          onChange={() => console.log("123123")}
          onScroll={this.changeScroll}
        >
          {/* ========================== slice main ========================== */}

          <ParallaxLayer
            offset={0}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          />

          <ParallaxLayer
            offset={0.75}
            speed={0}
            style={{ backgroundColor: "#2FABF7" }}
          />

          <ParallaxLayer offset={0.75} speed={0.25}>
            <img
              src={`${URL_MEDIA}assets/images/theme2/soflens.png`}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0.2} speed={0}>
            <div className="banner">
              <h1>BRAND CONTACT LENSES</h1>
              <ul>
                <li>
                  <a href="#">ALL BRANDS</a>
                </li>
                <li>
                  <a href="#">ALL LENSES</a>
                </li>
              </ul>
            </div>
          </ParallaxLayer>

          {/* ========================== slice 1 ========================== */}
          <ParallaxLayer
            offset={1}
            speed={0}
            style={{ backgroundColor: "#2FABF7" }}
          />

          <ParallaxLayer
            offset={1.5}
            speed={-0.5}
            style={{ backgroundColor: "#fff" }}
          />

          <ParallaxLayer offset={1.1} speed={-0.1}>
            <div className="banner">
              <h3>Soflens 59 Monthly Disposable Contact Lenses</h3>
              <Button>Shop now</Button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.35} speed={2}>
            <img
              src={`${URL_MEDIA}assets/images/theme2/s1.png`}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={2}>
            <div className="ctn-bot">
              <h4>Contains 6 Lenses Per Box</h4>
              <h4>Rs 799.00</h4>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={0.5}>
            <img
              className="img-s11"
              src={`${URL_MEDIA}assets/images/theme2/s11.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5}>
            <img
              className="img-s12"
              src={`${URL_MEDIA}assets/images/theme2/s12.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.55} speed={0.5}>
            <img
              className="img-s13"
              src={`${URL_MEDIA}assets/images/theme2/s13.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          {/* ========================== slice 2 ========================== */}
          <ParallaxLayer
            offset={2}
            speed={0}
            style={{ backgroundColor: "#7875B4" }}
          />

          <ParallaxLayer offset={2.1} speed={0}>
            <div className="banner">
              <h3>Freshlook Colorblend Color Contact Lenses</h3>
              <Button>Shop now</Button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          />

          <ParallaxLayer offset={2.38} speed={2}>
            <img
              src={`${URL_MEDIA}assets/images/theme2/s2.png`}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.5} speed={2}>
            <div className="ctn-bot">
              <h4 className="color3">Contains 2 Lens Per Box</h4>
              <h4 className="color3">Rs 649.00</h4>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.5}>
            <img
              className="img-s21"
              src={`${URL_MEDIA}assets/images/theme2/s21.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.75} speed={0.5}>
            <img
              className="img-s22"
              src={`${URL_MEDIA}assets/images/theme2/s21.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.55} speed={0.5}>
            <img
              className="img-s23"
              src={`${URL_MEDIA}assets/images/theme2/s21.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          {/* ========================== slice 3 ========================== */}
          <ParallaxLayer
            offset={3}
            speed={0}
            style={{ backgroundColor: "#8DA6CD" }}
          />

          <ParallaxLayer offset={3.1} speed={0}>
            <div className="banner">
              <h3>Freshlook Colorblend Color Contact Lenses</h3>
              <Button>Shop now</Button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          >
            <div className="ctn-bot">
              <h4 className="color4">Contains 2 Lens Per Box</h4>
              <h4 className="color4">Rs 649.00</h4>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3.35} speed={2}>
            <img
              src={`${URL_MEDIA}assets/images/theme2/s3.png`}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={3.6} speed={0.5}>
            <img
              className="img-s31"
              src={`${URL_MEDIA}assets/images/theme2/s31.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={3.75} speed={0.5}>
            <img
              className="img-s32"
              src={`${URL_MEDIA}assets/images/theme2/s31.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={3.55} speed={0.5}>
            <img
              className="img-s33"
              src={`${URL_MEDIA}assets/images/theme2/s31.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          {/* ========================== slice 4 ========================== */}
          <ParallaxLayer
            offset={4}
            speed={0}
            style={{ backgroundColor: "#70B9BF" }}
          />

          <ParallaxLayer offset={4.1} speed={0}>
            <div className="banner">
              <h3>Acuvue Oasys Monthly Disposable Contact Lens</h3>
              <Button>Shop now</Button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={4.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          />

          <ParallaxLayer
            offset={4.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          >
            <div className="ctn-bot">
              <h4 className="color5">Contains 6 Lenses Per Box</h4>
              <h4 className="color5">Rs 1,489.00 </h4>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={4.35} speed={2}>
            <img
              src={`${URL_MEDIA}assets/images/theme2/s4.png`}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={4.55} speed={0.5}>
            <img
              className="img-s41"
              src={`${URL_MEDIA}assets/images/theme2/s41.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={4.6} speed={0.5}>
            <img
              className="img-s42"
              src={`${URL_MEDIA}assets/images/theme2/s42.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          {/* ========================== slice 5 ========================== */}
          <ParallaxLayer
            offset={5}
            speed={0}
            style={{ backgroundColor: "#DF96C4" }}
          />

          <ParallaxLayer offset={5.1} speed={0}>
            <div className="banner">
              <h3>Lacelle Circle Color Contact Lens</h3>
              <Button>Shop now</Button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={5.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          />

          <ParallaxLayer
            offset={5.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          >
            <div className="ctn-bot">
              <h4 className="color6">Contains 6 Lenses Per Box</h4>
              <h4 className="color6">Rs 1,489.00 </h4>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={5.35} speed={2}>
            <img
              src={`${URL_MEDIA}assets/images/theme2/s5.png`}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5.55} speed={0.5}>
            <img
              className="img-s51"
              src={`${URL_MEDIA}assets/images/theme2/s51.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5.6} speed={0.5}>
            <img
              className="img-s52"
              src={`${URL_MEDIA}assets/images/theme2/s52.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5.75} speed={0.5}>
            <img
              className="img-s53"
              src={`${URL_MEDIA}assets/images/theme2/s51.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5.85} speed={0.5}>
            <img
              className="img-s54"
              src={`${URL_MEDIA}assets/images/theme2/s51.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          {/* ========================== slice 6 ========================== */}
          <ParallaxLayer
            offset={6}
            speed={0}
            style={{ backgroundColor: "#369BE7" }}
          />

          <ParallaxLayer offset={6.1} speed={0}>
            <div className="banner">
              <h3>Call LensBazaar today to know more</h3>
              <Button>CONTACT US</Button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={6.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          />

          <ParallaxLayer
            offset={6.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          >
            <div className="ctn-bot">
              <h5 className="color7">
                We are a direct to consumer selling website bringing One-Stop
                solution for all your Contact Lens requirements.
              </h5>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={6.35} speed={2}>
            <img
              src={`${URL_MEDIA}assets/images/theme2/s6.png`}
              style={{ display: "block", width: "350px", margin: "0 auto" }}
            />
          </ParallaxLayer>

          {/* ================ slice footer ==================== */}

          <ParallaxLayer
            offset={7}
            speed={0}
            style={{ backgroundColor: "rgba(54, 155, 231, 0.8)" }}
          />

          <ParallaxLayer offset={7.2} speed={0}>
            <div className="ft-title">
              <h5>
                We are a direct to consumer selling website bringing One-Stop
                solution for all your Contact Lens requirements.
              </h5>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={7.4}
            speed={0}
            style={{ backgroundColor: "#228FE0" }}
          >
            <h6 className="view-all">VIEW ALL PRODUCT</h6>
          </ParallaxLayer>

          <ParallaxLayer
            offset={7.5}
            speed={0}
            style={{ backgroundColor: "#369BE7" }}
          >
            <div className="slice-ft">
              <Row gutter={48}>
                <Col md={6}>
                  <div className="ft-item">
                    <h3>Information</h3>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Delivery Information</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="ft-item">
                    <h3>Customer Service</h3>
                    <ul>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                      <li>
                        <a href="#">Site Map</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="ft-item">
                    <h3>Extras</h3>
                    <ul>
                      <li>
                        <a href="#">Brands</a>
                      </li>
                      <li>
                        <a href="#">Gift Certificates</a>
                      </li>
                      <li>
                        <a href="#">Affiliate</a>
                        <a href="#">Specials</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="ft-item">
                    <h3>My Account</h3>
                    <ul>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">Order History</a>
                      </li>
                      <li>
                        <a href="#">Wish List</a>
                      </li>
                      <li>
                        <a href="#">Newsletter</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={24}>
                  <div className="slice-ft-bot">
                    <div className="socials">
                      <a href="#">
                        <FaFacebook />
                      </a>
                      <a href="#">
                        <FaTwitter />
                      </a>
                      <a href="#">
                        <FaPinterestP />
                      </a>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </div>
                    <p>
                      Copyright © <a href="#">Contactlens</a> Inc 2020. All
                      Rights Reserved
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={offsetIndex + 0.9} speed={-offsetIndex}>
            <Button>Top</Button>
          </ParallaxLayer> */}
        </Parallax>
      </div>
    );
  }
}

export default Home;
