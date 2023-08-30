import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
            <Skill name="HTML+CSS" color="#1D55E2" />
            <Skill name="JavaScript" color="#E5C935" />
            <Skill name="React" color="#5ECCF4" />
            <Skill name="TypeScript" color="#B8D3A7" />
            <Skill name="Git and GitHub" color="#DE452C" />
        </div>
    );
};

const Skill = (props) => {
    const skill = [{ name: props.name, color: props.color }];

    return (
        <>
            {skill.map((skill) => (
                <button
                    style={{
                        backgroundColor: props.color,
                        color: "black"
                    }}
                    className="skill"
                >
                    {" "}
                    {skill.name}{" "}
                </button>
            ))}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
