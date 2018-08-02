import PropTypes from 'prop-types'
import React from 'react'
import TetheredSelectWrap from './TetherSelectWrap'
import Button from '../../Button/Button'

class RemoteSelect extends React.Component {
  onValueClick = v => {
    if (this.props.options.valueClick) {
      this.props.options.valueClick(v)
    }
  }

  getOptions = () => {
    const options = [...(this.props.options.options || [])]
    if (this.props.options.moreOptionsAvailable) {
      const option = {display: this.props.options.moreOptionsAvailableText, disabled: true}
      options.push(option)
    }
    return options
  }

  focusSelect = () => this.selectComponent.focus()

  advancedSearchButtonWidth = this.props.options.openAdvancedSearch ? '30px' : '0px'

  render() {
    return (
      <span tabIndex="-1" id={this.props.id} onFocus={this.focusSelect}>
        <span style={{width: `calc(100% - ${this.advancedSearchButtonWidth})`, float: 'left'}}>
          <TetheredSelectWrap
            valueKey="key"
            labelKey="display"
            placeholder=""
            clearValueText={this.props.options.clearValueText}
            searchPromptText={this.props.options.searchPromptText}
            noResultsText={this.props.options.isLoading ? '' : this.props.options.noResultsText}
            multi={false}
            value={this.props.value}
            onChange={this.props.onChange}
            onValueClick={this.onValueClick}
            filterOption={() => (true)}
            autoload={false}
            onInputChange={searchTerm => {
              if (searchTerm) {
                this.props.options.searchOptions(searchTerm)
              }
            }}
            onOpen={() => this.props.options.fetchOptions()}
            options={this.getOptions()}
            isLoading={this.props.options.isLoading}
            disabled={this.props.readOnly}
            ref={select => { this.selectComponent = select }}
          />
        </span>
        {this.props.options.openAdvancedSearch
        && <span style={{width: this.advancedSearchButtonWidth, float: 'right', padding: '5px'}}>
          <Button
            type="button"
            icon="fa-search"
            onClick={() => this.props.options.openAdvancedSearch(this.props.value)}
          />
        </span>
        }
      </span>
    )
  }
}

RemoteSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      key: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    }),
    PropTypes.string // empty string coming from Redux Form if value null
  ]),
  options: PropTypes.shape({
    options: PropTypes.array,
    fetchOptions: PropTypes.func,
    searchOptions: PropTypes.func,
    isLoading: PropTypes.bool,
    valueClick: PropTypes.func,
    clearValueText: PropTypes.string,
    searchPromptText: PropTypes.string,
    noResultsText: PropTypes.string,
    moreOptionsAvailable: PropTypes.bool,
    moreOptionsAvailableText: PropTypes.string,
    openAdvancedSearch: PropTypes.func
  }),
  readOnly: PropTypes.bool,
  id: PropTypes.string
}

export default RemoteSelect
