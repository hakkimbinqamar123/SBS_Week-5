import React from 'react'
import profileImage from '../assets/profile.png'

const ProfileCard = () => {
    const name = "Hakeem"
    const role = "Frontend Developer"

    const skills = [
        "HTML", "CSS", "React"
    ]
  return (
    <div className="profile-card" alt="Image">
        <img src={profileImage} className="profile-image"/>
        <h2>{name}</h2>
        <p>{role}</p>
        <h3>Skills</h3>
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
  )
}

export default ProfileCard