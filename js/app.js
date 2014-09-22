(function() {
	console.log("Hello Backbone!");

	var obj = new Backbone.Model();

	obj.set({name: "Murata"});
	obj.set({age: 20});

	console.log("obj: " + JSON.stringify(obj));
	console.log("obj.name: " + obj.get("name"));

	var obj2 = new Backbone.Model({name: "Kenichiro", age: 30});
	console.log("obj2: " + JSON.stringify(obj));
}())
