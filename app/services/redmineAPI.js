import Base64 from './base64';
import baseConfig from '../config';
import querystring from 'query-string';

const config = {
	format: 'json',
	...baseConfig.redmine
};

const encodeAuth = (username, password) => {
	return Base64.encode(`${username}:${password}`);
};

const authHeader = typeof config.apiKey !== 'undefined' ? {
	'X-Redmine-API-Key': config.apiKey
} : {
	'Authorization': `Basic ${encodeAuth(config.username, config.password)}`
};

const encodeURI = (path, params) => {
	if (path.slice(0, 1) != '/') path = '/' + path;

	var query = querystring.stringify(params);
	if (query) path = path + '?' + query;

	return path;
};

const request = (method, path, params) => {
	let opt = {
		method: method,
		headers: {
			...authHeader
		}
	};

	let requestPath = `${config.host}${path}`;

	if (method == 'GET') {
		requestPath = `${config.host}${encodeURI(path, params)}`;
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

export const get_issue_by_id = (id, params) => {
	if (typeof id !== 'number') throw new Error('Issue ID must be an integer above 0 !');

	return request('GET', '/issues/' + id + '.' + config.format, params);
};

export const issues = (params) => {
	return request('GET', '/issues' + '.' + config.format, params);
};

export const create_issue = (issue) => {
	return request('POST', '/issues.' + config.format, issue);
};

export const update_issue = (id, issue) => {
	return request('PUT', '/issues/' + id + '.' + config.format, issue);
};

export const delete_issue = (id) => {
	return request('DELETE', '/issues/' + id + '.' + config.format, {});
};

export const add_watcher = (id, params) => {
	if (!params.user_id) throw new Error('user_id (required): id of the user to add as a watcher !');

	return request('POST', '/issues/' + id + '/watchers.' + config.format, params);
};

export const remove_watcher = (issue_id, user_id) => {
	return request('DELETE', '/issues/' + issue_id + '/watchers/' + user_id + '.' + config.format, {});
};


export const projects = (params) => {
	return request('GET', '/projects.' + config.format, params);
};

export const get_project_by_id = (id, params) => {
	return request('GET', '/projects/' + id + '.' + config.format, params);
};

export const create_project = (params) => {
	return request('POST', '/projects.' + config.format, params);
};

export const update_project = (id, params) => {
	return request('PUT', '/projects/' + id + '.' + config.format, params);
};

export const delete_project = (id) => {
	return request('DELETE', '/projects/' + id + '.' + config.format, {});
};


export const users = (params) => {
	return request('GET', '/users.' + config.format, params);
};

export const get_user_by_id = (id, params) => {
	return request('GET', '/users/' + id + '.' + config.format, params);
};

export const current_user = (params) => {
	return request('GET', '/users/current.' + config.format, params);
};

export const create_user = (params) => {
	return request('POST', '/users.' + config.format, params);
};

export const update_user = (id, params) => {
	return request('PUT', '/users/' + id + '.' + config.format, params);
};

export const delete_user = (id) => {
	return request('DELETE', '/users/' + id + '.' + config.format, {});
};


export const time_entries = () => {
	return request('GET', '/time_entries.' + config.format, {});
};

export const get_time_entry_by_id = (id) => {
	return request('GET', '/time_entries/' + id + '.' + config.format, {});
};

export const create_time_entry = (params) => {
	return request('POST', '/time_entries.' + config.format, params);
};

export const update_time_entry = (id, params) => {
	return request('PUT', '/time_entries/' + id + '.' + config.format, params);
};

export const delete_time_entry = (id) => {
	return request('DELETE', '/time_entries/' + id + '.' + config.format, {});
};


export const membership_by_project_id = (id) => {
	return request('GET', '/projects/' + id + '/memberships.' + config.format, {});
};

export const create_project_membership = (id, params) => {
	return request('POST', '/projects/' + id + '/memberships.' + config.format, params);
};

export const project_membership_by_id = (id) => {
	return request('GET', '/memberships/' + id + '.' + config.format, {});
};

export const update_project_membership = (id, params) => {
	return request('PUT', '/memberships/' + id + '.' + config.format, params);
};

export const delete_project_membership = (id) => {
	return request('DELETE', '/memberships/' + id + '.' + config.format, {});
};


export const issue_relation_by_issue_id = (id) => {
	return request('GET', '/issues/' + id + '/relations.' + config.format, {});
};

export const create_issue_relation = (id, params) => {
	return request('POST', '/issues/' + id + '/relations.' + config.format, params);
};

export const issue_relation_by_id = (id) => {
	return request('GET', '/relations/' + id + '.' + config.format, {});
};

export const delete_issue_relation = (id) => {
	return request('DELETE', '/relations/' + id + '.' + config.format, {});
};


export const news = () => {
	return request('GET', '/news.' + config.format, {});
};

export const new_by_project_id = (id) => {
	return request('GET', '/projects/' + id + '/news.' + config.format, {});
};


export const version_by_project_id = (id) => {
	return request('GET', '/projects/' + id + '/versions.' + config.format, {});
};

export const create_version = (id, params) => {
	return request('POST', '/projects/' + id + '/versions.' + config.format, params);
};

export const version_by_id = (id) => {
	return request('GET', '/versions/' + id + '.' + config.format, {});
};

export const update_version = (id, params) => {
	return request('PUT', '/versions/' + id + '.' + config.format, params);
};

export const delete_version = (id) => {
	return request('DELETE', '/versions/' + id + '.' + config.format, {});
};


export const wiki_by_project_id = (id) => {
	return request('GET', '/projects/' + id + '/wiki/index.' + config.format, {});
};

export const wiki_by_title = (id, title, params) => {
	return request('GET', '/projects/' + id + '/wiki/' + title + '.' + config.format, params);
};


export const queries = () => {
	return request('GET', '/queries.' + config.format, {});
};


export const attachment_by_id = (id) => {
	return request('GET', '/attachments/' + id + '.' + config.format, {});
};


export const issue_statuses = () => {
	return request('GET', '/issue_statuses.' + config.format, {});
};


export const trackers = () => {
	return request('GET', '/trackers.' + config.format, {});
};


export const issue_priorities = () => {
	return request('GET', '/enumerations/issue_priorities.' + config.format, {});
};

export const time_entry_activities = () => {
	return request('GET', '/enumerations/time_entry_activities.' + config.format, {});
};


export const issue_categories_by_project_id = (id) => {
	return request('GET', '/projects/' + id + '/issue_categories.' + config.format, {});
};

export const create_issue_category = (id, params) => {
	return request('POST', '/projects/' + id + '/issue_categories.' + config.format, params);
};

export const issue_category_by_id = (id) => {
	return request('GET', '/issue_categories/' + id + '.' + config.format, {});
};

export const update_issue_category = (id, params) => {
	return request('PUT', '/issue_categories/' + id + '.' + config.format, params);
};

export const delete_issue_category = (id) => {
	return request('DELETE', '/issue_categories/' + id + '.' + config.format, {});
};


export const roles = () => {
	return request('GET', '/roles.' + config.format, {});
};

export const role_by_id = (id) => {
	return request('GET', '/roles/' + id + '.' + config.format, {});
};


export const groups = () => {
	return request('GET', '/groups.' + config.format, {});
};

export const create_group = (params) => {
	return request('POST', '/groups.' + config.format, params);
};

export const group_by_id = (id, params) => {
	return request('GET', '/groups/' + id + '.' + config.format, params);
};

export const update_group = (id, params) => {
	return request('PUT', '/groups/' + id + '.' + config.format, params);
};

export const delete_group = (id) => {
	return request('DELETE', '/groups/' + id + '.' + config.format, {});
};

export const add_user_to_group = (group_id, user_id) => {
	var params = {
		user_id: user_id
	};
	return request('POST', '/groups/' + group_id + '/users.' + config.format, params);
};

export const remove_user_from_group = (group_id, user_id) => {
	return request('DELETE', '/groups/' + group_id + '/users/' + user_id + '.' + config.format, {});
};

export const custom_fields = () => {
	return request('GET', '/custom_fields.' + config.format, {});
};
