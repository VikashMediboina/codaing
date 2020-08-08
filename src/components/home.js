import React, { Component } from 'react'
import { Cardshow } from './card'
import { postRequestGetData } from '../action/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Grid, Icon } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { Indvidual } from './indvidual';

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            value: "",
            open: false,
            cardData: {}
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            if (this.props.data === "error occured") {
                console.log("error")
            }
            else {
                this.setState({ data: this.props.data.data })
            }
        }
    }
    show = (id) => {
        this.props.history.push("/iteam/" + id)
    }
    componentDidMount() {
        this.props.postRequestGetData()
    }
    searchRecipe = (e) => {
        this.setState({
            value: e.target.value.toLowerCase()
        })
    }
    showpop = (cardData) => {
        this.setState({
            open: true,
            cardData: cardData
        })
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    render() {
        return (
            <div className="cards">
                <Grid container spacing={1} alignItems="flex-end" style={{ margin: "5px" }}>
                    <Grid item md={4} xs={2}>
                    </Grid>
                    <Grid item >
                        <Icon><img src={require("../Assets/Icons/Icon feather-search.png")} alt={"search"}></img></Icon>
                    </Grid>
                    <Grid item >
                        <TextField id="input-with-icon-grid" label="Search the recipe" onChange={this.searchRecipe} />
                    </Grid>
                </Grid>
                {this.state.data && <Grid container spacing={3} > {this.state.data.filter(data => data.name.toLowerCase().includes(this.state.value)).map((cardData, index) =>
                    <Grid item sm={4} md={2} xs={6} key={index}>
                        <Cardshow cardData={cardData} clikckFunc={this.show} showData={this.showpop}></Cardshow>
                    </Grid>)}</Grid>}
                <Dialog open={this.state.open} aria-labelledby="responsive-dialog-title" onClose={this.handleClose}>
                    <Indvidual showData={this.state.cardData} show={true} handleClose={this.handleClose}></Indvidual>
                </Dialog>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { data: state.data }
}
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ postRequestGetData }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)
