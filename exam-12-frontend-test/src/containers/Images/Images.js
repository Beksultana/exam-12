import React, {Component, Fragment} from 'react';
import {fetchImages} from "../../store/actions/imageActions";
import {connect} from "react-redux";
import {Card, CardBody} from "reactstrap";
import './Images.css';
import {Link} from "react-router-dom";

class Images extends Component {

    componentDidMount() {
        this.props.fetchImages()
    }

    render() {

        const images = this.props.images ? this.props.images.map(img => {
            console.log(img);
            return (
                <div key={img._id} className="imgItem">
                    <Card>
                        <img style={{width: "350px", height: "250px"}}
                            src={"http://localhost:8000/uploads/" + img.img}
                            alt="Card image cap"
                        />
                        <CardBody>
                            <h6><strong>{img.title}</strong></h6>
                            <span>By: <Link to={"/images/"+ img.user._id}>{img.user.username}</Link></span>
                        </CardBody>
                    </Card>
                </div>
            )
        }) : null;

        return (
            <Fragment>
                <div className="MainPhotoInfoBlock">
                    {images}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    images: state.images.images
});

const mapDispatchToProps = dispatch => ({
    fetchImages: () => dispatch(fetchImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);