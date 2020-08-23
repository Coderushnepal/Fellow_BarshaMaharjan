import React from  "react";
import { bindActionCreators} from "redux";
import { connect } from "react-redux";

import { counterActions } from "../actions"

const Counter = () => (
<div>
    <h1> Counter</h1>
    <button style={{ 
        position: "relative",
        margin: "10px",
        padding: "10px",
    }}> + </button>
    <button style={{ 
        position: "relative",
        margin: "10px",
        padding: "10px",
     }}>  - </button>
    </div>
);
const mapStateToProps = (state) => {
    return {
        count: state.counterReducer.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...counterActions}, dispatch),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);