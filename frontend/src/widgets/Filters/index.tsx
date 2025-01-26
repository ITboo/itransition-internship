import React from 'react'
import {LangSwitcher} from '../LangSwitcher'
import LikesSlider from '../LikesSlider'

const Filters = () => {
  return (
    <div>
        <LangSwitcher/>
        <LikesSlider/>
        <input type="number" id="reviews" name="reviews" min="0" max="10" step="0.1" />
    </div>
  )
}

export default Filters