var airtable = {
    api: "https://api.airtable.com/v0/",
    app: "appE9f3ZmmTXoN369",
    api_key: "keynZnxXDTPJQ1UsX",
    json: null,
    dom: document.querySelector("#airtable"),
    init: function() {
        //this.json = new this.Request(this.endpoint + "Users" + this.auth);
        // this.json = new this.Request(this.endpoint + "Users" + this.auth, callback);
        var users = this.table("Users");
    },
    request: function(call, callback) {
        this.json = null;
        this.status = null;
        var xhttp = new XMLHttpRequest();
        var self = this;
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // Call back with data
            callback(this.responseText);
            return this;
          }
        };
        xhttp.open("GET", call, true);
        xhttp.send();
      
    },
    table: function(table) {
      var query = "?api_key=" + this.api_key;
      var call = this.api + this.app + "/" + table + query;
      var self = this;
      console.log(call);
      
      // What do I do with the data once I get it?
      var callback = function(response) {
        console.log(response);
        self.json = JSON.parse(response);
        console.table(self.json);
        self.dom.innerHTML += "The users table has " + self.json.records.length + " records.<br>";
        for(var record = 0; record < self.json.records.length; record++) {
          var user = self.json.records[record];
          self.dom.innerHTML += "Username is " + user.fields.Name + ".<br>";
          self.dom.innerHTML += "User created " + user.createdTime + ".<br>";
          self.dom.innerHTML += "<img src='"+user.fields.avatar[0].url+"'><br>";
        }
      }
      this.request(call, callback);
    }
}

airtable.init()