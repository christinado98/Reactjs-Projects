import React, { Component } from 'react';

export default class DisplayList extends Component {
    render(){
        var list;
        if (this.props.index === ''){
            list=<div>
                {this.props.list.map((gif, index) => 
                <li key={index}>
                    <img alt="" src={ gif.images.original.url} />
                </li>
            )}
            </div>
        } else {
            list=<div>
                <img alt="" src={ this.props.list[this.props.index].images.original.url } />
            </div>
        }
        return(
            <div>
                { list }
            </div>
            )
        }
    }