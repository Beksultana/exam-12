import React, {Component, Fragment} from 'react';
import {fetchImage} from "../../store/actions/imageActions";
import {connect} from "react-redux";
import {Card, CardBody, CardTitle} from "reactstrap";
import './Image.css';

class Image extends Component {

    componentDidMount() {
        this.props.fetchImages()
    }

    render() {

        const images = this.props.images ? this.props.images.map(img => {
            console.log(img);
            return (
                <div className="imgItem">
                    <Card>
                        <img style={{width: "350px", height: "250px"}}
                            src={"http://localhost:8000/uploads/" + img.img}
                            alt="Card image cap"
                        />
                        <CardBody>
                            <h6><strong>{img.title}</strong></h6>
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
    fetchImages: () => dispatch(fetchImage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);