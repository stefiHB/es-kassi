import React from 'react';
import './Skills.css'; // Assuming you want to add some styles

const skillsData = [
    {
        name: 'JavaScript',
        level: 'Advanced',
        description: 'Experienced in ES6+, DOM manipulation, and various frameworks.'
    },
    {
        name: 'React Native',
        level: 'Intermediate',
        description: 'Experience in building cross-platform mobile applications.'
    },
    {
        name: 'ReactJS',
        level: 'Intermediate',
        description: 'Good understanding of hooks, state management and UI composition.'
    },
    {name: 'CSS', level: 'Intermediate', description: 'Skilled in responsive design, Flexbox, CSS Grid and animation.'},
    {
        name: 'Ionic Angular',
        level: 'Intermediate',
        description: 'Knowledgeable in building hybrid mobile applications using Ionic framework and Angular.'
    },

    // Add more skills as needed
];

const Skills = () => {
    return (
        <div className={"content"}>

            <div className={"skills-container"}>
                <h2>Technical Skills</h2>
                <div className={"skills-list"}>
                    {skillsData.map((skill, index) => (
                        <div key={index} className={"skill-card"}>
                            <h3>{skill.name}</h3>
                            <p><strong>Level:</strong> {skill.level}</p>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Skills;