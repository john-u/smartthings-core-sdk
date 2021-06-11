const request = {
	'url': 'https://api.smartthings.com/deviceprofiles/3acbf2fc-6be2-4be0-aeb5-c10f4ff357bb/i18n/fr',
	'method': 'put',
	'headers': {
		'Content-Type': 'application/json;charset=utf-8',
		'Accept': 'application/json',
		'Authorization': 'Bearer 00000000-0000-0000-0000-000000000000',
	},
	'data': {
		'tag': 'fr',
		'components': {
			'main': {
				'label': 'Alimentation Principale',
				'description': 'Contrôle l\'alimentation de toutes les prises',
			},
			'outlet1': {
				'label': 'Sortie Un',
				'description': 'Prise de courant commutable 1',
			},
			'outlet2': {
				'label': 'Sortie Deux',
				'description': 'Prise de courant commutable 2',
			},
		},
	},
}
const response = {
	'tag': 'fr',
	'components': {
		'main': {
			'label': 'Alimentation Principale',
			'description': 'Contrôle l\'alimentation de toutes les prises',
		},
		'outlet1': {
			'label': 'Sortie Un',
			'description': 'Prise de courant commutable 1',
		},
		'outlet2': {
			'label': 'Sortie Deux',
			'description': 'Prise de courant commutable 2',
		},
	},
}
export default {request, response}
