import {
	GET_COURSES,
	GET_COURSE_BY_ID,
	ADD_COURSE,
	LOADING_COURSE,
	DELETE_COURSE,
	EDIT_COURSE,
	GET_PREVIOUS_COURSE,
	GET_NEXT_COURSE,
	ERROR
} from "../actions/types"

const initialState = {
	courses: [],
	loading: false,
	course: {},
	errors: {},
	prev: {},
	next: {}
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
				courses: [...state.courses, action.payload]
			}

		case LOADING_COURSE:
			return {
				...state,
				loading: true
			}

		case EDIT_COURSE:
			return {
				...state,
				courses: state.courses.map(course =>
					course._id === action.payload.id ? action.payload : course
				)
			}

		case DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter(course => course._id !== action.payload)
			}

		case GET_PREVIOUS_COURSE:
			return {
				...state,
				prev: action.payload
			}

		case GET_NEXT_COURSE:
			return {
				...state,
				next: action.payload
			}

		case ERROR:
			return {
				...state,
				errors: { ...action.payload }
			}

		default:
			return state
	}
}
