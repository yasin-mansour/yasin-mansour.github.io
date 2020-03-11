var accountList = [];
var account = function (){
    var name;
    var deposit;
    return {
        insert: function (){
            name = document.getElementById("name").value;
            deposit = document.getElementById("deposit").value;
        },
        get: function () {
            return "account name:" + name + ": " + deposit;
        }
    }
}

function createNewAccount(){
    a = new account;
    a.insert();
    accountList.push(a);
    print();
}

function print(){
    document.getElementById("textarea").value = accountList.map(function(a){return a.get();}) .join("\n");
}