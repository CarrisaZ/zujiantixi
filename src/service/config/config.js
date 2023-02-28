const config = {
	development: {
		baseURL: 'http://127.0.0.1:8083/'
	},
	production: {
		baseURL: ''
	}

};
export default config[process.env.NODE_ENV];
