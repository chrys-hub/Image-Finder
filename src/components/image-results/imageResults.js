import React from 'react'
import PropTypes from 'prop-types';
import { GridList,GridListTile,GridListTileBar } from '@material-ui/core';

class ImagesResults extends React.Component{
    render(){
        let ListContent;//declare let for list content and will be processed
        const { images }=this.props; 

        if(images){
            ListContent=(
                <GridList cols={3}>
                    {images.map(img=>(
                        <GridListTile
                        title={img.tags}
                        key={img.id}
                        subtitle={
                        <span>By:<strong>{img.user}</strong></span>
                        }
                        >
                        <img src={img.largeImageURL} alt=""/>
                        <GridListTileBar
              title={img.tags}
              subtitle={<span>by: {img.user}</span>}
            />
                        </GridListTile>
                    ))}
                </GridList>
            )
        }else{
            ListContent = null;
            //when the string is equal to null or there no value then displaying null
            //jika array itu tidak berisi maka akan di display null
        }
        return(
            <div>
                {ListContent}
            </div>
        );
    }
}

ImagesResults.propTypes = {
    images: PropTypes.array.isRequired
}
export default ImagesResults;