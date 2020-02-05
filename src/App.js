import React from 'react';
import NavBar from "./components/navbar/NavBar"
import Search from "./components/search/Search"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Cat from "./cat.png"
import "./App.css"
class App extends React.Component {
    render() {
        return (
<div>
                <NavBar/>
                <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="460"
          image={Cat}
          title="Chrysna ardy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ABOUT THE DEVELOPER
          </Typography>
          <Typography variant="body2" color="textPrimary" component="h1">
           Hello My Name is Chrysna,i'm a front-end junior developer,i'm a guitaris,i also like gaming
           morely at HALO series damn that's awesome series,well that's it for me you can see my github and facebook link
           on that button just click it to contact me,this project using material-ui very awesome and using axios for fetching data
           from pixabay api,Made with ReactJs,well that's it,Happy using and happy coding as well
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="large" color="primary" href="https://github.com/chrysnaardy123/" target="_Blank">
          GitHub
        </Button>
        <Button variant="contained" size="large" color="primary" href="https://web.facebook.com/krisna.app.1" target="_Blank">
          Facebook
        </Button>  
        <Button variant="contained" size="large" color="primary" href="#search">
          Start Searching
        </Button>
      </CardActions>
    </Card>
    <div style={{marginTop:`50px`}}>
    <center>
    <Typography variant="h4" color="textPrimary" component="h4">
        Search Image by tag in TextField bellow
    </Typography>
    </center>
    </div>
                <div id="search">                
                  <Search />
                  </div>

</div>
        );
    }
}


export default App;
