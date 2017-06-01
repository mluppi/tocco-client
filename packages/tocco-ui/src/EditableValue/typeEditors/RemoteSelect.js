import React from 'react'
import Select from 'react-select'

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

  render() {
    return (
      <div>
        <Select
          valueKey="key"
          labelKey="display"
          loadingPlaceholder="Laden"
          placeholder=""
          clearValueText={this.props.options.clearValueText}
          searchPromptText={this.props.options.searchPromptText}
          noResultsText={this.props.options.noResultsText}
          multi={false}
          value={this.props.value}
          onChange={this.props.onChange}
          onValueClick={this.onValueClick}
          filterOption={() => (true)}
          autoload={false}
          onInputChange={searchTerm => {
            this.props.options.fetchOptions(searchTerm)
          }}
          options={this.getOptions()}
          isLoading={this.props.options.isLoading}
          disabled={this.props.readOnly}
        />
      </div>
    )
  }
}

RemoteSelect.propTypes = {
  onChange: React.PropTypes.func,
  value: React.PropTypes.oneOfType([
    React.PropTypes.shape({
      key: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
      ])
    }),
    React.PropTypes.string // empty string coming from Redux Form if value null
  ]),
  options: React.PropTypes.shape({
    options: React.PropTypes.array,
    fetchOptions: React.PropTypes.func,
    isLoading: React.PropTypes.bool,
    valueClick: React.PropTypes.func,
    clearValueText: React.PropTypes.string,
    searchPromptText: React.PropTypes.string,
    noResultsText: React.PropTypes.string,
    moreOptionsAvailable: React.PropTypes.bool,
    moreOptionsAvailableText: React.PropTypes.string
  }),
  readOnly: React.PropTypes.bool
}

export default RemoteSelect
