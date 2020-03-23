import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { getCourses } from "../../actions/courseActions";
import { Link, withRouter } from "react-router-dom";
import Loading from "../controls/Loading";

const style = theme => ({
  root: {
    height: "100%"
  },
  videoItem: {
    overflow: "hidden",
    paddingTop: "30%",
    position: "relative"
  },
  video: {
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%"
  }
});

class Course extends Component {
  constructor(props) {
    super(props);

    if (!props.course.courses.length) props.getCourses();

    this.state = {
      id: props.match.params.id,
      prev: "",
      next: "",
      course: {}
    };
  }

  componentDidMount() {
    this.updateState(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps.match.params.id, nextProps);
  }

  updateState = (id, props = this.props) => {
    const { courses } = props.course;

    const index = courses.findIndex(course => course._id === id);

    // Increments view count
    if (index !== -1)
      axios
        .get(`/api/course/id/${courses[index]._id}`)
        .catch(err => console.error(err));

    this.setState({
      prev: index - 1 >= 0 ? courses[index - 1]._id : "",
      next: index + 1 < courses.length ? courses[index + 1]._id : "",
      course: index >= 0 ? courses[index] : {}
    });
  };

  render() {
    const { classes } = this.props;
    const { course, prev, next } = this.state;

    if (Object.keys(course).length === 0) return <p>Loading...</p>;

    const prevButton = prev ? (
      <Link to={`/course/id/${prev}`}>
        <IconButton color="primary">
          <KeyboardArrowLeft />
        </IconButton>
      </Link>
    ) : (
      <IconButton color="primary" disabled>
        <KeyboardArrowLeft />
      </IconButton>
    );

    const nextButton = next ? (
      <Link to={`/course/id/${next}`}>
        <IconButton color="primary">
          <KeyboardArrowRight />
        </IconButton>
      </Link>
    ) : (
      <IconButton color="primary" disabled>
        <KeyboardArrowRight />
      </IconButton>
    );

    return (
      <Grid
        container
        align="center"
        justify="center"
        alignItems="center"
        alignContent="center"
        className={classes.root}
      >
        <Grid item xs={12}>
          <Typography variant="h3" component="h3" align="center">
            {course.title}
          </Typography>
          <br />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            align="center"
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              {prevButton}
            </Grid>
            <Grid className={classes.videoItem} item xs={6}>
              <iframe
                className={classes.video}
                title="video"
                src={
                  course.link.length === 11
                    ? `https://www.youtube.com/embed/${course.link}?modestbranding=1&rel=0`
                    : `https://drive.google.com/file/d/${course.link}/preview`
                }
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Grid>
            <Grid item xs={2}>
              {nextButton}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  course: state.course
});

export default connect(mapStateToProps, { getCourses })(
  withRouter(withStyles(style)(Course))
);
