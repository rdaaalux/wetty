#! /usr/bin/env node

class wetty {
	start({user, host, auth, port, knownhosts}, {b, p, h}, name, options) {
		console.log("start")
	}

	close() {
		console.log("close")
	}
}

module.exports = wetty