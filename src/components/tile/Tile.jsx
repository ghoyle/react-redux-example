import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './tile.scss'

export default class Tile extends Component {
    render() {
        return (
            <ul className="Tile-container">
                {this.props.items.map((post, i) => (
                    <li key={i} className="Tile-item">{post.name}<br/><strong>Locations:</strong> {post.locations}</li>
                ))}
            </ul>
        )
    }
}

Tile.propTypes = {
    items: PropTypes.array.isRequired
}