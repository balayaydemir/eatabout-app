import React, { Component } from 'react';
import config from '../config';


export default class Image extends Component {
    render() {
        return (
            <div>
                <form id="uploadForm" encType="multipart/form-data" action={`${config.API_ENDPOINT}/upload`} method="post">
                    <input type="file" name="userFile" />
                    <input type="submit" value="Upload File" name="submit"></input>
                </form>
            </div>
        )
    }
}