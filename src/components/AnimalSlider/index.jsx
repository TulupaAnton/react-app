import React, { Component } from "react";
import styles from "./AnimalSlider.module.scss";
import defaultDogImg from "./gettyimages-530330473.jpg";
class AnimalSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogImageSrc: "",
      dogDescriprion: "The Dog",
    };
    this.timerId = null;
  }

  load = () =>
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((request) => request.json())
      .then((data) => this.setState({ dogImageSrc: data.message }))
      .catch((err) => this.setState({ dogImageSrc: defaultDogImg }));

  componentDidMount() {
    this.load();

    // this.timerId = setInterval(this.load, 2000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.dogImageSrc !== this.state.dogImageSrc) {
      this.timerId = setTimeout(this.load, 2000);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const { dogImageSrc, dogDescriprion } = this.state;
    return (
      <figure className={styles.dogFigure}>
        <img src={dogImageSrc} alt="dog" />
        <figcaption>{dogDescriprion}</figcaption>
      </figure>
    );
  }
}
export default AnimalSlider;
