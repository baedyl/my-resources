import React, {useState} from 'react'
import {UID} from 'react-uid'

const inlineStyle = {
  marginRight: `.5rem`
}
const stretchInsetStyle = {
  padding: `.5rem .25rem`
}

const SourceChooser = ({initialSource, dispatchSource}) => {
  const [source, setSource] = useState(initialSource)
  return (
    <form>
      <UID>
        {
          id => (
            <div>
              <label
                htmlFor={id}
                style={inlineStyle}
                >Type a GitHub username:</label>
              <input
                id={id}
                onChange={(event) => {
                  dispatchSource(event.target.value)
                  return setSource(event.target.value)}
                }
                placeholder="jdoe"
                style={stretchInsetStyle}
                type="text"
                value={source}
                />
            </div>
          )
        }
      </UID>
    </form>
  )
}

export default SourceChooser