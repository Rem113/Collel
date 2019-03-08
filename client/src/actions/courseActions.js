import { GET_COURSES, ADD_COURSE, DELETE_COURSE, EDIT_COURSE } from "./types"
import axios from "axios"

export const getCourses = () => dispatch => {
	axios
		.get(`/api/course`)
		.then(res =>
			dispatch({
				type: GET_COURSES,
				payload: res.data
			})
		)
		.catch(err => console.error(err))
}

export const addCourse = (course, history) => dispatch => {
	axios
		.post("/api/course", course)
		.then(res => {
			dispatch({
				type: ADD_COURSE,
				payload: res.data
			})
			history.push("/")
		})
		.catch(err => console.error(err))
}

export const editCourse = (id, course, history) => dispatch => {
	axios
		.post(`/api/course/${id}`, course)
		.then(res => {
			dispatch({
				type: EDIT_COURSE,
				payload: res.data
			})
			history.push("/")
		})
		.catch(err => console.error(err))
}

export const deleteCourse = id => dispatch => {
	axios
		.delete(`/api/course/${id}`)
		.then(res =>
			dispatch({
				type: DELETE_COURSE,
				payload: id
			})
		)
		.catch(err => console.error(err))
}
