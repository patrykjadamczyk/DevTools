import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FontForm from "../fonts/FontForm"

class FontItem extends Component {
  constructor(props) {
    super(props);
  //  console.log(props);
    this.state = {

    };
    //  console.log(this.state);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { font } = this.props;

    // console.log(this.props);

    return (
      <div>
          <FontForm font={font} />
      </div>
    );
  }
}

FontItem.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps
)(FontItem);