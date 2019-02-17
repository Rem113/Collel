import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './HomePage'
import CoursePage from './CoursePage'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/api/courses/:id' component={CoursePage} />
            <Route path='/api/tags/:id' component={HomePage} />
        </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root