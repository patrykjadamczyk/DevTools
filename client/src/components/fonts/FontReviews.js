import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class FontReviews extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="font-reviews-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Prezentacja czcionki</h1>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FontReviews.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(FontReviews);
