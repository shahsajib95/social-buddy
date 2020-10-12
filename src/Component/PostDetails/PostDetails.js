import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { Container } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
        margin: '50px',
    },
    media: {
        height: 140,
    },
});


const PostDetails = (props) => {
    const {postId} = useParams();
    const post = props.posts.find(post=> post.id == postId);
    const {id, userId, title, body} = post;
    const classes = useStyles();
    const [comments, setComments] = useState([]);
    console.log(comments)
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data))
    }, [url]);
    
    return (
        <div>
           <Card className={classes.root} key= {id}>
                <CardActions style={{backgroundColor: '#DEE2FF'}}>
                    User Id: {userId}
                </CardActions>
                <CardActions style={{backgroundColor: '#6174FF', color: 'white'}}>
                     {title}
                </CardActions>
                <CardActions style={{backgroundColor: '#3750FF', color: 'white'}}>
                     <h2>{body}</h2>
                </CardActions>

            <Container maxWidth="lg">
             <h1>Comments</h1>
            {comments.map( comment=>
            <CardActions key={comment.id} style={{margin: '20px'}}>
            {comment.email}
                <br></br>
            {comment.body}
            </CardActions>)}
            </Container>
            </Card>
            
        </div>
    );
};

export default PostDetails;