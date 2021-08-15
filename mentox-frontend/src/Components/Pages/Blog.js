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
import Navbar from "../Navbar";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(/Images/image.jpg)`,
    height: "100vh",
    backgroundColor: "#d2d3ee",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    color: "#fff349",
    fontSize: "10rem",
    fontfamily: "Style Script",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: 20,
  },
  blogTitle: {
    fontWeight: 600,
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
    <div style={{ backgroundColor: "white" }}>
      <Navbar />
      <Typography
        xs={12}
        align="center"
        style={{ padding: "25vh" }}
        className={classes.hero}
      >
        Blog
      </Typography>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h3" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.fanawards.com/sites/default/files/styles/blog/public/blog/music2heal.png?itok=RjQYZNlU"
                  title="Music Heals"
                />
                <CardContent>
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
                <Button size="small" color="primary">
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
                  image="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnRhbCUyMGRpc29yZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Schizophrenia
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Schizophrenia is a chronic brain disorder that affects less
                    than one percent of the U.S. population. When schizophrenia
                    is active, symptoms can include delusions, hallucinations,
                    disorganized speech, trouble with thinking and lack of
                    motivation.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://strong365.org/blog/syrena-schizoaffective-schizophrenia-journey/"
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
                  image="https://images.unsplash.com/photo-1570129476815-ba368ac77013?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2x1dHRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Getting rid of clutter - The Basics
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    We all have stuff we don't need and people we shouldn't be
                    with in our lives. We accumulate so much and then break
                    down. In this article, we discover how organisation and
                    decluttering can simplify your lives. Also, don't forget to
                    check out our simple tricks to get a little organised- just
                    the right amount!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://www.gracefulabandon.com/getting-rid-of-clutter/"
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
                  image="https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Taking Mental Health Seriously: The Impact of Celebrity
                    Activism And How You Can Help Normalize Mental Health Issues
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The stigmatization of mental health issues have recently
                    been challenged with the coming out of celebrities and sport
                    athletes on social media. This represents a step in the
                    right direction. However, we still have a long way to go to
                    removing the 'taboo' status of mental health issues on
                    public platforms. An argument in favour of celebrity
                    activism and our participation in furthering the cause is
                    presented. Make no mistake, this is a call-to-arms!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://wagingnonviolence.org/2013/07/why-celebrity-activism-does-more-harm-than-good/"
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
                  image="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Be Happy
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    “What makes you happy?” someone asked me recently. I
                    couldn’t respond to such a profound question without doing
                    some self-reflection.Honestly, I don’t claim to be 100
                    percent happy, even though life is good and meaningful. I
                    have a purpose. But dwelling on making myself happy has
                    never been my habit. I strive for feeling my best every
                    day—being energetic, yet calm—free of fear, worry, anxiety,
                    and depression—being able to manage stress—and appreciating
                    what I have, not focusing on what I don’t have. It’s a
                    prerequisite for happiness.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://happinessblog.net/"
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
                  image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Yoga
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    It’s time to roll out your yoga mat and discover the
                    combination of physical and mental exercises that for
                    thousands of years have hooked yoga practitioners around the
                    globe. The beauty of yoga is that you don’t have to be a
                    yogi or yogini to reap the benefits. Whether you are young
                    or old, overweight or fit, yoga has the power to calm the
                    mind and strengthen the body. Don’t be intimidated by yoga
                    terminology, fancy yoga studios and complicated poses. Yoga
                    is for everyone.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://dailycup.yoga/2021/03/22/lessons-in-love-practical-advice-from-the-yoga-mat/"
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
                  image="https://images.unsplash.com/photo-1620302044615-3883082d075a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Anxiety
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Occasional anxiety is an expected part of life. You might
                    feel anxious when faced with a problem at work, before
                    taking a test, or before making an important decision. But
                    anxiety disorders involve more than temporary worry or fear.
                    For a person with an anxiety disorder, the anxiety does not
                    go away and can get worse over time.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://centerforanxietydisorders.com/blog/"
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
                  image="https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Don't Panic
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Panic attacks tend to last only up to 20 minutes, but for
                    some people can last longer. Panic attacks are not harmful;
                    your body is responding to a frightening thought. Often the
                    first time someone has a panic attack it can seem to appear
                    out of the blue. There may be underlying reasons for why you
                    have experienced a panic attack.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://www.dont--panic.com/"
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
                <CardContent>
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
                <Button size="small" color="primary">
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
                <CardContent>
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
                    fast. How long 'should' PPD last?{" "}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
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
      <Footer />
    </div>
  );
}

export default Blog;
