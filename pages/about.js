import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout"
import BasePage from "../components/layouts/BasePage"
import TreeView from "../components/TreeView"
import {Progress, Container, Row, Col} from 'reactstrap';

let tree = [
    {
        text: "Work Experience",
        nodes: [
            {
                text: 'Doğuş Teknoloji: Software Developer Intern, August 2019 - Present'
            },
            {
                text: 'MEF University: Computer Architecture Course Student Assistant, January 2020 - June 2020'
            },
            {
                text: 'MEF University: Scientific Research Project Project Manager, January 2020 - Present'
            }
        ]
    },
    {
        text: "Education",
        nodes: [
            {
                text: "College",
                nodes: [
                    {
                        text: 'MEF University, Istanbul,TR. BS in Computer Engineering, graduation expected in 2021.\n - CGPA:3.89'
                    }
                ]
            },
            {
                text: "High school",
                nodes: [
                    {
                        text: 'Rotary 100. Years Anatolian High School, Istanbul,TR.   Math&Science - Average: 79.76 / 100'
                    }
                ]
            }
        ]
    },
    {
        text: "Awards Scholarships & Certifications",
        nodes: [
            {
                text: "1st Place in Hackathon Event, Blockfellow - Feb 2019",
                nodes: [
                    {
                        text: 'Solving an industrial problem using the Blockchain structure.'
                    }
                ]

            },
            {
                text: "Dean’s High Honor List, Fall 2017 through Fall 2019, MEF University - 2017–2019",
                nodes: [
                    {
                        text: 'For attaining 1 semester GPA of at least 3.50.'
                    }
                ]

            },
            {
                text: "Dr. Ibrahim Arikan High Honor Scholarship, MEF University - Sep 2018",
                nodes: [
                    {
                        text: 'Half-tuition scholarship for attaining 2 semesters GPA higher than 3.75.'
                    }
                ]

            },
            {
                text: "ELC Certification of Completion, UCLA ELC - May 2015",
                nodes: [
                    {
                        text: 'For certifying the study in the UCLA Junior Program at English Language Center Los Angeles, California'
                    }
                ]

            },
        ]
    },
    {
        text: "Languages",
        nodes: [
            {
                text: 'Turkish: Native language'
            },
            {
                text: 'English: Fluent (speaking, reading, writing)'
            },
            {
                text: 'German: Basic (speaking, reading, writing)'
            },
            {
                text: 'Spanish: Basic (speaking, reading, writing)'
            }
        ]
    }
];

class About extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState(state => ({collapse: !state.collapse}));
    }


    render() {
        return (
            <BaseLayout>
                <BasePage className="about">
                    <h1>About</h1>
                    <hr/>
                    <h3>Skills</h3>
                    <div className="background-image">
                        <img src="/static/images/background-index.png"/>
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <div className="skills-wrapper">
                                    <div className="skills-container">
                                        <div className="text-md-center">Python</div>
                                        <Progress className="about-progress-bar" key="python" animated value={90}>%90</Progress>
                                        <div className="text-md-center">Java</div>
                                        <Progress className="about-progress-bar" className="about-progress-bar" animated
                                                  key="Java" color="danger" value={80}>%80</Progress>
                                        <div className="text-md-center">C-Programming</div>
                                        <Progress className="about-progress-bar" key="c" animated color="success"
                                                  value={75}>%75</Progress>
                                        <div className="text-md-center">HTML</div>
                                        <Progress className="about-progress-bar" key="html" animated color="warning"
                                                  value={95}>%95</Progress>
                                        <div className="text-md-center">Node.js</div>
                                        <Progress className="about-progress-bar" key="node" animated color="info"
                                                  value={85}>%85</Progress>
                                    </div>
                                    <div className="skills-container">
                                        <div className="text-md-center">C# for Unity</div>
                                        <Progress className="about-progress-bar" key="c#" animated color="warning"
                                                  value={60}>%60</Progress>
                                        <div className="text-md-center">Bash</div>
                                        <Progress className="about-progress-bar" key="Bash" animated color="success"
                                                  value={30}>%30</Progress>
                                        <div className="text-md-center">React</div>
                                        <Progress className="about-progress-bar" key="React" animated color="info"
                                                  value={75}>%75</Progress>
                                        <div className="text-md-center">CSS</div>
                                        <Progress className="about-progress-bar" key="CSS" animated color="danger"
                                                  value={85}>%85</Progress>
                                        <div className="text-md-center">Database Systems</div>
                                        <Progress className="about-progress-bar" key="Database Systems" animated color="success"
                                                  value={85}>%85</Progress>
                                    </div>
                                </div>
                                <hr/>
                                <h3>About me</h3>
                                <div className="text-black-50 pt-4">
                                    <TreeView tree={tree}/>
                                </div>

                            </Col>
                        </Row>
                    </Container>


                </BasePage>
            </BaseLayout>
        );
    }
}

export default About;