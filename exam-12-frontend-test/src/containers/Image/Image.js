import React, {Component, Fragment} from 'react';
import { deleteImage, fetchImage} from "../../store/actions/imageActions";
import {connect} from "react-redux";
import {Button, Card, CardBody, NavLink} from "reactstrap";
import {NavLink as reactRouter} from "react-router-dom";
import './Image.css'

class Image extends Component {

    componentDidMount() {
        this.props.fetchImage(this.props.match.params.id)
    };

    render() {

        let user = '';
        let imgId = '';

        const images = this.props.image ? this.props.image.map(img => {
            user = img.user.username;
            imgId = img._id;
            return (
                <div key={img._id} className="imgItem">
                    <Card>
                        <img style={{width: "350px", height: "250px"}}
                             src={"http://localhost:8000/uploads/" + img.img}
                             alt="Card image cap"
                        />
                        <CardBody>
                            <h6><strong>{img.title}</strong></h6>
                            <Button
                                onClick={() => this.props.deleteImage(img._id)}
                                color="danger">Delete</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        }) : null;

        return (
            <Fragment>
                <h3><strong>{user} gallery</strong></h3>
                <hr/>
                {this.props.user || user === this.props.user ?
                    <Button color="success">
                        <NavLink
                            className="newPhoto"
                            tag={reactRouter}
                            to="/new/photo"
                        >
                            Add new photo
                        </NavLink>
                    </Button>
                : null}
                <div className="MainPhotoInfoBlock">
                    {images}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    image: state.images.image,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
   fetchImage: id => dispatch(fetchImage(id)),
    deleteImage: id => dispatch(deleteImage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);