import React from "react";
import "./_index.scss";
import ReactDOM from "react-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { URL_MEDIA } from "../../../config";
import { Button, Space } from "antd";
import HeaderSlice from "../../../components/theme2/home/HeaderSlice";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      space: 0,
      offsetIndex: 0,
      spaceOffset: 0,
      spaceOffsetPrev: 0,
      currentScroll: 0
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
      currentScroll
    } = this.state;

    let currentNow = this.parallax.current;
    let space = this.parallax.space;
    console.log("1111111111111111");

    console.log(currentNow, space, currentScroll, spaceOffset, spaceOffsetPrev);

    if (currentNow > currentScroll) {
      // scroll down
      await this.parallax.scrollTo(offsetIndex + 1);

      // this.setState({ offsetIndex: offsetIndex + 1 });

      if (currentNow === spaceOffset) {
        // next slice
        await this.setState({
          offsetIndex: offsetIndex + 1,
          spaceOffset: spaceOffset + space,
          spaceOffsetPrev: spaceOffset,
          currentScroll: currentNow
        });
      }
    } else {
      // scroll up
      await this.parallax.scrollTo(offsetIndex - 1);

      // this.setState({ offsetIndex: offsetIndex - 1 });

      if (currentNow === spaceOffsetPrev - space) {
        // prev slice
        await this.setState({
          offsetIndex: offsetIndex - 1,
          spaceOffset: spaceOffsetPrev,
          spaceOffsetPrev: spaceOffsetPrev - space,
          currentScroll: currentNow
        });
      }
    }
  };

  onScrollTo = async action => {
    const {
      offsetIndex,
      spaceOffset,
      spaceOffsetPrev,
      currentScroll
    } = this.state;

    let currentNow = this.parallax.current;
    let space = this.parallax.space;

    console.log("action: ", action);
    console.log("currentNow: ", currentNow);
    console.log("offsetIndex: ", offsetIndex);

    if (action === "next") {
      await this.parallax.scrollTo(offsetIndex + 1);
      // this.setState({
      //   offsetIndex: offsetIndex + 1,
      //   spaceOffset: spaceOffset + space,
      //   // spaceOffsetPrev: spaceOffset,
      //   currentScroll: currentNow
      // });
    } else {
      await this.parallax.scrollTo(offsetIndex - 1);
      // this.setState({
      //   offsetIndex: offsetIndex - 1,
      //   // spaceOffset: spaceOffsetPrev,
      //   // spaceOffsetPrev: spaceOffsetPrev - space,
      //   currentScroll: currentNow
      // });
    }
  };

  render() {
    const { offsetIndex } = this.state;
    console.log("offsetIndex: ", offsetIndex);

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
            ) : (
              <>
                <a
                  disabled={offsetIndex === 6}
                  onClick={() => this.onScrollTo("next")}
                >
                  Next
                </a>
                <a onClick={() => this.onScrollTo("prev")}>Prev</a>
              </>
            )}
          </div>
        </div>

        <Parallax
          ref={ref => (this.parallax = ref)}
          pages={7}
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
              <h4>Contains 2 Lens Per Box</h4>
              <h4>Rs 649.00</h4>
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
              <h4>Contains 6 Lenses Per Box</h4>
              <h4>Rs 1,489.00 </h4>
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
              <h4>Contains 6 Lenses Per Box</h4>
              <h4>Rs 1,489.00 </h4>
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

          <ParallaxLayer offset={6.35} speed={2}>
            <img
              src={`${URL_MEDIA}assets/images/theme2/s6.png`}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ParallaxLayer>

          {/* <ParallaxLayer offset={offsetIndex + 0.9} speed={-offsetIndex}>
            <Button>Top</Button>
          </ParallaxLayer> */}
        </Parallax>
      </div>
    );
  }
}

export default App;
