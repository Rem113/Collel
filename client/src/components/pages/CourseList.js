import React, { Component } from "react";
import Header from "../controls/Header";
import CourseListItem from "../controls/CourseListItem";
import Pagination from "material-ui-flat-pagination";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { Grid, List, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getCourses } from "../../actions/courseActions";
import { withRouter } from "react-router-dom";

const style = theme => ({
  center: {
    margin: "auto"
  }
});

class CourseList extends Component {
  constructor(props) {
    super(props);

    if (!props.course.courses.length) props.getCourses();

    this.state = {
      search: "",
      order: "date",
      tag: props.match.params.tag ? props.match.params.tag : "",
      offset: 0
    };
  }

  onTag = tag => {
    this.setState({ tag });
  };

  onOffset = offset => {
    this.setState({ offset });
  };

  onSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { courses } = this.props.course;

    if (!courses.length) return <p>Loading...</p>;

    let arr = courses.filter(course =>
      this.state.tag !== ""
        ? course.tags.findIndex(tag => tag === this.state.tag) !== -1
        : true
    );

    if (this.state.search !== "") {
      const reg = new RegExp(this.state.search, "gi");
      arr = arr.filter(
        course =>
          course.title.match(reg) ||
          course.description.match(reg) ||
          course.tags.some(tag => tag.match(reg))
      );
    }

    switch (this.state.order) {
      case "clicks":
        arr.sort((a, b) => a.clicks > b.clicks);
        break;
      default:
        arr.sort((a, b) => new Date(a.date) > new Date(b.date));
    }

    return (
      <React.Fragment>
        <Header />
        <Grid container justify="center">
          <Grid item xs={8}>
            <TextField
              label="Rechercher un cours..."
              onChange={this.onSearch}
              fullWidth
            />
          </Grid>
        </Grid>
        <List>
          {arr.slice(this.state.offset, this.state.offset + 10).map(course => (
            <CourseListItem course={course} onTag={this.onTag} />
          ))}
        </List>
        <Grid container justify="center">
          <Grid item>
            <Pagination
              limit={10}
              offset={this.state.offset}
              total={arr.length}
              onClick={(e, offset) => this.onOffset(offset)}
              size="large"
              previousPageLabel={<ArrowBack />}
              nextPageLabel={<ArrowForward />}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, { getCourses })(
  withRouter(withStyles(style)(CourseList))
);
