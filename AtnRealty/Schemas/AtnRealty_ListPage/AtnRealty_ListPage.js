define("AtnRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AtnRealty"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "AtnRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_AtnName",
							"caption": "#ResourceString(PDS_AtnName)#",
							"dataValueType": 1
						},
						{
							"id": "0842aece-e25d-5ad0-633b-407eaab8f384",
							"code": "PDS_AtnPriceUSD",
							"caption": "#ResourceString(PDS_AtnPriceUSD)#",
							"dataValueType": 32
						},
						{
							"id": "7fe21090-c377-1aec-7f9a-a6353dfa201a",
							"code": "PDS_AtnType",
							"caption": "#ResourceString(PDS_AtnType)#",
							"dataValueType": 10,
							"width": 123
						},
						{
							"id": "b8c445d8-b530-d6b1-a5fa-74abe6b78f5c",
							"code": "PDS_AtnOfferType",
							"caption": "#ResourceString(PDS_AtnOfferType)#",
							"dataValueType": 10
						},
						{
							"id": "746aa841-9136-ca61-6c8a-36dd2f70509d",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "b9f1778d-55d2-e060-3490-9f5aeba46ac6",
							"code": "PDS_AtnArea",
							"caption": "#ResourceString(PDS_AtnArea)#",
							"dataValueType": 32
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_AtnName": {
						"modelConfig": {
							"path": "PDS.AtnName"
						}
					},
					"PDS_AtnPriceUSD": {
						"modelConfig": {
							"path": "PDS.AtnPriceUSD"
						}
					},
					"PDS_AtnType": {
						"modelConfig": {
							"path": "PDS.AtnType"
						}
					},
					"PDS_AtnOfferType": {
						"modelConfig": {
							"path": "PDS.AtnOfferType"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_AtnArea": {
						"modelConfig": {
							"path": "PDS.AtnArea"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "AtnType"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "AtnRealty",
					"attributes": {
						"AtnName": {
							"path": "AtnName"
						},
						"AtnPriceUSD": {
							"path": "AtnPriceUSD"
						},
						"AtnType": {
							"path": "AtnType"
						},
						"AtnOfferType": {
							"path": "AtnOfferType"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"AtnArea": {
							"path": "AtnArea"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});