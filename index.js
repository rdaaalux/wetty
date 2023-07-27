#! /usr/bin/env node

function start({user, host, auth, port, knownhosts}, {b, p, h}, name, options) {
	console.log("start")
}

function close() {
	console.log("close")
}

module.exports = {
	start,
	close
}