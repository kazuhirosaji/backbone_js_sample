(function() {
	console.log("Hello Backbone!");

	modelTest();
	extendModelTest();
	collectionTest();

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

	console.log("========= collectionTest end =========");	
}

