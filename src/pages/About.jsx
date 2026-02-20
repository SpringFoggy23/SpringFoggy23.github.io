import React from 'react';
import BlogPost from '../components/BlogPost';
import MusicPanel from '../components/MusicPanel';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './About.css';

const About = () => {
    useDocumentTitle('About Me');
    return (
        <div className="about-container">
            <section className="blog-area">
                <h1>About Me</h1>
                <p className="intro">
                    Welcome to this blog.
                    <br />
                    I write about life, technology, music and anything that inspires me.
                </p>

                <BlogPost title="Hackton in Blockchain With Smart Contract" date="Nov 2025">
                    <p>
                        As a beginner to the hackathon, I take part in the event with exploration. Surprisingly,
                        I meet one of my course grader in the start of the event, and we formed the team. Even
                        we have some raw ideas about the project, we still missed the reward, just with a little
                        distance. This is make me feel little sad and frustrated today. Think about we have
                        successfully deployed our smart contract, the frontend and js interacted with it, record
                        the data on the chain. But we have no time to fully demo or record a video in the
                        preparation. This causes that we did not fully deliver our idea to the judgement
                        committee.{' '}
                        <span style={{ color: 'red' }}>
                            Gave an Interesting Name to the project is nonnegotiable
                        </span>
                    </p>
                    <p>
                        For the last hour, don't only focus on the code development. Focus more time on the
                        presentation organizatio,and preparing for the slides. I only immersed into the small
                        happiness in finishing one debugging for one function, which is not important for the
                        show time.
                    </p>
                    <p>
                        On this event I realized that in the unpolished presentations, even the English first
                        language speakers will disorganize their expression or stuck. We may know that for some
                        groups, they even did not deploy the projects succcessfully. But they can get higher
                        rank, with more time in explaining ideas, and some elaboration on the prototype.
                    </p>
                    <p>
                        It also reflects that majority of CS students from China are less active and not good at
                        communicating with others. It always not be benificial to build trust and catch the
                        process going with each other. At the end time of the development time, we started to
                        realize the importance of exchanging the laptop.
                    </p>
                    <p>
                        What I experience today is that recording a video to demo is definetely a way that
                        worthwhile to do that, it can change the speed and let presenters emphasize the
                        particular point. Usually give the best expression to your auidence.
                    </p>
                    <p>
                        I should always remind myself about the{' '}
                        <span style={{ color: 'red' }}>DARPA</span>{' '}
                        <a
                            href="https://www.darpa.mil/about/heilmeier-catechism"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Heilmeier Catechism
                        </a>
                    </p>
                    <br />
                    <p>
                        To deliver a clear, persuasive and high quality pitch:
                        <br />
                        <span style={{ color: 'red' }}>
                            Keep this in mind, just like always remembering to turn around check there is no car
                            driving approaching to you when you crossed the road.{' '}
                        </span>
                    </p>
                    <br />
                    <p>What are you trying to do? Explain the objectives without any jargon.</p>
                    <br />
                    <p>
                        What is your workflow of each steps? Do you have any graph to show the process? How do
                        you make this come true, or least give a road map.
                    </p>
                    <br />
                    <p>Who care your project? That is equal to the value of your project.</p>
                    <br />
                    <p>
                        For the rest of the tenet, these are mainly use in the designed period before the
                        implementation, it can help you organize your idea, but not when you try to pitch to
                        audience:
                    </p>
                    <p>How much will it cost?(Cost Expectation)</p>
                    <p>How long will it take? (Time Expectation)</p>
                    <p>What are the potential risk?</p>
                    <p>Milestone.</p>
                    <p>
                        A good pitch should motivate both the technical or nontechinal person know something
                        about your idea.I wait for you to get progress and reply with the award you get in the
                        next hackathon!!!
                    </p>
                </BlogPost>

                <BlogPost title="AI-agent project" date="December 2025">
                    <p>
                        After the brainstorming period, we designed the structure of project with different
                        agents, and we quickly build up the framework. The whole process can be run in quick
                        way. When building up a project, write a document and then follow the document, list the
                        clear tasks and ETA finish time are quite important, make sure that go in right track.
                    </p>
                    <p>
                        In the whole project view, prototype is more important than the details in the project.
                        Do not focus on one process too much, take the eye on the whole pipeline. These 5 day
                        course run in a fast speed, and the project also only use ThanksGiving Holiday to
                        develop, it is quite a meaningful and packed experience.
                    </p>
                </BlogPost>
            </section>

            <MusicPanel />
        </div>
    );
};

export default About;
