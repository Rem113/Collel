import {
	GET_COURSES,
	GET_COURSE_BY_ID,
	ADD_COURSE,
	DELETE_COURSE,
	LOADING_COURSE
} from "./types"
import axios from "axios"

export const getCourses = () => dispatch => {
	axios.get("/api/courses").then(res =>
		dispatch({
			type: GET_COURSES,
			payload: res.data
		})
	)
}

export const getCourseById = id => dispatch => {
	dispatch({
		type: LOADING_COURSE
	})
	axios.get("/api/courses/id/" + id).then(res => {
		dispatch({
			type: GET_COURSE_BY_ID,
			payload: res.data
		})
	})
}

export const addCourse = (course, history) => dispatch => {
	axios
		.post("/api/courses", course)
		.then(res => {
			dispatch({
				type: ADD_COURSE,
				payload: res.data
			})
			history.push("/")
		})
		.catch(err => console.log(err))
}

export const deleteCourse = (id, history) => dispatch => {
	axios
		.delete(`/api/courses/${id}`)
		.then(res =>
			dispatch({
				type: DELETE_COURSE,
				payload: id
			})
		)
		.catch(err => console.log(err))
}
