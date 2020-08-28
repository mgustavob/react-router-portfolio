import React, { Component } from 'react';
import './App.css';

class Projects extends Component {
    render() {
        const projectsList = this.props.myProjects.map((p, idx)=>{
            return (
                <li key="{idx}">
                <div><h2>{p.name}</h2></div>
                <div><a href="{p.link}"> <h3>{p.link}</h3></a></div>
                <div><p>{p.descrip}</p></div>
                </li>
            )
        })
        return (
            <div>
                <h1>Projects</h1>
                <ul>{projectsList}</ul>
            </div>
        )
    }
}

export default Projects;
