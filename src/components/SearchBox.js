import React, {Component} from 'react';
import TourData from './data/data.json';
import {Card} from 'reactstrap';
import {relative} from 'path';
import NavLink from 'react-router-dom/NavLink';
class SearchBox extends Component {
  constructor (props) {
    super (props);

    this.state = {
      term: '',
    };
  }

  onChange = event => {
    this.setState ({
      term: event.target.value,
    });
  };
  render () {
    let filterdList = TourData.filter ((item, index) => {
      return (
        item.name.toLowerCase ().indexOf (this.state.term.toLowerCase ()) !== -1
      );
    });
    return (
      <div
        className="search-box col-xs-12 col-sm-12 col-md-12 col-lg-12"
        style={{zIndex: 3}}
      >
        <form className="card-sm bg-dark2 p-2">
          <div className="no-padding tourHomeIntro">
            <div className="title">Đặt tours du lịch!</div>
            <div className="desc">
              Hơn 300 tours du lịch ở Việt Nam và Quốc tế
            </div>
          </div>
          <div className="card-body row no-gutters p-1">
            {/*end of col*/}
            <div className="col">
              <input
                onChange={this.onChange}
                className="form-control form-control form-control-borderless"
                type="search"
                placeholder="Tìm kiếm tour hoặc địa điểm"
                name="filter"
                id="filter"
                value={this.state.term}
              />
            </div>
            {/*end of col*/}
            <div className="col-auto">
              <button className="btn btn btn-primary" type="submit">
                <i className="fa fa-search mr-2" aria-hidden="true" />Tìm
              </button>
            </div>
            {/*end of col*/}
          </div>
          <Card
            style={{
              top: 0,
              width: '81%',
              padding: 5,
              position: 'absolute',
              top: 81,
              marginTop: 10,
            }}
          >
            {filterdList.map ((item, index) => {
              return <div key={index}>{item.name}</div>;
            })}
          </Card>
        </form>

      </div>
    );
  }
}

export default SearchBox;
