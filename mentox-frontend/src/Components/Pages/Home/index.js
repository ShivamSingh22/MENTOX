import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

  blogsContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: 20
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
    height:'100%'

  },
  media: {
    height: 240
  }

}));

function Blog() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: '#d2d3ee' }}>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant='h2' align='center' style={{marginBottom:'1rem'}}>
          Blog
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>


            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Music Heals"
                />
                <CardContent style={{height:'250px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Music Heals
                  </Typography>
                  <Typography variant="body2"  color="textSecondary" component="p">
                    Music acts as a medium for processing emotions, trauma, and grief—but music can also be utilized as a regulating or calming agent for anxiety or for dysregulation.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant='outlined' color="primary" >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1620399353279-73133c96690d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxtZW50YWwlMjBoZWFsdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Contemplative Reptile"
                />
                <CardContent style={{height:'250px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Bipolar Disorder
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.


                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant='outlined' color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1620389701597-28188918b071?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxtZW50YWwlMjBoZWFsdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Contemplative Reptile"
                />
                <CardContent style={{height:'250px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Depression
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Depression is classified as a mood disorder. It may be described as feelings of sadness, loss, or anger that interfere with a person’s everyday activities. It’s also fairly common. The Centers for Disease Control and Prevention (CDC)Trusted Source estimates that 8.1 percent of American adults ages 20 and over had depression in any given 2-week period from 2013 to 2016.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant='outlined' color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>

      </Container>
    </div>
  );
}

export default Blog;

