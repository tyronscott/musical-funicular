import React from 'react';
import './Team.css';

interface TeamMemberProps {
    name: string;
    title: string;
    email: string;
    phone: string;
    imgSrc: string;
}


const TeamMember: React.FC<TeamMemberProps> = ({ name, title, email, phone, imgSrc }) => {
    return (
        <div className="team-member">
            <img src={imgSrc} alt={`${name}`} className="team-member-img" />
            <div className="team-member-info">
                <h3>{name}</h3>
                <p className="title">{title}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </div>
    );
};

const Team: React.FC = () => {
    return (
        <div className="team-section">
            <div className="team-header">
                <div className="dash"></div>
                <h1>Our Team</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.
                </p>
            </div>
            <div className="team-container">
                <TeamMember
                    name="Jacob Jones"
                    title="Lead Attorney"
                    email="JJones@example.com"
                    phone="(480) 555-0103"
                    imgSrc="https://via.placeholder.com/200x250"
                />
                <TeamMember
                    name="Robert Fox"
                    title="Senior Associate"
                    email="RFox@example.com"
                    phone="(209) 555-0104"
                    imgSrc="https://via.placeholder.com/200x250"
                />
                <TeamMember
                    name="Jane Cooper"
                    title="Paralegal"
                    email="JCooper@example.com"
                    phone="(223) 555-0118"
                    imgSrc="https://via.placeholder.com/200x250"
                />
            </div>
        </div>
    );
};

export default Team;