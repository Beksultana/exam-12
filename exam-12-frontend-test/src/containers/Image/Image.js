import React, {Component, Fragment} from 'react';
import {fetchImage} from "../../store/actions/imageActions";
import {connect} from "react-redux";
import {Card, CardBody} from "reactstrap";

class Image extends Component {

    componentDidMount() {
        this.props.fetchImage(this.props.match.params.id)
    };

    render() {

        let user = '';

        const images = this.props.image ? this.props.image.map(img => {
            user = img.user.username;
            return (
                <div key={img._id} className="imgItem">
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
                <h3><strong>{user} gallery</strong></h3>
                <hr/>
                <div className="MainPhotoInfoBlock">
                    {images}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    image: state.images.image
});

const mapDispatchToProps = dispatch => ({
   fetchImage: id => dispatch(fetchImage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);