import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderDish() {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        );
    }

    renderComments(comments) {
        if (comments != null) {
            return (comments.map((user_comment) => {
                return (<div>
                    <li className="list-unstyled">{user_comment.comment}</li>
                    <br></br>
                    <li className="list-unstyled"> -- {user_comment.author},{user_comment.date}</li>
                    <br></br>
                </div>
                );
            }));
        }
        else {
            return (<div></div>);
        }


    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish()}
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>

                </div>
            )
        }


        else
            return (
                <div></div>
            );
    }


}

export default DishDetail;