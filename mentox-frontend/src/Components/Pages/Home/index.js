import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: 20,
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
    height: "100%",
  },
  media: {
    height: 240,
  },
}));

function Blog() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#d2d3ee" }}>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography
          variant="h2"
          align="center"
          style={{ marginBottom: "1rem" }}
        >
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
                <CardContent style={{ height: "250px" }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Music Heals
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Music therapy is a burgeoning field. Those who become
                    certified music therapists are accomplished musicians who
                    have deep knowledge of how music can evoke emotional
                    responses to relax or stimulate people, or help them heal.
                    They combine this knowledge with their familiarity with a
                    wide variety of musical styles to find the specific kind
                    that can get you through a challenging physical rehab
                    session or guide you into meditation.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant="outlined" color="primary">
                  <a
                    href="https://www.health.harvard.edu/blog/healing-through-music-201511058556"
                    style={{ textDecoration: "none", color: "primary" }}
                  >
                    Read More
                  </a>
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
                <CardContent style={{ height: "250px" }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Bipolar Disorder
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    If a person with bipolar disorder goes to the doctor with
                    concerns over unusual symptoms, say, unexplained
                    gastrointestinal problems, again, the doctor likely thinks
                    one of two things with bipolar: either the symptoms are
                    psychosomatic, or the symptoms are side effects. In both
                    cases, they are “not their problem” if they are not the
                    prescribing physician.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant="outlined" color="primary">
                  <a
                    href="https://natashatracy.com/mental-illness-issues/doctors/why-dont-doctors-listen-to-people-bipolar-disorder/"
                    style={{ textDecoration: "none", color: "primary" }}
                  >
                    Read More
                  </a>
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
                <CardContent style={{ height: "250px" }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Depression
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    You've been diagnosed with postpartum depression (PPD).
                    You've started treatment, whether it be therapy, lifestyle
                    changes, and/or medication. You read about one woman who had
                    PPD and was better in a month, so you're ready to tackle
                    this and "return to normal" in a few weeks, right? Not so
                    fast. How long 'should' PPD last?
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant="outlined" color="primary">
                  <a
                    href="https://www.healthyplace.com/blogs/copingwithdepression/2021/8/how-long-should-my-postpartum-depression-last"
                    style={{ textDecoration: "none", color: "primary" }}
                  >
                    Read More
                  </a>
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
