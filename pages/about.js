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
                text: '<b>Doğuş Teknoloji</b>: Software Developer Intern, August 2019 - Present',
                nodes: [
                    {
                        text: 'Contributed to multiple successful projects as a member of the development team and experienced working in a team.'
                    },
                    {
                        text: 'Learned how to develop a frontend with React.js, the concept of REST API, software architecture design process, and much more.'
                    }
                ]
            },
            {
                text: '<b>MEF University</b>: Computer Architecture Course Student Assistant, January 2020 - June 2020',
                nodes: [
                    {
                        text: 'Designed, produced and helped evaluation of the course’s final project.'
                    },
                    {
                        text: 'Assisted the students who needed help with the course.'
                    },
                ]
            },
            {
                text: '<b>MEF University</b>: Scientific Research Project Project Manager, January 2020 - Present',
                nodes: [
                    {
                        text: 'Proposed, designed and developed an on­going scientific research project currently on­going.'
                    }
                ]
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
                        text: 'B.Sc in Computer Engineering, graduation expected in 2021. <b>MEF University</b>, Istanbul,Turkey. - CGPA:3.90',
                        nodes: [
                            {
                                text: 'Ranked 1<sup>st</sup> in the Computer Engineering Department.'
                            }
                        ]
                    }
                ]
            },
            {
                text: "High school",
                nodes: [
                    {
                        text: 'Math&Science. <b>Rotary 100. Years Anatolian High School</b>, Istanbul,TR.  - Average: 80 / 100'
                    }
                ]
            }
        ]
    },
    {
        text: "Awards Scholarships & Certifications",
        nodes: [
            {
                text: "1st Place in Hackathon Event, <b>Blockfellow</b> - Feb 2019",
                nodes: [
                    {
                        text: 'Solving an industrial problem using the Blockchain structure.'
                    }
                ]

            },
            {
                text: "Dean’s High Honor List, Fall 2017 through Fall 2019, <b>MEF University</b> - 2017–2019",
                nodes: [
                    {
                        text: 'For attaining 1 semester GPA of at least 3.50.'
                    }
                ]

            },
            {
                text: "Dr. Ibrahim Arikan High Honor Scholarship, <b>MEF University</b> - Sep 2018",
                nodes: [
                    {
                        text: 'Half-tuition scholarship for attaining 2 semesters GPA higher than 3.75.'
                    }
                ]

            },
            {
                text: "ELC Certification of Completion, <b>UCLA ELC</b> - May 2015",
                nodes: [
                    {
                        text: 'For certifying the study in the UCLA Junior Program at English Language Center Los Angeles, California'
                    }
                ]

            },
        ]
    },
    {
        text: "Professional Projects",
        nodes: [
            {
                text: 'N11 - Garaj11',
                nodes: [
                    {
                        text: '<b>N11 & Dogus Teknoloji­ Developer Team Member</b><br/>Aug 2020 – Present'
                    },
                    {
                        text: '<em><b>React.js & Node.js</b></em>­&ensp;-&ensp;Garaj11 is Turkey’s first used vehicle platform with a marketplace concept. With Garaj11, people who want to buy their first vehicle or sell their vehicle immediately can be done effortlessly in a few minutes. This project combines automotive industry dynamics with the effortless and secure shopping experience offered by e­commerce; consumers will not only own a new car; they will also have access to end­to­end services with a single click.'
                    }
                ]
            },
            {
                text: 'Zubizu QR Menu',
                nodes: [
                    {
                        text: '<b>Dogus Teknoloji­ Developer Team Member</b><br/>Jun 2020 – Aug 2020'
                    },
                    {
                        text: '<em><b>React.js & Node.js</b></em>­&ensp;-&ensp;Zubizu QR Digital Menu is a brand and restaurant based digital menu display application. The created and assigned menu owned by the restaurants under each brand is delivered to the customer with the help of the QR code on the tables.'
                    }
                ]
            },
            {
                text: 'Student Performance Analyzer',
                nodes: [
                    {
                        text: '<b>Smart Istanbul 5.0 Research Center ­- Project leader</b><br/>Jan 2020 – Present'
                    },
                    {
                        text: '<em><b>PHP & React.js</b></em>­&ensp;-&ensp;Analysis of student and instructor performances over the year with respect to ABET criteria.'
                    }
                ]
            },
            {
                text: 'Flex Benefit',
                nodes: [
                    {
                        text: '<b>Dogus Teknoloji ­ Developer Team Member</b><br/>Dec 2019 – Feb 2020'
                    },
                    {
                        text: '<em><b>React.js</b></em>­&ensp;-&ensp;Employee flexible additional revenue and benefits management system for corporations.'
                    }
                ]
            },
            {
                text: 'Letsfy',
                nodes: [
                    {
                        text: '<b>Dogus Teknoloji invenDO & Letsfy ­ Developer Team Member</b><br/>Aug 2019 – Dec 2019'
                    },
                    {
                        text: '<em><b>React.js</b></em>­&ensp;-&ensp;An online consulting platform that offers help from anywhere and anytime.'
                    }
                ]
            }
        ]
    },
    {
        text: "Academic & Personal Projects",
        nodes: [
            {
                text: 'Check <a href="/portfolio">Portfolio</a> page for academic & personal projects.'
            }
        ]
    },
    {
        text: "Skills & Interests",
        nodes: [
            {
                text: 'React.js, Next.js, Django, MySQL, PostgreSQL, Node.js, UNIX Based Systems, Git, NLP, Artificial Intelligence, Machine Learning, Deep Learning, Azure, AWS, Blockchain, Google Cloud Platform, Jenkins, Confluence, JIRA, Bitbucket'
            }
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
            }
        ]
    },
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
                    <Container className="about__container">
                        <Row>
                            <Col>
                                <h3>Programming Languages</h3>
                                <hr/>
                                <div className="skills-wrapper">
                                    <div className="skills-container">
                                        <div className="text-md-center">Python</div>
                                        <Progress className="about-progress-bar" key="python" value={90}>%90</Progress>
                                        <div className="text-md-center">Java</div>
                                        <Progress className="about-progress-bar" className="about-progress-bar"
                                                  key="Java" value={80}>%80</Progress>
                                        <div className="text-md-center">C-Programming</div>
                                        <Progress className="about-progress-bar" key="c"
                                                  value={75}>%75</Progress>
                                        <div className="text-md-center">HTML</div>
                                        <Progress className="about-progress-bar" key="html"
                                                  value={95}>%95</Progress>
                                        <div className="text-md-center">C# for Unity</div>
                                        <Progress className="about-progress-bar" key="c#"
                                                  value={60}>%60</Progress>
                                    </div>
                                    <div className="skills-container">
                                        <div className="text-md-center">JavaScript</div>
                                        <Progress className="about-progress-bar" key="JavaScript"
                                                  value={85}>%85</Progress>
                                        <div className="text-md-center">SQL</div>
                                        <Progress className="about-progress-bar" key="Database Systems"
                                                  value={85}>%85</Progress>
                                        <div className="text-md-center">PHP</div>
                                        <Progress className="about-progress-bar" key="PHP"
                                                  value={75}>%65</Progress>
                                        <div className="text-md-center">CSS</div>
                                        <Progress className="about-progress-bar" key="CSS"
                                                  value={85}>%85</Progress>

                                        <div className="text-md-center">Linux Shell Scripting</div>
                                        <Progress className="about-progress-bar" key="Bash"
                                                  value={30}>%40</Progress>
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