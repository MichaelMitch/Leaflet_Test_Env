import React from 'react'
import {connect} from 'react-redux'
import {addWord} from '../actions'

function submitWord (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addWord(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

class MapTesting extends React.component {
  componentDidMount () {
    this.props.dispatch
  }

}

export default connect()(MapTesting)
