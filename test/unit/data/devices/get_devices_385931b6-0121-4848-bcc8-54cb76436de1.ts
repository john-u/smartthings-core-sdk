const request = {
	'url': 'https://api.smartthings.com/devices/385931b6-0121-4848-bcc8-54cb76436de1',
	'method': 'get',
	'headers': {
		'Content-Type': 'application/json;charset=utf-8',
		'Accept': 'application/vnd.smartthings+json;v=20170916',
		'Authorization': 'Bearer 00000000-0000-0000-0000-000000000000',
	},
	'params': {},
}
const response = {
	'deviceId': '385931b6-0121-4848-bcc8-54cb76436de1',
	'name': 'c2c-rgbw-color-bulb',
	'label': 'STS Bulb 1',
	'locationId': '95efee9b-6073-4871-b5ba-de6642187293',
	'roomId': '717ce958-49c6-4448-8544-fa2da2e7592b',
	'components': [
		{
			'id': 'main',
			'capabilities': [
				{
					'id': 'switch',
					'version': 1,
				},
				{
					'id': 'switchLevel',
					'version': 1,
				},
				{
					'id': 'colorControl',
					'version': 1,
				},
				{
					'id': 'colorTemperature',
					'version': 1,
				},
				{
					'id': 'refresh',
					'version': 1,
				},
				{
					'id': 'healthCheck',
					'version': 1,
				},
			],
		},
	],
	'profile': {
		'id': '4d24a797-e0c0-45ad-8725-04aa6eb2eeb1',
	},
	'viper': {},
	'type': 'VIPER',
}
export default { request, response }
