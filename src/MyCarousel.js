import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const images = [{ src: '/images/background-left.jpg' }];

class MyCarousel extends React.Component {
    state = { modalIsOpen: false };
    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    };



    render() {
        const { modalIsOpen } = this.state;

        return (
            <React.Fragment>

                <div id="container">
                    <div id="dummy"></div>
                    <ModalGateway>
                        {
                            modalIsOpen ? (
                                <Modal onClose={this.toggleModal} >
                                    <Carousel views={images} />
                                </Modal>
                            ) : null
                        }
                    </ModalGateway>
                </div>
                {!this.modalIsOpen ? (
                    <div className="wrapper" onClick={this.toggleModal}>
                        <div className="circle pulse"></div>
                        <div className="circle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <polygon points="40,30 65,50 40,70"></polygon>
                            </svg>
                        </div>
                    </div>
                ) : null}
            </React.Fragment>
        );
    }
}

export default MyCarousel;