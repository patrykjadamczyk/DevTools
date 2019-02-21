import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FontReviews from "./FontReviews"
import Spinner from "../common/spinner";
import { getFonts } from "../../actions/fontActions";
import FontFeed from "../fonts/FontFeed";
import FontAddForm from "../fonts/FontAddForm"

class Fonts extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/");
    }
    this.props.getFonts();
  }
  render() {
    const { fonts, loading } = this.props;

    let fontContent;

    if(fonts === null || loading || fonts.length === 0 ){
      fontContent = <Spinner />;
    }else{
      fontContent = <FontFeed fonts={fonts} />
    }

    return (
      <div className="fonts-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FontAddForm />
              { fontContent }
              <FontReviews />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Fonts.propTypes = {
  getFonts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  fonts: state.font.fonts,
  auth: state.auth
});

export default connect(
  mapStateToProps,
   { getFonts }
)(Fonts);