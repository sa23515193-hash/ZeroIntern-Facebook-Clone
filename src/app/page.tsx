
const posts = [
  {
    name: "Ayesha Malik",
    initials: "AM",
    time: "12 minutes ago",
    text: "Starting a new chapter today! Excited to share more moments with my friends. 💙",
    likes: 24,
    comments: 6,
    color: "pink",
  },
  {
    name: "Hamza Ahmed",
    initials: "HA",
    time: "35 minutes ago",
    text: "Small progress every day leads to big results. Keep learning and keep growing! 🚀",
    likes: 18,
    comments: 3,
    color: "blue",
  },
];

const shortcuts = ["Friends", "Memories", "Saved posts", "Groups", "Marketplace"];

export default function HomePage() {
  return (
    <main className="app">
      <header className="topbar">
        <a className="brand" href="/">friendspace</a>
        <input
          className="search"
          type="search"
          placeholder="Search FriendSpace"
          aria-label="Search FriendSpace"
        />
        <nav className="top-links" aria-label="Main navigation">
          <a href="#feed">Home</a>
          <a href="#friends">Friends</a>
          <a href="#profile">Profile</a>
        </nav>
        <div className="avatar avatar-small">S</div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="profile-mini">
            <div className="avatar">S</div>
            <div>
              <strong>Sawaira Ijaz</strong>
              <span>Your profile</span>
            </div>
          </div>
          <h3>Explore</h3>
          {shortcuts.map((item) => (
            <a className="shortcut" href="#feed" key={item}>
              <span className="shortcut-icon">{item.charAt(0)}</span>
              {item}
            </a>
          ))}
          <p className="sidebar-note">
            Connect with people and share what matters to you.
          </p>
        </aside>

        <section className="feed" id="feed">
          <div className="welcome">
            <span className="eyebrow">YOUR COMMUNITY, YOUR SPACE</span>
            <h1>Welcome to FriendSpace</h1>
            <p>See what your friends are sharing today.</p>
          </div>

          <div className="composer">
            <div className="composer-top">
              <div className="avatar">S</div>
              <button className="composer-input" type="button">
                What’s on your mind, Sawaira?
              </button>
            </div>
            <div className="composer-actions">
              <span>📷 Photo</span>
              <span>😊 Feeling</span>
              <span>👥 Friends</span>
            </div>
          </div>

          <div className="stories">
            <h2>People you may know</h2>
            <div className="story-row">
              {["Ayesha", "Hamza", "Mariam", "Ali"].map((name, index) => (
                <div className={`story story-${index + 1}`} key={name}>
                  <div className="story-avatar">{name.charAt(0)}</div>
                  <strong>{name}</strong>
                  <span>Friend suggestion</span>
                  <button type="button">Add friend</button>
                </div>
              ))}
            </div>
          </div>

          {posts.map((post) => (
            <article className="post" key={post.name}>
              <div className="post-header">
                <div className={`avatar ${post.color}`}>{post.initials}</div>
                <div className="post-author">
                  <strong>{post.name}</strong>
                  <span>{post.time} · 🌐</span>
                </div>
                <button className="more" type="button" aria-label="Post options">
                  •••
                </button>
              </div>
              <p className="post-text">{post.text}</p>
              <div className="post-stats">
                <span>👍 {post.likes} likes</span>
                <span>{post.comments} comments</span>
              </div>
              <div className="post-actions">
                <button type="button">👍 Like</button>
                <button type="button">💬 Comment</button>
                <button type="button">↗ Share</button>
              </div>
            </article>
          ))}
          <p className="demo-notice">
            Preview content only. Sign-in and social actions will be connected
            to the backend in the next steps.
          </p>
        </section>

        <aside className="rightbar">
          <h2>Contacts</h2>
          {["Ayesha Malik", "Hamza Ahmed", "Mariam Khan", "Ali Raza"].map(
            (name, index) => (
              <div className="contact" key={name}>
                <div className={`avatar contact-${index}`}>{name.charAt(0)}</div>
                <span>{name}</span>
                <i aria-label="Offline" />
              </div>
            )
          )}
          <div className="community-card">
            <span>✦</span>
            <h3>Good connections start here.</h3>
            <p>Find friends, share ideas, and grow together.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
