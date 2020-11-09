import React from 'react'
import { List, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Album extends React.PureComponent {
  render () {
    const { hideSearch, album } = this.props

    const artistNameEncoded = encodeURIComponent(album.artist)
    const albumTitleEncoded = encodeURIComponent(album.title)
    const albumLink = `/artists/${artistNameEncoded}/albums/${albumTitleEncoded}`

    const coverDefault =
      'https://lastfm.freetls.fastly.net/i/u/64s/' +
      'c6f59c1e5e7240a4c0d427abd71f3dbb.png'
    const cover = album.cover || coverDefault

    const albumTitle = album.title
    const artistName = album.artist

    return (
      <List.Item as={Link} to={albumLink} onClick={hideSearch}>
        <Image src={cover} className="searchItemImage" />

        <List.Content className="searchItemContent">
          <List.Header as="h4" content={albumTitle} />
          <List.Description content={artistName} />
        </List.Content>
      </List.Item>
    )
  }
}
