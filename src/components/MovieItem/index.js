// Write your code here
import './index.css'

import ReactPlayer from 'react-player'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="butt">
            <img src={thumbnailUrl} alt="thumbnail" className="item-img" />
          </button>
        }
      >
        {close => (
          <>
            <div className="item-container">
              <div className="inner-delete">
                <button
                  type="button"
                  className="butt-1"
                  onClick={() => close()}
                >
                  <IoMdClose className="icon" />
                </button>
              </div>
              <div className="inner-delete-2">
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
