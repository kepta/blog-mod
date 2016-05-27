import React from 'react';
import './css/MyPhotu.css';

const OPTIONS = {
  angry: 'assets/my_photo_angry.jpg',
  mouth: 'assets/my_photo_mouth.jpg',
  smile: 'assets/my_photo_smile.jpg',
};

export default class MyPhotu extends React.Component {
  state = {
    image: OPTIONS.mouth,
  }
  setSmile = () => {
    this.setState({
      image: OPTIONS.smile,
    });
  }

  setAngry = () => {
    this.setState({
      image: OPTIONS.angry,
    });
  }

  setMouth = () => {
    this.setState({
      image: OPTIONS.mouth,
    });
  }
  render() {
    return (
      <div className="MyPhotu flex-col align-center">
        <img
          role="presentation"
          src={this.state.image}
          onMouseOver={this.setSmile}
          onMouseOut={this.setMouth}
        />
      </div>
    );
  }
}
