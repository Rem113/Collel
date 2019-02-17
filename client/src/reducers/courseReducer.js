import {
	GET_COURSES,
	GET_COURSE_BY_ID,
	ADD_COURSE,
	DELETE_COURSE,
	LOADING_COURSE
} from "../actions/types"

const initialState = {
	courses: [],
	loading: true,
	prev: null,
	next: null
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_COURSES:
			return {
				...state,
				courses: action.payload
			}

		case GET_COURSE_BY_ID:
			return {
				...state,
				course: action.payload,
				loading: false
			}

		case ADD_COURSE:
			return {
				...state,
				courses: action.payload
			}

		case DELETE_COURSE:
			const { id } = action.payload
			return state.courses.filter(course => course._id !== id)

		case LOADING_COURSE:
			return {
				...state,
				loading: true
			}

		default:
			return state
	}
}
