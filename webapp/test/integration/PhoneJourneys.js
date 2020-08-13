/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"Order/com/OrderMaster/test/integration/NavigationJourneyPhone",
		"Order/com/OrderMaster/test/integration/NotFoundJourneyPhone",
		"Order/com/OrderMaster/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});