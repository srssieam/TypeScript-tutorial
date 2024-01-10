// enum - store constants; duplicate value is not allowed here
// enum types: numeric, string, heterogenous

// numeric enum
enum RequestType {
    ReadData,
    saveData,
    DeleteData,
}
console.log(RequestType.ReadData)
console.log(RequestType["ReadData"])

// string enum
enum RequestType2 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA"
}
console.log(RequestType2.deleteData);
console.log(RequestType2["deleteData"]);

// heterogenous
enum RequestType3 {
    readData2 = "READ_DATA",
    deleteData2 = "DELETE_DATA",
    id = 101
}