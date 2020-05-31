import React from "react";
import "./_index.scss";
// import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import Parallax from "react-springy-parallax";

// components
import MainSlice from "../../../components/theme2/home/MainSlice";
import Slice2 from "../../../components/theme2/home/Slice2";
import Slice3 from "../../../components/theme2/home/Slice3";
import Slice4 from "../../../components/theme2/home/Slice4";
import Slice5 from "../../../components/theme2/home/Slice5";
import Slice6 from "../../../components/theme2/home/Slice6";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetIndex: 0
    };
  }

  onScrollTo = action => {
    const { offsetIndex } = this.state;
    let new_offset = 0;
    if (action === "next") {
      new_offset = offsetIndex + 1;
    } else {
      new_offset = offsetIndex - 1;
    }

    this.setState({ offsetIndex: new_offset });
    this.refs.parallax.scrollTo(new_offset);
  };

  onScrollPage = (x, y, z) => {
    // console.log(x, y, z);
  };

  render() {
    const styles = {
      fontFamily: "Menlo-Regular, Menlo, monospace",
      fontSize: 14,
      lineHeight: "10px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };

    return (
      <div className="home" onScroll={this.onScrollPage}>
        <Parallax
          ref="parallax"
          pages={6}
          scrolling={true}
          effect={(animation, toValue) => {
            console.log("animation: ", animation)
            console.log("toValue: ", toValue)
            // Animated.timing(animation, { toValue, duration: 0 })
          }
          }
        >
          <Parallax.Layer offset={0} speed={1}>
            <MainSlice onScrollTo={this.onScrollTo} />
          </Parallax.Layer>

          <Parallax.Layer offset={1} speed={0}>
            <Slice2 onScrollTo={this.onScrollTo} />
          </Parallax.Layer>

          <Parallax.Layer offset={2} speed={0}>
            <Slice3 onScrollTo={this.onScrollTo} />
          </Parallax.Layer>

          <Parallax.Layer offset={3} speed={0}>
            <Slice4 onScrollTo={this.onScrollTo} />
          </Parallax.Layer>

          <Parallax.Layer offset={4} speed={0}>
            <Slice5 onScrollTo={this.onScrollTo} />
          </Parallax.Layer>

          <Parallax.Layer offset={5} speed={0}>
            <Slice6 onScrollTo={this.onScrollTo} />
          </Parallax.Layer>

          {/* <Parallax.Layer
            offset={0}
            speed={0}
            style={{ backgroundColor: "#243B4A" }}
          />
          <Parallax.Layer
            offset={1}
            speed={0}
            style={{ backgroundColor: "#805E73" }}
          />
          <Parallax.Layer
            offset={2}
            speed={0}
            style={{ backgroundColor: "#87BCDE" }}
          />

          <Parallax.Layer
            offset={0}
            speed={0}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(1)}
          >
            Click!
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(2)}
          >
            Another page ...
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(0)}
          >
            The end.
          </Parallax.Layer> */}
        </Parallax>
      </div>
    );
  }
}
export default Home;
