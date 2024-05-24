define("AtnRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "AtnRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "873c8b5b-0601-4011-9418-31b70a14fb6d",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_kcxjjcx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_kcxjjcx_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItemCalcAvgPrice",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_yaqtvu1_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "AtnCalcAverageRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "calculator-button-icon"
				},
				"parentName": "Button_kcxjjcx",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcMaxPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_u3s1byx_caption)#",
					"visible": true,
					"clicked": {
						"request": "Atn.RunWebServiceButtonRequest"
					},
					"icon": "sum-button-icon"
				},
				"parentName": "Button_kcxjjcx",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_fmcnap5_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "atn.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AtnName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AtnName",
					"control": "$AtnName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AtnPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AtnPriceUSD_hxn72y1",
					"labelPosition": "auto",
					"control": "$PDS_AtnPriceUSD_hxn72y1"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AtnArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AtnArea_oulyh8q",
					"labelPosition": "auto",
					"control": "$PDS_AtnArea_oulyh8q"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_zswcwrk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AtnCommissionUSD_a0nfev3",
					"labelPosition": "auto",
					"control": "$PDS_AtnCommissionUSD_a0nfev3",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_dxo9tdf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AtnType_sq7garz",
					"labelPosition": "auto",
					"control": "$PDS_AtnType_sq7garz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_ybr0z2k",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ybr0z2k_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_dxo9tdf",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AtnOfferType_d0cv5sk",
					"labelPosition": "auto",
					"control": "$PDS_AtnOfferType_d0cv5sk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_lrgjy3j",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lrgjy3j_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_AtnComment_z1eepia",
					"labelPosition": "auto",
					"control": "$PDS_AtnComment_z1eepia",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AtnManager_qm3ct85",
					"labelPosition": "auto",
					"control": "$PDS_AtnManager_qm3ct85",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_t4srdnk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_t4srdnk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AtnCountry",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AtnCountry_ylcr1zk",
					"labelPosition": "auto",
					"control": "$PDS_AtnCountry_ylcr1zk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_gzyi8fe",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gzyi8fe_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AtnCountry",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AtnOfferTypeAtnCommissionPercent",
					"control": "$PDS_AtnOfferTypeAtnCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AtnCity",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AtnCity_g6rqu84",
					"labelPosition": "auto",
					"control": "$PDS_AtnCity_g6rqu84",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_5pjqgj6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5pjqgj6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AtnCity",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_mypuqrb",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_mypuqrb_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_rs8u5yb",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_mypuqrb",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_y4khczd",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_rs8u5yb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_6jsffkp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_6jsffkp_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AtnRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "AtnParentRealty",
									"value": "$AtnParentRealty"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_y4khczd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_t5s60zt",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_t5s60zt_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_rfwefvqDS"
						}
					}
				},
				"parentName": "FlexContainer_y4khczd",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_4k1x3o6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_4k1x3o6_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_y4khczd",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_86p4uz2",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_86p4uz2_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_rfwefvq"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4k1x3o6",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_4ncswvy",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_4ncswvy_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AtnRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4k1x3o6",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_e0ypvyn",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_e0ypvyn_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_rfwefvq"
					]
				},
				"parentName": "FlexContainer_y4khczd",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_rrhliu0",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_mypuqrb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_rfwefvq",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_rfwefvq",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_rfwefvqDS_Id",
					"columns": [
						{
							"id": "6e305609-57c9-b142-de51-1ac58987f4e2",
							"code": "GridDetail_rfwefvqDS_AtnVisitDateTime",
							"caption": "#ResourceString(GridDetail_rfwefvqDS_AtnVisitDateTime)#",
							"dataValueType": 7,
							"width": 152
						},
						{
							"id": "365a8eb7-70ad-b404-58ba-e31a1c39efc2",
							"code": "GridDetail_rfwefvqDS_AtnPotentialCustomer",
							"caption": "#ResourceString(GridDetail_rfwefvqDS_AtnPotentialCustomer)#",
							"dataValueType": 10,
							"width": 159
						},
						{
							"id": "bb09b6ff-65d1-c56d-48cd-008f47cdc4c1",
							"code": "GridDetail_rfwefvqDS_AtnComment",
							"caption": "#ResourceString(GridDetail_rfwefvqDS_AtnComment)#",
							"dataValueType": 28,
							"width": 136
						},
						{
							"id": "5ec826cc-9c76-becb-999f-ee05bc3804a5",
							"code": "GridDetail_rfwefvqDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_rfwefvqDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 165
						},
						{
							"id": "e8111710-3fda-3e9a-3837-900179b63184",
							"code": "GridDetail_rfwefvqDS_AtnParentRealty",
							"caption": "#ResourceString(GridDetail_rfwefvqDS_AtnParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_rrhliu0",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"AtnName": {
						"modelConfig": {
							"path": "PDS.AtnName"
						}
					},
					"PDS_AtnPriceUSD_hxn72y1": {
						"modelConfig": {
							"path": "PDS.AtnPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "Atn.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_AtnArea_oulyh8q": {
						"modelConfig": {
							"path": "PDS.AtnArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "Atn.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_AtnType_sq7garz": {
						"modelConfig": {
							"path": "PDS.AtnType"
						}
					},
					"PDS_AtnOfferType_d0cv5sk": {
						"modelConfig": {
							"path": "PDS.AtnOfferType"
						}
					},
					"PDS_AtnComment_z1eepia": {
						"modelConfig": {
							"path": "PDS.AtnComment"
						}
					},
					"PDS_AtnManager_qm3ct85": {
						"modelConfig": {
							"path": "PDS.AtnManager"
						}
					},
					"PDS_AtnCommissionUSD_rrwt10v": {
						"modelConfig": {
							"path": "PDS.AtnCommissionUSD"
						}
					},
					"PDS_AtnCommissionUSD_a0nfev3": {
						"modelConfig": {
							"path": "PDS.AtnCommissionUSD"
						}
					},
					"PDS_AtnOfferTypeAtnCommissionPercent": {
						"modelConfig": {
							"path": "PDS.AtnOfferTypeAtnCommissionPercent"
						}
					},
					"PDS_AtnCountry_ylcr1zk": {
						"modelConfig": {
							"path": "PDS.AtnCountry"
						}
					},
					"PDS_AtnCity_g6rqu84": {
						"modelConfig": {
							"path": "PDS.AtnCity"
						}
					},
					"GridDetail_rfwefvq": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_rfwefvqDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "AtnComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_rfwefvqDS_AtnVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_rfwefvqDS.AtnVisitDateTime"
									}
								},
								"GridDetail_rfwefvqDS_AtnPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_rfwefvqDS.AtnPotentialCustomer"
									}
								},
								"GridDetail_rfwefvqDS_AtnComment": {
									"modelConfig": {
										"path": "GridDetail_rfwefvqDS.AtnComment"
									}
								},
								"GridDetail_rfwefvqDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_rfwefvqDS.CreatedOn"
									}
								},
								"GridDetail_rfwefvqDS_AtnParentRealty": {
									"modelConfig": {
										"path": "GridDetail_rfwefvqDS.AtnParentRealty"
									}
								},
								"GridDetail_rfwefvqDS_Id": {
									"modelConfig": {
										"path": "GridDetail_rfwefvqDS.Id"
									}
								}
							}
						}
					},
					"AtnParentRealty": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_rfwefvqDS": [
							{
								"attributePath": "AtnParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "AtnRealty",
							"attributes": {
								"AtnOfferTypeAtnCommissionPercent": {
									"path": "AtnOfferType.AtnCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_rfwefvqDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AtnRealtyVisit",
							"attributes": {
								"AtnVisitDateTime": {
									"path": "AtnVisitDateTime"
								},
								"AtnPotentialCustomer": {
									"path": "AtnPotentialCustomer"
								},
								"AtnComment": {
									"path": "AtnComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"AtnParentRealty": {
									"path": "AtnParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "atn.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_AtnPriceUSD_hxn72y1;
					this.console.log("Price = " + price);
					request.$context.PDS_AtnPriceUSD_hxn72y1 = price * 0.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
            {
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
    				if (request.attributeName === 'PDS_AtnPriceUSD_hxn72y1' || 				        // if price changed
					   request.attributeName === 'PDS_AtnOfferTypeAtnCommissionPercent' ) { 		// or percent changed
						var price = await request.$context.PDS_AtnPriceUSD_hxn72y1;
						var percent = await request.$context.PDS_AtnOfferTypeAtnCommissionPercent;
						var commission = price * percent / 100;
						request.$context.PDS_AtnCommissionUSD_a0nfev3 = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
            {
				request: "Atn.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Run web service button works...");

					// get id from type lookup type object
					var typeObject = await request.$context.PDS_AtnType_sq7garz;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_AtnOfferType_d0cv5sk;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
                      /* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to retrieve the current rate. Use the coindesk.com external service. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetMaxPriceByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/0/rest/RealtyService/GetTotalAmountByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId,
						entityName: "AtnRealty"
					};
					const response = await httpClientService.post(endpoint, params);
                    this.console.log("response total price = " + response.body.GetMaxPriceByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          /* The validator type must contain a vendor prefix. Format the validator type in PascalCase. */
			"Atn.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"Atn.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
        }/**SCHEMA_VALIDATORS*/
	};
});