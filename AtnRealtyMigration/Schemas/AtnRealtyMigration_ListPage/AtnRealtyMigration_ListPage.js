define("AtnRealtyMigration_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AtnRealtyClassic"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"sourceSchemaName": "AtnRealtyClassicFolder",
					"rootSchemaName": "AtnRealtyClassic"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "3aac9a73-78b3-3f68-44b9-f92abb8043f3",
							"code": "PDS_AtnName",
							"caption": "#ResourceString(PDS_AtnName)#",
							"dataValueType": 28
						},
						{
							"id": "7cc646af-755e-d81b-73d0-fc178d43a8b3",
							"code": "PDS_AtnPriceUSD",
							"caption": "#ResourceString(PDS_AtnPriceUSD)#",
							"dataValueType": 32
						},
						{
							"id": "7acd0314-8952-8a1f-aea5-4c7171af5b41",
							"code": "PDS_AtnType",
							"caption": "#ResourceString(PDS_AtnType)#",
							"dataValueType": 10
						},
						{
							"id": "32615a58-ede1-b315-0c4a-7d64e3df35bb",
							"code": "PDS_AtnOfferType",
							"caption": "#ResourceString(PDS_AtnOfferType)#",
							"dataValueType": 10
						},
						{
							"id": "7618a7cf-e1fb-63c4-ba28-65c54d0a87c7",
							"code": "PDS_AtnComment",
							"caption": "#ResourceString(PDS_AtnComment)#",
							"dataValueType": 28
						},
						{
							"id": "cdab39da-7797-534c-0a28-6395aea1be60",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
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
					"PDS_AtnComment": {
						"modelConfig": {
							"path": "PDS.AtnComment"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
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
					"entitySchemaName": "AtnRealtyClassic",
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
						"AtnComment": {
							"path": "AtnComment"
						},
						"CreatedOn": {
							"path": "CreatedOn"
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