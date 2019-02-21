import React, { Component } from 'react';
import FileUploadForm from '../file/FileUploadForm'

class FontAddForm extends Component {
    render() {
        return (
            <div>
                <h3>Add font file</h3>
                <FileUploadForm />
            </div>
        );
    }
}

export default FontAddForm;