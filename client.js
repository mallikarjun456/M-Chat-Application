const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.queryselector('.container')

const name  = prompt ("Enter Your Name To Join");