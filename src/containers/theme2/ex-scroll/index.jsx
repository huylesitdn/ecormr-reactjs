import React from "react";
import "./_index.scss";
import ReactDOM from "react-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { URL_MEDIA } from "../../../config";
import { Button } from "antd";
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
  render() {
    return (
      <div className="ex-page">
        <div className="fixed-content">
          <HeaderSlice />

          <div className="actions-page">
            <a onClick={() => this.props.onScrollTo("next")}>Next</a>
            <a onClick={() => this.props.onScrollTo("prev")}>Prev</a>
          </div>
        </div>

        <Parallax ref={ref => (this.parallax = ref)} pages={7}>
          {/* slice main */}

          <ParallaxLayer
            offset={0}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          />

          <ParallaxLayer
            offset={0.75}
            speed={-0.25}
            style={{ backgroundColor: "#2FABF7" }}
          />

          <ParallaxLayer offset={0.75} speed={-1}>
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

          {/* slice 1 */}
          <ParallaxLayer
            offset={1}
            speed={0}
            style={{ backgroundColor: "#2FABF7" }}
          />

          <ParallaxLayer
            offset={1.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          >
            <div className="ctn-bot">
              <h4>Contains 6 Lenses Per Box</h4>
              <h4>Rs 799.00</h4>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={0}>
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

          <ParallaxLayer offset={1.6} speed={2}>
            <img
              className="img-s11"
              src={`${URL_MEDIA}assets/images/theme2/s11.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={2}>
            <img
              className="img-s12"
              src={`${URL_MEDIA}assets/images/theme2/s12.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.55} speed={2}>
            <img
              className="img-s13"
              src={`${URL_MEDIA}assets/images/theme2/s13.png`}
              style={{ display: "block" }}
            />
          </ParallaxLayer>

          {/* slice 2 */}
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

          {/* slice 3 */}
          <ParallaxLayer
            offset={3}
            speed={0}
            style={{ backgroundColor: "#8DA6CD" }}
          />

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

          {/* slice 4 */}
          <ParallaxLayer
            offset={4}
            speed={0}
            style={{ backgroundColor: "#70B9BF" }}
          />

          <ParallaxLayer
            offset={4.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          />

          <ParallaxLayer offset={4.35} speed={2}>
            <img
              src={`${URL_MEDIA}assets/images/theme2/s4.png`}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ParallaxLayer>

          {/* slice 5 */}
          <ParallaxLayer
            offset={5}
            speed={0}
            style={{ backgroundColor: "#DF96C4" }}
          />

          <ParallaxLayer
            offset={5.5}
            speed={0}
            style={{ backgroundColor: "#fff" }}
          />

          <ParallaxLayer offset={5.35} speed={2}>
            <img
              src={`${URL_MEDIA}assets/images/theme2/s5.png`}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ParallaxLayer>

          {/* slice 6 */}
          <ParallaxLayer
            offset={6}
            speed={0}
            style={{ backgroundColor: "#369BE7" }}
          />

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

          {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer> */}
        </Parallax>
      </div>
    );
  }
}

export default App;
