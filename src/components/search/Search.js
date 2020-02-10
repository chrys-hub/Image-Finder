import React from 'react'
import TextField from "@material-ui/core/TextField"
import axios from 'axios';
import ImageResults from "../image-results/imageResults"
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import "./search.css"



class Search extends React.Component {
    state={
        apiUrl:'https://pixabay.com/api/',
        apiKey:'15142201-06b3f890242046fd4f58a3db4',
        amount:3,//for storing how much images will be displayed from select field
        searchText:'', //for storing the input text from textfield
        imagesType:'photo',//storing the images type from radio box
        images:[]
    }
    
    onTextChange = e =>{ //e is event
        this.setState({[e.target.name]:e.target.value},()=>//arrow function karena fetch while onChange
        {
        axios.get(`${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=${this.state.imagesType}&per_page=${this.state.amount}&safesearch=false`)
        .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err))
        });
       
    };

    SelectValue = event =>{
        const value=event.target.value; //this targeting an value from Menu control
        this.setState({amount:value},()=>{ //the logic is set an value then do fetch when value is changed
            axios.get(`${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=${this.state.imagesType}&per_page=${this.state.amount}&safesearch=false`)
        .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err))
        });
    };

    imagesCheck = event =>{
        const value=event.target.value;
        this.setState({imagesType:value},()=>{
            axios.get(`${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=${this.state.imagesType}&per_page=${this.state.amount}&safesearch=false`)
            .then(res=>this.setState({images:res.data.hits}))
                .catch(err=>console.log(err))  
        });
    }
    render(){
        console.log(this.state.images)
        
        return(
            <div style={{marginBottom:`50px`}}>
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

            <FormControl style={{minWidth:200}}>
        <InputLabel id="amount">Display Per Page</InputLabel>
        <Select
          labelId="amount"
          id="amount"
          value={this.state.amount}
          onChange={this.SelectValue}
          
          
        >
          <MenuItem value={3}>3 per page</MenuItem>
          <MenuItem value={6}>6 per page</MenuItem>
          <MenuItem value={12}>12 per page</MenuItem>
          <MenuItem value={18}>18 per page</MenuItem>
          <MenuItem value={24}>24 per page</MenuItem>
        </Select>
      </FormControl>
      <FormControl component="fieldset" margin="dense" variant="outlined">
        <FormLabel component="legend">Images Type (.default is photo)</FormLabel>
        <RadioGroup aria-label="all" name="checkbox"  onChange={this.imagesCheck}>
          <FormControlLabel value="vector" control={<Radio />} label="Vector" />
          <FormControlLabel value="illustration" control={<Radio />} label="illustration" />
          <FormControlLabel value="photo" control={<Radio />} label="photo" />
        </RadioGroup>
      </FormControl>
        {this.state.searchText.length===0?null:(
            <div className="flipit">
                <div><div>Wow {this.state.amount} Images Founded</div></div>
                <div><div>Find Everything Here</div></div>
                <div><div>Star my Github Repo</div></div>
            </div>

        )}
            {this.state.images.length >= 0&&this.state.searchText.length!==0?(<ImageResults images={this.state.images}/>):null}
            </div>//logic is if the state console loged of images lenght is more than 0 and state searchText lenght is not equal to zero
            //then process else return null
        );
    }
}

export default Search;