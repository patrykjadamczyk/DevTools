import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FontForm from "./FontForm";
import FontReviews from "./FontReviews"
//import { getFonts } from "../../actions/teamActions";

class Fonts extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/");
    }
  //  this.props.getFonts();
  }
  render() {
    return (
      <div className="feed fonts-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <FontForm />
                <FontReviews />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Fonts.propTypes = {
//   font: PropTypes.object.isRequired,
//   getFonts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
 // font: state.font,
  auth: state.auth
});

export default connect(
  mapStateToProps,
//   { getFonts }
)(Fonts);