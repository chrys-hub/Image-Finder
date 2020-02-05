import React from 'react'
import TextField from "@material-ui/core/TextField"
import axios from 'axios';
import ImageResults from "../image-results/imageResults"
class Search extends React.Component {
    state={
        apiUrl:'https://pixabay.com/api/',
        apiKey:'15142201-06b3f890242046fd4f58a3db4',
        amount:15,
        searchText:'',
        images:[]
    }

    onTextChange = e =>{
        this.setState({[e.target.name]:e.target.value},()=>
        {
        axios.get(`${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=false`)
        .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err))
        });
       
    };
    render(){
        console.log(this.state.images)
        return(
            <div style={{padding:`15px`,marginBottom:`400px`}}>
            <TextField
            label="Search here image here..(ex.dragon,cat,dog)"
            name="searchText"
            id="outlined-basic"
            color={'primary'}
            value={this.state.searchText}
            onChange={this.onTextChange}
            fullWidth={true}
            />
            <br/>
            {this.state.images.length >= 0?(<ImageResults images={this.state.images}/>):null}
            </div>
        );
    }
}

export default Search;