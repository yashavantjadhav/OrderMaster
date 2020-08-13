/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 HeaderSet in the list
// * All 3 HeaderSet have at least one NavHeadtoItam

sap.ui.require([
	"sap/ui/test/Opa5",
	"Order/com/OrderMaster/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Order/com/OrderMaster/test/integration/pages/App",
	"Order/com/OrderMaster/test/integration/pages/Browser",
	"Order/com/OrderMaster/test/integration/pages/Master",
	"Order/com/OrderMaster/test/integration/pages/Detail",
	"Order/com/OrderMaster/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Order.com.OrderMaster.view."
	});

	sap.ui.require([
		"Order/com/OrderMaster/test/integration/MasterJourney",
		"Order/com/OrderMaster/test/integration/NavigationJourney",
		"Order/com/OrderMaster/test/integration/NotFoundJourney",
		"Order/com/OrderMaster/test/integration/BusyJourney",
		"Order/com/OrderMaster/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});