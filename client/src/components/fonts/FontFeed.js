import React, { Component } from "react";
import PropTypes from "prop-types";
import FontItem from "./FontItem";

class FontFeed extends Component {
  render() {
    const { fonts } = this.props;
    return fonts.map(font => <FontItem key={font._id} font={font} />);
  }
}

FontFeed.propTypes = {
  fonts: PropTypes.array.isRequired
};

export default FontFeed;