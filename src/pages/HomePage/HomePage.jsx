import React, { useState } from "react";
import './HomePage.css'

const HomePage = () => {

    const backgroundStyle = {
        backgroundImage: `url(https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        color: 'white',
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
    };

    const events = [
        {
            title: "Intro to Web Development Workshop",
            date: "March 15, 2023",
            description:
                "In this workshop, we'll cover the basics of web development, including HTML, CSS, and JavaScript. You'll learn how to create a simple website from scratch and deploy it to the web. This workshop is open to all skill levels.",
            demoLink: "https://example.com/demo1",
        },
        {
            title: "Hackathon: Build a Social Media App",
            date: "April 2-3, 2023",
            description:
                "In this 24-hour hackathon, you'll work with a team to build a social media app from scratch. You'll have the opportunity to showcase your coding skills and creativity, and compete for prizes. This event is open to club members only.",
            demoLink: "https://example.com/demo2",
        },
        {
            title: "Coding Challenge: Sudoku Solver",
            date: "April 23, 2023",
            description:
                "In this coding challenge, you'll be tasked with creating a program that can solve Sudoku puzzles. You'll have one week to complete the challenge, and the top solutions will be featured on our website. This challenge is open to all skill levels.",
            demoLink: "https://example.com/demo3",
        },
    ];

    return (
        <>
            <section className="hero-section" style={backgroundStyle}>
                <h1>Welcome to Google Developer Student Club UCU</h1>
                <p>We are a group of passionate students who love coding and technology.</p>
            </section>
            <section className="about-us-section">
                <div className="about-us-content">
                    <h2>About Us</h2>
                    <p>
                        We are a student coding club dedicated to fostering a passion for coding and technology among our members. Our club welcomes students from all backgrounds and skill levels who share our enthusiasm for coding and desire to learn and grow in a supportive community of like-minded peers.
                    </p>
                    <p>
                        Our club's activities include coding workshops, hackathons, coding challenges, and project-based learning. We believe in learning by doing and encourage our members to apply their coding skills to real-world problems and projects. Through our activities, we aim to help our members develop their coding skills, problem-solving abilities, and teamwork skills.
                    </p>
                    <p>
                        If you're interested in joining our club, please check out our Membership section for more information on how to become a member. We would love to have you as part of our community!
                    </p>
                </div>
            </section>
            <section className="events-section">
                <h2 style={{ textAlign: 'center' }}>Upcoming Events</h2>
                <div className="events-grid">
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
                            <h3>{event.title}</h3>
                            <p>{event.date}</p>
                            <p>{event.description}</p>
                            <a href={event.demoLink}>Live Demo</a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;
