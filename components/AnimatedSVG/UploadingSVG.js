import React from "react";
import lottie from "lottie-web";

class UploadingSVG extends React.Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: this.animationContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: this.props.animationData,
    });
  }

  componentWillUnmount() {
    lottie.destroy();
  }

  render() {
    return <div ref={(el) => (this.animationContainer = el)} />;
  }
}

export default UploadingSVG;
