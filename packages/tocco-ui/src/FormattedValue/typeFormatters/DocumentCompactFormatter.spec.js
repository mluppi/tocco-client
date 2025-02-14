import {mount} from 'enzyme'
import React from 'react'

import DocumentCompactFormatter from './DocumentCompactFormatter'

describe('tocco-ui', () => {
  describe('FormattedValue', () => {
    describe('typeFormatters', () => {
      describe('DocumentCompactFormatter ', () => {
        test('should pass four props', () => {
          const wrapper = mount(
            <DocumentCompactFormatter
              value={{
                alt: 'alt text',
                binaryLink: 'binary url',
                caption: 'caption text',
                fileName: 'file name'
              }}
            />
          )

          const {alt, binaryLink, caption, fileName} = wrapper.props().value

          expect(alt).to.equal('alt text')
          expect(binaryLink).to.equal('binary url')
          expect(caption).to.equal('caption text')
          expect(fileName).to.equal('file name')
        })

        test('should render link but no image', () => {
          const wrapper = mount(
            <DocumentCompactFormatter
              value={{
                alt: 'alt text',
                binaryLink: 'binary url',
                caption: 'caption text',
                fileName: 'file name',
                thumbnailLink: 'thumbnail url'
              }}
            />
          )

          expect(wrapper.find('a')).to.have.length(2)
          expect(wrapper.find('img')).to.have.length(0)
        })
      })
    })
  })
})
