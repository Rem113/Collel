import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import { blue, deepPurple } from "@material-ui/core/colors"

export default createMuiTheme({
	palette: {
		primary: blue,
		secondary: deepPurple
	},
	typography: {
		useNextVariants: true
	}
})
