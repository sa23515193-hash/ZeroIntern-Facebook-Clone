const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Learning scaffold: in-memory state resets whenever the server restarts.
// Use PostgreSQL/Redis and authenticated authorization checks before production use.
let nextId = 4;
const posts = [
  { id: 1, author: 'Ayesha Khan', text: 'Small steps every day lead to big changes. 🌱', privacy: 'Public', reactions: 42, comments: [{ author: 'Hira Malik', text: 'Needed this reminder today 💛' }], createdAt: new Date().toISOString() },
  { id: 2, author: 'Ali Raza', text: 'Just finished a new React project! 💻🚀', privacy: 'Public', reactions: 28, comments: [], createdAt: new Date().toISOString() },
  { id: 3, author: 'Maham Noor', text: 'Progress over perfection. 🤍', privacy: 'Friends', reactions: 65, comments: [], createdAt: new Date().toISOString() }
];
const notifications = [];
const friends = [{ id: 'p1', name: 'Ayesha Khan', status: 'connected' }, { id: 'p2', name: 'Hira Malik', status: 'connected' }];
const requests = new Set();

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'FriendSpace API', timestamp: new Date().toISOString() }));
app.get('/api/posts', (req, res) => {
  const viewer = req.query.viewer || 'guest';
  const visible = posts.filter(p => p.privacy === 'Public' || (p.privacy === 'Friends' && friends.some(f => f.name === viewer)) || p.author === viewer);
  const ranked = visible.map(p => ({ ...p, score: p.reactions * 1.3 + p.comments.length * 2 })).sort((a,b) => b.score-a.score);
  res.json({ posts: ranked, ranking: 'score = reactions * 1.3 + comments * 2' });
});
app.post('/api/posts', (req, res) => {
  const { author, text, privacy = 'Public' } = req.body || {};
  if (!author || typeof author !== 'string' || !text || typeof text !== 'string') return res.status(400).json({ error: 'author and text are required' });
  if (!['Public', 'Friends', 'Only me'].includes(privacy)) return res.status(400).json({ error: 'invalid privacy value' });
  const post = { id: nextId++, author: author.slice(0,80), text: text.slice(0,1500), privacy, reactions: 0, comments: [], createdAt: new Date().toISOString() };
  posts.unshift(post); io.emit('post:created', post); res.status(201).json({ post });
});
app.post('/api/posts/:id/reactions', (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id));
  if (!post) return res.status(404).json({ error: 'post not found' });
  post.reactions++; io.emit('post:reaction', { postId: post.id, reactions: post.reactions }); res.json({ postId: post.id, reactions: post.reactions });
});
app.post('/api/posts/:id/comments', (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id));
  const { author, text } = req.body || {};
  if (!post) return res.status(404).json({ error: 'post not found' });
  if (!author || !text) return res.status(400).json({ error: 'author and text are required' });
  const comment = { author: String(author).slice(0,80), text: String(text).slice(0,400), createdAt: new Date().toISOString() };
  post.comments.push(comment); notifications.unshift({ id: Date.now(), title: comment.author, body: `commented on ${post.author}'s post`, createdAt: comment.createdAt });
  io.emit('post:comment', { postId: post.id, comment }); io.emit('notification:new', notifications[0]); res.status(201).json({ comment });
});
app.get('/api/notifications', (_req, res) => res.json({ notifications }));
app.get('/api/friends', (_req, res) => res.json({ friends, requests: [...requests] }));
app.post('/api/friends/:id/requests', (req, res) => {
  const id = String(req.params.id);
  if (!id || id.length > 100) return res.status(400).json({ error: 'invalid person id' });
  requests.add(id); const event = { id, status: 'pending', createdAt: new Date().toISOString() };
  io.emit('friend:request', event); res.status(201).json({ request: event });
});
io.on('connection', socket => { socket.emit('server:ready', { message: 'FriendSpace realtime channel connected' }); });
server.listen(PORT, () => console.log(`FriendSpace API listening on http://localhost:${PORT}`));
