(function() {
	console.log("Hello Backbone!");

	modelTest();
	extendModelTest();
	collectionTest();
	extendCollectionTest();

}())

function modelTest() {
	var obj = new Backbone.Model();

	obj.set({name: "Murata"});
	obj.set({age: 20});

	console.log("obj: " + JSON.stringify(obj));
	console.log("obj.name: " + obj.get("name"));

	var obj2 = new Backbone.Model({name: "Kenichiro", age: 30});
	console.log("obj2: " + JSON.stringify(obj));	
}

function extendModelTest() {
	var Staff = Backbone.Model.extend({
		defaults: {
			"name": "",
			"age" : 0,
			"updateTime": new Date
		},
		initialize: function() {
			console.log("Staff[" + this.cid + "]: " + JSON.stringify(this));
		}
	});

	console.log("========= extendModelTest start =========");
	var tmpStaff = new Staff();
	tmpStaff.set({name: "Murata", age: 15, id: 101});

	console.log("Staff[" + tmpStaff.cid +"]: " + JSON.stringify(tmpStaff));

	var tmpStaff2 = new Staff({name: "Kenichiro", age: 35, id: 102});
	console.log("========= extendModelTest end =========");

}

function collectionTest() {
	var obj = new Backbone.Model();

	obj.set({name: "Murata"});
	obj.set({age: 20});

	var obj2 = new Backbone.Model({name: "Kenichiro", age: 30});


	console.log("========= collectionTest start =========");

	var objs = new Backbone.Collection([obj, obj2]);
	console.log("objs: " + JSON.stringify(objs));
	console.log("obj.cid = "+ obj.cid + " obj2.cid = "+ obj2.cid);
	console.log("objs.get(cid): " + JSON.stringify(objs.get("c5")));
	console.log("objs.at(index): " + JSON.stringify(objs.at(0)));

	// add
	objs.add(new Backbone.Model({name: "Acroquest", age: 20}));
	objs.add(new Backbone.Model({name: "Technology", age: 10}));

	console.log("objs.lengh: "+ objs.length);
	console.log("objs: "+ JSON.stringify(objs));

	// for sort function
	objs.comparator = function(item) {
		return item.get("age");
	};

	objs.sort();
	console.log("After sort objs: " + JSON.stringify(objs));
	console.log("After sort objs.at(index): " + JSON.stringify(objs.at(0)));

	// remove
	objs.remove(obj2);
	console.log("objs.lengh: " + objs.length );
	console.log("objs: " + JSON.stringify(objs));

	// each
	objs.each(function(item, index) {
		console.log("each(" + index + "): " + JSON.stringify(item));
	});

	// find
	var tmpObj = objs.find(function(item) {
		return item.get("age") === 20;
	});
	console.log("find result: " + JSON.stringify(tmpObj));

	// filter
	tmpObj = objs.filter(function(item) {
		return item.get("age") === 20;
	});
	console.log("filter result: " + JSON.stringify(tmpObj));

	//where
	tmpObj = objs.where({age: 20});
	console.log("where result: " + JSON.stringify(tmpObj));

	//max
	tmpObj = objs.max(function(item) {
		return item.get("age");
	});
	console.log("max result: " + JSON.stringify(tmpObj));

	// map
	tmpObj = objs.map(function(item) {
		return item.get("age") + 1;
	});
	console.log("map result: " + JSON.stringify(tmpObj));

	// reduce
	tmpObj = objs.reduce(function(memo, item) {
		return memo + item.get("age");
	}, 0);
	console.log("reduce result: " + JSON.stringify(tmpObj));

	// pluck
	console.log("pluck result: " + JSON.stringify(objs.pluck("name")));
	console.log("========= collectionTest end =========");	
}

function extendCollectionTest() {
	var Staff = Backbone.Model.extend({
		defaults: {
			"name": "",
			"age" : 0,
			"updateTime": new Date
		},
		initialize: function() {
			console.log("Staff[" + this.cid + "]: " + JSON.stringify(this));
		}
	});

	console.log("========= extendCollectionTest start =========");
	var tmpStaff = new Staff();
	tmpStaff.set({name: "Murata", age: 15, id: 101});
	var tmpStaff2 = new Staff({name: "Kenichiro", age: 35, id: 102});	

	var Staffs = Backbone.Collection.extend({
		model: Staff
	});
	var staffs = new Staffs([tmpStaff, tmpStaff2]);

	console.log("staffs: " + JSON.stringify(staffs));
	console.log("staffs.get(cid): " + JSON.stringify(staffs.get("c9")));
	console.log("staffs.at(index): " + JSON.stringify(staffs.at(1)));
	console.log("staffs.get(id): " + JSON.stringify(staffs.get(102)));
	console.log("========= extendCollectionTest end =========");
}