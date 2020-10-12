import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        margin: '50px',
    },
    media: {
        height: 140,
    },
});

const Post = (props) => {

    const classes = useStyles();
    
    return (
        <div>
            
            <h1 style={{ textAlign: 'center' }}>Posts: {props.length}</h1>
            {props.posts.map(post =>  
            <Card className={classes.root} key= {post.id}>
                <CardActions style={{backgroundColor: '#DEE2FF'}}>
                    Post No: {post.id}
                </CardActions>
                <CardActions style={{backgroundColor: '#6174FF', color: 'white'}}>
                     {post.title}
                </CardActions>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        <Link to={"/posts/"+post.id}>Details</Link>
                    </Button>
                </CardActions>
            </Card>)}
            

        </div>
    );
};

export default Post;