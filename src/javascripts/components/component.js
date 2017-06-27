import React     from 'react'
import PropTypes from 'prop-types'

class Thing extends React.Component {
  constructor(props) {
    super(props)
    const { foo } = this.props
    this.state = {
      visible: false
    }
  }

  componentWillMount() {
    this.setState({ visible: true })
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { foo } = this.props
    const { visible } = this.state

    return (
      foo !== nextProps.foo ||
      visible !== nextState.visible
    }
  }

  renderThing2 = () => {
    return (
      <div>
      </div>
    )
  }

  render() {
    const { visible } = this.state
    const classes = visible ? 'visible' : 'hidden'

    return (
      <div className={ classes }>
        { this.renderThing2() }
      </div>
    )
  }
}

Thing.propTypes = {
  foo: PropTypes.string
}

Thing.defaultProps = {
  foo: 'bar'
}

export default Thing