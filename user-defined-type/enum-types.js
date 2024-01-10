// enum - store constants; duplicate value is not allowed here
// enum types: numeric, string, heterogenous
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 0] = "ReadData";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["DeleteData"] = 2] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType.ReadData);
console.log(RequestType["ReadData"]);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.deleteData);
console.log(RequestType2["deleteData"]);
// heterogenous
var RequestType3;
(function (RequestType3) {
    RequestType3["readData2"] = "READ_DATA";
    RequestType3["deleteData2"] = "DELETE_DATA";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
