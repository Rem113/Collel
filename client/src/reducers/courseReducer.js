import {
	GET_COURSES,
	ADD_COURSE,
	DELETE_COURSE,
	EDIT_COURSE
} from "../actions/types"

const initialState = {
	courses: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_COURSES:
			return {
				...state,
				courses: action.payload
			}

		case ADD_COURSE:
			return {
				...state,
				courses: [...state.courses, action.payload]
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

		default:
			return state
	}
}
