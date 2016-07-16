import Base64 from './base64';
import querystring from 'query-string';

const encodeAuth = (username, password) => {
	return Base64.encode(`${username}:${password}`);
};

const encodeURI = (path, params) => {
	if (path.slice(0, 1) != '/') path = '/' + path;

	var query = querystring.stringify(params);
	if (query) path = path + '?' + query;

	return path;
};

/*
	var config = {
		host: 'https://redmine.xxx.xxx',
		username: 'USER_NAME',
		password: 'PASSWORD',
		apiKey: 'YOUR_API_KEY'
	}
	var redmine = new Redmine(config)
	redmine.issues({}).then()
*/
export default class Redmine {
	constructor(config) {
		this.config = {
			format: 'json',
			...config
		};

		this.authHeader = typeof this.config.apiKey !== 'undefined' ? {
			'X-Redmine-API-Key': this.config.apiKey
		} : {
			'Authorization': `Basic ${encodeAuth(this.config.username, this.config.password)}`
		};
	}

	request = (method, path, params) => {
		let opt = {
			method: method,
			headers: {
				...this.authHeader
			}
		};

		let requestPath = `${this.config.host}${path}`;

		if (method == 'GET') {
			requestPath = `${this.config.host}${encodeURI(path, params)}`;
		}

		if (method == 'PUT' || method == 'POST') {
			opt.body = JSON.stringify(params);
		}

		return new Promise((resolve, reject) => {
			fetch(requestPath, opt).then(response => response.json()).then(r => {
				resolve(r);
			}).catch(e => reject(e));
		});
	};

	get_issue_by_id = (id, params) => {
		if (typeof id !== 'number') throw new Error('Issue ID must be an integer above 0 !');

		return this.request('GET', '/issues/' + id + '.' + this.config.format, params);
	};

	issues = (params) => {
		return this.request('GET', '/issues' + '.' + this.config.format, params);
	};

	create_issue = (issue) => {
		return this.request('POST', '/issues.' + this.config.format, issue);
	};

	update_issue = (id, issue) => {
		return this.request('PUT', '/issues/' + id + '.' + this.config.format, issue);
	};

	delete_issue = (id) => {
		return this.request('DELETE', '/issues/' + id + '.' + this.config.format, {});
	};

	add_watcher = (id, params) => {
		if (!params.user_id) throw new Error('user_id (required): id of the user to add as a watcher !');

		return this.request('POST', '/issues/' + id + '/watchers.' + this.config.format, params);
	};

	remove_watcher = (issue_id, user_id) => {
		return this.request('DELETE', '/issues/' + issue_id + '/watchers/' + user_id + '.' + this.config.format, {});
	};


	projects = (params) => {
		return this.request('GET', '/projects.' + this.config.format, params);
	};

	get_project_by_id = (id, params) => {
		return this.request('GET', '/projects/' + id + '.' + this.config.format, params);
	};

	create_project = (params) => {
		return this.request('POST', '/projects.' + this.config.format, params);
	};

	update_project = (id, params) => {
		return this.request('PUT', '/projects/' + id + '.' + this.config.format, params);
	};

	delete_project = (id) => {
		return this.request('DELETE', '/projects/' + id + '.' + this.config.format, {});
	};


	users = (params) => {
		return this.request('GET', '/users.' + this.config.format, params);
	};

	get_user_by_id = (id, params) => {
		return this.request('GET', '/users/' + id + '.' + this.config.format, params);
	};

	current_user = (params) => {
		return this.request('GET', '/users/current.' + this.config.format, params);
	};

	create_user = (params) => {
		return this.request('POST', '/users.' + this.config.format, params);
	};

	update_user = (id, params) => {
		return this.request('PUT', '/users/' + id + '.' + this.config.format, params);
	};

	delete_user = (id) => {
		return this.request('DELETE', '/users/' + id + '.' + this.config.format, {});
	};


	time_entries = () => {
		return this.request('GET', '/time_entries.' + this.config.format, {});
	};

	get_time_entry_by_id = (id) => {
		return this.request('GET', '/time_entries/' + id + '.' + this.config.format, {});
	};

	create_time_entry = (params) => {
		return this.request('POST', '/time_entries.' + this.config.format, params);
	};

	update_time_entry = (id, params) => {
		return this.request('PUT', '/time_entries/' + id + '.' + this.config.format, params);
	};

	delete_time_entry = (id) => {
		return this.request('DELETE', '/time_entries/' + id + '.' + this.config.format, {});
	};


	membership_by_project_id = (id) => {
		return this.request('GET', '/projects/' + id + '/memberships.' + this.config.format, {});
	};

	create_project_membership = (id, params) => {
		return this.request('POST', '/projects/' + id + '/memberships.' + this.config.format, params);
	};

