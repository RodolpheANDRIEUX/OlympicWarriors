let users = [];

const res = await fetch('/api/users');
users = await res.json();
