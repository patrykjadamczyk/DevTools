import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import { addFont } from "../../actions/fontActions"


class FontForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      path: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const fontData = {
        name: this.state.name,
        path: this.state.path
    }
    this.props.addFont(fontData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const options = [
      { label: "Wybierz czcionkę", value: 0 },
      { label: "Arial", value: "Arial" }
    ];

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Sprawdź czcionkę</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <SelectListGroup
                  placeholder="Rodzaj czcionki"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  options={options}
                />
              </div>
              <div className="form-group">
                <TextFieldGroup
                  placeholder="Ścieżka do czcionki"
                  name="path"
                  value={this.state.path}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-dark float-right">
                Sprawdź
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

FontForm.propTypes = {
  auth: PropTypes.object.isRequired,
  addFont: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  font: state.font
});

export default connect(
  mapStateToProps,
  { addFont }
)(FontForm);