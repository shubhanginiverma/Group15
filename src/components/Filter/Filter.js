import React from "react"

class SearchExample extends React.Component {
  state = { searchString: "" }
  handleChange = e => {
    this.setState({ searchString: e.target.value })
  }
  render() {
    var libraries = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase()
    if (searchString.length > 0) {
      libraries = libraries.filter(function (i) {
        return i.name.toLowerCase().match(searchString)
      })
    }
    return (
      <div>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder="Type here..."
        />
        <ul>
          {libraries.map(function (i) {
            return (
              <li>
                {i.name} <a href={i.url}>{i.url}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

var libraries = [
  { name: "Backbone.js", url: "https://documentcloud.github.io/backbone/" },
  { name: "AngularJS", url: "https://angularjs.org/" },
  { name: "jQuery", url: "https://jquery.com/" },
  { name: "Prototype", url: "http://www.prototypejs.org/" },
  { name: "React", url: "https://facebook.github.io/react/" },
  { name: "Ember", url: "http://emberjs.com/" },
  { name: "Knockout.js", url: "https://knockoutjs.com/" },
  { name: "Dojo", url: "http://dojotoolkit.org/" },
  { name: "Mootools", url: "http://mootools.net/" },
  { name: "Underscore", url: "https://documentcloud.github.io/underscore/" },
  { name: "Lodash", url: "http://lodash.com/" },
  { name: "Moment", url: "https://momentjs.com/" },
  { name: "Express", url: "http://expressjs.com/" },
  { name: "Koa", url: "http://koajs.com/" },
]

const App = () => {
  return <SearchExample items={libraries} />
}

export default App
