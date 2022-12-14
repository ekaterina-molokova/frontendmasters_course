import { Component } from "react";
import { withRouter } from "react-router-dom";
import ThemeContext from "./Context";
import Carousel from "./Carousel";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
}

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const {
      animal,
      breed,
      city,
      state,
      description,
      name,
      images,
    } = this.state;

    return (
      <div>
        <Route>
          {!this.state.id
          ? <Redirect to="/" />
          : <>
          <Carousel images={images} />
        <div className="item">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <p>{description}</p>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Test theme</button>
            )}
          </ThemeContext.Consumer>
        </div>
          </>
        }
        </Route>
      </div>
    );
  }
}

export default withRouter(Details);