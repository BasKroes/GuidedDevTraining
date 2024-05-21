define("AtnRealtyVisitPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_d61epbz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.AtnRealtyVisitDS_AtnVisitDateTime_qjz92vm",
					"labelPosition": "above",
					"control": "$AtnRealtyVisitDS_AtnVisitDateTime_qjz92vm"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ri1vawy",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AtnRealtyVisitDS_AtnPotentialCustomer_r0umeyd",
					"labelPosition": "above",
					"control": "$AtnRealtyVisitDS_AtnPotentialCustomer_r0umeyd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_1wwh0zf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1wwh0zf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ri1vawy",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_x66pd9n",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.AtnRealtyVisitDS_AtnComment_voj3ac2",
					"labelPosition": "above",
					"control": "$AtnRealtyVisitDS_AtnComment_voj3ac2"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"AtnRealtyVisitDS_AtnVisitDateTime_qjz92vm": {
						"modelConfig": {
							"path": "AtnRealtyVisitDS.AtnVisitDateTime"
						}
					},
					"AtnRealtyVisitDS_AtnPotentialCustomer_r0umeyd": {
						"modelConfig": {
							"path": "AtnRealtyVisitDS.AtnPotentialCustomer"
						}
					},
					"AtnRealtyVisitDS_AtnComment_voj3ac2": {
						"modelConfig": {
							"path": "AtnRealtyVisitDS.AtnComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"AtnRealtyVisitDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "AtnRealtyVisit"
							}
						}
					},
					"primaryDataSourceName": "AtnRealtyVisitDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});