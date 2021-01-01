// 2021年1月1日更新 	增加事件：onClientStart onClientStop   	可添加Mode Value

// 功能名字
var name = "Basic";
// 功能作者
var author = "QianXia";
// 功能版本
var version = "0.1";
// 功能分类    可用：Fight,Render,Movement,World,Player
var category = "World";


// 名字 默认值 最小值 最大值
var numValue = values.addNumberValue("num", 1.0, 1.0, 2.0);
// 名字 默认状态(true or false)
var boolValue = values.addBooleanValue("boolean", true);
// 名字 可选模式 默认模式
var modeValue = values.addModeValue("mode name", new String[]{"mode1", "mode2", "mode3"}, "mode1")

function onAttack(event) {
    // Codes...
}

function onChat(event) {
    // Codes...
}

function onKey(event) {
    // Codes...
}

function onPacketSend(event) {
    // Codes...
}

function onPacketReceive(event) {
    // Codes...
}

function onUpdate(event) {
    // Codes...
}

function onPreUpdate(event) {
    // Codes...
}

function onPostUpdate(event) {
    // Codes...
}

function onRender3D(event) {
    // Codes...
}

function onRender2D(event) {
    // Codes...
}

function onStep(event) {
    // Codes...
}

function onTick(event) {
    // Codes...
}

function onClientStart(lune) {
    // Codes...
}

function onClientStop(lune) {
    // Codes...
}

function onEnabled() {
    // Codes...
}

function onDisable() {
    // Codes...
}
