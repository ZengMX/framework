import React, { Component } from 'react';
import { shallowEqualImmutable } from 'react-immutable-render-mixin';
export default class Search extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqualImmutable(this.props, nextProps)
            || !shallowEqualImmutable(this.state, nextState);
    }

    goToComponent=(routeName,params)=>{
        this.props.navigation.navigate(routeName,params);
    }
}