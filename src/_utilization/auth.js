const remx = require('remx');

const state = remx.state({
    userId: null,
    userName: null,
    roleId: null,
    roleName: null,
    login: false,
});

const setters = remx.setters({
    setUserId(user) {
        state.userId = user;
    },
    clear() {
        state.userId = null;
        state.userName = null;
        state.login = false;
        state.roleId = null;
        state.roleName = null;
    },
    setLogin(login) {
        state.login = login;
    },
    setUserName(uName){
        state.userName = uName;
    },
    setRoleId(roleid){
        state.roleId = roleid;
    },
    setRoleName(rName){
        state.roleName = rName;
    }
});

const getters = remx.getters({
    getUserId() {
        return state.userId;
    },
    getUserName() {
        return state.userName;
    },
    getRoleId(){
        return state.roleId
    },
    getRoleName(){
        return state.roleName;
    },
    getLogin() {
        return state.login;
    }
});


module.exports = {
    setters,
    getters,
}