import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import { addFont } from "../../actions/fontActions"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontTypeForm } from "./FontTypeForm"

class FontForm extends Component {
  constructor(props) {
    super(props);
    // console.log("--------");
    // console.log(props);
    // console.log("----------");
     this.state = {
      name: '',
      modalName: false,
      modalType: false
      // types: [
      //   { 
      //     family: '',
      //     path: ''
      //   }
      // ]
     };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleName = this.toggleName.bind(this);
    this.toggleType = this.toggleType.bind(this);
  }

  toggleName() {
    this.setState({
      modalName: !this.state.modalName
    });
  }

  
  toggleType() {
    this.setState({
      modalType: !this.state.modalType
    });
  }

  onSubmit(e) {
    e.preventDefault();

    // const fontData = {
    //     name: this.state.name,
    //     types: [
    //       {
    //         family: this.state.types.family1,
    //         path: this.state.types.path1
    //       }
    //     ]
    // }
    // this.props.addFont(fontData);
  }

  onChange(e) {
    // let name = e.target.name.split('-');
    // const stateData = {
    //     types:[
          
    //     ]
    // };

    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    console.log(this.props)

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Sprawdź czcionkę</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit} className="row">
            <fieldset className="col-md-2">
              <div className="form-group">
                  <TextFieldGroup
                    placeholder="Nazwa czcionki"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                />
              </div>
            </fieldset>
            <fieldset className="col-md-2">
              <div className="form-group">
                  <TextFieldGroup
                    placeholder="Rodzaj czcionki"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChange}
                />
              </div>
            </fieldset>
         
            {/* <fieldset className="col-md-2">
              <div className="form-group">
                <TextFieldGroup
                  placeholder="Rodzaj czcionki"
                  name="family"
                  value={this.state.family}
                  onChange={this.onChange}
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
            </fieldset> */}
              <button type="submit" className="btn btn-dark float-right ml-auto">
                Dodaj
              </button>
            </form>
          </div>
        </div>
        <Button color="danger" onClick={this.toggleName}>lunch name</Button>
        <Modal isOpen={this.state.modalName} toggle={this.toggleName} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal name</ModalHeader>
          <ModalBody>
            <fieldset className="col-md-12">
              <div className="form-group">
                  <TextFieldGroup
                    placeholder="Nazwa czcionki"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                />
              </div>
            </fieldset>
          </ModalBody>
        </Modal>
        <Button color="danger" onClick={this.toggleType}>lunch type</Button>
        <Modal isOpen={this.state.modalType} toggle={this.toggleType} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal type</ModalHeader>
          <ModalBody>
            <fieldset className="col-md-12">
              <div className="form-group">
                  <TextFieldGroup
                    placeholder="Typ czcionki"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChange}
                />
              </div>
            </fieldset>
          </ModalBody>
        </Modal>
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
  // font: state.font
});

export default connect(
  mapStateToProps,
  { addFont }
)(FontForm);