	project_membership_by_id = (id) => {
		return this.request('GET', '/memberships/' + id + '.' + this.config.format, {});
	};

	update_project_membership = (id, params) => {
		return this.request('PUT', '/memberships/' + id + '.' + this.config.format, params);
	};

	delete_project_membership = (id) => {
		return this.request('DELETE', '/memberships/' + id + '.' + this.config.format, {});
	};


	issue_relation_by_issue_id = (id) => {
		return this.request('GET', '/issues/' + id + '/relations.' + this.config.format, {});
	};

	create_issue_relation = (id, params) => {
		return this.request('POST', '/issues/' + id + '/relations.' + this.config.format, params);
	};

	issue_relation_by_id = (id) => {
		return this.request('GET', '/relations/' + id + '.' + this.config.format, {});
	};

	delete_issue_relation = (id) => {
		return this.request('DELETE', '/relations/' + id + '.' + this.config.format, {});
	};


	news = () => {
		return this.request('GET', '/news.' + this.config.format, {});
	};

	new_by_project_id = (id) => {
		return this.request('GET', '/projects/' + id + '/news.' + this.config.format, {});
	};


	version_by_project_id = (id) => {
		return this.request('GET', '/projects/' + id + '/versions.' + this.config.format, {});
	};

	create_version = (id, params) => {
		return this.request('POST', '/projects/' + id + '/versions.' + this.config.format, params);
	};

	version_by_id = (id) => {
		return this.request('GET', '/versions/' + id + '.' + this.config.format, {});
	};

	update_version = (id, params) => {
		return this.request('PUT', '/versions/' + id + '.' + this.config.format, params);
	};

	delete_version = (id) => {
		return this.request('DELETE', '/versions/' + id + '.' + this.config.format, {});
	};


	wiki_by_project_id = (id) => {
		return this.request('GET', '/projects/' + id + '/wiki/index.' + this.config.format, {});
	};

	wiki_by_title = (id, title, params) => {
		return this.request('GET', '/projects/' + id + '/wiki/' + title + '.' + this.config.format, params);
	};


	queries = () => {
		return this.request('GET', '/queries.' + this.config.format, {});
	};


	attachment_by_id = (id) => {
		return this.request('GET', '/attachments/' + id + '.' + this.config.format, {});
	};


	issue_statuses = () => {
		return this.request('GET', '/issue_statuses.' + this.config.format, {});
	};


	trackers = () => {
		return this.request('GET', '/trackers.' + this.config.format, {});
	};


	issue_priorities = () => {
		return this.request('GET', '/enumerations/issue_priorities.' + this.config.format, {});
	};

	time_entry_activities = () => {
		return this.request('GET', '/enumerations/time_entry_activities.' + this.config.format, {});
	};


	issue_categories_by_project_id = (id) => {
		return this.request('GET', '/projects/' + id + '/issue_categories.' + this.config.format, {});
	};

	create_issue_category = (id, params) => {
		return this.request('POST', '/projects/' + id + '/issue_categories.' + this.config.format, params);
	};

	issue_category_by_id = (id) => {
		return this.request('GET', '/issue_categories/' + id + '.' + this.config.format, {});
	};

	update_issue_category = (id, params) => {
		return this.request('PUT', '/issue_categories/' + id + '.' + this.config.format, params);
	};

	delete_issue_category = (id) => {
		return this.request('DELETE', '/issue_categories/' + id + '.' + this.config.format, {});
	};


	roles = () => {
		return this.request('GET', '/roles.' + this.config.format, {});
	};

	role_by_id = (id) => {
		return this.request('GET', '/roles/' + id + '.' + this.config.format, {});
	};


	groups = () => {
		return this.request('GET', '/groups.' + this.config.format, {});
	};

	create_group = (params) => {
		return this.request('POST', '/groups.' + this.config.format, params);
	};

	group_by_id = (id, params) => {
		return this.request('GET', '/groups/' + id + '.' + this.config.format, params);
	};

	update_group = (id, params) => {
		return this.request('PUT', '/groups/' + id + '.' + this.config.format, params);
	};

	delete_group = (id) => {
		return this.request('DELETE', '/groups/' + id + '.' + this.config.format, {});
	};

	add_user_to_group = (group_id, user_id) => {
		var params = {
			user_id: user_id
		};
		return this.request('POST', '/groups/' + group_id + '/users.' + this.config.format, params);
	};

	remove_user_from_group = (group_id, user_id) => {
		return this.request('DELETE', '/groups/' + group_id + '/users/' + user_id + '.' + this.config.format, {});
	};

	custom_fields = () => {
		return this.request('GET', '/custom_fields.' + this.config.format, {});
	};

}

