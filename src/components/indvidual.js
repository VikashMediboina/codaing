import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Card, Grid, CardContent, Typography, Chip } from '@material-ui/core';

export class Indvidual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        if (this.props.show) {
            this.setState({
                data: this.props.showData
            })
        }
        else {
            if (this.props.data.data) {
                for (let i = 0; i < this.props.data.data.length; i++) {
                    if (Number(this.props.match.params.id) === Number(this.props.data.data[i].id)) {
                        this.setState({
                            data: this.props.data.data[i]
                        })
                        break;
                    }
                }
            }
            else {
                this.props.history.push("/home")
            }
        }

    }
    goBack = () => {
        if (this.props.show) {
            this.props.handleClose()
        }
        else {
            this.props.history.push("/home")
        }
    }
    render() {
        return (
            <>
                <div style={{ float: "left" }}>
                    <Button startIcon={<ArrowBackIcon />} onClick={this.goBack} > Go Back</Button>
                </div>
                <Grid container>
                    <Grid item xs={!this.props.show ? 12 : 12} md={!this.props.show ? 6 : 12} >
                        <img src={this.state.data.image} style={{ width: "100%", height: "250px" }} alt={this.state.data.name + " image"} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={!this.props.show ? 6 : 12} >
                        <Card>
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.state.data.name}   <Chip
                                        size="small"
                                        label={<p>&#x20B9;&nbsp;{this.state.data.price}</p>}
                                        color="primary"
                                    />
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {this.state.data.description}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return { data: state.data }
}
export default connect(mapStateToProps)(Indvidual)
