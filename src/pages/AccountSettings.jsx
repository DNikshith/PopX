import React, { useState, useRef } from 'react'
import './AccountSettings.css'

export default function AccountSettings() {
  const [avatarUrl, setAvatarUrl] = useState(() => {
    return localStorage.getItem('profileAvatar') || 'https://i.pravatar.cc/150?img=47'
  })
  const fileInputRef = useRef(null)

  const handleCameraClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const dataUrl = event.target.result
        setAvatarUrl(dataUrl)
        localStorage.setItem('profileAvatar', dataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1 className="settings-title">Account Settings</h1>
      </div>

      <div className="settings-divider" />

      <div className="profile-section">
        <div className="avatar-wrapper" onClick={handleCameraClick}>
          <img
            src={avatarUrl}
            alt="Profile"
            className="avatar-image"
          />
          <div className="camera-badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>

        <div className="profile-info">
          <p className="profile-name">Marry Doe</p>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>

      <div className="bio-section">
        <p className="bio-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>

      <div className="settings-divider-dashed" />
    </div>
  )
}
