const users = require('./user_controllers');
const sections = require('./section_controllers');
const threads = require('./thread_controllers');
// const posts = require('./posts');	todo: uncomment when posts completed

module.exports = {
	users,
	sections,
	threads
	// posts	todo: uncomment when posts completed
};