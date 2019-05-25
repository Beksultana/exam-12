import React, {Component, Fragment} from 'react';
import {fetchImages} from "../../store/actions/imageActions";
import {connect} from "react-redux";
import {Button, Card, CardBody, Modal, ModalBody, ModalFooter} from "reactstrap";
import './Images.css';
import {Link} from "react-router-dom";

class Images extends Component {

    state = {
        modal: null
    };

    showModal = photo => {
        this.setState({modal: photo});
    };

    hideModal = () => {
        this.setState({modal: null});
    };

    componentDidMount() {
        this.props.fetchImages()
    }

    render() {
        const images = this.props.images ? this.props.images.map(img => {
            return (
                <div onClick={() => this.showModal(img)} key={img._id} className="imgItem">
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

                <Modal size="lg"
                    isOpen={!!this.state.modal}
                    toggle={this.hideModal}
                    className={this.props.className}
                >
                    {this.state.modal && (
                        <Fragment>
                            <ModalBody>
                                <img style={{width: "770px", height: "500px"}}
                                     src={"http://localhost:8000/uploads/" + this.state.modal.img} alt="img"/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={this.hideModal}>Close</Button>
                            </ModalFooter>
                        </Fragment>
                    )}

                </Modal>
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