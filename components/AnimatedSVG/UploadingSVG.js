import React from "react";

class UploadingSVG extends React.Component {
  componentDidMount() {
    import("lottie-web").then((lottie) => {
      this.lottieInstance = lottie.loadAnimation({
        container: this.animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: this.props.animationData,
      });
    });
  }

  componentWillUnmount() {
    if (this.lottieInstance) {
      this.lottieInstance.destroy();
    }
  }

  render() {
    return <div ref={(el) => (this.animationContainer = el)} />;
  }
}

export default UploadingSVG;
