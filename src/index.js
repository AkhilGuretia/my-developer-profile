import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />

                <SkillList />
            </div>
        </div>
    );
}

const Avatar = () => {
    return <img className="avatar" src="./avt.jpg" alt="Avatar" />;
};

const Intro = () => {
    return (
        <>
            <h1>Akhil Kumar</h1>
            <p>
                Hi there, I am a React developer. I am passionate about frontend technologies and love to code and solve
                problems. wanna have some chat with me ? just ping me on any of my socials. see you soon!
            </p>
        </>
    );
};

const SkillList = () => {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill key={skill.skill} skill={skill} />
            ))}
        </div>
    );
};

const Skill = ({ skill }) => {

    return (
        <>
            <div className="skill" style={{ backgroundColor: skill.color }}>
                <span>{skill.skill}</span>
                <span>
                    {skill.level === "beginner" ? "👶" : skill.level === "intermediate" ? "👍" : "💪"}
                </span>
            </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
