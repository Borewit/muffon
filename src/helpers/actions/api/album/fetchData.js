import axios from 'axios'
import { handleEnvError } from '#/utils'
import formatRequestUrl from './formatters/requestUrl'

export default function ({
  sourceId = 'lastfm',
  artistName,
  albumTitle,
  artistId,
  albumId,
  albumType = 'album',
  paramsData,
  scope = '',
  profileId,
  page,
  limit
}) {
  this.isLoading = true

  const url = formatRequestUrl({
    sourceId,
    artistName,
    albumTitle,
    artistId,
    albumId,
    albumType,
    scope
  })

  const params = {
    ...paramsData,
    profile_id: profileId,
    ...(page && { page }),
    ...(limit && { limit })
  }

  const handleSuccess = response => {
    this.error = null

    const formatAlbumType = () => {
      if (albumType === 'albumVarious') {
        return 'album'
      } else {
        return albumType
      }
    }

    this.albumData = response.data[
      formatAlbumType()
    ]
  }

  const handleError = error => {
    this.error = error

    handleEnvError(error)
  }

  const handleFinish = () => {
    this.isLoading = false
  }

  return axios
    .get(url, { params })
    .then(handleSuccess)
    .catch(handleError)
    .finally(handleFinish)
}
