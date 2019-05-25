import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {createPhoto} from "../../store/actions/imageActions";
import {connect} from "react-redux";

class NewPhoto extends Component {

    state = {
        title: '',
        img: ''
    };

    changeHandler = event => {
        this.setState({
        [event.target.name]: event.target.value
        })
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.createPhoto(formData);
    };

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.submitFormHandler}>
                    <FormGroup row>
                        <Label for="title" sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input
                                value={this.state.title} onChange={this.changeHandler}
                                type="text" name="title" id="title" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="file" sm={2}>Image</Label>
                        <Col sm={10}>
                            <Input onChange={this.fileChangeHandler}
                                   type="file" name="img" id="file" />
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="success">Create photo</Button>
                        </Col>
                    </FormGroup>

                </Form>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createPhoto: photoData => dispatch(createPhoto(photoData))
});

export default connect(null, mapDispatchToProps)(NewPhoto);