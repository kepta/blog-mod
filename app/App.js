import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './redux/actions';
import Projects from './Projects';
import SamplePara from './SamplePara';
import MyHeader from './MyHeader';


function mapStateToProps(state) {
  return { ...state.reducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  static propTypes = {
    sample: React.PropTypes.object,
    actions: React.PropTypes.object,
  }
  render() {
    return (
      <div className="border-gray">
        <div className="flex-col align-center">
          <div className="content">
            <MyHeader />
            <SamplePara />
          </div>
        </div>
        <div>
          <Projects />
        </div>
      </div>
    );
  }
}
