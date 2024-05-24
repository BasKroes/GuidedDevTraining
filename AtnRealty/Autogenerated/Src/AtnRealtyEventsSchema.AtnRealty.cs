namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AtnRealtyEventsSchema

	/// <exclude/>
	public class AtnRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AtnRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AtnRealtyEventsSchema(AtnRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("684ade62-04ae-4ce7-9925-d2cc7594c9a6");
			Name = "AtnRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("4c00891c-6508-41ac-9d67-d8615ccf2294");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,193,110,219,48,12,189,23,232,63,16,198,14,54,16,8,237,117,217,10,52,89,54,20,40,182,161,118,119,25,118,80,100,198,213,32,75,134,40,167,203,134,254,251,40,203,89,82,167,195,198,139,45,242,241,145,239,129,86,182,72,157,84,8,21,122,47,201,109,130,88,58,187,209,77,239,101,208,206,158,159,253,58,63,3,142,158,180,109,160,220,81,192,118,126,156,58,110,108,91,103,255,90,244,40,86,54,232,160,145,254,7,35,86,91,180,129,230,140,28,192,95,135,194,110,200,222,106,94,195,162,207,75,245,128,173,252,200,42,224,45,100,215,193,222,161,52,97,151,21,223,210,132,174,95,27,173,64,25,73,4,169,246,2,13,188,134,133,36,124,161,146,88,70,11,142,8,221,150,151,214,53,194,214,233,26,62,217,82,110,89,74,238,214,223,81,5,32,180,53,250,25,36,194,5,110,88,215,64,123,237,27,2,44,14,116,71,204,49,214,188,133,248,195,182,167,193,98,254,28,150,120,193,15,122,88,120,158,18,69,106,152,128,107,84,186,149,6,58,175,85,116,41,117,137,15,24,170,93,135,245,210,153,190,181,95,164,233,241,205,8,189,202,163,147,159,35,254,190,124,151,77,167,235,13,228,137,236,10,46,47,246,81,60,7,77,132,197,64,113,67,75,105,21,26,172,121,143,224,123,100,230,83,28,5,31,207,130,15,147,100,131,21,182,157,145,33,110,110,241,17,110,157,146,70,255,148,107,131,229,128,203,71,61,247,132,158,47,215,178,255,124,182,226,14,201,245,94,49,200,121,102,153,193,233,156,24,135,147,73,215,150,205,32,59,25,65,98,176,231,134,42,231,22,186,73,175,172,16,149,27,87,96,135,254,37,131,215,79,9,241,222,249,86,134,124,34,143,231,94,138,139,197,171,19,183,99,132,7,239,30,7,249,171,31,10,187,40,112,223,63,133,63,29,158,227,47,127,158,126,3,183,155,192,59,231,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("256dfcf4-e2ea-709d-be39-245fa25f33ff"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("4c00891c-6508-41ac-9d67-d8615ccf2294"),
				CreatedInSchemaUId = new Guid("684ade62-04ae-4ce7-9925-d2cc7594c9a6"),
				ModifiedInSchemaUId = new Guid("684ade62-04ae-4ce7-9925-d2cc7594c9a6")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("684ade62-04ae-4ce7-9925-d2cc7594c9a6"));
		}

		#endregion

	}

	#endregion

}

